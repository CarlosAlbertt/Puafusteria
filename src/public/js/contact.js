document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('.btn-send');
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        const data = {
            nombre: form.nombre.value,
            telefono: form.telefono.value,
            email: form.email.value,
            servicio: form.servicio.value,
            mensaje: form.mensaje.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await res.json();

            if (res.ok && json.ok) {
                btn.textContent = '¡Mensaje enviado!';
                form.reset();
                setTimeout(() => { btn.textContent = 'Enviar mensaje', btn.disabled = false; }, 3000);
            } else {
                btn.textContent = 'Error al enviar el mensaje';
                btn.disabled = false;
            }
        } catch {
            btn.textContent = 'Error de conexión';
            btn.disabled = false;
        }

    });
});