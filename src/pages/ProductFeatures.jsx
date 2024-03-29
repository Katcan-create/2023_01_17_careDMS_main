import React from 'react'

const ProductFeatures = () => {
  return (
    <>
    <div className="w-full px-5 md:px-12" data-aos='fade-in' data-aos-duration='2000'>
        <div className="w-full pt-12">
            <h1 className='text-4xl font-bold'>Product Features</h1>
            <h2 className='text-md md:text-lg text-green-500 font-bold mt-1'>Care Digital Management Solution Key Features</h2>

            <hr className='mt-5' />
            
            <div className="history mt-5 text-sm md:text-lg">
                <p className='mt-2 md:mt-0 bg-green-200 text-green-700 p-2 rounded-lg'>1. Develop, track, and manage service users’ care packages, care plans, risk assessment records, and track outcomes.</p>

                <p className='mt-5 bg-green-200 text-green-700 p-2 rounded-lg'>2. Scheduling assistance (Rota) supports visits planning between service users and staff, while the geo-location feature tracks staff visits to service users, ensuring prompt arrival and duration of the planned visit. </p>
               
                <p className='mt-5 bg-green-200 text-green-700 p-2 rounded-lg'>3. Real-time reporting following staff visits with service users, and collate performance and quality report for timely submission to commissioners.</p>
                
                <p className='mt-5 bg-green-200 text-green-700 p-2 rounded-lg'>4. Load and manage rate cards and provide instant quotes for care packages. Generate invoices for billing to appropriate funders or commissioners, etc.</p>
               
                <p className='mt-5 bg-green-200 text-green-700 p-2 rounded-lg'>5. Develop, track and manage employees/staff records, monitor availability for work, training requirements, etc, and improve productivity.</p>
            </div>
        </div>
    </div>
</>
  )
}

export default ProductFeatures