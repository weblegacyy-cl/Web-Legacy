/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Instagram,
  Mail,
  Menu,
  X,
  Copy,
  Clock,
  Globe,
  Rocket,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ChevronDown,
  Sparkles,
  Layers,
  ExternalLink,
  Laptop,
  Utensils,
  Wrench,
  ShieldCheck,
  Calculator,
  Eye,
  Wine
} from 'lucide-react';
import { BrandLogo } from './components/BrandLogo.tsx';

const FULL_LOGO_SRC = '/images/web_legacy_logo_white_transparent.png';
const MARK_LOGO_SRC = '/images/web_legacy_mark_white_transparent.png';
const INSTAGRAM_URL = 'https://instagram.com/weblegacyycl';
const INSTAGRAM_DM_URL = 'https://ig.me/m/weblegacyycl';
const CONTACT_EMAIL = 'weblegacyy@gmail.com';
const BOMBASTIK_COVER_SRC = '/images/caratula_mr_bombastik.png';
const ORIENT_COVER_SRC = '/images/caratula_orient_core.png';
const BANQUETAZO_COVER_SRC = '/assets/aistudio/Recibidos__4__-_weblegacyy_gmail.com_-_Gmail_-_Google_Chrome_28_10_2026_12_19_59_168db6e7.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const steps = [
    {
      number: '01',
      title: 'Contacto inicial por Instagram o Correo',
      subtitle: 'Inicio inmediato sin intermediarios',
      description:
        `Nos escribes directamente a nuestro Instagram (@weblegacyycl) o por correo electrónico a ${CONTACT_EMAIL}. Te responderemos para coordinar el inicio de tu proyecto.`,
      hasActions: true,
    },
    {
      number: '02',
      title: 'Envío de información de tu PYME',
      subtitle: 'Recepción de material del negocio',
      description:
        'Nos compartes los datos de tu empresa: textos descriptivos, sección quiénes somos / historia de la marca, fotos de tus productos o servicios, lista detallada de precios y enlaces a tus redes.',
      hasActions: false,
    },
    {
      number: '03',
      title: 'Diseño exclusivo a medida de tu negocio',
      subtitle: '1 propuesta profesional y dedicada',
      description:
        'Creamos 1 diseño web profesional, completo y adaptado a tu PYME. Si deseas modificar cualquier detalle (colores, fotos, textos o estructura), lo cambiamos con total rapidez y profesionalismo para que quede exactamente como quieres.',
      hasActions: false,
    },
    {
      number: '04',
      title: 'Revisión y ajustes inmediatos',
      subtitle: 'Afinamos todo a tu gusto',
      description:
        'Revisamos tu página web contigo y aplicamos de inmediato cualquier cambio que nos indiques. Al enfocarnos en un diseño directo y bien trabajado, tu página se demora mucho menos en estar lista.',
      hasActions: false,
    },
    {
      number: '05',
      title: 'Publicación oficial en internet',
      subtitle: 'Tu web 100% en vivo',
      description:
        'Con el diseño aprobado, conectamos el hosting, el dominio y tu página web queda publicada oficialmente en internet lista para recibir clientes en tiempo récord.',
      hasActions: false,
    },
  ];

  return (
    <div className="bg-[#07090e] text-neutral-100 min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/[0.05] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[400px] bg-blue-700/[0.03] blur-[160px] rounded-full pointer-events-none z-0" />

      {/* =========================================================================
          1. HEADER / TOP BAR
      ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#07090e]/95 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 sm:gap-8">
          {/* Brand Wordmark with clean logo symbol (no square box, without subtext) */}
          <a
            href="#"
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <img
              src={MARK_LOGO_SRC}
              alt="Web Legacy Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-bold tracking-tight text-white text-lg leading-none">Web Legacy</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-400">
            <a
              href="#portafolio"
              className="text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Portafolio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse" />
            </a>
            <a
              href="#proceso"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Cómo Contratar
            </a>
            <a
              href="#plan"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Plan $38.000
            </a>
            <a
              href="#condiciones"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Cobros y Bajas
            </a>
            <a
              href="#preguntas"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Preguntas
            </a>
            <a
              href="#contacto"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          {/* Primary Communication Channels: Instagram & Correo */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 shadow-[0_0_18px_-3px_rgba(37,99,235,0.4)]"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-4 py-2 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Correo</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0d14] border-b border-neutral-800 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-300">
              <a
                href="#portafolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white font-semibold flex items-center justify-between"
              >
                <span>Portafolio (Páginas Reales)</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/40">
                  En Vivo
                </span>
              </a>
              <a
                href="#proceso"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Cómo Contratar (Paso a paso)
              </a>
              <a
                href="#plan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Plan $38.000 / mes (4 cambios incluidos)
              </a>
              <a
                href="#condiciones"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Cobros y Bajas (Aviso de 5 días)
              </a>
              <a
                href="#preguntas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Preguntas Frecuentes
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Canales de Contacto
              </a>
            </nav>
            <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-xs font-semibold text-white bg-blue-600 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="py-3 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Correo</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          2. HERO SECTION
      ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium mb-6">
                <span>Soluciones Web en Chile · Plan Mensual para PYMES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5 text-balance">
                Páginas web profesionales para PYMES.{' '}
                <span className="text-neutral-400 font-normal">Sin enredos.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                Diseñamos sitios web de alto impacto para negocios en Chile.
                Por solo <strong className="text-white font-semibold">$38.000 mensuales</strong>, sin cuotas iniciales exorbitantes, con 4 cambios al mes incluidos, 1 diseño a tu medida y cualquier ajuste se realiza con total profesionalismo para que tu web esté lista en tiempo récord.
              </p>

              {/* Action Buttons: Instagram y Correo */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_-5px_rgba(37,99,235,0.45)]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Hablar por Instagram</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-6 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-500/40 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Escribirnos por Correo</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  $38.000 / mes fijo
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  4 cambios incluidos al mes
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  1 diseño a tu medida
                </span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  Ajustes rápidos incluidos
                </span>
              </div>
            </div>

            {/* Right Distinctive Web Legacy Summary Column (Original design, completely different from OCS) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#090d16] border border-neutral-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Subtle ambient corner light */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10">
                  {/* Brand Tagline Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={MARK_LOGO_SRC}
                        alt="Web Legacy Icon"
                        className="h-7 w-auto object-contain"
                      />
                      <span className="font-bold text-white text-base tracking-tight">Web Legacy</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-[11px] font-mono text-blue-300">
                      Servicio PYME
                    </span>
                  </div>

                  {/* Monthly Pricing Callout */}
                  <div className="my-6">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Cuota Mensual Fija
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                        $38.000
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        CLP / mes
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 mt-2">
                      Sin cobro inicial desmedido. Tu negocio online con mantención activa.
                    </p>
                  </div>

                  {/* Service Inclusions List */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/80 text-xs text-neutral-300">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span><strong>1 diseño completo:</strong> Adaptado a la identidad de tu empresa.</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span><strong>4 cambios mensuales:</strong> Precios, fotos, textos o promos.</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span><strong>Hosting incluido:</strong> Conexión de dominio gratis si ya tienes.</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span><strong>Aviso previo de 5 días:</strong> Para renovaciones o suspensiones.</span>
                    </div>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-white text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Copiar correo"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-mono text-[11px]">
                        {copiedEmail ? '¡Copiado!' : 'Copiar email'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-400 tabular-nums tracking-tight">
                $38.000
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Suscripción mensual accesible (CLP)
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                4 Cambios
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Actualizaciones incluidas por mes
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                1 Diseño
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                A tu medida con ajustes rápidos
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                Rápida Entrega
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Tu web lista en tiempo récord
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PORTAFOLIO DE CLIENTES (PROYECTOS REALES EN PRODUCCIÓN)
          Mr. Bombastik Banquetería & Orient Core System Cotizador Técnico
      ========================================================================= */}
      <section id="portafolio" className="py-20 sm:py-24 bg-[#080b12] border-t border-neutral-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Proyectos Reales · 100% Operativos en Internet</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
              Portafolio de clientes:{' '}
              <span className="text-blue-400">Páginas web listas</span>
            </h2>
            <p className="text-neutral-300 text-xs sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
              Al entrar a Web Legacy puedes comprobar con total transparencia la calidad de nuestro trabajo. 
              Visita y prueba en vivo estos sitios web desarrollados para clientes reales en Chile:
            </p>
          </div>

          {/* Grid of Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* -------------------------------------------------------------
                PROYECTO 1: Banquetería Mr. Bombastik
            ------------------------------------------------------------- */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0d14] border border-neutral-800 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-2xl group">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                    <Utensils className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cotizador & Banquetería Gourmet</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Banquetería Mr. Bombastik
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Sitio web con cotizador gastronómico diseñado para empresa de banquetería, matrimonios, asados campestres y eventos corporativos en Chile. Incluye cotizador interactivo de menús, catálogo de platos y cotización rápida.
                </p>

                {/* Carátula oficial de la web */}
                <div className="rounded-xl overflow-hidden border border-neutral-800 mb-6 shadow-2xl bg-neutral-950 aspect-[16/9]">
                  <img
                    src={BOMBASTIK_COVER_SRC}
                    alt="Banquetería Mr. Bombastik - Portada de la web oficial"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Features Checklist */}
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Lo que incluye este desarrollo:
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Cotizador interactivo con precios:</strong> Asados campestres, menús de matrimonio y coctelería calculados en vivo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Galería de imágenes gourmet:</strong> Fotografías de platos preparados y montajes de eventos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Historia y Quiénes Somos:</strong> Presentación formal de la trayectoria del equipo gastronómico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Botón directo de cotización:</strong> Conexión inmediata a WhatsApp con mensaje preparado.</span>
                  </li>
                </ul>
              </div>

              {/* Action Button: Direct link to live website */}
              <div className="pt-4 border-t border-neutral-800/80">
                <a
                  href="https://banqueteria-mr-bombastik-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(37,99,235,0.4)]"
                >
                  <span>Visitar Sitio en Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------------------------
                PROYECTO 2: El Banquetazo (Banquetería & Coctelería Gourmet)
            ------------------------------------------------------------- */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0d14] border border-neutral-800 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-2xl group">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono font-medium">
                    <Wine className="w-3.5 h-3.5 text-rose-400" />
                    <span>Cotizador & Banquetería Gourmet</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  El Banquetazo
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Sitio web y cotizador para empresa familiar de coctelería y banquetería para eventos de fin de año, graduaciones y matrimonios en Santiago. Incluye cotizador en línea, packs & boxes y precios individuales.
                </p>

                {/* Carátula oficial de la web */}
                <div className="rounded-xl overflow-hidden border border-neutral-800 mb-6 shadow-2xl bg-neutral-950 aspect-[16/9]">
                  <img
                    src={BANQUETAZO_COVER_SRC}
                    alt="El Banquetazo - Banquetería y Coctelería Gourmet para Eventos"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Features Checklist */}
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Lo que incluye este desarrollo:
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Cotizador en línea "Tu Cotización":</strong> Presupuesto instantáneo y personalizado para celebraciones y empresas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Packs & Box y Precios Individuales:</strong> Catálogo gastronómico completo con valores claros por persona.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Muestras reales y montajes:</strong> Galería fotográfica de presentaciones para eventos y graduaciones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Agenda y WhatsApp directo:</strong> Contacto directo para agendar fechas y eventos con anticipación.</span>
                  </li>
                </ul>
              </div>

              {/* Action Button: Direct link to live website */}
              <div className="pt-4 border-t border-neutral-800/80">
                <a
                  href="https://el-banquetazo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(37,99,235,0.4)]"
                >
                  <span>Visitar Sitio en Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------------------------
                PROYECTO 3: Orient Core System (Interactivo & Servicio Técnico PC)
            ------------------------------------------------------------- */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0d14] border border-neutral-800 hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-2xl group">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
                    <Wrench className="w-3.5 h-3.5 text-purple-400" />
                    <span>Interactivo & Servicio Técnico PC</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Orient Core System
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Sistema web interactivo para servicio técnico de diagnóstico, mantención preventiva, cambio de pasta térmica y reparación de computadores y hardware con envío de orden directa a WhatsApp.
                </p>

                {/* Carátula oficial de la web */}
                <div className="rounded-xl overflow-hidden border border-neutral-800 mb-6 shadow-2xl bg-neutral-950 aspect-[16/9]">
                  <img
                    src={ORIENT_COVER_SRC}
                    alt="Orient Core System - Portada de la web oficial"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Features Checklist */}
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  Lo que incluye este desarrollo:
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Sistema dinámico e interactivo:</strong> El cliente selecciona servicios técnicos y ve los detalles al segundo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Desglose transparente:</strong> Visualización clara de mano de obra técnica y piezas de reemplazo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Envío directo a WhatsApp:</strong> El pedido del servicio técnico se envía formateado al técnico en 1 clic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Arquitectura dark/tech de alta velocidad:</strong> Carga ultrarrápida y optimizada para cualquier celular.</span>
                  </li>
                </ul>
              </div>

              {/* Action Button: Direct link to live website */}
              <div className="pt-4 border-t border-neutral-800/80">
                <a
                  href="https://orient-core-systemcl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(37,99,235,0.4)]"
                >
                  <span>Visitar Sitio en Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Callout Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-neutral-950 to-neutral-950 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-base sm:text-lg font-bold text-white">
                ¿Quieres una página web o un cotizador interactivo para tu PYME?
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                Cualquiera de estas soluciones se adapta a tu rubro dentro de nuestro plan mensual de $38.000 con 4 cambios al mes incluidos y entrega rápida.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Pedir por Instagram</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20Portafolio%20Web%20Legacy`}
                className="px-5 py-2.5 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white rounded-lg whitespace-nowrap transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Escribir por Correo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CÓMO ES PARA CONTRATAR EL SERVICIO
          (Sin líneas sobre textos, 100% optimizado para teléfonos)
      ========================================================================= */}
      <section id="proceso" className="py-20 sm:py-24 bg-[#090c13] border-t border-b border-neutral-800/80 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold font-mono">
              Proceso Ordenado y Rápido
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-2 text-balance">
              ¿Cómo contratar tu página web? Paso a paso
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              El proceso completo desde el primer contacto hasta tener tu página publicada en internet, en 5 sencillos pasos:
            </p>
          </div>

          {/* Stepper Vertical Flow: Conectores estrictamente entre tarjetas */}
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                {/* Step Card */}
                <div className="p-5 sm:p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white font-mono font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm">
                        {step.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-0 sm:pl-12">
                    {step.description}
                  </p>

                  {step.hasActions && (
                    <div className="mt-4 pt-3 border-t border-neutral-900 pl-0 sm:pl-12 flex flex-wrap items-center gap-3">
                      <a
                        href={INSTAGRAM_DM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors shadow-sm"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Escribir por Instagram</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span>Escribir por Correo</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Downward Connector between steps (Nunca se superpone con textos) */}
                {idx < steps.length - 1 && (
                  <div className="flex flex-col items-center justify-center py-2 sm:py-3" aria-hidden="true">
                    <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-blue-500/80 to-blue-500/20" />
                    <div className="w-5 h-5 rounded-full bg-neutral-900 border border-blue-500/40 flex items-center justify-center text-blue-400 my-0.5">
                      <ChevronDown className="w-3 h-3" />
                    </div>
                    <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-blue-500/20 to-blue-500/80" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Summary Callout */}
          <div className="mt-10 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-blue-950/40 via-neutral-950 to-neutral-950 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-white">
                Resumen de entrega: 1 diseño a tu medida + ajustes profesionales inmediatos = tu web lista en tiempo récord
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Cualquier detalle se ajusta con rapidez para que tu negocio empiece a recibir clientes sin demoras.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-4 py-2 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Correo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECCIÓN DEL PLAN $38.000 MENSUAL (Todo lo que lleva la página + 4 cambios)
      ========================================================================= */}
      <section id="plan" className="py-20 sm:py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold font-mono">
              Tarifa Única & Transparente
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Plan PYME Todo Incluido: $38.000 / mes
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3">
              Una cuota mensual accesible que cubre el diseño completo, hosting, soporte continuo y hasta 4 cambios al mes para tu sitio web.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="p-6 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-700/90 relative shadow-2xl hover:border-blue-500/50 transition-all">
              {/* Header of the Pricing Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Sitio Web Completo</h3>
                  <p className="text-xs text-blue-400 mt-1 font-mono">
                    Diseño + Hosting + 4 Cambios al mes
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-neutral-400 block font-mono">Cuota mensual</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 tabular-nums tracking-tight">
                      $38.000
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">CLP / mes</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30">
                  <p className="text-xs text-blue-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>$0 cuota inicial:</strong> No pagas sumas millonarias de entrada para empezar tu proyecto.</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <p className="text-xs text-neutral-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>4 cambios por mes incluidos:</strong> Modificación de precios, textos, fotos, productos o promociones.</span>
                  </p>
                </div>
              </div>

              {/* Lista detallada de lo que incluye la página */}
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
                Todo lo que incluye tu página web:
              </h4>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Sección Quiénes Somos / Historia:</strong> Presentación formal de tu equipo, propósito y trayectoria.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Catálogo completo de servicios o productos con precios:</strong> Tu oferta ordenada y con descripciones detalladas.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Galería de imágenes de alta resolución:</strong> Exhibición fotográfica de tus productos, trabajos o instalaciones.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Integración de Redes Sociales:</strong> Enlaces directos a tu Instagram (@), WhatsApp y demás perfiles.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Botón directo de contacto a WhatsApp:</strong> Contacto en 1 toque con mensaje predeterminado.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Diseño 100% responsivo:</strong> Navegación rápida y fluida en teléfonos móviles, tablets y computadores.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Hosting de alta velocidad & Certificado SSL:</strong> Tu sitio web queda seguro con candado de protección (HTTPS).</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Mantenimiento continuo:</strong> Actualizaciones mensuales de tus 4 cambios sin costo extra.</span>
                </div>
              </div>

              {/* Aclaración profesional sobre rediseño completo futuro */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 mb-8 text-xs text-neutral-300 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Mantenimiento mensual vs. Rediseño completo futuro:</strong>
                    <span>
                      Tus 4 cambios mensuales cubren la mantención habitual (actualización de precios, nuevos textos, fotos, banners o promociones). Si a futuro deseas un <strong>rediseño completo de la página entera desde cero</strong> (nueva estructura o diagramación general), se cobra un <strong>pago separado por el diseño (se paga solo 1 vez)</strong>. Después de ese pago único, <strong>sigues pagando con total normalidad tu plan mensual habitual ($38.000/mes)</strong> con todo tu hosting, seguridad y mantención continua incluidos.
                    </span>
                  </div>
                </div>
              </div>

              {/* Información sobre el Dominio y Hosting */}
              <div className="p-4 sm:p-5 rounded-xl bg-neutral-900 border border-blue-500/30 mb-8 space-y-2">
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    <strong className="text-white block mb-1">Hosting incluido y tu página web totalmente funcional:</strong>
                    El plan viene <strong>sin dominio propio incluido</strong>, pero <strong>incluye todo el hosting de alta velocidad y tu página web queda 100% funcional</strong> desde el primer día.
                    <span className="text-blue-300 font-medium block mt-1.5">
                      ✓ ¿Ya tienes un dominio propio comprado? Nosotros nos encargamos de conectarlo y configurarlo 100% GRATIS.
                    </span>
                  </div>
                </div>
              </div>

              {/* Botones de acción principales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_-3px_rgba(37,99,235,0.4)]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Pedir por Instagram</span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Solicitud%20Plan%20Web%20Legacy%20$38.000`}
                  className="py-3.5 px-4 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Pedir por Correo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECCIÓN DE CONDICIONES CLARAS: COBROS Y BAJAS (Regla de 5 días)
      ========================================================================= */}
      <section id="condiciones" className="py-20 bg-[#090c13] border-t border-b border-neutral-800/80 z-10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold font-mono">
              Condiciones de Servicio
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Política transparente de cobros y bajas
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg mx-auto">
              Reglas claras y bien ordenadas para que siempre tengas el control de tu suscripción:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aviso de cobro: 5 días antes */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#07090e] border border-neutral-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  Pagos Mensuales
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  Te avisamos 5 días antes de cada cobro
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Para tu tranquilidad y control, no realizamos cobros automáticos en tu tarjeta. 
                  <strong> Te contactaremos por Instagram o correo electrónico 5 días antes de tu fecha de cobro mensual</strong> con los datos de transferencia para renovar tu servicio sin prisas ni sorpresas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 text-xs text-neutral-400 font-mono">
                Control total de tu dinero
              </div>
            </div>

            {/* Aviso de baja: 5 días antes */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#07090e] border border-neutral-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                  Cancelaciones & Pausas
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  Si quieres dar de baja, avísanos con 5 días
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  No estás sujeto a contratos forzados. Si decides pausar o dar de baja el servicio, 
                  <strong> solo debes avisarnos con 5 días de anticipación antes de tu fecha de cobro mensual</strong> para suspender el ciclo y no generar cobros siguientes. Sin multas ni trámites engorrosos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-900 text-xs text-neutral-400 font-mono">
                Sin contratos forzados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SECCIÓN DE PREGUNTAS FRECUENTES
      ========================================================================= */}
      <section id="preguntas" className="py-20 z-10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold font-mono">
              Resolución de Dudas
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Preguntas frecuentes
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-[#07090e] border border-neutral-800">
              <h4 className="text-base font-semibold text-white mb-2">
                ¿Qué tipo de cambios puedo pedir dentro de los 4 cambios al mes?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Puedes solicitar actualización y modificación de precios, cambio o adición de fotografías, modificación de textos descriptivos, actualización de datos de contacto o publicación de promociones y ofertas de temporada para mantener tu web siempre al día.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090e] border border-blue-500/20">
              <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span>¿Qué pasa si más adelante quiero rediseñar la página web entera desde cero?</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
                Los 4 cambios mensuales incluidos en tu plan cubren el mantenimiento continuo de tus contenidos actuales (fotos, textos, precios, banners y promociones). Si a futuro tu negocio crece, evoluciona o renueva su imagen de marca y deseas un <strong>rediseño integral de la página completa desde cero</strong> (nueva estructura visual, diagramación o arquitectura), ese trabajo se gestiona mediante un <strong>pago separado por el diseño que se cobra por única vez</strong>.
              </p>
              <div className="pt-3 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <strong className="text-white block mb-1">¿Cómo continúa tu plan después de ese pago?</strong>
                <span>
                  Solo pagas el rediseño <strong>1 sola vez</strong>. Tras completarse y publicarse el nuevo diseño, <strong>sigues pagando con total normalidad tu plan mensual habitual ($38.000 CLP/mes)</strong>, manteniendo tu hosting de alta velocidad, certificado SSL y tus 4 cambios mensuales activos sin interrupciones.
                </span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#07090e] border border-neutral-800">
              <h4 className="text-base font-semibold text-white mb-2">
                ¿El plan incluye dominio y hosting? ¿Cómo funciona?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                El plan <strong>incluye todo el hosting de alta velocidad y tu página web queda 100% funcional</strong>. El plan viene sin dominio propio incluido (para que tú mantengas la titularidad legal del nombre). <strong>Si ya tienes un dominio propio comprado, nosotros nos encargamos de conectarlo y configurarlo 100% gratis</strong>. Si no tienes uno, te asesoramos para obtenerlo o puedes usar el enlace funcional de tu web.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090e] border border-neutral-800">
              <h4 className="text-base font-semibold text-white mb-2">
                ¿En cuánto tiempo estará lista mi página web?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Una vez recibida la información de tu negocio (fotos, textos y precios), trabajamos en 1 diseño exclusivo y completo para tu PYME. Cualquier detalle que desees modificar se cambia con total profesionalismo y rapidez, de modo que la página se demora mucho menos en estar lista y queda publicada en internet sin esperas innecesarias.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090e] border border-neutral-800">
              <h4 className="text-base font-semibold text-white mb-2">
                ¿Por qué canales puedo comunicarme con Web Legacy?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Nuestros canales principales de atención y entrega de material son nuestro Instagram oficial (@weblegacyycl) y nuestro correo electrónico directo (weblegacyy@gmail.com).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SECCIÓN CONTACTO / FOOTER
      ========================================================================= */}
      <footer id="contacto" className="pt-20 sm:pt-24 pb-16 bg-[#05070a] border-t border-neutral-800/80 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Big CTA Banner con Instagram y Correo */}
          <div className="p-6 sm:p-14 rounded-2xl bg-gradient-to-b from-neutral-950 to-[#07090e] border border-blue-500/30 mb-16 sm:mb-20 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold font-mono">
                Inicia tu proyecto
              </span>
              <h2 className="text-2xl sm:text-5xl font-bold text-white tracking-tight leading-tight mt-2 mb-4 sm:mb-6">
                Construye la presencia digital de tu negocio hoy
              </h2>
              <p className="text-xs sm:text-base text-neutral-300 mb-6 sm:mb-8 leading-relaxed">
                Escríbenos por Instagram o envíanos un correo con los detalles de tu PYME. Te prepararemos tu diseño web profesional con cualquier cambio aplicado de inmediato.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(37,99,235,0.4)]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: @weblegacyycl</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-6 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-neutral-800">
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={MARK_LOGO_SRC}
                  alt="Web Legacy Logo"
                  className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />
                <span className="text-base font-bold text-white">Web Legacy</span>
              </div>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
                Páginas web y presencia digital para pequeñas y medianas empresas en Chile. Plan mensual de $38.000 con 4 cambios incluidos al mes y $0 costo de entrada.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-3 sm:mb-4">
                Navegación
              </h5>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <a href="#portafolio" className="text-white hover:text-blue-400 font-medium transition-colors">
                    Portafolio (Páginas Reales)
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="hover:text-white transition-colors">
                    Pasos para contratar
                  </a>
                </li>
                <li>
                  <a href="#plan" className="hover:text-white transition-colors">
                    Plan $38.000 / mes (4 cambios)
                  </a>
                </li>
                <li>
                  <a href="#condiciones" className="hover:text-white transition-colors">
                    Avisos de pago y bajas (5 días)
                  </a>
                </li>
                <li>
                  <a href="#preguntas" className="hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Canales Principales: Instagram y Correo */}
            <div>
              <h5 className="text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-3 sm:mb-4">
                Canales Principales
              </h5>
              <div className="space-y-2.5 text-xs text-neutral-300">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  <span>@weblegacyycl</span>
                </a>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-neutral-400 hover:text-white rounded"
                    title="Copiar correo"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-neutral-400 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3 text-center sm:text-left">
            <p>© 2026 Web Legacy · Diseñado con propósito.</p>
            <p>Hecho para PYMES en Chile</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
