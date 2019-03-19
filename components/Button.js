import PropTypes from "prop-types";

Button.propTypes = {
  color: PropTypes.string,
  somethingElse: PropTypes.object
};

delete Button.propTypes.somethingElse;

export default function Button({ color = "white", ...props }) {
  return <button style={{ background: color }} {...props} />;
}
