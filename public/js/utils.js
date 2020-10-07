export const handleErrors = async (err) => {
    if (err.status >= 400 && err.status < 600) {
        const errorRes = await err.json();
        const errorsContainer = document.querySelector('.errors-container');
        let errorsHtml = [
            `
                <div class="errors">
                    Something went wrong. Please try again.
                </div>
            `,
        ];
        const { errors } = errorRes;
        if (errors && Array.isArray(errors)) {
            errorsHtml = errors.map(message => {
                `
                    <div class="errors">
                        ${message}
                    </div>
                `
            })
        }
        errorsContainer.innerHTML = errorsHtml.join("");
    }
    else {
        alert('Something went wrong. Please check your internet connection and try again.');
    };
}