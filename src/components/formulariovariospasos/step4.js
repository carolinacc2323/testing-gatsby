import React from 'react'

const step4 = ({ formData, prevStep, submitForm }) => {
    return (
        <>
            <div>
                <h2>Step 4</h2>
                <h3>Revisión y confirmación de los datos</h3>
                <ul>
                    <li><strong>Data:</strong> {formData.data}</li>
                    <li><strong>Size:</strong> {formData.size}</li>
                    <li><strong>Color:</strong> {formData.color}</li>
                </ul>
                <button onClick={prevStep}>Back</button>
                <button onClick={submitForm}>Submit</button>
            </div>
        </>
    )
}

export default step4
