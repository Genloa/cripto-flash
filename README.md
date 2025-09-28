Cripto Flash — Frontend
Aplicación web desarrollada con Next.js y Bootstrap para promocionar y operar una app de criptomonedas en Latinoamérica. Permite visualizar precios en tiempo real, mostrar métodos de pago locales y navegar fluidamente entre secciones informativas e interactivas.

Tecnologías utilizadas:

- Next.js
- Bootstrap 5
- React-Paginate
- FontAwesome
- Fetch API

Instalación:

1. Clona el repositorio: git clone https://github.com/Genloa/cripto-flash.git
2. Accede al proyecto: cd cripto-flash
3. Instala dependencias: npm install
4. Ejecuta en desarrollo: npm run dev

Estructura del proyecto:
app/ # App Router (rutas y páginas)
├── mercado/ # Página de mercado (consulta API)
│ ├── page.tsx
│ └── layout.tsx  
│
├── nosotros/ # Página institucional
│ ├── page.tsx
│ └── layout.tsx
│
├── blog/ # Página de noticias
│ ├── page.tsx
│ └── layout.tsx
│
├── layout.tsx # Layout global
└── page.tsx # inicio

components/ # Componentes reutilizables
├── home/ # Sección home
│ ├── Hero/
│ └── Recorrido/
│
├── mercado/ # Componentes del mercado consulta Api
│
├── nosotros/ # Componentes institucionales
│
├── blog/ # Componentes del blog
│
└── share/ # Compartidos globales
├── Header/
└── Footer/
assets/ # Archivos estáticos
└── img/ # Imágenes locales

Funcionalidades destacadas:

- Hero con descripción institucional y mockup de teléfono construido completamente con clases Bootstrap y CSS.
- Carrusel animado con logos de métodos de pago que al dar clic se accede a las paginas.
- Sección institucional con presentación de valores.
- Componente Mercado con consulta GET a API, paginación y búsqueda de criptomonedas.
- Diseño completamente responsivo, optimizado para móviles.
