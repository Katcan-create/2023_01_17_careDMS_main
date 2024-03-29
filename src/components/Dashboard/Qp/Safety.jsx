import React, {useRef, useState} from 'react';

const Safety = () => {
    const [active, setActive] = useState('si')
    const notification = useRef();

    const activateMenu = (menu) => {
        setActive(menu)
    }

    const decActive = (menu) => {
        return menu === active ? 'border-b-2 border-slate-700 text-slate-700' : null
    }

    const closeNotification = () => {
        notification.current.parentNode.parentNode.remove()
    }

    const Si = () => {
        return (
            <div className='w-full py-5'>
                <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
                    <div className={'flex justify-between items-start'}>
                        <h1 className={'w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800'}>Guidance
                            for Serious Incidents</h1>
                        <span className={'text-2xl text-red-400 cursor-pointer hover:scale-150 duration-700'}
                              onClick={closeNotification} ref={notification}>&times;</span>
                    </div>
                    <p className={'text-sm text-left'}>Serious incidents are events in health care where the potential
                        for learning
                        is so great, or the consequences to patients, families and carers, staff or
                        organisations are so significant, that they warrant using additional resources
                        to mount a comprehensive response. Serious incidents can extend beyond incidents
                        which affect patients directly and include incidents which may indirectly impact
                        patient safety or an organisation’s ability to deliver ongoing healthcare. It is
                        expected that the providers will report, investigate and respond to Serious
                        Incidents in line with the NHSE Serious Incident Framework (2015) <a
                            className={'text-indigo-400'}
                            href="https://www.england.nhs.uk/patientsafety/wp-content/uploads/sites/32/2015/04/serious-incidnt-framwrk-upd2.pdf">(https://www.england.nhs.uk/patientsafety/wp-content/uploads/sites/32/2015/04/serious-incidnt-framwrk-upd2.pdf)</a>
                        <br/> <br/>
                        Please notify relevant Council via the email adresses provided below: <br/> Sample
                        investigation templates can be found in the Links section at the end of this
                        document. <br/> <br/> Reporting Requirements: <br/> 1. Dashboard reporting - Total number of SIs
                        in the reporting period, and percentage of total SIs notified to commissioners
                        within 2 working days. <br/> 2. Additional reporting - Exception reporting on any
                        areas on dashboard not meeting the set standard, and a quarterly report
                        detailing themes from the SIs, root causes and actions implemented to address
                        these will be required from the provider.</p>
                </div>

                <div className="w-full si__content py-5">
                    <form className={'w-full'}>
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="date" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Date
                                entry</label>
                            <input type="date" name="date" id="date"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="tnos" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Total
                                number of Sis</label>
                            <input type="number" name="tnos" id="tnos"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="spb" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Si
                                patient(s) borough(s)</label>
                            <select name="spb" id="spb"
                                    className="w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400">
                                <option value="Borough A">Borough A</option>
                                <option value="Borough B">Borough B</option>
                                <option value="Borough C">Borough C</option>
                                <option value="Borough D">Borough D</option>
                                <option value="Borough E">Borough E</option>
                            </select>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="nosntc" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number
                                of Sis notification to CCG within 2 days</label>
                            <input type="number" name="nosntc" id="nosntc"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="ntc" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>%
                                Notified to CCG/CCC team within 2 working days</label>
                            <input type="number" disabled name="ntc" id="ntc"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400 disabled:bg-gray-200'/>
                        </div>

                        <button type='submit'
                                className={'uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105'}>Save
                            record
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    const I = () => {
        return (
            <div className='w-full py-5'>
                <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
                    <div className={'flex justify-between items-start'}>
                        <h1 className={'w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800'}>Guidance
                            for Incidents</h1>
                        <span className={'text-2xl text-red-400 cursor-pointer hover:scale-150 duration-700'}
                              onClick={closeNotification} ref={notification}>&times;</span>
                    </div>
                    <p className={'text-sm text-left'}>An incident can be defined as an event or circumstance that could
                        have, or did result in unnecessary damage, loss or harm such as physical or mental injury to a
                        patient, staff, visitors or members of the public. This includes both clinical and
                        non-clinical. <br/>
                        Examples of Incidents are as follows: <br/>
                        Slips, Trips & Falls (not meeting SI criteria)/Pressure ulcers grade 1 & 2/VTE/Catheter related
                        UTIs/medication incidents/HCAI/adverse events relating to medical device or other
                        equipment <br/> <br/>

                        The NPSA defines levels of harm as: <br/>
                        No Harm: <br/>
                        Impact prevented – any patient safety incident that had the potential to cause harm but was
                        prevented, resulting in no harm to people receiving NHS-funded care. Impact not prevented – any
                        patient safety incident that ran to completion but no harm occurred to people receiving
                        NHSfunded care. <br/> <br/>

                        <b>- Low</b>: Any patient safety incident that required extra observation or minor treatment and
                        caused minimal harm, to one or more persons receiving NHS-funded care. <br/>
                        <b>- Moderate</b>: Any patient safety incident that resulted in a moderate increase in treatment
                        and which caused significant but not permanent harm, to one or more persons receiving NHS-funded
                        care. <br/>
                        <b>- Severe</b>: Any patient safety incident that appears to have resulted in permanent harm to
                        one or more persons receiving NHS-funded care. <br/>
                        <b>- Death</b>: Any patient safety incident that directly resulted in the death of one or more
                        persons receiving NHS-funded care. <br/> <br/>
                        Reporting Requirements: <br/>
                        1.Dashboard reporting - Provider is expected to assess the level of harm for all incidents under
                        the categories as above. All SIs are considered under severe harm, so this section of the
                        dashboard relates to reporting of number of incidents resulting in low and moderate harm. <br/>
                        2. Additional reporting - Quarterly report of all incidents categorised under the levels of harm
                        and thematic analysis of incidents including any action plans and lessons learned from the
                        incidents.</p>
                </div>

                <div className="w-full si__content py-5">
                    <form className={'w-full'}>
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="date" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Date
                                entry</label>
                            <input type="date" name="date" id="date"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="nosr" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number
                                of Low harm</label>
                            <input type="number" name="nosr" id="nosr"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="nomh" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number
                                of Moderate Harm</label>
                            <input type="number" name="nomh" id="nomh"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <button type='submit'
                                className={'uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105'}>Save
                            record
                        </button>

                    </form>
                </div>
            </div>
        )
    }

    const Sf = () => {
        return (
            <div className='w-full py-5'>
                <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
                    <div className={'flex justify-between items-start'}>
                        <h1 className={'w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800'}>Guidance for Safeguarding</h1>
                        <span className={'text-2xl text-red-400 cursor-pointer hover:scale-150 duration-700'}
                              onClick={closeNotification} ref={notification}>&times;</span>
                    </div>
                    <p className={'text-sm text-left'}>It is essential that the provider has systems and processes in place to safeguard children and vulnerable adults, and for managing safeguarding concerns when they are identified. This includes having up to date policies on Safeguarding and Mental Capacity Act, linked to the CCG and LA policies and procedures. The provider is expected to notify the commissioner of any safeguarding alerts/concerns raised relating to their service as they become aware of these. Providers are also expected to have a Safeguarding training plan that specifies the level of training required for their staff member. training are: <br/> <br/>
                        - Safeguarding Children Level 1: All staff working in healthcare settings - office based staff <br/>

                        - Safeguarding Children Level 2: All non-clinical and clinical staff who have any contact with children, young people and/or parents/carers &/or vulnerable adults. All clincial staff working with children should be trained to level 3 <br/>

                        - Safeguarding Children Level 3: All clinical staff working with vulnerable adults or children, young people and/or parents/carers and who could potentially contribute to safeguarding investigations where there are concerns. All clincial staff working with children should be trained to Level 3. <br/> <br/>

                        1. Dashboard reporting - Total number of safeguarding alerts or concerns raised relating to the service, and percentage of compliance against Levels 1, 2 and 3 Safeguarding Children Training, Safeguarding Adults Training, and Mental capacity Act/DOLs Training. <br/> <br/>

                        2. Additional reporting - Quarterly report with exception reporting on noncompliance with safeguarding children and adult training as well as details of PREVENT training. The report should also include details of safeguarding alerts under each category of abuse, themes emerging and actions in place to maintain patient safety. Details of any Deprivation of Liberty Safeguards (DOLS) applications should also be provided if applicable to the service. <br/> <br/>

                        3.Local Authroity Designated Officer(LADO) - see guidance allegations against staff . https://www.londoncp.co.uk/alleg_staff.html# - quarterly reporting required. Each borough will have a LADO and can be accessed through their childrens social care team</p>
                </div>

                <div className="w-full si__content py-5">
                    <form className={'w-full'}>
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="date" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Date
                                entry</label>
                            <input type="date" name="date" id="date"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="nosr" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number of Safeguarding referrals</label>
                            <input type="number" name="nosr" id="nosr" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="nolr" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number of LADO referrals</label>
                            <input type="number" name="nolr" id="nolr" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="nosc" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number of Safeguarding Concerns</label>
                            <input type="number" name="nosc" id="nosc" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="scltone" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Safeguarding Children Level 1 Training (% staff compliance)</label>
                            <input type="number" name="scltone" id="scltone" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="sclttwo" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Safeguarding Children Level 2 Training (% staff compliance)</label>
                            <input type="number" name="sclttwo" id="sclttwo" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="scltthree" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Safeguarding Children Level 3 Training (% staff compliance)</label>
                            <input type="number" name="scltthree" id="scltthree" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="ast" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Adult Safeguarding Training (% staff compliance) Level 1 awareness</label>
                            <input type="number" name="ast" id="ast" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="mcat" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Mental Capacity Act/DOLS Training (% staff compliance)</label>
                            <input type="number" name="mcat" id="mcat" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <button type='submit'
                                className={'uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105'}>Save
                            record
                        </button>

                    </form>
                </div>
            </div>
        )
    }
  
    const Pqc = () => {
        return (
            <div className='w-full py-5'>
                <div className="w-full notification bg-yellow-100 p-5 rounded shadow-lg">
                    <div className={'flex justify-between items-start'}>
                        <h1 className={'w-[40rem] font-bold text-slate-800 uppercase border-b-2 mb-4 border-slate-800'}>Guidance for Provider Quality</h1>
                        <span className={'text-2xl text-red-400 cursor-pointer hover:scale-150 duration-700'}
                              onClick={closeNotification} ref={notification}>&times;</span>
                    </div>
                    <p className={'text-sm text-left'}>There may be occasions when quality concerns are raised about a provider. Areas to be reported on within this section are any areas of concern that do not fit into the core quality indicators listed within the dashboard. This may be via the Make A Difference Alert process with the CCG, CQC findings, via other providers or commissioners, or alerts raised directly with the provider. <br /> <br/>
                        Slips, Trips & Falls (not meeting SI criteria)/Pressure ulcers grade 1 & 2/VTE/Catheter related UTIs/medication incidents/HCAI/adverse events relating to medical device or other equipment <br/> <br/>
                        Reporting Requirements: <br/>
                        1. Dashboard reporting - Total number of concerns raised about the provider broken down into Make a Difference quality alerts, and other concerns. <br/> <br/>

                        2. Additional reporting - Where concerns are indicated on the dashboard, this should be followed by a commentary on the nature of the concerns and actions to address them. A quarterly thematic analysis of themes to be provided as part of the quarterly quality reports.</p>
                </div>

                <div className="w-full si__content py-5">
                    <form className={'w-full'}>
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="date" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Date
                                entry</label>
                            <input type="date" name="date" id="date"
                                   className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>

                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="noqa" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Number of Quality Alerts/ Make A Difference alerts</label>
                            <input type="number" name="noqa" id="noqa" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'/>
                        </div>
                     
                        
                        <div className="group w-full flex flex-col md:flex-row items-start md:items-center mb-5 gap-1">
                            <label htmlFor="concerns" className='w-[26rem] font-bold uppercase text-sm text-gray-600'>Other concerns</label>
                            <textarea name="concerns" id="concerns" className='w-full ring-1 p-2 duration-500 outline-none px-3 text-sm ring-slate-500 focus:ring-indigo-400'></textarea>
                        </div>

                        <button type='submit'
                                className={'uppercase text-sm bg-indigo-300 p-2 my-4 float-right w-52 hover:text-white transition duration-500 font-bold hover:shadow-lg hover:scale-105'}>Save
                            record
                        </button>

                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='w-full' data-aos='flip-left' data-aos-duration='1000'>
                <div className="w-full">
                    <div className="menu flex justify-end gap-4 uppercase text-xs pt-5 text-gray-400">
                        <h1 onClick={() => activateMenu('si')}
                            className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive('si')}`}>Serious
                            Incidents</h1>
                        <h1 onClick={() => activateMenu('i')}
                            className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive('i')}`}>Incidents</h1>

                        <h1 onClick={() => activateMenu('sf')}
                            className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive('sf')}`}>Safeguarding</h1>

                        <h1 onClick={() => activateMenu('pqc')}
                            className={`cursor-pointer hover:text-slate-800 duration-700 ${decActive('pqc')}`}>Provider
                            Quality
                            Concerns</h1>
                    </div>

                    {/* Content */}
                    {active === 'si' ? <Si/> : null}
                    {active === 'i' ? <I/> : null}
                    {active === 'sf' ? <Sf/> : null}
                    {active === 'pqc' ? <Pqc/> : null}
                </div>
            </div>
        </>
    )
};

export default Safety;