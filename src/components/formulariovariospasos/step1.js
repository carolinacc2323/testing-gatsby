import React from 'react'

const step1 = ({ formData, setFormData, nextStep }) => {
    return (
        <>
            <div>
                <h2>Step 1</h2>
                <h3>Introducción de los Datos</h3>
                <label>Data:</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                />
                <button onClick={nextStep}>Next</button>
            </div>
        </>
    )
}

export default step1
