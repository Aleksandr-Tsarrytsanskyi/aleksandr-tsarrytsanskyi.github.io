import "../stylesheets/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { swiperPortfolio } from "./swiper.js";
import { burgerMenu } from "./burger-menu/burger.js";
// import {  ModalEvents } from "./main.js";
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  delay: 0,
  anchorPlacement: 'top-bottom',
});

swiperPortfolio();
let activeModal = null;
let previousFocus = null;

const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
].join(',');



const estimateSuccess =
    document.getElementById('estimateSuccess');



 function openModal(id, trigger = null) {

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
burgerMenu();

/**
 * |--------------------------------------------------------------------------
 * | CLOSE MODAL
 * |--------------------------------------------------------------------------
 */

 function closeModal() {

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

 function ModalEvents() {
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

ModalEvents();


