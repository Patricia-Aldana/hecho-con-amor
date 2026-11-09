import React, { useState } from 'react';
import './App.css';

// Imágenes importadas
import logo from './assets/logo made.jpg';
import bannerImg from './assets/banner1.jpg'; 

// Catálogo de imágenes
import fresa from './assets/fresa.jpg';
import maracuya from './assets/maracuya.jpg';
import padre from './assets/padre.jpg';
import padre1 from './assets/padre1.jpg';
import madre1 from './assets/madre1.jpg';
import cumple from './assets/cumple.jpg';
import detalle from './assets/detalle.jpg';
import cumple1 from './assets/cumple1.jpg';
import detalle1 from './assets/detalle1.jpg';
import detalle2 from './assets/detalle2.jpg';
import cajitas from './assets/cajitas.jpg';
import detalle3 from './assets/detalle3.jpg';
import detalle4 from './assets/detalle4.jpg';
import madre2 from './assets/madre2.jpg';
import cumple2 from './assets/cumple2.jpg';
import madre3 from './assets/madre3.jpg';
import cumple3 from './assets/cumple3.jpg';
import cumple4 from './assets/cumple4.jpg';

// Base de datos inicial (Segura, los clientes no pueden cambiarla)
const productosIniciales = [
  { id: 1, name: 'Postre de Fresa', price: 12000, image: fresa, categoria: ['Desayunos Sorpresa'], desc: 'Encarga tu postre de fresa, personalizamos los empaques a tu gusto dependiendo la ocasión que deseas celebrar, todo con mucho amor🍰🥰💕🤗' },
  { id: 2, name: 'Postre de Maracuyá', price: 12000, image: maracuya, categoria: ['Desayunos Sorpresa'], desc: 'Encarga los postres más deliciosos, no te quedes sin probarlos 🤗😋🥰🍰' },
  { id: 4, name: 'Detalle Padre', price: 125000, image: padre, categoria: ['Fechas especiales', 'Papa'], desc: 'Regala detalles hechos con todo el amor, dulzura, estética y corazón 🍺🥂🤗🥰' },
  { id: 5, name: 'Detalle Padre Elegante', price: 185000, image: padre1, categoria: ['Fechas especiales', 'Papa'], desc: 'El regalo perfecto para sorprender con estilo y buen gusto🥂🤗🥰🍺💕' },
  { id: 6, name: 'Detalle Madre', price: 124000, image: madre1, categoria: ['Fechas especiales', 'Mama'], desc: 'Para cada ocasión tenemos el detalle perfecto, personalizamos cada presente con todo nuestro corazón 🎁🤗🍰❤️' },
  { id: 7, name: 'Regalo Cumpleaños', price: 214000, image: cumple, categoria: ['Cumpleaños'], desc: 'Regalos que hablan por ti, con amor, elegancia y dulzura 🤗🍰💕' },
  { id: 8, name: 'Detalle Corazón', price: 118000, image: detalle, categoria: ['Desayunos Sorpresa'], desc: 'Regala dulzura, amor y mucha felicidad con nuestros detalles hechos con todo el corazón 🤗🎁✨' },
  { id: 9, name: 'Cumpleaños Hermoso', price: 119000, image: cumple1, categoria: ['Cumpleaños', 'Ninos'], desc: 'Celebramos contigo los momentos más hermosos 🤗😋💚✨' },
  { id: 10, name: 'Detalle Sonrisas', price: 135000, image: detalle1, categoria: ['Desayunos Sorpresa'], desc: 'Regalar sonrisas y momentos inolvidables es nuestra especialidad 🥰✨🤗' },
  { id: 11, name: 'Detalle Ternura', price: 145000, image: detalle2, categoria: ['Desayunos Sorpresa'], desc: 'Regala dulzura, ternura y felicidad con nuestros detalles hechos con cantidades enormes de amor 🤗🍰🥰✨' },
  { id: 12, name: 'Cajitas de Amor', price: 120000, image: cajitas, categoria: ['Desayunos Sorpresa'], desc: 'Postres hechos con todo el amor del mundo para todo tipo de ocasión 🤗🌼🍰😋' },
  { id: 13, name: 'Detalle Especial', price: 130000, image: detalle3, categoria: ['Desayunos Sorpresa'], desc: 'Haz sonreír a alguien especial hoy 🤗✨ Detalles únicos, elegantes y llenos de cariño 🥰' },
  { id: 14, name: 'Detalle Logro', price: 195000, image: detalle4, categoria: ['Grados'], desc: 'Para celebrar un logro que merece todo el brillo y amor del mundo🤗✨🎁' },
  { id: 15, name: 'Mamá Dulzura', price: 150000, image: madre2, categoria: ['Fechas especiales', 'Mama'], desc: 'Mamá merece amor, ternura y detalles llenos de dulzura 🤗🍰💕' },
  { id: 16, name: 'Cumpleaños Corazón', price: 189000, image: cumple2, categoria: ['Cumpleaños'], desc: 'Para esos momentos que merecen quedarse en el corazón 🤗🎁✨🎀' },
  { id: 17, name: 'Mamá Incondicional', price: 210000, image: madre3, categoria: ['Fechas especiales', 'Mama'], desc: 'Porque mamá merece detalles tan hermosos como su amor incondicional 🤗🎀🎁' },
  { id: 18, name: 'Cumpleaños Recuerdos', price: 175000, image: cumple3, categoria: ['Cumpleaños'], desc: 'Creamos momentos que se recuerdan, no solo regalos 🎁🍰💕' },
  { id: 19, name: 'Cumpleaños Presente', price: 189000, image: cumple4, categoria: ['Cumpleaños'], desc: 'El mejor regalo es el presente, no dejes para después lo que puedes vivir hoy🎁🤗✨' }
];

