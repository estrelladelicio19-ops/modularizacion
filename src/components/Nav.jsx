function Nav(props) {
console.log(props);

  return (
    <nav>
        <a href="#">{props.menu[0].nombre}</a>
        <a href="#">{props.menu[1].nombre}</a>
        <a href="#">{props.menu[2].nombre}</a>
        <a href="#">{props.menu[3].nombre}</a>
        <a href="#">{props.menu[4].nombre}</a>
    </nav>
  )
}

export default Nav
