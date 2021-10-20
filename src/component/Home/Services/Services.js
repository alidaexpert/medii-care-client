import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import "./Services.css"

// const data=[
//     {id:11,service:"Orthopadic",
//     thumb:"https://i.ibb.co/mbSr9tN/Electroacupuncture-dry-with-needle-connecting-machine-used-by-acupunturist-on-female-patient-for-acu.jpg",
//     description:`Orthopedic care often involves a team approach. Your team may include a doctor, a non-doctor specialist as well as others. Non-doctor specialists are professionals such as a physical therapist.
//     Orthopedic surgeons receive 5 or more extra years of training after school. They specialize in the care of disorders of the bones, muscles, tendons, and ligaments. They are trained to manage joint problems with both operative and non-operative techniques.
//     Physical medicine and rehabilitation doctors have 4 or more extra years of training after medical school. They specialize in this type of care. They are also referred to as physiatrists. They do not perform surgery, although they can give joint injections.
//     Sports medicine physicians are doctors with experience in sports medicine. They have a primary specialty in family practice, internal medicine, emergency medicine, pediatrics, or physical medicine and rehabilitation. Most have 1 to 2 years of additional training in sports medicine through subspecialty programs in sports medicine. Sports medicine is a special branch of orthopedics. They do not perform surgery, although they can give joint injections. They provide complete medical care to active people of all ages.
//     Other physicians that may be a part of the orthopedics team include:
//     Neurologists
//     Pain specialists
//     Primary care doctors
//     Psychiatrists
//     Sports medicine specialists`,

// },
// {
//     id:12,service:"General Surgery",
//     thumb:"https://i.ibb.co/km9Dhh0/surgery01.jpg",
//     description:`
//     A general surgeon has specialized knowledge and experience related to the diagnosis, preoperative, operative, and postoperative management, including the management of complications, in nine primary components of surgery, all of which are essential to the education of a broadly based surgeon:

// Alimentary tract
// Abdomen and its contents
// Breast, skin, and soft tissue
// Head and neck, including trauma, vascular, endocrine, congenital and oncologic disorders - particularly tumors of the skin, salivary glands, thyroid, parathyroid, and the oral cavity
// Vascular system, excluding the intracranial vessels and heart
// Endocrine system, including thyroid, parathyroid, adrenal, and endocrine pancreas
// Surgical oncology, including coordinated multimodality management of the cancer patient by screening, surveillance, surgical adjunctive therapy, rehabilitation, and follow-up
// Comprehensive management of trauma, including musculoskeletal, hand, and head injuries. The responsibility for all phases of care of the injured patient is an essential component of general surgery.
// Complete care of critically ill patients with underlying surgical conditions, in the emergency room, intensive care unit, and trauma/burn units`
// },
// {
//     id:13,service:"Dental Surgery",
//     thumb:"https://i.ibb.co/7vDXHHp/Beautiful-lady-in-the-dentist-s-office-Woman-in-a-uniform.jpg",
//     description:`Many times, when a dentist mentions dental surgery it is met with widespread panic and fear from their patients.  The idea is that dental surgery is a painful and expensive procedure.

//     However, what many patients don’t realize is that dental surgery is very common and includes procedures that address conditions that many people have and suffer from. Each patient is different and every case is treated accordingly. For the most part, dental surgery is considered an outpatient procedure and patients can generally resume normal activity within a few days.
    
//     Before deciding whether or not you are a candidate for dental surgery, dentists refer their patients to an oral surgeon. This is who will assess the situation and your oral health to determine the best course of action. In some cases, and depending on the severity of your condition, oral surgeons are able to recommend nonsurgical treatments. Adults and children are both at risk for oral health issues, although not all surgeries result from oral health conditions.
    
//     The most common types of dental surgery are procedures that many people may not consider dental surgery, because they are so routine – such as orthodonture work or teeth whitening.`
// },
// {
//     id:14,service:"Eye Operation",
//     thumb:"https://i.ibb.co/6yC3ZR0/eye.jpg",
//     description:`eye surgery is the best known and most commonly performed laser refractive surgery to correct vision problems. Laser-assisted in situ keratomileusis (LASIK) can be an alternative to glasses or contact lenses.

//     During LASIK surgery, a special type of cutting laser is used to precisely change the shape of the dome-shaped clear tissue at the front of your eye (cornea) to improve vision.
    
//     In eyes with normal vision, the cornea bends (refracts) light precisely onto the retina at the back of the eye. But with nearsightedness (myopia), farsightedness (hyperopia) or astigmatism, the light is bent incorrectly, resulting in blurred vision.
    
//     Glasses or contact lenses can correct vision, but reshaping the cornea itself also will provide the necessary refraction.`
// },
// {
//     id:15,service:"Neurology Treatment",
//     thumb:"https://i.ibb.co/N3DNqsH/test01.jpg",
//     description:`Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis (MS) and Parkinson's disease.

//     Dr. Nhu Bruce, neurologist at Houston Methodist, also commonly sees patients for:
    
