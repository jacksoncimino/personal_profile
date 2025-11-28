import resume from '../../assets/Cimino_Resume_New.pdf';

function Resume() {
    return (
        <div style={{ width: "90%", height: "90%" }}>
            <iframe
                src={resume}
                title="Resume PDF"
                style={{ width: "100%", height: "100%", border: "none" }}
            />
        </div>
    );
}

export default Resume;