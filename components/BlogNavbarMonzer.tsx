export default function BlogNavbarMonzer ({
    home,
    about_us,
    for_companies,
    contact,
}: {
    home: string
    about_us: string
    for_companies: string
    contact: string
}) {
    return (
        <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{home}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>{about_us}</a>
            </Link>
          </li>
          <li>
            <Link href="/companies">
              <a>{for_companies}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>{contact}</a>
            </Link>
          </li>
        </ul>
      </nav>
  )
};