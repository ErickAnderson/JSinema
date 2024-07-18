import PropTypes from "prop-types";
import {FadeLoader} from "react-spinners";

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
};

const override = {
    display: 'block',
    margin: '8rem auto',
};

function Spinner({loading}) {
    return (
        <FadeLoader
            color='#facc15'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    );
}

export default Spinner;