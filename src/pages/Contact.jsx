import { Instagram, Phone, Music, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/webnova.co", Icon: Instagram },
  { name: "WhatsApp", url: "https://wa.me/+573XXXXXXXXX", Icon: Phone },
  { name: "TikTok", url: "https://tiktok.com/@webnova.co", Icon: Music },
  { name: "LinkedIn", url: "https://linkedin.com/company/webnova-co", Icon: Linkedin },
]

const Contact = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl sm:text-8xl lg:text-9xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text inline-block mb-14 text-center">
        CONTACTO
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {socialLinks.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visita nuestro ${name}`}
            title={name}
            className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-300">
              <Icon
                className="w-8 h-8 text-gray-600 group-hover:text-white transition-all duration-300"
                aria-hidden="true"
              />
            </div>
            <span className="mt-2 text-sm uppercase tracking-wider text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-300">
              {name}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10 text-gray-600 text-center max-w-md text-sm tracking-wide leading-relaxed">
        Elevamos tu presencia digital al siguiente nivel.
        <br className="hidden sm:inline" />
        Contáctanos y comencemos a crear juntos.
      </p>
    </section>
  )
}

export default Contact

