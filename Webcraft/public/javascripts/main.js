
// import "../stylesheets/style.css";
import { burgerMenu } from "./burger-menu/burger.js";
// import Swiper from 'swiper';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

/**
 * |--------------------------------------------------------------------------
 * | MODAL
 * |--------------------------------------------------------------------------
 */


let activeModal = null;
let previousFocus = null;

// Функция будет определена ниже
let resetEstimateForm = null;

const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
].join(',');

burgerMenu();
/**
 * |--------------------------------------------------------------------------
 * | DOM
 * |--------------------------------------------------------------------------
 */

const estimateForm =
    document.getElementById('estimateForm');

const contactForm =
    document.getElementById('contact-form');

const orderModal =
    document.getElementById('orderModal');

const estimateModal =
    document.getElementById('estimateModal');

const estimateSuccess =
    document.getElementById('estimateSuccess');

const successMessage =
    document.getElementById('successMessage');


/**
 * |--------------------------------------------------------------------------
 * | OPEN MODAL
 * |--------------------------------------------------------------------------
 */



 export function openModal(id, trigger = null) {

    const modal =
        document.getElementById(id);

    if (!modal) return;


    if (
        activeModal &&
        activeModal !== modal
    ) {
        closeModal();
    }


    activeModal = modal;

    previousFocus =
        trigger || document.activeElement;


    modal.classList.add(
        'is-open'
    );

    modal.setAttribute(
        'aria-hidden',
        'false'
    );

    document.body.classList.add(
        'modal-lock'
    );


    requestAnimationFrame(() => {

        modal
            .querySelector(
                focusableSelector
            )
            ?.focus();

    });
}


/**
 * |--------------------------------------------------------------------------
 * | CLOSE MODAL
 * |--------------------------------------------------------------------------
 */

export function closeModal() {

    if (!activeModal) return;

    const modal =
        activeModal;


    modal.classList.remove(
        'is-open'
    );

    modal.setAttribute(
        'aria-hidden',
        'true'
    );


    activeModal = null;

    document.body.classList.remove(
        'modal-lock'
    );


    previousFocus?.focus();

    previousFocus = null;
}


/**
 * |--------------------------------------------------------------------------
 * | MODAL EVENTS
 * |--------------------------------------------------------------------------
 */

export function ModalEvents() {
    document.addEventListener(
    'click',
    (event) => {

        /**
         * --------------------------------------------------------------
         * | OPEN MODAL
         * --------------------------------------------------------------
         */

        const openButton =
            event.target.closest(
                '[data-modal-open]'
            );

        if (openButton) {

            openModal(
                openButton.dataset.modalOpen,
                openButton
            );

            return;
        }


        /**
         * --------------------------------------------------------------
         * | CLOSE BUTTON
         * --------------------------------------------------------------
         */

        const closeButton =
            event.target.closest(
                '[data-modal-close]'
            );

        if (closeButton) {

            /*
             * Проверяем именно estimateSuccess.
             *
             * Если кнопка закрытия находится
             * внутри #estimateSuccess —
             * после закрытия сбрасываем estimateForm.
             */

            const isEstimateSuccess =
                estimateSuccess &&
                estimateSuccess.contains(
                    closeButton
                );


            closeModal();


            /*
             * СБРОС ТОЛЬКО estimateSuccess
             */

            if (
                isEstimateSuccess &&
                resetEstimateForm
            ) {
                resetEstimateForm();
            }


            return;
        }


        /**
         * --------------------------------------------------------------
         * | CLOSE BY BACKDROP
         * --------------------------------------------------------------
         *
         * ВАЖНО:
         *
         * При закрытии estimateModal
         * форма НЕ сбрасывается.
         *
         * Сброс происходит только через
         * кнопку закрытия внутри estimateSuccess.
         */

        if (
            activeModal &&
            event.target === activeModal
        ) {

            closeModal();

        }

    }
);


/**
 * |--------------------------------------------------------------------------
 * | KEYBOARD
 * |--------------------------------------------------------------------------
 */

document.addEventListener(
    'keydown',
    (event) => {

        if (!activeModal) return;


        /**
         * --------------------------------------------------------------
         * | ESC
         * --------------------------------------------------------------
         */

        if (event.key === 'Escape') {

            /*
             * Если активной модалкой является
             * непосредственно estimateSuccess —
             * после закрытия сбрасываем форму.
             */

            const isEstimateSuccess =
                activeModal === estimateSuccess;


            closeModal();


            if (
                isEstimateSuccess &&
                resetEstimateForm
            ) {
                resetEstimateForm();
            }


            return;
        }


        /**
         * --------------------------------------------------------------
         * | TAB FOCUS TRAP
         * --------------------------------------------------------------
         */

        if (event.key !== 'Tab') return;


        const elements = [
            ...activeModal.querySelectorAll(
                focusableSelector
            )
        ].filter(
            (element) =>
                element.offsetParent !== null
        );


        if (!elements.length) return;


        const first =
            elements[0];

        const last =
            elements.at(-1);


        if (
            event.shiftKey &&
            document.activeElement === first
        ) {

            event.preventDefault();

            last.focus();

            return;
        }


        if (
            !event.shiftKey &&
            document.activeElement === last
        ) {

            event.preventDefault();

            first.focus();

        }

    }
);
}

