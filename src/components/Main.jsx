function Main(props) {
console.log(props)

  return (
        <main>

            <section>
                <h2>{props.titulo[0].title}</h2>

                <p>
                    La tecnología web permite crear páginas y aplicaciones
                    que facilitan el acceso a la información y mejoran la
                    comunicación entre las personas.
                </p>

                <p>
                    En esta página conoceremos algunos conceptos relacionados
                    con el diseño y la programación web, utilizando HTML,
                    CSS y JavaScript.
                </p>

                <a href="#" className="boton">Conocer más</a>
            </section>
            <section>

                <h2>{props.titulo[1].title}</h2>

                <div className="tarjetas">

                    <article>
                        <h3>HTML</h3>

                        <p>
                            HTML permite crear la estructura y organizar
                            correctamente el contenido de una página web.
                        </p>
                    </article>


                    <article>
                        <h3>CSS</h3>

                        <p>
                            CSS permite aplicar colores, tamaños, espacios,
                            diseños y diferentes estilos a una página.
                        </p>
                    </article>


                    <article>
                        <h3>JavaScript</h3>

                        <p>
                            JavaScript permite agregar interactividad y
                            funcionalidades a las páginas web.
                        </p>
                    </article>

                </div>

            </section>
            <section className="informacion">

                <h2>¿Por qué aprender desarrollo web?</h2>

                <p>
                    Aprender desarrollo web permite crear sitios informativos,
                    tiendas virtuales, portafolios, sistemas web y muchas
                    otras soluciones digitales.
                </p>

                <p>
                    Además, permite desarrollar habilidades relacionadas con
                    la creatividad, la resolución de problemas y el uso de
                    nuevas tecnologías.
                </p>

            </section>

        </main>
  )
}

export default Main