//     Uncontrolled headaches
//     Memory loss
//     Imbalance
//     Numbness and pain`
// },
// {
//     id:16,service:"Blood Testing",
//     thumb:"https://i.ibb.co/FKgXV0Z/blood-test01.jpg",
//     description:`Regular blood testing is one of the most important ways to keep track of your overall physical well-being.

//     Getting tested at routine intervals can allow you to see the way your body changes over time and empower you to make informed decisions about your health.
//     Some of the most common routine tests are:

// complete blood count (CBC)
// chemistry (basic metabolic) panel
// thyroid panel
// nutrient tests for levels of vital nutrients, such as iron or B vitamins
// Some other tests that you may want include:

// enzyme markers if you’re at risk for cancer or other conditions like liver cirrhosis, stroke, or celiac disease
// sexually transmitted disease (STD) tests if you have multiple sexual partners or a new partner`
// },
// {
//     id:17,service:"City scan",
//     thumb:"https://i.ibb.co/HFGr2sf/test-checkup01.jpg",
//     description:`Computed tomography (CT) scan is a useful diagnostic tool for detecting diseases and injuries. It uses a series of X-rays and a computer to produce a 3D image of soft tissues and bones. CT is a painless, noninvasive way for your healthcare provider to diagnose conditions. You may have a CT scan at a hospital or imaging center.he results of the scan usually take 24 hours. A radiologist, a physician who specializes in reading and interpreting CT scan and other radiologic images, will review your scan and prepare a report that explains them. In an emergency setting, such as a hospital or emergency room, healthcare providers often receive results within an hour.

//     Once a radiologist and your healthcare provider have reviewed the results, you will either have another appointment or receive a call. Your healthcare provider will discuss the results with you.`
// },
// {
//     id:18,service:"Corona Testing",
//     thumb:"https://i.ibb.co/qWHhcxy/corona-test01.jpg",
//     description:`COVID-19 tests are available that can test for current infection or past infection.

//     A viral test tells you if you have a current infection. Two types of viral tests can be used: nucleic acid amplification tests (NAATs) and antigen tests.
//     An antibody test (also known as a serology test) might tell you if you had a past infection. Antibody tests should not be used to diagnose a current infection.
//     People who have symptoms of COVID-19.
// Most people who have had close contact (within 6 feet for a total of 15 minutes or more over a 24-hour period) with someone with confirmed COVID-19.
// Fully vaccinated people should be tested 3-5 days following a known exposure to someone with suspected or confirmed COVID-19 and wear a mask in public indoor settings for 14 days or until they receive a negative test result.
// People who have tested positive for COVID-19 within the past 3 months and recovered do not need to get tested following an exposure as long as they do not develop new symptoms.`
// },
// {
//     id:19,service:"Corona Vaccine",
//     thumb:"https://i.ibb.co/zsdLV0h/vaccine01.jpg",
//     description:`To bring this pandemic to an end, a large share of the world needs to be immune to the virus. The safest way to achieve this is with a vaccine. Vaccines are a technology that humanity has often relied on in the past to bring down the death toll of infectious diseases.

//     Within less than 12 months after the beginning of the COVID-19 pandemic, several research teams rose to the challenge and developed vaccines that protect from SARS-CoV-2, the virus that causes COVID-19.
    
//     Now the challenge is to make these vaccines available to people around the world. It will be key that people in all countries — not just in rich countries — receive the required protection. To track this effort we at Our World in Data are building the international COVID-19 vaccination dataset that we make available on this page. It is updated each morning, with the most recent official numbers up to the previous day.`
// }
// ]
// const data1=[
//     {id:1,name:"Charlote Sam",
//     proffession:"Eye Specialist",
//     pic:"https://i.ibb.co/RHkqw7G/Young-confident-lady-doctor-in-medical-gown-looking-camera-and-holding-hands-folded.jpg"},
//     {id:2,name:"Robert Downey",
// proffession:"Dental Specialist",
// pic:"https://i.ibb.co/JvSTw0L/Portrait-of-confident-male-doctor.jpg"},
// {id:3,name:"Margot Ruby",
// proffession:"Neuro Specialist",
// pic:"https://i.ibb.co/5M7g5CM/Attractive-female-doctor-standing-with-documents-at-the-hospital.jpg"},
// {id:4,name:"Emy Wilson",
// proffession:"Gastro-Entrology",
// pic:"https://i.ibb.co/q1VQJGy/doctor06.jpg"},
// {id:5,name:"Chris Hamesworth",
// proffession:"Surgeon",
// pic:"https://i.ibb.co/DCHfWNs/International-medical-student-Man-in-a-blue-uniform-Doctor-with-stethoscope.jpg"},
//     {id:6,name:"Eve Rechard",
// proffession:"Medicine Specialist",
// pic:"https://i.ibb.co/5rznJDv/Portrait-of-beautiful-young-female-doctor-looking-at-camera-in-the-office.jpg"}
// ]
const Services = () => {
  const {services}=useServices()
    return (
        <div className="container my-5 text-center">
           <small className="service">| Medical Services</small>
            <h3 className="px-5 py-2 mb-5">Preparing for your wellness, we provide <br /> trule prominent health care.</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service=><Service key={service.id} services={service}></Service>)
            }
           
            </Row>
        </div>
    );
};

export default Services;