ModalEvents()


/**
 * |--------------------------------------------------------------------------
 * | ACCORDION
 * |--------------------------------------------------------------------------
 */

document
    .querySelectorAll('[data-accordion]')
    .forEach(
        (accordion) => {

            accordion.addEventListener(
                'click',
                (event) => {

                    const button =
                        event.target.closest(
                            '.accordion__button'
                        );

                    if (!button) return;


                    const item =
                        button.closest(
                            '.accordion__item'
                        );

                    if (!item) return;


                    const isOpen =
                        item.classList.contains(
                            'is-open'
                        );


                    /*
                     * Закрываем остальные
                     */

                    accordion
                        .querySelectorAll(
                            '.accordion__item.is-open'
                        )
                        .forEach(
                            (openItem) => {

                                if (
                                    openItem === item
                                ) {
                                    return;
                                }


                                openItem.classList.remove(
                                    'is-open'
                                );


                                const openButton =
                                    openItem.querySelector(
                                        '.accordion__button'
                                    );

                                if (!openButton) {
                                    return;
                                }


                                openButton.setAttribute(
                                    'aria-expanded',
                                    'false'
                                );


                                openButton.classList.remove(
                                    'hide'
                                );

                            }
                        );


                    /*
                     * Если уже открыт —
                     * закрываем
                     */

                    if (isOpen) {

                        item.classList.remove(
                            'is-open'
                        );


                        button.setAttribute(
                            'aria-expanded',
                            'false'
                        );


                        button.classList.remove(
                            'hide'
                        );


                        return;
                    }


                    /*
                     * Открываем
                     */

                    item.classList.add(
                        'is-open'
                    );


                    button.setAttribute(
                        'aria-expanded',
                        'true'
                    );


                    button.classList.add(
                        'hide'
                    );

                }
            );

        }
    );


/**
 * |--------------------------------------------------------------------------
 * | ESTIMATE FORM
 * |--------------------------------------------------------------------------
 */

