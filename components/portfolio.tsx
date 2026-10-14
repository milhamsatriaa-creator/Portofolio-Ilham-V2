'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Cable,
  Check,
  Download,
  ExternalLink,
  Gauge,
  HardDrive,
  Mail,
  Menu,
  Network,
  Phone,
  Radio,
  Router,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wifi,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Edukasi', href: '#edukasi' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Sertifikasi', href: '#pencapaian' },
  { label: 'Kontak', href: '#kontak' },
]

const projects = [
  {
    number: '01',
    icon: Cable,
    category: 'FIBER OPTIC · FTTX / FTTH',
    title: 'Fiber optic splicing',
    description:
      'Menyambung inti serat optik menggunakan fusion splicer presisi tinggi. Menghasilkan tingkat redaman sinyal minimal hingga 0.1 dB untuk mendukung transmisi data berkecepatan tinggi sesuai standar industri FTTx/FTTH.',
    metric: '0.1 dB',
    metricLabel: 'redaman minimal',
    tags: ['Fusion splicer', 'Optical loss test', 'FTTx'],
  },
  {
    number: '02',
    icon: Router,
    category: 'MIKROTIK · NETWORK OPERATIONS',
    title: 'Konfigurasi & optimalisasi MikroTik',
    description:
      'Mengonfigurasi dan mengoptimalkan 10+ parameter jaringan MikroTik—IP address, DHCP, NAT, firewall, dan routing—agar konektivitas client berjalan aman dan stabil.',
    metric: '10+',
    metricLabel: 'parameter jaringan',
    tags: ['IP addressing', 'DHCP', 'NAT & firewall', 'Routing'],
  },
  {
    number: '03',
    icon: Network,
    category: 'CISCO · NETWORK SEGMENTATION',
    title: 'Segmentasi jaringan VLAN Cisco',
    description:
      'Merancang segmen VLAN pada perangkat Cisco menggunakan Cisco Packet Tracer. Mengatur access dan trunk port untuk pemisahan lalu lintas data serta peningkatan keamanan jaringan internal.',
    metric: '100%',
    metricLabel: 'pemisahan trafik',
    tags: ['Cisco Packet Tracer', 'VLAN', 'Access & trunk'],
  },
  {
    number: '04',
    icon: HardDrive,
    category: 'LINUX · WINDOWS SERVER',
    title: 'Infrastruktur server mandiri',
    description:
      'Membangun dan mengelola server berbasis CentOS dan Windows Server untuk layanan DNS, web, dan FTP. Mendukung komunikasi P2P dan file sharing dengan keterandalan konektivitas 99% selama uji level.',
    metric: '99%',
    metricLabel: 'konektivitas uji level',
    tags: ['CentOS', 'Windows Server', 'DNS · Web · FTP'],
  },
  {
    number: '05',
    icon: Gauge,
    category: 'TROUBLESHOOTING · CABLING',
    title: 'Troubleshooting fisik & logis',
    description:
      'Melakukan troubleshooting pada kabel twisted pair (RJ45/RJ11) dan perangkat jaringan, memangkas waktu henti pada simulasi gangguan hingga 30% lebih cepat.',
    metric: '30%',
    metricLabel: 'lebih cepat atasi downtime',
    tags: ['RJ45 / RJ11', 'Diagnosis jaringan', 'Perangkat jaringan'],
  },
]

