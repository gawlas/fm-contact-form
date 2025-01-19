function validateForm() {
    let isValid = true;

    // first name should not be empty
    const firstNameElement = document.querySelector('.js-first-name');

    if (firstNameElement.value === "") {
        firstNameElement.parentElement.classList.add('contact-form--invalid');
        isValid = false;
    } else {
        firstNameElement.parentElement.classList.remove('contact-form--invalid');
    }

    // last name should not be empty
    const lastNameElement = document.querySelector('.js-last-name');

    if (lastNameElement.value === "") {
        lastNameElement.parentElement.classList.add('contact-form--invalid');
        isValid = false;
    } else {
        lastNameElement.parentElement.classList.remove('contact-form--invalid');
    }

    // email should be correct
    const emailElement = document.querySelector('.js-email');

    if (emailElement.value.indexOf('@') === -1) {
        emailElement.parentElement.classList.add('contact-form--invalid');
        isValid = false;
    } else {
        emailElement.parentElement.classList.remove('contact-form--invalid');
    }

    // checkbox
    const checkedRadios = document.querySelector('.js-radios:checked');

    if (checkedRadios == null) {
        document.querySelector(".contact-form__radio-section").parentElement.classList.add('contact-form--invalid');
        isValid = false;
    } else {
        document.querySelector(".contact-form__radio-section").parentElement.classList.remove('contact-form--invalid');
    }

    // message should not be empty
    const messageElement = document.querySelector('.js-message');

    if (messageElement.value === "") {
        messageElement.parentElement.classList.add('contact-form--invalid');
        isValid = false;
    } else {
        messageElement.parentElement.classList.remove('contact-form--invalid');
    }

    // consent checkbox should be checked
    const checkboxElement = document.querySelector('.js-consent');

    if (!checkboxElement.checked) {
        checkboxElement.parentElement.parentElement.classList.add('contact-form--invalid');
        isValid = false;
    } else {
        checkboxElement.parentElement.parentElement.classList.remove('contact-form--invalid');
    }

    return isValid;
}

function registerRadioContainerClick() {
    const radioContainers = document.querySelectorAll('.js-radio-container');

    const onClick = (target) => {
        target.currentTarget.childNodes[1].click();
    }

    for (let container of radioContainers) {
        container.addEventListener('click', onClick);
    }
}

function onSubmit() {
    const isValid = validateForm();

    if (isValid) {
        showSuccessPopup();
        resetForm();
        scrollToTop();
    }
}

function resetForm() {
    const form = document.querySelector(".js-form");
    form.reset();
}

function scrollToTop() {
    window.scroll(0, 0);
}

function showSuccessPopup() {
    const popup = document.querySelector(".js-popup");
    popup.classList.add("contact-form__success-popup--visible");
}

function hideSuccessPopup() {
    const popup = document.querySelector(".js-popup");
    popup.classList.remove("contact-form__success-popup--visible")
}

function registerSuccessPopupClick() {
    const popup = document.querySelector(".js-popup");
    popup.addEventListener('click', hideSuccessPopup);
}

function registerSubmitClick() {
    const button = document.querySelector('.js-button');
    button.addEventListener('click', onSubmit);
}

registerSubmitClick();
registerSuccessPopupClick();
registerRadioContainerClick();