if (estimateForm) {

    const steps = [
        ...estimateForm.querySelectorAll(
            '.estimate__step'
        )
    ];


    const stepElement =
        document.getElementById(
            'estimateStep'
        );


    const percentElement =
        document.getElementById(
            'estimatePercent'
        );


    const progressElement =
        document.getElementById(
            'estimateProgress'
        );


    const errorElement =
        document.getElementById(
            'estimateError'
        );


    const backButton =
        document.getElementById(
            'estimateBack'
        );


    const nextButton =
        document.getElementById(
            'estimateNext'
        );


    const submitButton =
        document.getElementById(
            'estimateSubmit'
        );


    const successElement =
        document.getElementById(
            'estimateSuccess'
        );


    const progressContainer =
        estimateForm
            .closest('.estimate')
            ?.querySelector(
                '.estimate__progress'
            );


    const header =
        estimateForm
            .closest('.estimate')
            ?.querySelector(
                '.estimate__header'
            );


    let currentStep = 1;

    const totalSteps =
        steps.length;


    /**
     * |--------------------------------------------------------------------------
     * | SHOW STEP
     * |--------------------------------------------------------------------------
     */

    function showStep(step) {

        currentStep = step;


        steps.forEach(
            (element) => {

                const active =
                    Number(
                        element.dataset.step
                    ) === step;


                element.classList.toggle(
                    'is-active',
                    active
                );

            }
        );


        const percent =
            Math.round(
                (step / totalSteps) * 100
            );


        stepElement.textContent =
            step;


        percentElement.textContent =
            `${percent}%`;


        progressElement.style.width =
            `${percent}%`;


        backButton.style.display =
            step === 1
                ? 'none'
                : 'block';


        nextButton.style.display =
            step === totalSteps
                ? 'none'
                : 'block';


        submitButton.style.display =
            step === totalSteps
                ? 'block'
                : 'none';


        errorElement.textContent = '';

    }


    /**
     * |--------------------------------------------------------------------------
     * | ERROR
     * |--------------------------------------------------------------------------
     */

    function showEstimateError(
        message,
        field = null
    ) {

        errorElement.textContent =
            message;

        field?.focus();

    }


    /**
     * |--------------------------------------------------------------------------
     * | VALIDATE STEP
     * |--------------------------------------------------------------------------
     */

    function validateStep() {

        const step =
            estimateForm.querySelector(
                `.estimate__step[data-step="${currentStep}"]`
            );


        if (!step) return true;


        const requiredFields =
            step.querySelectorAll(
                '[required]'
            );


        for (
            const field of requiredFields
        ) {

            if (!field.checkValidity()) {

                if (
                    field.type === 'radio' ||
                    field.type === 'checkbox'
                ) {

                    showEstimateError(
                        'Пожалуйста, выберите вариант.',
                        field
                    );

                } else {

                    showEstimateError(
                        'Заполните обязательное поле.',
                        field
                    );

                }


                return false;
            }

        }


        /**
         * STEP 6
         */

        if (currentStep === 6) {

            const name =
                estimateForm.elements.name;


            const contact =
                estimateForm.elements.contact;


            if (
                !name ||
                name.value.trim().length < 2
            ) {

                showEstimateError(
                    'Введите ваше имя.',
                    name
                );

                return false;
            }


            if (
                !contact ||
                contact.value.trim().length < 3
            ) {

                showEstimateError(
                    'Введите Email или Telegram.',
                    contact
                );

                return false;
            }

        }


        return true;
    }


    /**
     * |--------------------------------------------------------------------------
     * | NEXT
     * |--------------------------------------------------------------------------
     */

    nextButton.addEventListener(
        'click',
        () => {

            if (!validateStep()) {
                return;
            }


            if (
                currentStep <
                totalSteps
            ) {

                showStep(
                    currentStep + 1
                );

            }

        }
    );


    /**
     * |--------------------------------------------------------------------------
     * | BACK
     * |--------------------------------------------------------------------------
     */

    backButton.addEventListener(
        'click',
        () => {

            if (currentStep > 1) {

                showStep(
                    currentStep - 1
                );

            }

        }
    );


    /**
     * |--------------------------------------------------------------------------
     * | SUBMIT
     * |--------------------------------------------------------------------------
     */

    estimateForm.addEventListener(
        'submit',
        async (event) => {

            event.preventDefault();


            if (!validateStep()) {
                return;
            }


            submitButton.disabled =
                true;


            const originalText =
                submitButton.textContent;


            submitButton.textContent =
                'Отправка...';


            const formData =
                new FormData(
                    estimateForm
                );


            try {

                const response =
                    await fetch(
                        '/Php/estimate.php',
                        {
                            method: 'POST',
                            body: formData
                        }
                    );


                const result =
                    await response.json();


                if (
                    !response.ok ||
                    !result.success
                ) {

                    throw new Error(
                        result.message ||
                        'Ошибка отправки заявки.'
                    );

                }


                /**
                 * ----------------------------------------------------------
                 * | SUCCESS
                 * ----------------------------------------------------------
                 *
                 * Форму НЕ очищаем.
                 *
                 * Данные остаются до тех пор,
                 * пока пользователь не закроет
                 * #estimateSuccess.
                 */

                estimateForm.style.display =
                    'none';


                if (progressContainer) {

                    progressContainer.style.display =
                        'none';

                }


                if (header) {

                    header.style.display =
                        'none';

                }


                successElement?.classList.add(
                    'is-visible'
                );

            } catch (error) {

                console.error(error);


                errorElement.textContent =
                    error.message ||
                    'Не удалось отправить заявку.';


                submitButton.disabled =
                    false;


                submitButton.textContent =
                    originalText;

            }

        }
    );


    /**
     * |--------------------------------------------------------------------------
     * | RESET ESTIMATE
     * |--------------------------------------------------------------------------
     *
     * ВАЖНО:
     *
     * Эта функция НЕ вызывается при закрытии
     * estimateModal.
     *
     * Она вызывается только при закрытии
     * #estimateSuccess.
     */

    resetEstimateForm = function () {

        estimateForm.reset();


        currentStep = 1;


        /*
         * Возвращаем STEP 1
         */

        showStep(1);


        /*
         * Возвращаем форму
         */

        estimateForm.style.display =
            '';


        if (progressContainer) {

            progressContainer.style.display =
                '';

        }


        if (header) {

            header.style.display =
                '';

        }


        /*
         * Скрываем SUCCESS
         */

        successElement?.classList.remove(
            'is-visible'
        );


        /*
         * Возвращаем кнопку
         */

        submitButton.disabled =
            false;


        submitButton.textContent =
            'Получить оценку';


        /*
         * Очищаем ошибку
         */

        errorElement.textContent = '';

    };


    /**
     * |--------------------------------------------------------------------------
     * | INITIAL STATE
     * |--------------------------------------------------------------------------
     */

    showStep(1);

}


