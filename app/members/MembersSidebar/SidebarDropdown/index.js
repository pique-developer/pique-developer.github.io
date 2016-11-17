import React, { Component } from 'react'
import Link from 'react-router/Link'
import caret from './caret.png'
import css from './style.css'

export class SidebarDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
    this.changeVisibility = ::this.changeVisibility
  }

  changeVisibility() {
    this.setState({open: !this.state.open})
  }

  render() {
    const { open } = this.state
    const { routes, title } = this.props
    return (
      <div className={`${css.root} ${open ? css.open : ''}`}>
        <div className={css.dropdown} onClick={this.changeVisibility}>
          <div className={css.title}>{title}</div>
          <img className={css.caret} src={caret} />
        </div>
        <div className={css.links}>
          <ul className={css.ul}>
            {routes.map((x, i) =>
              <li key={i} className={css.li}>
                <Link
                  className={css.link}
                  to={x.route}
                  activeClassName={css.active}
                  activeOnlyWhenExact={x.activeOnlyWhenExact}>
                  <div className={css.caption}>{x.alias || x.caption}</div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default SidebarDropdown