// Base de datos de opiniones (Ahora con 6 para que no queden huecos)
const opiniones = [
  { id: 1, name: "Carolina M.", text: "¡Hermosos detalles! Pedí un desayuno sorpresa para mi mamá y le encantó. La presentación es impecable y los postres divinos.", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Andrés F.", text: "Excelente servicio en Bogotá. Llegó súper puntual y todo estaba fresco. Recomendadísimo para cualquier fecha especial.", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Valentina R.", text: "El empaque es divino, se nota que le ponen mucho amor a cada detalle. Fue el regalo perfecto para mi aniversario.", rating: "⭐⭐⭐⭐⭐" },
  { id: 4, name: "Daniela G.", text: "Me salvó la vida para un regalo de última hora. La atención por WhatsApp fue súper amable, rápida y muy confiable.", rating: "⭐⭐⭐⭐⭐" },
  { id: 5, name: "Laura S.", text: "Los empaques son preciosos y la atención al cliente es maravillosa. Totalmente recomendados para sorprender de forma original.", rating: "⭐⭐⭐⭐⭐" },
  { id: 6, name: "Camila O.", text: "Mis postres favoritos en la ciudad. El sabor es único y la presentación insuperable. ¡Gracias por hacer mi día especial!", rating: "⭐⭐⭐⭐⭐" }
];