/**
 * |--------------------------------------------------------------------------
 * | CONTACT FORM
 * |--------------------------------------------------------------------------
 */

if (contactForm) {

    const submitButton =
        document.getElementById(
            'contactSubmit'
        );


    const errorElement =
        document.getElementById(
            'contactError'
        );


    /*
     * Поля
     */

    const name =
        contactForm.elements.name;


    const email =
        contactForm.elements.email;


    const telegram =
        contactForm.elements.telegram;


    const message =
        contactForm.elements.message;


    const privacy =
        contactForm.elements.privacy;


    /**
     * |--------------------------------------------------------------------------
     * | FIELD ERROR
     * |--------------------------------------------------------------------------
     */

    function showFieldError(
        field,
        message
    ) {

        if (!field) return;


        let error =
            contactForm.querySelector(
                `[data-error-for="${field.name}"]`
            );


        if (!error) {

            error =
                document.createElement(
                    'div'
                );


            error.className =
                'form__error';


            error.dataset.errorFor =
                field.name;


            error.setAttribute(
                'role',
                'alert'
            );


            field
                .closest('div')
                ?.appendChild(error);

        }


        error.textContent =
            message;


        field.classList.add(
            'is-error'
        );

    }


    /**
     * |--------------------------------------------------------------------------
     * | CLEAR ERROR
     * |--------------------------------------------------------------------------
     */

    function clearFieldError(field) {

        if (!field) return;


        const error =
            contactForm.querySelector(
                `[data-error-for="${field.name}"]`
            );


        if (error) {

            error.textContent = '';

        }


        field.classList.remove(
            'is-error'
        );

    }


    /**
     * |--------------------------------------------------------------------------
     * | CLEAR ALL ERRORS
     * |--------------------------------------------------------------------------
     */

    function clearContactErrors() {

        errorElement.textContent = '';


        contactForm
            .querySelectorAll(
                '.form__error'
            )
            .forEach(
                (error) => {

                    error.textContent = '';

                }
            );


        contactForm
            .querySelectorAll(
                '.is-error'
            )
            .forEach(
                (field) => {

                    field.classList.remove(
                        'is-error'
                    );

                }
            );

    }


    /**
     * |--------------------------------------------------------------------------
     * | VALIDATION
     * |--------------------------------------------------------------------------
     */

    function validateContactForm() {

        clearContactErrors();


        /*
         * NAME
         */

        if (
            name.value.trim().length < 2
        ) {

            showFieldError(
                name,
                'Введите ваше имя.'
            );


            name.focus();


            return false;

        }


        /*
         * EMAIL
         */

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(
                    email.value.trim()
                )
        ) {

            showFieldError(
                email,
                'Введите корректный Email.'
            );


            email.focus();


            return false;

        }


        /*
         * TELEGRAM
         */

        if (
            !/^@[a-zA-Z0-9_]{3,32}$/
                .test(
                    telegram.value.trim()
                )
        ) {

            showFieldError(
                telegram,
                'Введите Telegram в формате @username.'
            );


            telegram.focus();


            return false;

        }


        /*
         * MESSAGE
         */

        if (
            message.value.trim().length < 5
        ) {

            showFieldError(
                message,
                'Введите сообщение от 5 символов.'
            );


            message.focus();


            return false;

        }


        if (
            message.value.trim().length > 5000
        ) {

            showFieldError(
                message,
                'Сообщение не должно превышать 5000 символов.'
            );


            message.focus();


            return false;

        }


        /*
         * PRIVACY
         */

        if (!privacy.checked) {

            errorElement.textContent =
                'Согласие на обработку персональных данных';


            privacy.focus();


            return false;

        }


        return true;

    }


    /**
     * |--------------------------------------------------------------------------
     * | SUBMIT CONTACT
     * |--------------------------------------------------------------------------
     */

    contactForm.addEventListener(
        'submit',
        async (event) => {

            event.preventDefault();


            if (!validateContactForm()) {
                return;
            }


            submitButton.disabled =
                true;


            const originalText =
                submitButton.textContent;


            submitButton.textContent =
                'Отправка...';


            const formData =
                new FormData(
                    contactForm
                );


            try {

                const response =
                    await fetch(
                        '/Php/contact.php',
                        {
                            method: 'POST',
                            body: formData
                        }
                    );


                const result =
                    await response.json();


                if (
                    !response.ok ||
                    !result.success
                ) {

                    throw new Error(
                        result.message ||
                        'Не удалось отправить заявку.'
                    );

                }


                /*
                 * БД уже сохранила заявку.
                 */

                contactForm.reset();


                submitButton.disabled =
                    false;


                submitButton.textContent =
                    'Отправить';


                clearContactErrors();


                /*
                 * Закрываем форму заказа
                 */

                if (
                    activeModal === orderModal
                ) {

                    closeModal();

                }


                /*
                 * Открываем SUCCESS
                 */

                openModal(
                    'successMessage'
                );


            } catch (error) {

                console.error(error);


                errorElement.textContent =
                    error.message ||
                    'Не удалось отправить заявку.';


                submitButton.disabled =
                    false;


                submitButton.textContent =
                    originalText;

            }

        }
    );


    /**
     * |--------------------------------------------------------------------------
     * | CLEAR ERROR WHILE USER TYPES
     * |--------------------------------------------------------------------------
     */

    [
        name,
        email,
        telegram,
        message
    ].forEach(
        (field) => {

            field?.addEventListener(
                'input',
                () => {

                    clearFieldError(field);


                    if (
                        errorElement.textContent
                    ) {

                        errorElement.textContent =
                            '';

                    }

                }
            );

        }
    );


    /**
     * |--------------------------------------------------------------------------
     * | PRIVACY CHECKBOX
     * |--------------------------------------------------------------------------
     */

    privacy?.addEventListener(
        'change',
        () => {

            if (privacy.checked) {

                errorElement.textContent =
                    '';

            }

        }
    );

}

