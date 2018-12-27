import React from "react";
import PropTypes from "prop-types";
import { Link } from 'teasim-statics/router';
import cssname from "teakit/cssname";

const Anchor = props => {
  const {
    className,
    children,
    style,
    href,
    inline,
    loading,
    disabled,
    onlyActiveOnIndex,
    onClick,
    onMouseUp,
    onMouseLeave,
    activeStyle
  } = props;

  const cssnames = cssname(
    "a-anchor",
    {
      [`is-inline`]: inline,
      [`is-loading`]: loading,
      [`is-disabled`]: disabled
    },
    className
  );

  return (
    <Link
      to={href}
      onlyActiveOnIndex={onlyActiveOnIndex}
      style={style}
      activeStyle={activeStyle}
      className={cssnames}
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      activeClassName="is-active"
    >
      {children}
    </Link>
  );
};

Anchor.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  onlyActiveOnIndex: PropTypes.bool,
  inline: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseLeave: PropTypes.func
};

Anchor.defaultProps = {
  onClick: () => {},
  onMouseUp: () => {},
  onMouseLeave: () => {}
};

export default Anchor;