function App() {
  const [productosList] = useState(productosIniciales);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  
  const [deliveryDate, setDeliveryDate] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [categoriaActual, setCategoriaActual] = useState('Todos');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const productosMostrados = categoriaActual === 'Todos' 
    ? productosList 
    : productosList.filter(p => p.categoria.includes(categoriaActual));

  const cambiarCategoria = (categoria, e) => {
    e.preventDefault();
    setCategoriaActual(categoria);
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  };

  const enviarPedidoWhatsApp = () => {
    if (cart.length === 0) return;
    if (!deliveryDate || !buyerPhone) {
      alert("Por favor, ingresa tu teléfono y la fecha de entrega para continuar.");
      return;
    }

    let mensaje = "¡Hola Loren! 👋 Me encantaron tus detalles y me gustaría agendar el siguiente pedido:%0A%0A";
    cart.forEach((item, index) => {
      mensaje += `${index + 1}. ${item.name} - $${item.price.toLocaleString('es-CO')}%0A`;
    });
    mensaje += `%0A*Total estimado:* $${getTotal().toLocaleString('es-CO')}%0A`;
    mensaje += `*Fecha de entrega deseada:* ${deliveryDate}%0A`;
    mensaje += `*Teléfono de contacto:* ${buyerPhone}%0A`;
    mensaje += `%0A¿Me confirmas disponibilidad y los medios de pago para asegurar mi pedido? ✨`;
    
    window.open(`https://wa.me/573107694532?text=${mensaje}`, '_blank');
  };

  const renderModalContent = () => {
    switch(activeModal) {
      case 'quienes-somos':
        return (
          <>
            <h2>Quiénes Somos 🧸</h2>
            <p>En <strong>Made With Love - by Loren</strong>, somos unos apasionados por crear sonrisas. Nos dedicamos a transformar tus sentimientos en regalos personalizados, llenos de amor y dulzura. Cada postre y detalle es elaborado de forma artesanal en Bogotá.</p>
          </>
        );
      case 'faq':
        return (
          <>
            <h2>Preguntas Frecuentes ❓</h2>
            <p><strong>¿Con cuánto tiempo de anticipación debo hacer mi pedido?</strong><br/>Recomendamos agendar con al menos 2 días de anticipación.</p>
            <p><strong>¿Cuáles son los métodos de pago?</strong><br/>Aceptamos Nequi, DaviPlata y transferencias a Bancolombia. Para agendar, solicitamos un anticipo del 50%.</p>
          </>
        );
      case 'politicas':
        return (
          <>
            <h2>Nuestras Políticas 📋</h2>
            <p>Tus pedidos son preparados especialmente para ti. Las cancelaciones solo se aceptan con 48 horas de anticipación. No realizamos cambios ni devoluciones una vez entregado el producto en óptimas condiciones.</p>
          </>
        );
      case 'datos':
        return (
          <>
            <h2>Protección de Datos 🔒</h2>
            <p>En cumplimiento de la ley de protección de datos personales de Colombia, te informamos que los datos suministrados serán utilizados única y exclusivamente para la gestión de tu pedido.</p>
          </>
        );
      case 'cursos':
        return (
          <>
            <h2>Cursos 👩‍🍳</h2>
            <p>¡Próximamente! Estamos preparando talleres presenciales y virtuales donde te enseñaremos los secretos de nuestros postres artesanales y la decoración de empaques.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      
      {/* Banner Decorativo */}
      <div className="hero-banner-decorativo" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="logo-overlap-container">
          <img 
            src={logo} 
            alt="Made With Love Logo" 
            className="logo-large" 
            onClick={(e) => cambiarCategoria('Todos', e)} 
          />
        </div>
      </div>

      {/* Encabezado */}
      <header className="header">
        <div className="header-text">
          <h1>Made With Love - by Loren</h1>
          <h2>Detalles que enamoran 🍰🎁💕</h2>
        </div>
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          🛒 <span>{cart.length}</span>
        </div>
      </header>

      {/* Menú de Navegación */}
      <nav className="main-nav">
        <ul className="nav-list">
          <li>
            <a href="#catalogo" onClick={(e) => cambiarCategoria('Todos', e)}>Ver Todo</a>
          </li>
          <li>
            <a href="#catalogo" onClick={(e) => cambiarCategoria('Desayunos Sorpresa', e)}>Desayunos Sorpresa</a>
          </li>
          <li>
            <a href="#catalogo" onClick={(e) => cambiarCategoria('Grados', e)}>Grados</a>
          </li>
          <li className="dropdown">
            <a href="#catalogo" onClick={(e) => cambiarCategoria('Cumpleaños', e)}>
              Cumpleaños <span>▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#catalogo" onClick={(e) => cambiarCategoria('Papa', e)}>Para Papá</a></li>
              <li><a href="#catalogo" onClick={(e) => cambiarCategoria('Mama', e)}>Para Mamá</a></li>
              <li><a href="#catalogo" onClick={(e) => cambiarCategoria('Ninos', e)}>Niños</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#catalogo" onClick={(e) => cambiarCategoria('Fechas especiales', e)}>
              Fechas especiales <span>▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#catalogo" onClick={(e) => cambiarCategoria('Fechas especiales', e)}>Amor y Amistad</a></li>
              <li><a href="#catalogo" onClick={(e) => cambiarCategoria('Mama', e)}>Día de la Madre</a></li>
              <li><a href="#catalogo" onClick={(e) => cambiarCategoria('Papa', e)}>Día del Padre</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Sección Perfil / Hero */}
      <section className="profile-hero">
        <div className="profile-card">
          <h2 className="profile-phrase">
            "Transformamos tus sentimientos en dulces recuerdos. Cada detalle es un abrazo directo al corazón."
          </h2>
          <div className="profile-bio-inline">
            <p>
              {/* Usamos nowrap para evitar que el icono se separe de la palabra */}
              <span style={{ whiteSpace: 'nowrap' }}>🎁 Detalles personalizados</span> &nbsp;•&nbsp; 
              <span style={{ whiteSpace: 'nowrap' }}>🎂 Postres artesanales</span> &nbsp;•&nbsp; 
              <span style={{ whiteSpace: 'nowrap' }}>❤️ Hecho con amor</span> &nbsp;•&nbsp; 
              <span style={{ whiteSpace: 'nowrap' }}>📍 Bogotá</span>
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo de Productos */}
      <main className="main-content" id="catalogo">
        <div className="title-container">
          <h3 className="section-title">
            {categoriaActual === 'Todos' ? 'Nuestro Catálogo' : `Catálogo: ${categoriaActual}`}
          </h3>
        </div>
        
        {productosMostrados.length === 0 ? (
          <p className="empty-category-message">
            Próximamente más sorpresas en esta categoría... 🧸
          </p>
        ) : (
          <div className="products-grid">
            {productosMostrados.map((producto) => (
              <div key={producto.id} className="product-card">
                <div className="image-container">
                  <img src={producto.image} alt={producto.name} />
                </div>
                <div className="product-info">
                  <h4>{producto.name}</h4>
                  <p className="description">{producto.desc}</p>
                  <p className="price">${producto.price.toLocaleString('es-CO')} COP</p>
                  <button className="add-btn" onClick={() => addToCart(producto)}>
                    Añadir al Carrito 🛍️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* SECCIÓN DE OPINIONES */}
      <section className="reviews-section">
        <div className="title-container">
          <h3 className="section-title">Lo que dicen nuestros clientes</h3>
        </div>
        <div className="reviews-grid">
          {opiniones.map((opinion) => (
            <div key={opinion.id} className="review-card">
              <div className="review-stars">{opinion.rating}</div>
              <p className="review-text">"{opinion.text}"</p>
              <h4 className="review-author">- {opinion.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar del Carrito */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Tu Pedido 🛍️</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Tu carrito está vacío. ¡Llénalo de amor! 🥰</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name}</p>
                <p className="item-price">${item.price.toLocaleString('es-CO')}</p>
                <button onClick={() => removeFromCart(index)}>🗑️</button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="cart-checkout-form">
            <div className="form-group">
              <label>Fecha de entrega del detalle *</label>
              <input 
                type="date" 
                value={deliveryDate} 
                onChange={(e) => setDeliveryDate(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Teléfono del comprador *</label>
              <input 
                type="tel" 
                placeholder="Ej: 3101234567" 
                value={buyerPhone} 
                onChange={(e) => setBuyerPhone(e.target.value)} 
                required 
              />
              <small>Solo números sin espacios. Te contactaremos aquí.</small>
            </div>
            <div className="cart-footer">
              <h3>Total parcial: ${getTotal().toLocaleString('es-CO')}</h3>
              
              <button className="whatsapp-btn-pay" onClick={enviarPedidoWhatsApp}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" width="22" height="22" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 448l84.5-22.1c32.7 18.1 69.8 27.6 107.5 27.6h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.1-115-65.3-154.4zm-157 289.4h-.1c-33.1 0-65.4-8.9-93.7-25.7l-6.7-4-69.6 18.2 18.6-67.9-4.4-7C45.2 267.4 35.7 232.8 35.7 197.8c0-103.8 84.4-188.2 188.3-188.2 50.3 0 97.6 19.6 133.2 55.2 35.5 35.6 55.1 82.9 55.1 133.3 0 103.8-84.4 188.2-188.3 188.2zm103.6-141.7c-5.7-2.8-33.7-16.6-38.9-18.5-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.9-45.7-25-16.9-12.6-28.4-28.1-31.7-33.8-3.3-5.7-.3-8.8 2.6-11.6 2.6-2.5 5.7-6.6 8.5-9.9 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.1-9.2-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-10 1.4-15.2 7.1-5.2 5.7-19.9 19.5-19.9 47.4 0 27.9 20.4 54.9 23.2 58.7 2.8 3.8 40 61 96.9 84.5 13.5 5.6 24 8.9 32.2 11.4 13.6 4.3 26 3.7 35.8 2.2 11-1.7 33.7-13.8 38.4-27 4.7-13.3 4.7-24.6 3.3-27-1.4-2.5-5.2-3.9-10.9-6.7z"/>
                </svg>
                PAGAR PEDIDO
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modales de información general */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveModal(null)}>✖</button>
            {renderModalContent()}
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE WHATSAPP CON LOGO SVG OFICIAL */}
      <a 
        href="https://wa.me/573107694532" 
        target="_blank" 
        rel="noreferrer" 
        className="simple-floating-wa"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" width="28" height="28" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 448l84.5-22.1c32.7 18.1 69.8 27.6 107.5 27.6h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.1-115-65.3-154.4zm-157 289.4h-.1c-33.1 0-65.4-8.9-93.7-25.7l-6.7-4-69.6 18.2 18.6-67.9-4.4-7C45.2 267.4 35.7 232.8 35.7 197.8c0-103.8 84.4-188.2 188.3-188.2 50.3 0 97.6 19.6 133.2 55.2 35.5 35.6 55.1 82.9 55.1 133.3 0 103.8-84.4 188.2-188.3 188.2zm103.6-141.7c-5.7-2.8-33.7-16.6-38.9-18.5-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.5-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.9-45.7-25-16.9-12.6-28.4-28.1-31.7-33.8-3.3-5.7-.3-8.8 2.6-11.6 2.6-2.5 5.7-6.6 8.5-9.9 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.1-9.2-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-10 1.4-15.2 7.1-5.2 5.7-19.9 19.5-19.9 47.4 0 27.9 20.4 54.9 23.2 58.7 2.8 3.8 40 61 96.9 84.5 13.5 5.6 24 8.9 32.2 11.4 13.6 4.3 26 3.7 35.8 2.2 11-1.7 33.7-13.8 38.4-27 4.7-13.3 4.7-24.6 3.3-27-1.4-2.5-5.2-3.9-10.9-6.7z"/>
        </svg>
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <span onClick={() => setActiveModal('quienes-somos')}>Quiénes Somos</span>
          <span onClick={() => setActiveModal('faq')}>Ayuda ❓ / Preguntas frecuentes</span>
          <span onClick={() => setActiveModal('politicas')}>Nuestras políticas</span>
          <span onClick={() => setActiveModal('datos')}>Protección de datos personales</span>
          <span onClick={() => setActiveModal('cursos')}>Cursos</span>
          <a href="https://wa.me/573107694532" target="_blank" rel="noreferrer">Contáctanos</a>
        </div>
        <p className="footer-copy">
          © 2026 Made With Love by Loren. Creamos detalles que abrazan el corazón. 🧸💕
        </p>
      </footer>
    </div>
  );
}

export default App;