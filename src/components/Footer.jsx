export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted glass border-t border-white/10">
      <p>© {new Date().getFullYear()} Saibal Chakraborty. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/Saibal002" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="mailto:saibal02dev@gmail.com" className="hover:text-primary transition-colors">Email</a>
      </div>
    </footer>
  )
}