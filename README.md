# 🛒 E-commerce con Next.js estilizado con Styled-Components.

---

## ✨ Funcionalidades

- 🛍️ **Catálogo de productos** con navegación dinámica.  
- 💳 **Integración con Mercado Pago** para procesar pagos.  
- 🔐 **Registro de usuario e inicio de sesión** con autenticación basada en JWT.  
- 📦 **Sistema de checkout y lógica de órdenes** con rutas privadas protegidas.  
- 📩 **Formulario de contacto** implementado con Email.js, incluyendo respuesta automática.  
- 🔗 Todas las funcionalidades están integradas mediante **APIs REST**.

---

## 🛠️ Tecnologías y Herramientas

- **Next.js** – Framework de React para SSR y rutas dinámicas.  
- **TypeScript** – Tipado estático para mayor robustez.  
- **Styled-Components** – Estilos dinámicos con CSS-in-JS.  
- **React Redux** – Gestión global del estado de la aplicación.  
- **JWT** – Autenticación segura basada en tokens.  
- **Axios** – Cliente HTTP para consumo de APIs.  
- **Formik + Yup** – Manejo y validación de formularios.  
- **Framer Motion** – Animaciones fluidas y declarativas.  
- **React Icons** – Librería de íconos para UI.  
- **EmailJS** – Envío de correos desde el cliente con autorespuesta.

---

## 🚀 Instalación y Uso
Clonar el repositorio:
git clone https://github.com/usuario/eCommerce-NextJs.git

## Instalar dependencias:
npm install

## ⚙️ Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y define las siguientes variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_MP_ACCESS_TOKEN=tu_token_mercadopago
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
JWT_SECRET=tu_secret_jwt
```

Ejecutar el proyecto en modo desarrollo:
npm run dev