const skills = [
  { label: 'Fiber optic splicing', detail: 'Fusion splicer · FTTx / FTTH', icon: Cable },
  { label: 'Pengujian redaman optik', detail: 'Optical loss measurement', icon: Radio },
  { label: 'MikroTik', detail: 'DHCP · NAT · Firewall · Routing', icon: Router },
  { label: 'Cisco & VLAN', detail: 'Packet Tracer · access / trunk', icon: Network },
  { label: 'Server administration', detail: 'CentOS · Windows Server', icon: HardDrive },
  { label: 'Network troubleshooting', detail: 'Kabel · perangkat · konektivitas', icon: Wifi },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: {
  eyebrow: string
  title: string
  description?: string
  number: string
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <span className="section-eyebrow"><span>{number}</span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Muhammad Ilham Satria, beranda">
          <span className="brand-mark"><Network aria-hidden="true" /></span>
          <span className="brand-name">MUHAMMAD ILHAM SATRIA<span>NETWORK TECHNICIAN</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#kontak">Mari terhubung <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content page-width">
        <div className="hero-copy">
          <div className="availability"><span /> TERBUKA UNTUK PELUANG MAGANG</div>
          <p className="hero-kicker">MUHAMMAD ILHAM SATRIA <span>·</span> NETWORK TECHNICIAN</p>
          <h1 id="hero-title">Membangun koneksi.<br /><span>Menghubungkan masa depan.</span></h1>
          <p className="hero-description">
            Saya <strong>Muhammad Ilham Satria</strong>, teknisi jaringan dan fiber optik dengan fokus pada konektivitas yang andal, presisi, dan siap mendukung operasional FTTx.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href="#kontak">Hubungi saya <ArrowRight aria-hidden="true" /></a>
            <button className="button button-outline" type="button" onClick={() => window.print()}>
              <Download aria-hidden="true" /> Unduh CV (PDF)
            </button>
          </div>
          <a className="hero-scroll" href="#tentang"><span className="scroll-icon"><ArrowDown aria-hidden="true" /></span> Gulir untuk mengenal lebih jauh</a>
        </div>
        <div className="hero-aside" aria-label="Bidang fokus">
          <div className="hero-index">01 / 07</div>
          <div className="hero-aside-line" />
          <div className="hero-focus">
            <span>FOCUS AREA</span>
            <strong>FTTx<br />Network<br />Infrastructure</strong>
          </div>
          <div className="hero-coordinate">07°58' S  112°37' E</div>
        </div>
      </div>
      <div className="hero-bottom page-width">
        <span>SMK TELKOM MALANG <i /> TEKNIK KOMPUTER & JARINGAN</span>
        <span>EST. GRADUATION <strong>MEI 2027</strong></span>
      </div>
    </section>
  )
}

function ContactStrip() {
  return (
    <div className="contact-strip" aria-label="Informasi kontak">
      <a href="mailto:milhamsatriaa@gmail.com"><span className="contact-icon"><Mail aria-hidden="true" /></span><span><small>EMAIL</small>milhamsatriaa@gmail.com</span><ArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
      <a href="https://wa.me/6285258915499" target="_blank" rel="noreferrer"><span className="contact-icon"><Phone aria-hidden="true" /></span><span><small>WHATSAPP / TELEPON</small>+62 852-5891-5499</span><ArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span className="contact-icon"><ExternalLink aria-hidden="true" /></span><span><small>LINKEDIN</small>www.LinkedIn.com</span><ArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
  <a href="https://www.instagram.com/milhamsatriaa/" target="_blank" rel="noreferrer"><span className="contact-icon" aria-hidden="true">◎</span><span><small>INSTAGRAM</small>@milhamsatriaa</span><ArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
  </div>
  )
}

