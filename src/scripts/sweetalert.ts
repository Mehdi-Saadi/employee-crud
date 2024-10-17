import Swal from 'sweetalert2';

const toast = Swal.mixin({
    toast: true,
    color: '#f8f9fa',
    background: '#282828',
    width: 'auto',
    padding: '.3rem',
    showConfirmButton: false,
    showCloseButton: true,
    closeButtonHtml: `<svg class="size-6" viewBox="0 0 24 24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>`,
    customClass: {
        title: 'text-base font-normal',
        popup: 'rounded-xl',
        closeButton:
            'hover:bg-white hover:bg-opacity-10 rounded flex items-center text-gray-400 hover:text-gray-400 w-max h-max active:shadow-none focus:shadow-none mt-4 me-4',
    },
    timer: 10000,
});

export const toastAlert = (icon: any, title: any): void => {
    toast.fire({
        icon: icon,
        title: title,
        position: 'bottom-end',
    });
};
