import './ContactInfo.css'
import logo2 from '../../assets/images/svg/svgexport-2.svg'
import logo3 from '../../assets/images/svg/svgexport-3.svg'

function ContactInfo(props) {

  const contactOpen = props.contactIsOpen === false
  ? 'container-contact-info'
  : 'container-contact-info container-active'
  return (
    <div className={contactOpen}>
        <h2 className='title-contact' >Contact</h2>
        <p>luisfernandodepaulosousa0020@gmail.com</p>
        <p>+55 62 9 9322 2660</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/luis-fernando-de-paulo/" className="social">
            <svg className='image-display' xmlns:xlink="http://www.w3.org/1999/xlink" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_52)" fill="none"><path d="M4.8102 0.438965C2.02328 0.438965 0 2.36144 0 5.0083C0 7.65427 1.98314 9.57496 4.71385 9.57496C6.13051 9.57496 7.3509 9.11553 8.24389 8.24662C9.10031 7.41251 9.57223 6.26259 9.57134 4.98778C9.50889 2.3097 7.55073 0.438965 4.8102 0.438965ZM7.0003 6.96824C6.4472 7.50618 5.65591 7.79076 4.71385 7.79076C2.98943 7.79076 1.7842 6.64709 1.7842 5.0083C1.7842 3.34275 3.00013 2.22316 4.8102 2.22316C6.57923 2.22316 7.74788 3.32491 7.78803 5.00919C7.78714 5.77818 7.50791 6.47313 7.0003 6.96824Z" fill="#FFFFFF"></path><path d="M0.855522 40.5611H8.87371V11.0817H0.855522V40.5611ZM2.63972 12.8659H7.08951V38.776H2.63972V12.8659Z" fill="#FFFFFF"></path><path d="M30.0174 11.0817C26.2991 11.0817 24.0225 12.3654 22.7039 13.5724L22.4533 11.0817H13.3815V40.5602H22.2659V25.0671C22.2659 24.3998 22.5362 23.0144 22.7057 22.6486C23.7789 20.3372 25.2268 20.3372 27.4196 20.3372C29.9451 20.3372 32.079 22.7057 32.079 25.5087V40.562H41V23.9065C41 15.0943 35.3066 11.0817 30.0174 11.0817ZM39.2158 38.7769H33.8632V25.5078C33.8632 21.7369 30.9121 18.5521 27.4196 18.5521C25.1786 18.5521 22.6397 18.5521 21.0866 21.8975C20.7663 22.5889 20.4808 24.2455 20.4808 25.0671V38.7769H15.1657V12.8659H20.8394L21.2034 16.4735H22.6656L22.927 16.0516C23.522 15.0934 25.4034 12.865 30.0174 12.865C34.4475 12.865 39.2158 16.3192 39.2158 23.9038V38.7769Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2_52"><rect width="41" height="41" fill="white"></rect></clipPath></defs></svg>
          </a>
          <a href="https://github.com/Luisfp0" className="social">
            <svg className='image-display' xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 0.75C9.92853 0.75 0.75 9.92853 0.75 21.25C0.75 32.5715 9.92853 41.75 21.25 41.75C32.5715 41.75 41.75 32.5715 41.75 21.25C41.75 9.92853 32.5715 0.75 21.25 0.75ZM39.0167 21.25C39.0167 21.2518 39.0167 21.2536 39.0167 21.2573C39.0167 29.3735 33.5755 36.2177 26.1408 38.3406L26.0151 38.3716V31.7241C26.0151 30.1473 25.5924 28.9932 24.7468 28.2619C25.6871 28.1672 26.5381 28.0123 27.3617 27.7972L27.2451 27.8228C28.118 27.5786 28.8796 27.2542 29.5848 26.846L29.5375 26.8716C30.3119 26.4452 30.9661 25.904 31.5055 25.2607L31.5146 25.2498C32.043 24.6071 32.4737 23.7537 32.8065 22.6896C33.1394 21.6254 33.3058 20.4021 33.3058 19.0196C33.3058 17.0528 32.6638 15.3782 31.3797 13.9957C31.9811 12.5161 31.9161 10.8579 31.1848 9.02107C30.7292 8.87407 30.0708 8.96336 29.2095 9.28893C28.3439 9.60964 27.6059 9.97044 26.908 10.395L26.9663 10.3622L26.0388 10.9472C24.6357 10.5444 23.023 10.313 21.3557 10.313C19.6884 10.313 18.0775 10.5444 16.5487 10.9763L16.6726 10.9472C15.5975 8.89351 12.8714 8.76231 11.5029 9.02107C10.5918 10.4734 10.7012 12.7639 11.3316 13.9957C10.0476 15.3782 9.40556 17.0528 9.40556 19.0196C9.40556 20.4021 9.57199 21.6211 9.90484 22.6768C10.2377 23.7325 10.6647 24.5859 11.1859 25.237C11.7252 25.8985 12.3758 26.4452 13.1156 26.8533L13.1502 26.8697C13.808 27.2524 14.5697 27.5786 15.3715 27.8045L15.4408 27.8209C16.1496 28.0123 17.0006 28.1653 17.8698 28.2546L17.9408 28.2601C17.2909 28.8456 16.8925 29.6832 16.7455 30.7729C16.4302 30.926 16.064 31.0517 15.6795 31.1337L15.6485 31.1392C15.2585 31.2176 14.8103 31.2613 14.3529 31.2613C14.3201 31.2613 14.2873 31.2613 14.2545 31.2613H14.26C13.723 31.2613 13.1903 31.0864 12.6619 30.7365C12.1334 30.3866 11.6821 29.8782 11.308 29.2113C11.0055 28.6992 10.61 28.2765 10.1381 27.9521L10.1253 27.943C9.64548 27.6175 9.24338 27.4225 8.91902 27.3581L8.69853 27.3089C8.66209 27.2998 8.61836 27.2943 8.57462 27.2943C8.35596 27.2943 8.16644 27.4182 8.07351 27.5986L8.07169 27.6023L8.04253 27.6588C8.00244 27.7335 7.98058 27.8228 7.98058 27.9175C7.98058 28.1453 8.1136 28.3403 8.30676 28.4296L8.3104 28.4314C8.66756 28.5942 9.02107 28.9033 9.37093 29.3589C9.66067 29.7197 9.9176 30.1279 10.1235 30.5652L10.1399 30.6016L10.3841 31.1629C10.59 31.7752 10.9636 32.2872 11.4501 32.6571L11.4574 32.6626C11.9129 33.0197 12.4651 33.2767 13.0682 33.3896L13.0919 33.3933C13.5948 33.4917 14.1798 33.5536 14.7775 33.5646H14.7866C14.854 33.5664 14.9342 33.5682 15.0144 33.5682C15.4116 33.5682 15.8016 33.5354 16.1806 33.4735L16.1387 33.4789L16.6999 33.3824C16.6999 33.9995 16.7042 34.7229 16.7127 35.5526C16.7181 36.0556 16.7218 37.424 16.7236 38.4354C9.04658 36.3562 3.49062 29.4518 3.49062 21.25C3.49062 13.9356 7.90769 7.65258 14.2217 4.92471L14.3365 4.88098C16.3792 3.99356 18.7572 3.47787 21.2573 3.47787C31.0663 3.47787 39.0185 11.43 39.0185 21.2391C39.0185 21.2445 39.0185 21.25 39.0185 21.2555L39.0167 21.25Z" fill="#FFFFFF"></path></svg>
          </a>
          <a href="https://www.instagram.com/n_andooo/" className="social">
            <svg className='image-display' xmlns:xlink="http://www.w3.org/1999/xlink" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_75)" fill="none"><path d="M20.5 3.69513C25.9735 3.69513 26.6227 3.71563 28.7854 3.81471C34.3409 4.06754 36.9359 6.7035 37.1887 12.218C37.2878 14.379 37.3066 15.0282 37.3066 20.5017C37.3066 25.9769 37.2861 26.6244 37.1887 28.7854C36.9342 34.2948 34.346 36.9359 28.7854 37.1887C26.6227 37.2878 25.9769 37.3083 20.5 37.3083C15.0265 37.3083 14.3773 37.2878 12.2163 37.1887C6.64713 36.9342 4.06583 34.2863 3.813 28.7837C3.71392 26.6227 3.69342 25.9752 3.69342 20.5C3.69342 15.0265 3.71563 14.379 3.813 12.2163C4.06754 6.7035 6.65567 4.06583 12.2163 3.813C14.379 3.71563 15.0265 3.69513 20.5 3.69513V3.69513ZM20.5 0C14.9325 0 14.2355 0.0239167 12.0489 0.123C4.60396 0.464667 0.466375 4.59542 0.124708 12.0472C0.0239167 14.2355 0 14.9325 0 20.5C0 26.0675 0.0239167 26.7662 0.123 28.9528C0.464667 36.3978 4.59542 40.5353 12.0472 40.877C14.2355 40.9761 14.9325 41 20.5 41C26.0675 41 26.7662 40.9761 28.9528 40.877C36.3909 40.5353 40.5388 36.4046 40.8753 28.9528C40.9761 26.7662 41 26.0675 41 20.5C41 14.9325 40.9761 14.2355 40.877 12.0489C40.5422 4.61079 36.4063 0.466375 28.9545 0.124708C26.7662 0.0239167 26.0675 0 20.5 0V0ZM20.5 9.97325C14.6865 9.97325 9.97325 14.6865 9.97325 20.5C9.97325 26.3135 14.6865 31.0285 20.5 31.0285C26.3135 31.0285 31.0268 26.3152 31.0268 20.5C31.0268 14.6865 26.3135 9.97325 20.5 9.97325ZM20.5 27.3333C16.7263 27.3333 13.6667 24.2754 13.6667 20.5C13.6667 16.7263 16.7263 13.6667 20.5 13.6667C24.2737 13.6667 27.3333 16.7263 27.3333 20.5C27.3333 24.2754 24.2737 27.3333 20.5 27.3333ZM31.4436 7.09813C30.0838 7.09813 28.9819 8.2 28.9819 9.55812C28.9819 10.9162 30.0838 12.0181 31.4436 12.0181C32.8017 12.0181 33.9019 10.9162 33.9019 9.55812C33.9019 8.2 32.8017 7.09813 31.4436 7.09813Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0_2_75"><rect width="41" height="41" fill="white"></rect></clipPath></defs></svg>
          </a>
      </div>
      <div className="corner"></div>
    </div>
  )
}

export default ContactInfo