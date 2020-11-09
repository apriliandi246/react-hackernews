import Link from "next/link";

export default function Nav() {
   return (
      <>
         <nav className="navbar">
            <Link href="/">
               <a className="navbar__brand">HACKER NEWS</a>
            </Link>

            <ul>
               <li>
                  <Link href="/newest">
                     <a className="link-menu">newest</a>
                  </Link>
               </li>

               <li>
                  <Link href="/show">
                     <a className="link-menu">show</a>
                  </Link>
               </li>
               <li>
                  <Link href="/jobs" className="link-menu">
                     <a className="link-menu">jobs</a>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
}