function AboutEducation() {
  return (
    <section className="about-section section-pad" id="tentang">
      <div className="page-width">
        <SectionHeading number="01" eyebrow="PROFIL & PENDIDIKAN" title="Teknis dalam tindakan." description="Fondasi teknis yang kuat, didukung pola pikir analitis dan pengalaman memimpin di dalam tim." />
        <div className="about-grid">
          <div className="about-copy">
            <span className="mini-label"><Sparkles aria-hidden="true" /> TENTANG SAYA</span>
            <img className="about-profile-photo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-10%20at%2018.52.31-3Uzc5K2GIyqEX0nDl0KlxVneKafQAM.jpeg" alt="Potret Muhammad Ilham Satria mengenakan seragam merah Telkom Malang" width={354} height={472} />
            <p className="about-lead">Merawat detail kecil agar jaringan besar tetap berjalan.</p>
            <p className="body-copy">Teknisi Jaringan & Fiber Optik berlatar belakang pendidikan SMK Telkom Malang dengan sertifikasi resmi CCNA: Switching, Routing, and Wireless Essentials. Memiliki keahlian teknis presisi tinggi dalam penyambungan serat optik (Fusion Splicing) dengan pencapaian tingkat redaman hingga 0.1 dB, pengujian redaman optik, serta penguasaan konfigurasi perangkat MikroTik dan Cisco. Diperkuat pengalaman kepemimpinan sebagai Kapten Tim Basket dan kedisiplinan Paskibra, memiliki kemampuan problem solving, analytical thinking, serta stamina lapangan yang tangguh untuk mendukung operasional FTTx di GlobalXtreme.</p>
            <div className="trait-list"><span><Check aria-hidden="true" /> Problem solving</span><span><Check aria-hidden="true" /> Analytical thinking</span><span><Check aria-hidden="true" /> Siap kerja lapangan</span></div>
          </div>
          <article className="education-card" id="edukasi">
            <div className="education-topline"><span className="mini-label">PENDIDIKAN</span><span className="education-period">2024 — 2027</span></div>
            <img className="school-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zc09Sj5BcHh2gEalyuWDNQjIQpHrOX.png" alt="Logo SMK Telkom Malang" width={315} height={323} />
            <h3>SMK Telkom Malang</h3>
            <p className="school-location">Malang, Jawa Timur</p>
            <div className="education-divider" />
            <div className="education-detail"><span>PROGRAM KEAHLIAN</span><strong>Teknik Komputer dan Jaringan (TKJ)</strong></div>
            <div className="education-detail"><span>ESTIMASI KELULUSAN</span><strong>Mei 2027</strong></div>
            <div className="education-footer"><span className="status-dot" /> Sedang menempuh pendidikan</div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills-section section-pad" id="keahlian">
      <div className="page-width">
        <SectionHeading number="02" eyebrow="KEAHLIAN" title="Terampil di setiap lapisan." description="Dari konektor fisik sampai konfigurasi logis—siap memastikan setiap titik jaringan bekerja semestinya." />
        <div className="skills-grid">
          {skills.map(({ label, detail, icon: Icon }, index) => (
            <article className="skill-card" key={label}>
              <span className="skill-number">0{index + 1}</span>
              <span className="skill-icon"><Icon aria-hidden="true" /></span>
              <h3>{label}</h3>
              <p>{detail}</p>
              <span className="skill-indicator"><span /></span>
            </article>
          ))}
        </div>
        <div className="skills-note"><ShieldCheck aria-hidden="true" /><p><strong>Standar kerja:</strong> teliti, aman, terdokumentasi, dan berorientasi pada stabilitas koneksi.</p><span>NETWORK READY</span></div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects-section section-pad" id="proyek">
      <div className="page-width">
        <SectionHeading number="03" eyebrow="PROYEK & PENCAPAIAN TEKNIS" title="Solusi yang terukur." description="Pengalaman praktik jaringan yang berfokus pada performa, kestabilan, dan presisi teknis." />
        <div className="project-list">
          {projects.map(({ number, icon: Icon, category, title, description, metric, metricLabel, tags }) => (
            <article className="project-card" key={number}>
              <div className="project-number">{number}</div>
              <div className="project-body">
                <div className="project-category"><Icon aria-hidden="true" /> {category}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-metric"><strong>{metric}</strong><span>{metricLabel}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section section-pad" id="pengalaman">
      <div className="page-width">
        <SectionHeading number="04" eyebrow="PENGALAMAN & KEPEMIMPINAN" title="Tumbuh bersama tim." description="Kedisiplinan, koordinasi, dan tanggung jawab yang terbentuk melalui kegiatan organisasi sekolah." />
        <div className="experience-layout">
          <div className="experience-intro"><span className="experience-big-number">03</span><p>pengalaman organisasi<br />selama <strong>2025—2026</strong></p><div className="experience-marker"><span /> AKTIF BERKONTRIBUSI</div></div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-meta"><span>2025 — 2026</span><span>OLAHRAGA</span></div>
              <h3>Ekstrakurikuler Basket</h3>
              <p className="timeline-role">Roaster Tim</p>
              <p>Menjadi Roaster Putra untuk Lomba DBL tahun 2026. Pengalaman tim basket turut memperkuat kepemimpinan, komunikasi, dan stamina.</p>
              <span className="timeline-highlight"><Trophy aria-hidden="true" /> Roaster Putra · DBL 2026</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-meta"><span>2025 — 2026</span><span>DISIPLIN & KOORDINASI</span></div>
              <h3>PASKATEMA</h3>
              <p className="timeline-role">Anggota Tim Kedisiplinan · Paskibra SMK Telkom Malang</p>
              <p>Melatih kedisiplinan, fokus presisi, dan koordinasi fisik bersama 15+ anggota tim. Berhasil membawa sekolah meraih Juara Madya 2 pada LKBB SMKN 8 Malang.</p>
              <span className="timeline-highlight"><Award aria-hidden="true" /> Juara Madya 2 · LKBB SMKN 8 Malang</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-meta"><span>2025 — 2026</span><span>KONTEN & KOLABORASI</span></div>
              <h3>PUSTEL</h3>
              <p className="timeline-role">Penanggung Jawab Konten · Perpustakaan Telkom Malang</p>
              <p>Menyusun kalender konten mingguan, mengelola jadwal publikasi video, serta mengoordinasikan dan mengawasi 5+ anggota tim dalam tahapan produksi konten.</p>
              <span className="timeline-highlight"><Check aria-hidden="true" /> Perencanaan · Publikasi · Koordinasi tim</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

type Certificate = {
  issuer: string
  title: string
  description: string
  href: string
  image?: string
}

const certificates: Certificate[] = [
  {
    issuer: 'CERTIPORT · NETWORKING',
    title: 'Networking',
    description: 'Sertifikasi Networking Certiport, diterbitkan 24 September 2026.',
    href: '/certificates/certiport-networking.pdf',
  },
  {
    issuer: 'CISCO NETWORKING ACADEMY',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    description: 'Sertifikat penyelesaian kompetensi switching, routing, dan wireless networking · 6 Agustus 2026.',
    href: '/certificates/ccna-switching-routing-wireless-essentials.pdf',
  },
  {
    issuer: 'SMK TELKOM MALANG · KETERCAPAIAN',
    title: 'Small-Scale Network Architecture for Peer-to-Peer Communication and File Sharing',
    description: 'Uji kenaikan tingkat dengan predikat Excellent · 2 Desember 2024.',
    href: '/certificates/moklet-level-1-peer-to-peer-networking.pdf',
  },
  {
    issuer: 'SMK TELKOM MALANG · KEIKUTSERTAAN',
    title: 'Sertifikat Keikutsertaan',
    description: 'Sertifikat keikutsertaan tingkat pertama program keahlian TKJ.',
    href: '/certificates/moklet-level-1-participation.pdf',
  },
  {
    issuer: 'SMK TELKOM MALANG · SEMESTER GENAP',
    title: 'Sertifikat Keikutsertaan Semester Genap',
    description: 'Sertifikat keikutsertaan program keahlian TKJ semester genap.',
    href: '/certificates/moklet-semester-genap-participation.pdf',
  },
  {
    issuer: 'SMK TELKOM MALANG · KETERCAPAIAN',
    title: 'Building the Foundation of Networking and System Administration',
    description: 'Uji kenaikan tingkat dengan predikat Excellent · 19 Mei 2025.',
    href: '/certificates/moklet-networking-system-administration.pdf',
  },
  {
    issuer: 'GLOBALXTREME · BEASISWA',
    title: 'Beasiswa dan Ikatan Kerja GlobalXtreme',
    description: 'Sertifikat beasiswa dan ikatan kerja yang diberikan oleh GlobalXtreme.',
    href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beasiswa%20Dan%20Ikatan%20Kerja%20GlobalXtreme-Le3BhtQkpoNOZIePA5r02luLKvuTz3.jpeg',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beasiswa%20Dan%20Ikatan%20Kerja%20GlobalXtreme-Le3BhtQkpoNOZIePA5r02luLKvuTz3.jpeg',
  },
  {
    issuer: 'SMK TELKOM MALANG · UJI KOMPETENSI',
    title: 'Sertifikat Mengikuti UUK',
    description: 'Penyelesaian Uji Unit Kompetensi bidang infrastruktur jaringan, MikroTik, dan Multi-Service Server.',
    href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sertifikat%20Mengikuti%20UUK-sfEMd8Mf5NSlsnOXLlMES3kULS1iJu.jpeg',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sertifikat%20Mengikuti%20UUK-sfEMd8Mf5NSlsnOXLlMES3kULS1iJu.jpeg',
  },
  {
    issuer: 'D-NET · KUNJUNGAN INDUSTRI',
    title: 'Partisipasi sebagai Peserta D-Net',
    description: 'Sertifikat partisipasi dalam kegiatan kunjungan industri SMK Telkom Malang.',
    href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sertifikat%20Partisipasi%20Sebagai%20Peserta%20D-Net-WWD8Y5C5z8lehQSKOfo1yStYdKjhyN.jpeg',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sertifikat%20Partisipasi%20Sebagai%20Peserta%20D-Net-WWD8Y5C5z8lehQSKOfo1yStYdKjhyN.jpeg',
  },
  {
    issuer: 'OMADATA · KUNJUNGAN INDUSTRI',
    title: 'Partisipasi sebagai Peserta Omadata',
    description: 'Sertifikat partisipasi dalam kegiatan kunjungan ke Omadata Surabaya Data Center.',
    href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sertifikat%20Partisipasi%20Sebagai%20Peserta%20Omadata-IqpvHb9zZNxgXGnY55DKmZLVGA2U35.jpeg',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sertifikat%20Partisipasi%20Sebagai%20Peserta%20Omadata-IqpvHb9zZNxgXGnY55DKmZLVGA2U35.jpeg',
  },
]

function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedCertificate && !dialog.open) dialog.showModal()
    if (!selectedCertificate && dialog.open) dialog.close()
  }, [selectedCertificate])

  return (
    <>
      <section className="achievement-section section-pad" id="pencapaian">
        <div className="page-width">
          <SectionHeading number="05" eyebrow="SERTIFIKASI & PRESTASI" title="Kompetensi yang dibuktikan." description="Bekal sertifikasi jaringan dan kontribusi nyata di lingkungan sekolah." />
          <div className="achievement-grid">
            {certificates.map((certificate) => (
              <article className={`cert-card${certificate.image ? ' cert-card-image' : ''}`} key={certificate.href}>
                <div className="cert-top"><span className="cert-seal"><Award aria-hidden="true" /></span><span className="cert-status">DOKUMEN RESMI</span></div>
                <div className="cert-label">{certificate.issuer}</div>
                {certificate.image && <div className="cert-preview-frame"><img className="cert-preview" src={certificate.image} alt={`Pratinjau ${certificate.title}`} loading="lazy" /></div>}
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <div className="cert-footer"><span>{certificate.image ? 'IMAGE · SERTIFIKAT' : 'PDF · SERTIFIKAT'}</span><span><Check aria-hidden="true" /> TERSEDIA</span></div>
                <div className="cert-actions">
                  {certificate.image ? (
                    <button type="button" onClick={() => setSelectedCertificate(certificate)}><ExternalLink aria-hidden="true" /> Lihat gambar</button>
                  ) : (
                    <a href={certificate.href} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> Lihat PDF</a>
                  )}
                  {!certificate.image && <a href={certificate.href} download><Download aria-hidden="true" /> Unduh</a>}
                </div>
              </article>
            ))}
            <article className="award-card">
              <span className="award-kicker"><Trophy aria-hidden="true" /> PENGHARGAAN TIM</span>
              <h3>Juara Madya 2</h3>
              <p>Lomba Keterampilan Baris Berbaris (LKBB) SMKN 8 Malang bersama tim PASKATEMA.</p>
              <span className="award-year">2025—2026 <ArrowUpRight aria-hidden="true" /></span>
            </article>
            <article className="award-card award-card-orange">
              <span className="award-kicker"><Trophy aria-hidden="true" /> PENCAPAIAN OLAHRAGA</span>
              <h3>Roaster Putra DBL</h3>
              <p>Terpilih sebagai Roaster Putra untuk Lomba DBL tahun 2026 melalui ekstrakurikuler basket.</p>
              <span className="award-year">2026 <ArrowUpRight aria-hidden="true" /></span>
            </article>
          </div>
        </div>
      </section>
      <dialog
        ref={dialogRef}
        className="certificate-dialog"
        aria-label="Pratinjau sertifikat"
        onCancel={(event) => {
          event.preventDefault()
          setSelectedCertificate(null)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedCertificate(null)
        }}
      >
        {selectedCertificate?.image && (
          <div className="certificate-dialog-content">
            <button className="certificate-dialog-close" type="button" onClick={() => setSelectedCertificate(null)}>Tutup</button>
            <div className="certificate-dialog-image-frame">
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="kontak">
      <div className="contact-glow" aria-hidden="true" />
      <div className="page-width contact-content">
        <span className="contact-eyebrow"><span /> KONTAK</span>
        <h2>Siap untuk koneksi<br /><span>berikutnya?</span></h2>
        <p>Terbuka untuk peluang magang, kolaborasi, dan pengalaman baru di bidang jaringan serta fiber optik.</p>
        <a className="button button-accent contact-cta" href="mailto:milhamsatriaa@gmail.com">Mulai percakapan <ArrowRight aria-hidden="true" /></a>
        <ContactStrip />
        <footer className="site-footer"><a className="footer-brand" href="#home"><Network aria-hidden="true" /> ILHAM SATRIA</a><span>NETWORK TECHNICIAN · MALANG, INDONESIA</span><span>© 2026 MUHAMMAD ILHAM SATRIA</span></footer>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <Header />
      <main id="main-content">
        <Hero />
        <AboutEducation />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
