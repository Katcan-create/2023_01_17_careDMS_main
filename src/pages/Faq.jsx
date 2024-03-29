import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Faq = () => {
  return (
    <>
      <div
        className="w-full px-5 md:px-12"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="w-full pt-12">
          <h1 className="text-4xl font-bold">FAQs</h1>
          <h2 className="text-md md:text-lg text-green-500 font-bold mt-1">
            Frequently asked questions and answers
          </h2>

          <hr className="mt-5" />

          <div className="history mt-5 text-sm md:text-lg">
            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    Who is careDMS made for?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      Care Digital Management Solution careDMS is a software
                      application that has been designed by Cedoz limited
                      company. The application has been designed for: <br />-
                      Care agency Managers - Care agency staff - Care agency
                      clients.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    What does careDMS do?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      CareDMS is an end-to-end, standalone, software application
                      that has been designed to support the administration and
                      management of continuing healthcare (CHC) and social care
                      for adult and children at their home or place of residence
                      (domiciliary care). The software has been designed to take
                      out the laborious tasks and day to day activities care
                      agencies undergo, and replaces all the tasks with this
                      one-stop, go-to system.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    What are careDMS features?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      The application’s key features are as follows: <br />
                      • Remote access from anywhere. <br />
                      • Manage and track all care packages (from any
                      commissioning organisation) from one system. <br />
                      • Develop, track, and manage service users’ care plans,
                      records, and outcomes. <br />
                      • Scheduling assistance supports weekly planning between
                      service users and staff.
                      <br />
                      • Geo-location feature tracks staff visits to service
                      users, ensuring prompt arrival and duration of service
                      provision.
                      <br />• Real-time reporting following staff visits with
                      service users. <br />
                      • Load and manage rate cards and provide instant quotes
                      for care packages.
                      <br />
                      • Generate invoices for billing to appropriate
                      commissioners, etc.
                      <br />
                      • Collates performance and quality reporting for timely
                      submission to commissioners.
                      <br />
                      • Collates and stores all due diligence documentation for
                      easy access for bidding purposes.
                      <br />
                      • Develop and manage employees/staff records and monitor
                      their performance, availability for work and productivity
                      <br />
                      To give access to staff members, the registered user must
                      complete Cedoz’s
                      careDMS–Access-Request-and-authorisation-form.
                      <br />
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    Who else in the primary care has access to the system?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      At present Care Digital Management Solution is only being
                      utilized by care Agencies and their authorised users.{" "}
                      <br />
                      Care agency Managers, <br />
                      Care agency staff, <br />
                      Care agency clients. <br />
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    How does the system work?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      Care-digital Management system is an end-to-end software
                      application that has been designed to support the
                      administration and management of continuing healthcare
                      (CHC) and care services for adult and children at their
                      home/residence (domiciliary care). The system manages the
                      following information for care agencies: <br />
                      • Agency’s business documents
                      <br />
                      • Packages of care calculator for bidding purposes <br />
                      • Information on awarded/new care packages <br />
                      • Rota management
                      <br />
                      • Performance and quality monitoring of care packages
                      <br />
                      • Invoicing management
                      <br />
                      • Staff registration, monitoring, and performance
                      management
                      <br />
                      • Correspondence and miscellaneous information.
                      <br />
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    Can Care Digital Management Solution produce reports?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      Whatever your reporting needs are Care Digital Management
                      solution can provide. Whatever your requirement needs are
                      we can meet. Standard reports are already made available
                      on the BI menu. However, if you do not find the report you
                      need, get in touch with us via are email account
                      <a href="careDMS@cedozltd.com">
                        {" "}
                        careDMS@cedozltd.com
                      </a>{" "}
                      and we can discuss your reporting requirements with you.
                      Most of our clients use business objects to generate their
                      reports.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    Do I need to purchase a license to use the application?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      YES. <br />
                      Initial registration includes 2 free licenses. <br />
                      Additional licenses or to add users, the registered user
                      must complete Cedoz’s
                      careDMS–Access-Request-and-authorisation-form. Send email
                      request to careDMS@cedozltd.com to discuss your additional
                      licensing requirements.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    How do I gain access to the system?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      Our system is web based and is registered on the crown
                      commercial website on the link below: <br />
                      Care Digital Management Solution (careDMS) - Digital
                      Marketplace You can also email us on{" "}
                      <a href="mailto:careDMS@cedozltd.com">
                        {" "}
                        careDMS@cedozltd.com
                      </a>
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    What is the service scope?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">A standalone service</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    What is the cloud deployment model?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      {" "}
                      • Public cloud <br />
                      • Private cloud <br />
                      • Community cloud <br />
                      • Hybrid cloud <br />
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="shadow-md w-full mx-auto mt-4 my-5 rounded-lg">
              <div className="tab overflow-hidden bg-green-500 rounded-lg">
                <label>
                  <input type="checkbox" className="absolute opacity-0 peer" />
                  <p className="p-3 inline-block text-white cursor-pointer">
                    What is the User support?
                  </p>
                  <FiArrowLeftCircle
                    className="inline-block float-right mt-3 mr-10 peer-checked:rotate-90 cursor-pointer duration-500 text-white"
                    size={30}
                  />
                  <div className="bg-white rounded-b-lg max-h-0 peer-checked:max-h-screen">
                    <p className="p-5">
                      Email or online ticketing support? <br />
                      Yes, at extra cost
                      <br />
                      Support response times
                      <br />
                      Response times are categorised by service request
                      priority:
                      <br />
                      - Urgent: 1 hour;
                      <br />
                      - High: 4 hours;
                      <br />
                      - Medium: 8 hours;
                      <br />
                      - Low: 16 hours.
                      <br />
                      Response times at weekends, public and bank holidays are
                      negotiated separately.
                      <br />
                      <br />
                      Web chat support?
                      <br />
                      Yes, at no extra cost
                      <br />
                      Web chat support availability:
                      <br />
                      - 9 to 5 (UK time), Monday to Friday
                      <br />
                      Web chat support accessibility standard:
                      <br />
                      - WCAG 2.1 AA or EN 301 549 Web chat accessibility
                      testing:
                      <br />
                      - Not applicable Onsite support: <br />
                      Yes, at extra cost
                      <br />
                      <br />
                      Support levels? Response times are categorised by service
                      request priority (P):
                      <br />
                      Urgent - P1: 1 hour;
                      <br />
                      High - P2: 4 hours;
                      <br />
                      Medium - P3: 8 hours;
                      <br />
                      Low - P4: 16 hours.
                      <br />
                      <br />
                      P1 - Urgent: Complete loss of an entire service for all
                      users or severe degradation resulting in inability to
                      function;
                      <br />
                      P2 - High: Improper service functionality, resulting in
                      some loss of service/system or access failure from a
                      number of users;
                      <br />
                      P3 - Medium: Service is functioning at less than optimal
                      performance/system level, with the problem impacting but
                      not removing service;
                      <br />
                      P4 - Low: Change requests.
                      <br /> <br />
                      Support services are tailored to each client and charges
                      reflect the level of service required to support the
                      service. Standard hourly rate is £105. A discounted rate
                      of £95 can be negotiated in advance.
                      <br /> <br />
                      Care-dss is provided with a Technical Account Manager
                      backed up by a WebOps Team. Support can be accessed via an
                      online ticketing system or email. Enhanced support
                      (outside office hours and at peak service use) is
                      available optionally. Monitoring systems and alerts will
                      be implemented with regular reports provided on service
                      performance and support used. <br />
                      <br />
                      <b>Support available to third parties</b> <br />
                      Yes <br />
                      <br />
                      <b>Onboarding and offboarding</b> <br />
                      Getting started <br />
                      To support customers using careDMS, we offer tailored
                      training programme which is delivered online. We provide
                      video tutorials on how to use the application. Q&A
                      document is readily available on the application.
                      <br />
                      <br />
                      Training documentation is provided and tailored to reflect
                      the customers unique set-up with initial telephone support
                      made available to those who attended training. <br />
                      <br />
                      <b>Service documentation</b> <br />
                      Yes
                      <br />
                      <br />
                      <b>Documentation formats</b> <br />
                      • HTML
                      <br />
                      • PDF
                      <br />
                      <br />
                      <b>End-of-contract data extraction</b> <br />
                      Data is extracted by creating a support request via
                      CareDMS ticketing service or by making a request for
                      end-of-contract data extraction via the customer's Account
                      Manager.
                      <br />
                      <br />
                      <b>End-of-contract process</b> <br />
                      Depending on the nature of the decommissioning of
                      services, there may be an additional cost for the actions
                      required or for the supply of any code where that has been
                      agreed in advance. <br /> <br />
                      Using the service <br />
                      Web browser interface <br />
                      - Yes <br /> <br />
                      <b>Supported browsers</b> <br />
                      • Internet Explorer 7<br />
                      • Internet Explorer 8<br />
                      • Internet Explorer 9<br />
                      • Internet Explorer 10
                      <br />
                      • Internet Explorer 11
                      <br />
                      • Microsoft Edge
                      <br />
                      • Firefox
                      <br />
                      • Chrome
                      <br />
                      • Safari 9+
                      <br />
                      • Opera
                      <br />
                      <br />
                      <b>Application to install</b> <br />
                      - Yes
                      <br />
                      <br />
                      <b>Compatible operating systems</b> <br />
                      • Android
                      <br />
                      • IOS
                      <br />
                      • Linux or Unix
                      <br />
                      • MacOS
                      <br />
                      • Windows
                      <br />
                      • Windows Phone
                      <br />
                      <br />
                      <b>Designed for use on mobile devices</b> <br />
                      - Yes <br />
                      <br />
                      <b>
                        Differences between the mobile and desktop service
                      </b>{" "}
                      <br />
                      Service is web based and accessible through any browser.
                      <br />
                      <br />
                      Service interface
                      <br />
                      - Yes
                      <br />
                      <br />
                      Description of service interface
                      <br />
                      The service will interface with any local authority adult
                      care service, such as Mosaic, Liquid Logic, etc.
                      Accessibility standards
                      <br />
                      - WCAG 2.1 AA or EN 301 549
                      <br />
                      <br />
                      Accessibility testing
                      <br />
                      Manual and automated interface accessibility testing has
                      been undertaken.
                      <br />
                      <br />
                      API
                      <br />
                      - No
                      <br />
                      <br />
                      Customisation available
                      <br />
                      - Yes
                      <br />
                      <br />
                      Description of customisation
                      <br />
                      Service will be customised to suit buyers, who would
                      mainly be local authorities. This will be customised in
                      line with the way they use Mosaic and or other adult care
                      system.
                      <br />
                      <br />
                      Scaling
                      <br />
                      Independence of resources
                      <br />
                      Our cloud based service uses load balancing and
                      autoscaling to provide resilience across multiple data
                      centres. The service monitors the load and automatically
                      adjusts capacity to maintain steady, predictable
                      performance according to configured levels.
                      <br />
                      <br />
                      Analytics
                      <br />
                      Service usage metrics
                      <br />
                      - Yes
                      <br />
                      <br />
                      Metrics types
                      <br />
                      Standard reports are provided to Buyers, and tailored to
                      their specifications.
                      <br />
                      Reporting types
                      <br />
                      • Real-time dashboards
                      <br />
                      • Regular reports
                      <br />
                      • Reports on request
                      <br />
                      <br />
                      Data importing and exporting
                      <br />
                      Data export approach
                      <br />
                      - JSON
                      <br />
                      - CSV
                      <br />
                      <br />
                      Data export formats
                      <br />
                      • CSV
                      <br />
                      • ODF
                      <br />
                      <br />
                      Data import formats
                      <br />
                      • CSV
                      <br />
                      • ODF
                      <br />
                      <br />
                      Data-in-transit protection
                      <br />
                      Data protection between buyer and supplier networks
                      <br />
                      • Private network or public sector network
                      <br />
                      • TLS (version 1.2 or above)
                      <br />
                      <br />
                      Data protection within supplier network
                      <br />
                      • TLS (version 1.2 or above)
                      <br />
                      • IPsec or TLS VPN gateway
                      <br />
                      <br />
                      Availability and resilience
                      <br />
                      Guaranteed availability
                      <br />
                      - Service is cloud based.
                      <br />
                      - Service level is 99.9% availability
                      <br />
                      <br />
                      Approach to resilience
                      <br />
                      Our cloud provider uses load balancing and autoscaling to
                      provide resilience across multiple data centres. The
                      service monitors the load and automatically adjusts
                      capacity to maintain steady, predictable performance
                      according to configured levels.
                      <br />
                      <br />
                      Outage reporting
                      <br />
                      Email alerts are sent to the client's single point of
                      contact and to any other designated personnel.
                      <br />
                      <br />
                      Identity and authentication
                      <br />
                      User authentication needed
                      <br />
                      - Yes
                      <br />
                      <br />
                      User authentication
                      <br />
                      • 2-factor authentication
                      <br />
                      • Public key authentication (including by TLS client
                      certificate)
                      <br />
                      • Username or password
                      <br />
                      <br />
                      Access restrictions in management interfaces and support
                      channels
                      <br />
                      - Privileged access
                      <br />
                      Access restriction testing frequency
                      <br />
                      - At least every 6 months
                      <br />
                      Management access authentication
                      <br />
                      • 2-factor authentication
                      <br />
                      • Username or password
                      <br />
                      <br />
                      Audit information for users
                      <br />
                      Access to user activity audit information
                      <br />
                      <br />
                      Users contact the support team to get audit information
                      <br />
                      How long user audit data is stored for
                      <br />
                      - At least 12 months
                      <br />
                      <br />
                      Access to supplier activity audit information
                      <br />
                      - Users contact the support team to get audit information
                      <br />
                      <br />
                      How long supplier audit data is stored for
                      <br />
                      - At least 12 months
                      <br />
                      <br />
                      How long system logs are stored for
                      <br />
                      - At least 12 months
                      <br />
                      <br />
                      Standards and certifications
                      <br />
                      ISO/IEC 27001 certification
                      <br />
                      - Yes
                      <br />
                      <br />
                      Who accredited the ISO/IEC 27001
                      <br />
                      Cyber Essentials and IASME Governance Assessor
                      certifications. ISO/IEC 27001 accreditation date:
                      <br />
                      - 01/02/2020 <br />
                      What the ISO/IEC 27001 doesn’t cover
                      <br />
                      We hold Cyber Essentials and IASME Governance Assessor
                      certifications. ISO 28000:2007 certification
                      <br />
                      - No
                      <br />
                      <br />
                      CSA STAR certification
                      <br />
                      - No
                      <br />
                      <br />
                      PCI certification
                      <br />
                      - No
                      <br />
                      <br />
                      Other security certifications
                      <br />
                      - Yes
                      <br />
                      <br />
                      Any other security certifications
                      <br />
                      - Certified Cyber Essentials Assessor - Feb 2020
                      <br />
                      <br />
                      Security governance
                      <br />
                      Named board-level person responsible for service security
                      <br />
                      - Yes
                      <br />
                      <br />
                      Security governance certified
                      <br />
                      - Yes
                      <br />
                      <br />
                      Security governance standards
                      <br />
                      • CSA CCM version 3.0
                      <br />
                      • ISO/IEC 27001
                      <br />
                      • Other
                      <br />
                      Other security governance standards
                      <br />
                      - IASME Governance
                      <br />
                      Information security policies and processes
                      <br />
                      Defined in ISO 27001 REC A0 Statement of Applicability and
                      DOC A5 - Information Security Policy. Details available on
                      request
                      <br />
                      <br />
                      Operational security
                      <br />
                      <br />
                      Configuration and change management standard
                      <br />
                      - Supplier-defined controls
                      <br />
                      <br />
                      Configuration and change management approach
                      <br />
                      - Defined in our ISO 27001 DOC A12 Operations Security
                      document. Details available on request,
                      <br />
                      Vulnerability management type
                      <br />
                      - Supplier-defined controls
                      <br />
                      <br />
                      Vulnerability management approach
                      <br />
                      Defined in ISO 27001 DOC A16 Information Security Incident
                      Management. Details available on request
                      <br />
                      Protective monitoring type
                      <br />
                      - Supplier-defined controls
                      <br />
                      <br />
                      Protective monitoring approach
                      <br />
                      Defined in ISO 27001 DOC A16 Information Security Incident
                      Management. Details available on request Incident
                      management type
                      <br />
                      - Supplier-defined controls <br />
                      <br />
                      Incident management approach
                      <br />
                      Defined in ISO 27001 DOC A16 Information Security Incident
                      Management. Details available on request
                      <br />
                      <br />
                      Secure development
                      <br />
                      Approach to secure software development best practice
                      <br />
                      - Conforms to a recognised standard, but self-assessed
                      <br />
                      <br />
                      Public sector networks
                      <br />
                      Connection to public sector networks
                      <br />
                      - No
                      <br />
                      <br />
                      Pricing
                      <br />
                      Price
                      <br />- Request via email on{" "}
                      <a href="mailto:careDMS@cedozltd.com">
                        {" "}
                        careDMS@cedozltd.com
                      </a>{" "}
                      <br />
                      <br />
                      Discount for educational organisations
                      <br />
                      - No Free trial available
                      <br />- No
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
