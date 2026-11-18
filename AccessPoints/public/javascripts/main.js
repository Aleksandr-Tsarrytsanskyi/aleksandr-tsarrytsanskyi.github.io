import "../stylesheets/style.css";



'use strict';

const FormValidator = (() => {

    // Validation rules
    const rules = {
        required(value) {
            return value.length > 0 || 'Обязательное поле';
        },

        email(value) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(value) || 'Некорректный email';
        },

        // phone(value) {
        //     const pattern = /^\+?[0-9\s()-]{7,20}$/;
        //     return pattern.test(value) || 'Некорректный номер телефона';
        // },

        min(value, length) {
            return value.length >= length ||
                `Минимум ${length} символов`;
        },

        max(value, length) {
            return value.length <= length ||
                `Максимум ${length} символов`;
        }
    };

    // Cache parsed rules
    const rulesCache = new WeakMap();

    // Get field rules
    function parseRules(field) {

        if (rulesCache.has(field)) {
            return rulesCache.get(field);
        }

        const parsed = (field.dataset.rules || '')
            .split('|')
            .filter(Boolean)
            .map(rule => {

                const [name, ...params] = rule.split(':');

                return {
                    validator: rules[name],
                    params: params.map(Number)
                };

            })
            .filter(rule => typeof rule.validator === 'function');

        rulesCache.set(field, parsed);

        return parsed;
    }

    // Get error element
    function getErrorElement(field) {
        return field.closest('.form-group')
            ?.querySelector('.error');
    }

    // Update field state
    function setFieldState(field, message = '') {

        const isInvalid = Boolean(message);
        const error = getErrorElement(field);

        field.classList.toggle('is-invalid', isInvalid);
        field.classList.toggle('is-valid', !isInvalid);

        field.setAttribute('aria-invalid', String(isInvalid));

        if (error) {
            error.textContent = message;
        }
    }

    // Validate field
    function validateField(field) {

        const value = field.value.trim();

        for (const { validator, params } of parseRules(field)) {

            const result = validator(value, ...params);

            if (result !== true) {
                setFieldState(field, result);
                return false;
            }
        }

        setFieldState(field);

        return true;
    }

    // Validate all fields
    function validateForm(form) {

        const fields = form.querySelectorAll('[data-rules]');

        let firstInvalid = null;

        for (const field of fields) {

            if (!validateField(field) && !firstInvalid) {
                firstInvalid = field;
            }
        }

        if (firstInvalid) {
            firstInvalid.focus();
            return false;
        }

        return true;
    }

    // Initialize form
    function init(form) {

        if (!(form instanceof HTMLFormElement)) {
            throw new TypeError('Expected HTMLFormElement');
        }

        const fields = form.querySelectorAll('[data-rules]');

        // Validate on blur
        form.addEventListener('focusout', event => {

            const field = event.target;

            if (field.matches('[data-rules]')) {
                validateField(field);
            }

        });

        // Validate while typing after first validation
        form.addEventListener('input', event => {

            const field = event.target;

            if (
                field.matches('[data-rules]') &&
                (
                    field.classList.contains('is-invalid') ||
                    field.classList.contains('is-valid')
                )
            ) {
                validateField(field);
            }

        });

        // Validate on submit
        // form.addEventListener('submit', event => {

        //     if (!validateForm(form)) {
        //         event.preventDefault();
        //     }

        // });

        
form.addEventListener('submit', async event => {

    event.preventDefault();

    const responseElement = form.querySelector('.form-response');
    const submitButton = form.querySelector('[type="submit"]');

    responseElement.textContent = '';

    // Frontend validation
    if (!validateForm(form)) {
        return;
    }

    submitButton.disabled = true;

    try {

        const response = await fetch('/api/contact.php', {
            method: 'POST',
            body: new FormData(form)
        });

        const data = await response.json();

        // Server validation errors
        if (response.status === 422 && data.errors) {

            for (const [name, message] of Object.entries(data.errors)) {

                const field = form.elements.namedItem(name);

                if (field) {
                    setFieldState(field, message);
                }

            }

            return;
        }

        if (!response.ok) {
            throw new Error(data.message || 'Ошибка сервера');
        }

        // Success
        form.reset();

        form.querySelectorAll('[data-rules]').forEach(field => {
            setFieldState(field);
        });

        responseElement.textContent = data.message;

    } catch (error) {

        console.error('Form error:', error);

        responseElement.textContent =
            'Не удалось отправить форму. Попробуйте позже.';

    } finally {

        submitButton.disabled = false;

    }

});


        return {
            validate: () => validateForm(form),
            validateField,
            fields
        };
    }

    return {
        init,
        validateForm,
        validateField
    };

})();

// Initialize all forms
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('form').forEach(form => {
        FormValidator.init(form);
    });

});




