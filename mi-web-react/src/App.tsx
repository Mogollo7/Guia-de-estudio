import { 
  Terminal, 
  Rocket, 
  Play, 
  CheckCircle2, 
  UserCircle2, 
  GitFork, 
  Zap, 
  FileText, 
  PenTool, 
  Users, 
  Trophy,
  ChevronRight,
  BookOpen,
  ClipboardList,
  Home as HomeIcon,
  Info,
  Users2,
  Box,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

type Section = 'home' | 'teoria' | 'cuestionario';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-background-dark selection:bg-primary/30">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-primary/20 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
              <Terminal size={20} strokeWidth={3} />
            </div>
            <h2 className="text-xl font-bold tracking-tight hidden md:block">
              Misión: <span className="text-primary">Ingeniería</span>
            </h2>
          </div>
          <nav className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${activeSection === 'home' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
            >
              <HomeIcon size={16} className="md:hidden" />
              <span className="hidden md:inline">Home</span>
            </button>
            <button 
              onClick={() => setActiveSection('teoria')}
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${activeSection === 'teoria' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
            >
              <BookOpen size={16} className="md:hidden" />
              <span className="hidden md:inline">Teoría</span>
            </button>
            <button 
              onClick={() => setActiveSection('cuestionario')}
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${activeSection === 'cuestionario' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
            >
              <ClipboardList size={16} className="md:hidden" />
              <span className="hidden md:inline">Cuestionario</span>
            </button>
          </nav>
          <div className="w-8 md:w-32"></div> {/* Spacer to balance the logo */}
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 overflow-hidden">
                <div 
                  className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0dccf2 0%, transparent 70%)' }}
                />
                <div className="max-w-4xl mx-auto text-center z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Transmisión Entrante: Prioridad Alfa
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-primary/50">
                    Misión: Ingeniería de Software
                  </h1>
                  <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Dominar los fundamentos del desarrollo de software moderno a través de una experiencia interactiva y gamificada.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                      onClick={() => setActiveSection('teoria')}
                      className="group relative px-8 py-4 bg-primary text-background-dark font-black text-lg rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(13,204,242,0.4)] flex items-center gap-2"
                    >
                      COMENZAR MISIÓN <Rocket size={20} />
                    </button>

                  </div>
                </div>
              </section>

              {/* Learning Objectives */}
              <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Archivo de Datos</h3>
                    <h2 className="text-3xl md:text-4xl font-bold">¿Qué aprenderán?</h2>
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-8 hidden lg:block mb-4"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Requisitos', icon: CheckCircle2, desc: 'Funcionales y No Funcionales: El cimiento de todo sistema de alta calidad.' },
                    { title: 'Historias de Usuario', icon: UserCircle2, desc: 'Definiendo valor real al usuario mediante narrativas técnicas ágiles.' },
                    { title: 'UML & Diagramas', icon: GitFork, desc: 'Modelado visual de sistemas complejos para una arquitectura sólida.' },
                    { title: 'Metodologías Ágiles', icon: Zap, desc: 'SCRUM y marcos de trabajo dinámicos para entregas iterativas rápidas.' },
                    { title: 'Ciclo de Vida del Software (SDLC)', icon: Zap, desc: 'Estructura de desarrollo de software desde la concepción hasta la entrega final.' }

                  ].map((obj, i) => (
                    <motion.div 
                      key={obj.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <obj.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{obj.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{obj.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeSection === 'teoria' && (
            <motion.div
              key="teoria"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto px-6 py-12"
            >
              <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Fundamentos de Ingeniería de Software</h1>
                <p className="text-slate-400">Domina los pilares esenciales del desarrollo moderno.</p>
              </div>

              <div className="space-y-12">
                {/* 1. Requisitos */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">1. Requisitos</h2>
                  </div>

                  <div className="prose text-slate-300 mb-6 max-w-none">
                    <p>
                      Los <strong>requisitos de software</strong> son descripciones detalladas de lo que un sistema debe hacer y bajo qué condiciones debe operar. No son solo una lista de funciones, sino que representan las necesidades del negocio, las restricciones técnicas y las expectativas de los usuarios finales. En la ingeniería de sistemas, un requisito se define como una <strong>condición o capacidad</strong> que debe ser <strong>verificable y medible</strong> mediante revisión, prueba o análisis.
                    </p>
                    <p className="mt-2">
                      A continuación se detalla todo lo relacionado con su clasificación, documentación y gestión:
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">1. Clasificación de los Requisitos</h3>
                      <p className="text-slate-400 text-sm mb-3">Los requisitos se dividen principalmente en dos grandes categorías:</p>
                      <ol className="text-slate-400 text-sm list-decimal list-inside space-y-2">
                        <li>
                          <strong>Requerimientos Funcionales:</strong> Definen las acciones o comportamientos específicos que
                          el sistema debe realizar (el "qué"). Se centran en procesos, cálculos, validaciones y flujos de datos.
                          Ejemplos: registro de nuevos clientes, generación de reportes o cálculo automático de costos de envío.
                        </li>
                        <li>
                          <strong>Requerimientos No Funcionales:</strong> Se refieren a cómo se comporta el sistema en términos
                          de calidad y restricciones globales. Afectan a todas las funcionalidades y abarcan aspectos como el rendimiento (tiempos de respuesta), la seguridad (cifrado, autenticación), la usabilidad y la disponibilidad.
                        </li>
                      </ol>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">2. Características de un Buen Requisito</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Propiedades SMART:</strong> Deben ser Específicos, Medibles, Alcanzables, Relevantes y con un Tiempo asignado.</li>
                        <li><strong>Criterios de Redacción:</strong> Cada enunciado debe ser claro, completo (sin vacíos en flujos críticos), consistente (sin contradicciones entre sí) y rastreable hasta una necesidad de negocio.</li>
                        <li><strong>Evitar ambigüedades:</strong> Reemplazar términos vagos por métricas objetivas (ej. "responder en &lt; 2s").</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Técnicas de Levantamiento y Elicitación</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Entrevistas y Talleres:</strong> Reuniones con las partes interesadas para capturar necesidades directas.</li>
                        <li><strong>Observación en campo:</strong> Analizar cómo se realiza el trabajo actualmente para identificar tareas automatizables.</li>
                        <li><strong>Prototipos:</strong> Creación de maquetas navegables para validar expectativas antes del desarrollo.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Estándares y Documentación</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>IEEE 830 (SRS):</strong> Práctica recomendada para la Especificación de Requisitos de Software.</li>
                        <li><strong>IEEE 29148:</strong> Estándar moderno que cubre el ciclo de vida completo y la relación SyRS↔Software.</li>
                        <li><strong>UML:</strong> Casos de uso y diagramas para representar gráficamente los requisitos.</li>
                      </ul>
                      <div className="mt-4">
                        <a href="https://www.youtube.com/watch?v=cqhtcY9CbUE" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary text-background-dark font-bold rounded">Ver video: Requisitos</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-slate-900/30 border border-slate-800 text-slate-300 text-sm">
                    <h4 className="font-bold mb-2">Requisitos en Metodologías Ágiles (Scrum)</h4>
                    <p className="text-slate-400 mb-2">En entornos ágiles los requisitos se gestionan de forma más dinámica mediante:</p>
                    <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
                      <li><strong>Historias de Usuario:</strong> "Como [rol], quiero [meta], para [beneficio]". Deben cumplir INVEST.</li>
                      <li><strong>Las 3 Cs:</strong> Tarjeta, Conversación y Confirmación (criterios de aceptación).</li>
                      <li><strong>Product Backlog:</strong> Lista priorizada administrada por el Product Owner y fuente única de requisitos.</li>
                    </ul>
                    <p className="mt-3 text-slate-400">Aplica estas guías para mantener requisitos claros, trazables y verificables.</p>
                  </div>
                </section>

                {/* Herramientas y Ecosistema */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500">
                      <FileText size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Herramientas y Ecosistema</h2>
                  </div>

                  <div className="prose text-slate-300 mb-4 max-w-none">
                    <p>Para una gestión efectiva del proyecto es clave elegir e integrar herramientas según el tamaño del equipo y las necesidades del producto.</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">1. Gestión de Proyectos y Tareas (Agilidad)</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Herramientas para equipos:</strong> Jira, Asana, ClickUp — manejo de historias, tareas y trazabilidad.</li>
                        <li><strong>Tableros Kanban:</strong> Trello, GitHub Projects, Microsoft Planner — visualización del flujo (To Do / In Progress / Done).</li>
                        <li><strong>Paneles físicos:</strong> Paneles y post-its para dailies y coordinación rápida en equipos presenciales.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">2. Documentación y Organización de Requisitos</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Especializadas:</strong> IBM DOORS Next para especificación y seguimiento detallado de artefactos.</li>
                        <li><strong>Sistemas de organización:</strong> Notion, Obsidian — bases de conocimiento y documentación flexible.</li>
                        <li><strong>Control de versiones:</strong> GitHub para repositorios y gestión del código fuente.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">3. Modelado, Diagramación y Diseño</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>UML y diagramas:</strong> UMLetino y PlantUML (generación via PlantUML/ChatGPT) para diagramas de clases y secuencia.</li>
                        <li><strong>ERD y BD:</strong> dbdiagram.io, DBeaver, MySQL Workbench para diseño de esquemas y modelos entidad-relación.</li>
                        <li><strong>Arquitectura:</strong> Eraser.io para diagramas de sistema con iconografía y documentación inline.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">4. Prototipado y Wireframing</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Bocetos rápidos:</strong> Excalidraw, Eraser.io para wireframes y diagramas rápidos.</li>
                        <li><strong>Prototipos funcionales:</strong> Figma y Marvelapp para prototipos de alta fidelidad y simulaciones navegables.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 md:col-span-2">
                      <h3 className="text-primary font-bold mb-3">5. Desarrollo asistido por IA y Despliegue</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Asistencia IA:</strong> GitHub Copilot, ChatGPT, Cursor — aceleran escritura de código y resolución de dudas.</li>
                        <li><strong>Plataformas de despliegue (PaaS):</strong> Vercel, Railway, Render, Heroku y DigitalOcean para despliegues rápidos.</li>
                        <li><strong>Nubes y VPS:</strong> AWS, Google Cloud, Azure para infraestructuras gestionadas; herramientas como Coolify para autopilotar servicios.</li>
                      </ul>
                      <p className="mt-3 text-slate-400">El éxito depende de integrar las herramientas adecuadas para evitar pérdida de contexto y garantizar trazabilidad y verificabilidad de los requisitos.</p>
                    </div>
                  </div>
                </section>

                {/* 2. Historias de Usuario */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <UserCircle2 size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">2. Historias de Usuario</h2>
                  </div>

                  <div className="prose text-slate-300 mb-4 max-w-none">
                    <p>
                      Las historias de usuario son una forma simple y clara de describir una funcionalidad desde el punto de
                      vista del usuario final. Representan las necesidades del negocio en lenguaje cercano al usuario, sin
                      entrar en detalles técnicos.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">1. Estructura y Formato</h3>
                      <p className="text-slate-400 text-sm mb-2">Una historia bien escrita sigue la estructura: <strong>Como [rol], quiero [meta], para [beneficio]</strong>.</p>
                      <p className="text-slate-400 text-sm italic">Ejemplo: "Como persona que usa el cajero electrónico, quiero poder sacar dinero para tener acceso a mi efectivo desde cualquier parte."</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">2. Las 3 C (Card, Conversation, Confirmation)</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Card (Tarjeta):</strong> Recordatorio físico o entrada corta que identifica la necesidad.</li>
                        <li><strong>Conversation (Conversación):</strong> Discusión entre Product Owner y equipo para aclarar detalles.</li>
                        <li><strong>Confirmation (Confirmación):</strong> Criterios de aceptación que validan que la historia está terminada.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">3. Criterios de Calidad: INVEST</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>I</strong>ndependiente: Puede implementarse sin depender de otra historia.</li>
                        <li><strong>N</strong>egociable: No es un contrato; admite ajustes en la conversación.</li>
                        <li><strong>V</strong>aliosa: Aporta valor al usuario por sí misma.</li>
                        <li><strong>E</strong>stimable: El equipo puede estimar su esfuerzo.</li>
                        <li><strong>S</strong>mall (Pequeña): Cabible dentro de un sprint.
                        </li>
                        <li><strong>T</strong>estable: Tiene criterios claros para verificar su finalización.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">4. Gestión y Responsabilidades</h3>
                      <p className="text-slate-400 text-sm mb-2"><strong>Product Owner:</strong> Responsable de crear y priorizar historias, definir criterios de aceptación y mantener el Product Backlog.</p>
                      <p className="text-slate-400 text-sm">Durante la planificación, el equipo selecciona historias prioritarias para convertirlas en incrementos funcionales. Las historias mal redactadas causan confusión, bugs y retrabajo.</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 md:col-span-2">
                      <h3 className="text-primary font-bold mb-3">5. Herramientas de Gestión</h3>
                      <p className="text-slate-400 text-sm mb-2">Además de tableros físicos, es habitual usar herramientas digitales para administrar y seguir historias:</p>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
                        <li>Jira</li>
                        <li>Trello</li>
                        <li>Azure DevOps</li>
                        <li>Notion</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. UML & Diagramas */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <GitFork size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">3. UML & Diagramas</h2>
                  </div>
                  <div className="prose text-slate-300 mb-4 max-w-none">
                    <p>
                      El Lenguaje Unificado de Modelado (UML) es un estándar del OMG para visualizar, especificar,
                      construir y documentar artefactos de software. Desde la versión 2.0 incluye 13 tipos de diagramas,
                      agrupados en Estructurales (estáticos) y de Comportamiento (dinámicos), incluyendo la subcategoría de
                      Interacciones.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Diagramas de Estructura (Estáticos)</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Diagrama de Clases:</strong> Clases con nombre (CamelCase), atributos (nombre: tipo) y métodos; visibilidad con + / -.</li>
                        <li><strong>Diagrama de Objetos:</strong> Instancias y sus relaciones en un momento dado.</li>
                        <li><strong>Diagrama de Paquetes:</strong> Agrupación lógica de clases y dependencias a alto nivel.</li>
                        <li><strong>Diagrama de Componentes:</strong> Organización y dependencias entre librerías o módulos.
                        </li>
                        <li><strong>Diagrama de Despliegue:</strong> Arquitectura física: nodos, artefactos y su distribución en producción.</li>
                        <li><strong>Diagrama de Estructura Compuesta:</strong> Estructura interna de una clase y sus colaboraciones.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Diagramas de Comportamiento (Dinámicos)</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Diagrama de Casos de Uso:</strong> Interacción entre actores y el sistema.</li>
                        <li><strong>Diagrama de Actividades:</strong> Flujo de actividades y decisiones (similar a diagramas de flujo).</li>
                        <li><strong>Diagrama de Máquina de Estados:</strong> Eventos y transiciones que afectan el estado de un objeto.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Diagramas de Interacción</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Diagrama de Secuencia:</strong> Mensajes entre objetos a lo largo del tiempo para un proceso.</li>
                        <li><strong>Diagrama de Comunicación:</strong> Organización de objetos que interactúan (enfoque en enlaces).</li>
                        <li><strong>Diagrama de Tiempos:</strong> Cambios de estado de componentes a lo largo del tiempo.</li>
                        <li><strong>Diagrama Global de Interacciones:</strong> Visión de alto nivel para modularizar interacciones complejas.</li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 md:col-span-2">
                      <h3 className="text-primary font-bold mb-3">Herramientas y Aplicaciones</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>UMLetino:</strong> Editor online gratuito para diagramas de clases y otros diagramas UML.</li>
                        <li><strong>PlantUML:</strong> Generación de diagramas mediante código; útil con IA para generar PlantUML a partir de descripciones.</li>
                        <li><strong>Modelado de datos (ERD):</strong> dbdiagram.io, Postgres.new para diseños ERD y esquemas de bases de datos.</li>
                        <li><strong>Gestión corporativa:</strong> IBM Rational DOORS Next para trazabilidad de requisitos y artefactos.</li>
                      </ul>
                      <div className="mt-4">
                        <a href="https://www.youtube.com/watch?v=txxU2x5e3HM&t=20s" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary text-background-dark font-bold rounded">Ver video: UML (YouTube)</a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Metodologías Ágiles */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <Zap size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">4. Metodologías Ágiles</h2>
                  </div>
                  <div className="prose text-slate-300 mb-4 max-w-none">
                    <p>
                      Las metodologías ágiles promueven entrega iterativa, colaboración y adaptación continua. A
                      continuación se describen los marcos y prácticas más relevantes.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Scrum</h3>
                      <p className="text-slate-400 text-sm mb-2">Marco ligero basado en empirismo y pensamiento Lean; pilares: transparencia, inspección y adaptación.</p>
                      <p className="text-slate-400 text-sm mb-2"><strong>Roles:</strong> Product Owner, Scrum Master, Desarrolladores.</p>
                      <p className="text-slate-400 text-sm mb-2"><strong>Ceremonias:</strong> Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.</p>
                      <p className="text-slate-400 text-sm"><strong>Artefactos:</strong> Product Backlog, Sprint Backlog, Incremento (Definición de Terminado).</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Kanban</h3>
                      <p className="text-slate-400 text-sm mb-2">Enfoque en la mejora continua del flujo de trabajo mediante tableros visuales y límites de trabajo en progreso (WIP).</p>
                      <p className="text-slate-400 text-sm">Reduce tiempos de espera y cuellos de botella para optimizar la eficiencia del proceso.</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Extreme Programming (XP)</h3>
                      <p className="text-slate-400 text-sm mb-2">Metodología enfocada en excelencia técnica y prácticas que reducen el riesgo técnico.</p>
                      <p className="text-slate-400 text-sm mb-2"><strong>Prácticas clave:</strong> Programación en parejas, integración continua, pruebas unitarias, refactorización y diseño simple.</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Lean Software Development</h3>
                      <p className="text-slate-400 text-sm">Derivado del lean manufacturing: maximiza valor y elimina desperdicio. Usa ciclos Construir–Medir–Aprender y promueve MVPs para validar supuestos rápidamente.</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                      <h3 className="text-primary font-bold mb-3">Feature Driven Development (FDD)</h3>
                      <p className="text-slate-400 text-sm mb-2">Orientado a la entrega por funcionalidades: modelado del dominio, lista de características, planificación, diseño y construcción por características.</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 md:col-span-2">
                      <h3 className="text-primary font-bold mb-3">DevOps</h3>
                      <p className="text-slate-400 text-sm mb-2">Cambio cultural que integra Desarrollo y Operaciones. Automatiza CI/CD, infraestructura como código e instrumentación para despliegues frecuentes y confiables.</p>
                      <p className="text-slate-400 text-sm">DevOps enfatiza la monitorización, feedback continuo y reducción del tiempo entre idea y entrega.</p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 md:col-span-2">
                      <h3 className="text-primary font-bold mb-3">Herramientas y conceptos comunes</h3>
                      <ul className="text-slate-400 text-sm list-disc list-inside space-y-2">
                        <li><strong>Historias de Usuario:</strong> Como [rol], quiero [meta], para [beneficio]; seguir INVEST.</li>
                        <li><strong>Deuda Técnica:</strong> Coste futuro por decisiones rápidas o incompletas que deben gestionarse activamente.</li>
                        <li><strong>Spikes:</strong> Timeboxes de investigación para validar opciones técnicas o diseñar prototipos.</li>
                        <li><strong>CI/CD:</strong> Integración y entrega continua como práctica estándar en DevOps y equipos ágiles maduros.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 5. Ciclo de Vida del Software (SDLC) */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/20 to-slate-900/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Calendar size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">5. Ciclo de Vida del Software (SDLC)</h2>
                  </div>

                  <p className="text-slate-300 mb-6 max-w-none prose">El SDLC es el proceso estructurado para diseñar, desarrollar, probar y mantener software de calidad. A continuación se describen las fases, modelos y herramientas más comunes.</p>

                  <div className="grid gap-6 md:grid-cols-3 mb-6">
                    <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Box className="text-amber-400" />
                        <h4 className="font-bold">Análisis y Planificación</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Recopilación de requerimientos, definición del alcance, estimaciones y priorización. Acción temprana para mitigar riesgos.</p>
                    </div>

                    <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <PenTool className="text-amber-400" />
                        <h4 className="font-bold">Diseño</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Definición de arquitectura, diagramas UML, modelos de datos y prototipos UX/UI para guiar el desarrollo.</p>
                    </div>

                    <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <FileText className="text-amber-400" />
                        <h4 className="font-bold">Desarrollo (Codificación)</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Construcción de módulos siguiendo estándares, control de versiones y buenas prácticas (tests, linting, CI).</p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Trophy className="text-amber-400" />
                        <h4 className="font-bold">Pruebas (Testing)</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Pruebas funcionales, integración, rendimiento y seguridad. Automatizar cuando sea posible para mayor fiabilidad.</p>
                    </div>

                    <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Play className="text-amber-400" />
                        <h4 className="font-bold">Despliegue (Implementación)</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Configurar entornos, pipelines CI/CD y monitoreo para asegurar una entrega controlada a producción.</p>
                    </div>

                    <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Users className="text-amber-400" />
                        <h4 className="font-bold">Mantenimiento</h4>
                      </div>
                      <p className="text-slate-400 text-sm">Corrección de incidencias, mejoras incrementales y gestión de la deuda técnica para mantener el sistema estable.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-6 rounded-lg border border-slate-800 bg-slate-900/30 text-slate-300">
                    <h4 className="text-primary font-bold mb-3">Modelos y Enfoques</h4>
                    <p className="text-slate-400 text-sm mb-2"><strong>Waterfall:</strong> Lineal y rígido; cada fase espera a la anterior.</p>
                    <p className="text-slate-400 text-sm mb-2"><strong>Ágil:</strong> Iterativo e incremental; cada sprint puede recorrer todas las fases del SDLC.</p>
                    <p className="text-slate-400 text-sm"><strong>DevOps:</strong> Integración de Desarrollo y Operaciones con CI/CD para despliegues frecuentes y feedback continuo.</p>
                  </div>
                </section>

                {/* Glosario */}
                <section className="p-8 rounded-2xl border border-slate-800 bg-slate-900/20 mt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <ChevronRight size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Glosario</h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <dl className="text-slate-400 space-y-4">
                        <div>
                          <dt className="font-bold text-slate-200">Requisito</dt>
                          <dd className="text-sm">Condición o capacidad verificable que el sistema debe poseer.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-200">Historia de Usuario</dt>
                          <dd className="text-sm">Descripción simple de una funcionalidad desde la perspectiva del usuario (Como..., quiero..., para...).</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-200">Sprint</dt>
                          <dd className="text-sm">Iteración de trabajo en Scrum, típicamente de 1 a 4 semanas.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-200">Backlog</dt>
                          <dd className="text-sm">Lista priorizada de trabajo pendiente gestionada por el Product Owner.</dd>
                        </div>
                      </dl>
                    </div>

                    <div>
                      <dl className="text-slate-400 space-y-4">
                        <div>
                          <dt className="font-bold text-slate-200">CI/CD</dt>
                          <dd className="text-sm">Practicas de Integración y Entrega Continua para automatizar pruebas y despliegues.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-200">DevOps</dt>
                          <dd className="text-sm">Cultura y prácticas que integran Desarrollo y Operaciones para acelerar entregas.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-200">UML</dt>
                          <dd className="text-sm">Lenguaje para modelar sistemas mediante diagramas estructurales y de comportamiento.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-200">Deuda Técnica</dt>
                          <dd className="text-sm">Coste futuro asociado a decisiones rápidas o soluciones subóptimas que requieren corrección.</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                <h3 className="text-xl font-bold mb-4">¿Listo para poner a prueba tus conocimientos?</h3>
                <button 
                  onClick={() => setActiveSection('cuestionario')}
                  className="px-8 py-3 bg-primary text-background-dark font-bold rounded-lg hover:brightness-110 transition-all"
                >
                  Ir al Cuestionario
                </button>
              </div>
            </motion.div>
          )}

          {activeSection === 'cuestionario' && (
            <motion.div
              key="cuestionario"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-6 py-12"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Cuestionario de Misión</h1>
                <p className="text-slate-400">Evalúa tu dominio sobre SCRUM y metodologías ágiles.</p>
              </div>

              <div className="p-12 rounded-[2rem] border border-slate-800 bg-slate-900/40 text-center">
                <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                  <ClipboardList size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Módulo de Evaluación</h2>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                  Pon a prueba tus conocimientos en tiempo real con nuestro desafío interactivo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://kahoot.it/solo?quizId=6383d189-f055-453b-9bb5-e493badd23b4&gameMode=nano" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-primary text-background-dark font-bold rounded-lg hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    Ir a Kahoot <Rocket size={18} />
                  </a>
                  <button 
                    onClick={() => setActiveSection('teoria')}
                    className="px-8 py-3 border border-slate-700 rounded-lg font-bold hover:bg-slate-800 transition-colors"
                  >
                    Volver a Repasar Teoría
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 pt-12 pb-24 lg:pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-background-dark">
                <Terminal size={14} strokeWidth={3} />
              </div>
              <h2 className="text-lg font-bold tracking-tight">Misión: Ingeniería</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Juan Sebastian Martinez Galeano<br />
              Ingeniería Informática - 5to Semestre<br />
              Desarrollo de Software Moderno
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              {['Discord Oficial', 'Foros de Debate', 'Eventos Live'].map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              {['Términos de Servicio', 'Privacidad', 'Cookies'].map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Progress Bar (Sticky bottom indicator) */}
        <div className="fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-md border-t border-primary/20 p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-1/3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">Progreso Global:</span>
              <div className="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === 'teoria' ? '50%' : activeSection === 'cuestionario' ? '100%' : '0%' }}
                  className="h-full bg-primary shadow-[0_0_10px_#0dccf2]"
                />
              </div>
              <span className="text-xs font-mono font-bold text-primary">
                {activeSection === 'teoria' ? '50%' : activeSection === 'cuestionario' ? '100%' : '0%'}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-slate-500">Estatus Operativo</span>
                <span className="text-xs font-mono text-green-500">SISTEMAS ONLINE</span>
              </div>
              <button 
                onClick={() => setActiveSection('teoria')}
                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded text-xs font-bold transition-all"
              >
                REANUDAR
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center border-t border-slate-800/50 pt-8 mt-8">
          <p className="text-xs text-slate-600">© 2024 Juan Sebastian Martinez Galeano. Ingeniería Informática. Desplegado en la Nube Alfa-7.</p>
        </div>
      </footer>
    </div>
  );
}
