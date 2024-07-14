import {FadeLoader} from "react-spinners";

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