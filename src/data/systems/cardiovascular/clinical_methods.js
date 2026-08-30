export const clinicalMethodsCardiovascular = {

  id: "clinicalMethodsCardiovascular",

  name: "🩺 Clinical Methods",

  modelPath: "models/cardiovascular/",

  modelFile: "clinical_methods.glb",

  parts: [

    // ============================================================
    // 1. INTRODUCTION
    // ============================================================

    {
      id: "cv-clinical-overview",
      name: "Introduction to Cardiovascular Clinical Assessment",

      notes: {
        anatomy: `

          <h2>Introduction to Cardiovascular Clinical Assessment</h2>

          <h3>Overview</h3>

          <p>
            Cardiovascular clinical assessment is a systematic process used to
            identify symptoms and signs of cardiovascular disease, determine the
            anatomical and physiological system involved, assess disease severity,
            identify complications and formulate an appropriate differential
            diagnosis.
          </p>

          <p>
            A complete cardiovascular assessment consists of:
          </p>

          <ol>
            <li>Patient identification and preparation</li>
            <li>History taking</li>
            <li>General physical examination</li>
            <li>Peripheral vascular examination</li>
            <li>Precordial examination</li>
            <li>Pulse examination</li>
            <li>Blood pressure assessment</li>
            <li>Jugular venous pressure assessment</li>
            <li>Cardiac auscultation</li>
            <li>Relevant systemic examination</li>
            <li>Cardiovascular investigations</li>
            <li>Clinical interpretation and confirmation</li>
          </ol>

          <h3>Classical Examination Sequence</h3>

          <p>
            The cardiovascular examination is generally organized as:
          </p>

          <p>
            <strong>
              General inspection → Hands → Pulse → Blood pressure →
              Face → Neck → Precordium → Peripheral oedema →
              Auscultation → Relevant systemic examination
            </strong>
          </p>

          <h3>Main Objectives</h3>

          <ul>
            <li>Identify cardiovascular symptoms.</li>
            <li>Determine the anatomical system involved.</li>
            <li>Assess cardiac function.</li>
            <li>Assess systemic perfusion.</li>
            <li>Detect heart failure.</li>
            <li>Detect valvular disease.</li>
            <li>Detect arrhythmias.</li>
            <li>Identify vascular disease.</li>
            <li>Identify cardiovascular risk factors.</li>
            <li>Assess severity and complications.</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 2. HISTORY
    // ============================================================

    {
      id: "cv-history",
      name: "Cardiovascular History",

      notes: {
        anatomy: `

          <h2>Cardiovascular History Taking</h2>

          <h3>1. Patient Identification</h3>

          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>Sex</li>
            <li>Occupation</li>
            <li>Residence</li>
            <li>Source of history</li>
            <li>Reliability of the informant</li>
          </ul>

          <h3>2. Chief Complaints</h3>

          <p>
            Record the patient's major complaints in their own words where
            possible and document the duration.
          </p>

          <ul>
            <li>Chest pain</li>
            <li>Shortness of breath</li>
            <li>Palpitations</li>
            <li>Syncope</li>
            <li>Presyncope</li>
            <li>Fatigue</li>
            <li>Reduced exercise tolerance</li>
            <li>Leg swelling</li>
            <li>Claudication</li>
            <li>Cyanosis</li>
          </ul>

          <h3>3. History of Presenting Illness</h3>

          <p>
            Establish the chronology of the illness from the first symptom
            to the current presentation.
          </p>

          <ul>
            <li>Onset</li>
            <li>Duration</li>
            <li>Progression</li>
            <li>Severity</li>
            <li>Frequency</li>
            <li>Precipitating factors</li>
            <li>Relieving factors</li>
            <li>Associated symptoms</li>
            <li>Previous similar episodes</li>
            <li>Previous treatment</li>
            <li>Response to treatment</li>
          </ul>

          <h3>Important Questions</h3>

          <p>
            Determine whether the symptoms are acute, subacute, chronic,
            intermittent, progressive or recurrent.
          </p>

        `
      }
    },


    // ============================================================
    // 3. CHEST PAIN
    // ============================================================

    {
      id: "cv-chest-pain",
      name: "Chest Pain Assessment",

      notes: {
        anatomy: `

          <h2>Cardiovascular Assessment of Chest Pain</h2>

          <p>
            Chest pain is a major cardiovascular complaint. The history should
            determine whether the pain is likely cardiac, pulmonary,
            gastrointestinal, musculoskeletal or another cause.
          </p>

          <h3>STEP-BY-STEP CHARACTERIZATION</h3>

          <ol>
            <li>Determine the exact site.</li>
            <li>Determine onset.</li>
            <li>Determine whether onset was sudden or gradual.</li>
            <li>Determine the character of pain.</li>
            <li>Determine severity.</li>
            <li>Determine duration of each episode.</li>
            <li>Determine radiation.</li>
            <li>Determine precipitating factors.</li>
            <li>Determine relieving factors.</li>
            <li>Ask about associated symptoms.</li>
          </ol>

          <h3>Character</h3>

          <ul>
            <li>Pressure</li>
            <li>Heaviness</li>
            <li>Tightness</li>
            <li>Burning</li>
            <li>Sharp pain</li>
            <li>Stabbing pain</li>
            <li>Tearing pain</li>
          </ul>

          <h3>Radiation</h3>

          <ul>
            <li>Left arm</li>
            <li>Both arms</li>
            <li>Shoulders</li>
            <li>Neck</li>
            <li>Jaw</li>
            <li>Back</li>
          </ul>

          <h3>Associated Symptoms</h3>

          <ul>
            <li>Dyspnoea</li>
            <li>Diaphoresis</li>
            <li>Nausea</li>
            <li>Vomiting</li>
            <li>Palpitations</li>
            <li>Syncope</li>
            <li>Weakness</li>
          </ul>

          <h3>Clinical Confirmation</h3>

          <p>
            Suspected acute coronary syndrome requires urgent clinical
            assessment and objective confirmation with appropriate investigations,
            particularly electrocardiography and cardiac biomarkers.
          </p>

        `
      }
    },


    // ============================================================
    // 4. DYSPNOEA
    // ============================================================

    {
      id: "cv-dyspnoea",
      name: "Cardiac Dyspnoea Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Dyspnoea</h2>

          <h3>History</h3>

          <p>Determine:</p>

          <ul>
            <li>Onset</li>
            <li>Duration</li>
            <li>Progression</li>
            <li>Exertional limitation</li>
            <li>Dyspnoea at rest</li>
            <li>Orthopnoea</li>
            <li>Paroxysmal nocturnal dyspnoea</li>
            <li>Nocturnal cough</li>
          </ul>

          <h3>Functional Assessment</h3>

          <p>
            Determine how symptoms affect ordinary activities.
          </p>

          <ul>
            <li>Walking</li>
            <li>Climbing stairs</li>
            <li>Bathing</li>
            <li>Dressing</li>
            <li>Household activities</li>
            <li>Work-related activities</li>
          </ul>

          <h3>Associated Features</h3>

          <ul>
            <li>Peripheral oedema</li>
            <li>Fatigue</li>
            <li>Palpitations</li>
            <li>Chest pain</li>
            <li>Weight gain</li>
            <li>Reduced exercise tolerance</li>
          </ul>

          <h3>Clinical Correlation</h3>

          <p>
            Orthopnoea, paroxysmal nocturnal dyspnoea, peripheral oedema,
            elevated JVP and pulmonary crackles may support a diagnosis of
            heart failure, but findings should be interpreted collectively.
          </p>

        `
      }
    },


    // ============================================================
    // 5. PALPITATIONS
    // ============================================================

    {
      id: "cv-palpitations",
      name: "Palpitations and Arrhythmia History",

      notes: {
        anatomy: `

          <h2>Assessment of Palpitations</h2>

          <p>
            Palpitations are an awareness of the heartbeat and may result from
            sinus rhythm, arrhythmia, increased cardiac output, anxiety,
            medications or metabolic disturbances.
          </p>

          <h3>STEP-BY-STEP HISTORY</h3>

          <ol>
            <li>Determine when the palpitations started.</li>
            <li>Determine whether onset was sudden or gradual.</li>
            <li>Determine whether termination was sudden or gradual.</li>
            <li>Ask how the heartbeat feels.</li>
            <li>Ask whether the rhythm feels regular or irregular.</li>
            <li>Determine duration of episodes.</li>
            <li>Determine frequency.</li>
            <li>Identify precipitating factors.</li>
            <li>Ask about caffeine, alcohol and stimulant exposure.</li>
            <li>Ask about associated symptoms.</li>
          </ol>

          <h3>Associated Symptoms</h3>

          <ul>
            <li>Syncope</li>
            <li>Presyncope</li>
            <li>Chest pain</li>
            <li>Dyspnoea</li>
            <li>Dizziness</li>
            <li>Weakness</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Arrhythmia requires rhythm documentation. Depending on frequency
            and clinical circumstances, confirmation may involve a 12-lead ECG,
            telemetry, Holter monitoring or an event recorder.
          </p>

        `
      }
    },


    // ============================================================
    // 6. SYNCOPE
    // ============================================================

    {
      id: "cv-syncope",
      name: "Syncope and Presyncope",

      notes: {
        anatomy: `

          <h2>Syncope Assessment</h2>

          <p>
            Syncope is a transient loss of consciousness caused by transient
            global cerebral hypoperfusion, with spontaneous recovery.
          </p>

          <h3>STEP-BY-STEP HISTORY</h3>

          <ol>
            <li>Determine the circumstances before the event.</li>
            <li>Determine posture at the time of the event.</li>
            <li>Ask about preceding symptoms.</li>
            <li>Determine whether there was sudden loss of consciousness.</li>
            <li>Determine duration of unconsciousness.</li>
            <li>Ask witnesses about movements or abnormal behavior.</li>
            <li>Ask about injury.</li>
            <li>Determine how rapidly consciousness returned.</li>
            <li>Ask about confusion after the event.</li>
            <li>Determine whether there were previous episodes.</li>
          </ol>

          <h3>Important Associated Features</h3>

          <ul>
            <li>Palpitations</li>
            <li>Chest pain</li>
            <li>Exertional occurrence</li>
            <li>Family history of sudden cardiac death</li>
            <li>Known structural heart disease</li>
            <li>Medication use</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Evaluation may include ECG, orthostatic blood pressure assessment,
            cardiac monitoring and echocardiography when indicated. Further
            investigation depends on the clinical risk profile.
          </p>

        `
      }
    },


    // ============================================================
    // 7. PAST HISTORY
    // ============================================================

    {
      id: "cv-past-history",
      name: "Past Medical and Cardiovascular History",

      notes: {
        anatomy: `

          <h2>Past Cardiovascular History</h2>

          <h3>Ask About</h3>

          <ul>
            <li>Hypertension</li>
            <li>Diabetes mellitus</li>
            <li>Dyslipidaemia</li>
            <li>Coronary artery disease</li>
            <li>Myocardial infarction</li>
            <li>Heart failure</li>
            <li>Valvular heart disease</li>
            <li>Rheumatic heart disease</li>
            <li>Arrhythmias</li>
            <li>Cardiomyopathy</li>
            <li>Congenital heart disease</li>
            <li>Peripheral arterial disease</li>
            <li>Stroke or TIA</li>
            <li>Previous thromboembolism</li>
          </ul>

          <h3>Previous Procedures</h3>

          <ul>
            <li>Coronary angiography</li>
            <li>PCI</li>
            <li>Coronary artery bypass surgery</li>
            <li>Valve surgery</li>
            <li>Pacemaker insertion</li>
            <li>Implantable cardiac defibrillator</li>
          </ul>

          <h3>Previous Admissions</h3>

          <p>
            Determine previous cardiovascular admissions, intensive care
            admissions and previous episodes of decompensation.
          </p>

        `
      }
    },


    // ============================================================
    // 8. DRUGS AND ALLERGIES
    // ============================================================

    {
      id: "cv-drug-history",
      name: "Drug and Allergy History",

      notes: {
        anatomy: `

          <h2>Cardiovascular Drug History</h2>

          <h3>Ask About</h3>

          <ul>
            <li>Antihypertensive drugs</li>
            <li>Diuretics</li>
            <li>Beta blockers</li>
            <li>ACE inhibitors</li>
            <li>ARBs</li>
            <li>Calcium-channel blockers</li>
            <li>Nitrates</li>
            <li>Antiplatelet drugs</li>
            <li>Anticoagulants</li>
            <li>Statins</li>
            <li>Antiarrhythmic drugs</li>
            <li>Digoxin</li>
          </ul>

          <h3>Assess</h3>

          <ul>
            <li>Drug name</li>
            <li>Dose</li>
            <li>Frequency</li>
            <li>Duration</li>
            <li>Adherence</li>
            <li>Recent changes</li>
            <li>Adverse effects</li>
          </ul>

          <h3>Allergies</h3>

          <p>
            Establish the allergen, nature of the reaction and severity of
            previous reactions.
          </p>

        `
      }
    },


    // ============================================================
    // 9. FAMILY AND SOCIAL HISTORY
    // ============================================================

    {
      id: "cv-family-social-history",
      name: "Family, Social and Risk-Factor History",

      notes: {
        anatomy: `

          <h2>Family and Social History</h2>

          <h3>Family History</h3>

          <ul>
            <li>Premature coronary artery disease</li>
            <li>Sudden cardiac death</li>
            <li>Hypertension</li>
            <li>Diabetes</li>
            <li>Dyslipidaemia</li>
            <li>Cardiomyopathy</li>
            <li>Congenital heart disease</li>
            <li>Arrhythmias</li>
          </ul>

          <h3>Smoking</h3>

          <p>
            Determine current, former or never-smoking status and quantify
            tobacco exposure where relevant.
          </p>

          <h3>Alcohol</h3>

          <p>
            Determine quantity, frequency and duration of alcohol use because
            excessive alcohol exposure may contribute to cardiovascular disease.
          </p>

          <h3>Diet</h3>

          <ul>
            <li>Salt intake</li>
            <li>Fat intake</li>
            <li>Processed foods</li>
            <li>Fruit and vegetable intake</li>
            <li>Overall dietary pattern</li>
          </ul>

          <h3>Physical Activity</h3>

          <p>
            Determine frequency, intensity and duration of physical activity.
          </p>

          <h3>Other Risk Factors</h3>

          <ul>
            <li>Obesity</li>
            <li>Physical inactivity</li>
            <li>Diabetes</li>
            <li>Hypertension</li>
            <li>Dyslipidaemia</li>
            <li>Smoking</li>
            <li>Family history</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 10. GENERAL EXAMINATION
    // ============================================================

    {
      id: "cv-general-examination",
      name: "General Cardiovascular Examination",

      notes: {
        anatomy: `

          <h2>General Cardiovascular Examination</h2>

          <h3>Preparation</h3>

          <ol>
            <li>Wash or sanitize your hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain.</li>
            <li>Position the patient appropriately.</li>
            <li>Expose the patient adequately while preserving dignity.</li>
          </ol>

          <h3>General Appearance</h3>

          <ul>
            <li>Level of consciousness</li>
            <li>Respiratory distress</li>
            <li>Body habitus</li>
            <li>Nutritional status</li>
            <li>Peripheral perfusion</li>
            <li>Cyanosis</li>
            <li>Pallor</li>
            <li>Oedema</li>
          </ul>

          <h3>Vital Signs</h3>

          <ul>
            <li>Pulse rate</li>
            <li>Pulse rhythm</li>
            <li>Blood pressure</li>
            <li>Respiratory rate</li>
            <li>Temperature</li>
            <li>Oxygen saturation where indicated</li>
          </ul>

          <h3>Signs Suggesting Cardiovascular Disease</h3>

          <ul>
            <li>Cyanosis</li>
            <li>Pallor</li>
            <li>Peripheral oedema</li>
            <li>Clubbing</li>
            <li>Cachexia</li>
            <li>Dyspnoea</li>
            <li>Raised JVP</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 11. HANDS AND PERIPHERAL SIGNS
    // ============================================================

    {
      id: "cv-hands",
      name: "Hands and Peripheral Signs",

      notes: {
        anatomy: `

          <h2>Examination of the Hands</h2>

          <p>
            Inspect the hands for peripheral manifestations of cardiovascular
            disease and systemic conditions associated with heart disease.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect the dorsum of both hands.</li>
            <li>Inspect the palms.</li>
            <li>Inspect the nails.</li>
            <li>Assess temperature.</li>
            <li>Assess capillary refill.</li>
            <li>Assess for peripheral cyanosis.</li>
            <li>Assess for clubbing.</li>
            <li>Assess for peripheral signs of infective endocarditis.</li>
          </ol>

          <h3>Look For</h3>

          <ul>
            <li>Peripheral cyanosis</li>
            <li>Clubbing</li>
            <li>Splinter haemorrhages</li>
            <li>Osler nodes</li>
            <li>Janeway lesions</li>
            <li>Nicotine staining</li>
            <li>Palmar erythema</li>
            <li>Tremor</li>
          </ul>

          <h3>Capillary Refill</h3>

          <ol>
            <li>Apply pressure to a nail bed until it blanches.</li>
            <li>Release pressure.</li>
            <li>Observe return of normal colour.</li>
            <li>Interpret together with the overall perfusion status.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 12. PULSE
    // ============================================================

    {
      id: "cv-pulse",
      name: "Arterial Pulse Examination",

      notes: {
        anatomy: `

          <h2>Arterial Pulse Examination</h2>

          <h3>Assess</h3>

          <ul>
            <li>Rate</li>
            <li>Rhythm</li>
            <li>Character</li>
            <li>Volume</li>
            <li>Radio-radial delay</li>
            <li>Radio-femoral delay</li>
            <li>Symmetry</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient's arm comfortably.</li>
            <li>Locate the radial pulse using the finger pads.</li>
            <li>Assess the rate.</li>
            <li>Assess the rhythm.</li>
            <li>Assess pulse volume.</li>
            <li>Compare both radial pulses.</li>
            <li>Assess other pulses when clinically indicated.</li>
          </ol>

          <h3>Pulse Rhythm</h3>

          <p>
            Determine whether the rhythm is regular, regularly irregular or
            irregularly irregular.
          </p>

          <h3>Pulse Character</h3>

          <p>Important pulse characters include:</p>

          <ul>
            <li>Slow-rising pulse</li>
            <li>Collapsing pulse</li>
            <li>Bounding pulse</li>
            <li>Low-volume pulse</li>
            <li>Pulsus alternans</li>
            <li>Pulsus paradoxus</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            An abnormal pulse rhythm should be confirmed with cardiac
            auscultation and, where appropriate, ECG.
          </p>

        `
      }
    },


    // ============================================================
    // 13. BLOOD PRESSURE
    // ============================================================

    {
      id: "cv-blood-pressure",
      name: "Blood Pressure Measurement",

      notes: {
        anatomy: `

          <h2>Blood Pressure Measurement</h2>

          <h3>Preparation</h3>

          <ol>
            <li>Allow the patient to rest before measurement where appropriate.</li>
            <li>Position the patient comfortably.</li>
            <li>Support the arm at approximately heart level.</li>
            <li>Select an appropriately sized cuff.</li>
            <li>Place the cuff correctly on the upper arm.</li>
          </ol>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the cuff correctly.</li>
            <li>Locate the brachial artery.</li>
            <li>Place the stethoscope over the brachial artery when using the
                auscultatory method.</li>
            <li>Inflate the cuff appropriately.</li>
            <li>Deflate at an appropriate controlled rate.</li>
            <li>Identify systolic pressure.</li>
            <li>Identify diastolic pressure.</li>
            <li>Record the reading.</li>
            <li>Record the arm used and patient position where relevant.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Unexpectedly high or low readings should be reassessed using correct
            technique. Diagnosis of hypertension generally requires appropriate
            repeated measurements or validated out-of-office measurements rather
            than relying on a single reading alone.
          </p>

          <h3>Special Assessment</h3>

          <p>
            Measure blood pressure in both arms when clinically indicated.
            Orthostatic measurements may be required in patients with postural
            symptoms, suspected orthostatic hypotension or selected clinical
            situations.
          </p>

        `
      }
    },


    // ============================================================
    // 14. FACE
    // ============================================================

    {
      id: "cv-face",
      name: "Face and Eyes",

      notes: {
        anatomy: `

          <h2>Examination of the Face and Eyes</h2>

          <h3>Inspect For</h3>

          <ul>
            <li>Pallor</li>
            <li>Cyanosis</li>
            <li>Central cyanosis</li>
            <li>Jaundice</li>
            <li>Facial flushing</li>
            <li>Periorbital oedema</li>
            <li>Corneal arcus</li>
            <li>Xanthelasma</li>
          </ul>

          <h3>Clinical Significance</h3>

          <p>
            Pallor may suggest anaemia. Xanthelasma and corneal arcus may be
            associated with lipid disorders but are not by themselves diagnostic
            of dyslipidaemia.
          </p>

        `
      }
    },


    // ============================================================
    // 15. JUGULAR VENOUS PRESSURE
    // ============================================================

    {
      id: "cv-jvp",
      name: "Jugular Venous Pressure",

      notes: {
        anatomy: `

          <h2>Jugular Venous Pressure Examination</h2>

          <p>
            The jugular venous pressure provides an indirect bedside estimate
            of right atrial pressure.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient semi-recumbently.</li>
            <li>Turn the patient's head slightly away from the side being examined.</li>
            <li>Ensure adequate lighting.</li>
            <li>Identify the internal jugular venous pulsation.</li>
            <li>Distinguish it from the carotid pulse.</li>
            <li>Identify the highest point of venous pulsation.</li>
            <li>Estimate its vertical height above the sternal angle.</li>
            <li>Assess the waveform when possible.</li>
            <li>Assess hepatojugular or abdominojugular response when indicated.</li>
          </ol>

          <h3>Distinguishing JVP From Carotid Pulse</h3>

          <ul>
            <li>JVP is usually biphasic.</li>
            <li>JVP is not palpable.</li>
            <li>JVP varies with position.</li>
            <li>JVP may vary with respiration.</li>
            <li>JVP can be affected by abdominal pressure.</li>
          </ul>

          <h3>Clinical Interpretation</h3>

          <p>
            Elevated JVP may occur with increased right-sided filling pressure,
            right heart failure, fluid overload, tricuspid valve disease and
            other conditions.
          </p>

          <h3>Confirmation</h3>

          <p>
            Interpret JVP together with peripheral oedema, cardiac findings,
            respiratory examination and other evidence of venous congestion.
          </p>

        `
      }
    },


    // ============================================================
    // 16. CAROTID PULSE
    // ============================================================

    {
      id: "cv-carotid",
      name: "Carotid Pulse Examination",

      notes: {
        anatomy: `

          <h2>Carotid Pulse Examination</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ensure the patient is comfortable.</li>
            <li>Palpate one carotid artery at a time.</li>
            <li>Use gentle pressure.</li>
            <li>Assess pulse volume.</li>
            <li>Assess character.</li>
            <li>Assess timing.</li>
            <li>Compare findings where appropriate.</li>
          </ol>

          <p>
            Never compress both carotid arteries simultaneously.
          </p>

          <h3>Carotid Bruit</h3>

          <ol>
            <li>Place the stethoscope gently over the carotid artery.</li>
            <li>Ask the patient to briefly hold their breath.</li>
            <li>Listen for a bruit.</li>
            <li>Repeat on the opposite side.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            A carotid bruit does not by itself establish the degree of carotid
            stenosis. Significant suspected carotid disease requires appropriate
            vascular imaging.
          </p>

        `
      }
    },


    // ============================================================
    // 17. PRECORDIAL INSPECTION
    // ============================================================

    {
      id: "cv-precordial-inspection",
      name: "Precordial Inspection",

      notes: {
        anatomy: `

          <h2>Inspection of the Precordium</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient appropriately.</li>
            <li>Expose the precordium adequately.</li>
            <li>Inspect from the foot of the bed.</li>
            <li>Inspect from the patient's right side.</li>
            <li>Observe the apex region.</li>
            <li>Look for visible pulsations.</li>
            <li>Look for scars.</li>
            <li>Look for chest wall deformity.</li>
            <li>Look for visible heaves or abnormal movements.</li>
          </ol>

          <h3>Look For</h3>

          <ul>
            <li>Visible apex beat</li>
            <li>Parasternal pulsation</li>
            <li>Abnormal precordial activity</li>
            <li>Previous sternotomy scar</li>
            <li>Pacemaker scar or device</li>
            <li>Chest wall deformity</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 18. APEX BEAT
    // ============================================================

    {
      id: "cv-apex-beat",
      name: "Palpation of the Apex Beat",

      notes: {
        anatomy: `

          <h2>Palpation of the Apex Beat</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient supine or semi-recumbent.</li>
            <li>Palpate the left precordium systematically.</li>
            <li>Identify the point of maximal impulse.</li>
            <li>Determine its location.</li>
            <li>Assess its character.</li>
            <li>Assess its amplitude.</li>
            <li>Assess whether it is sustained or displaced.</li>
          </ol>

          <h3>Assess</h3>

          <ul>
            <li>Site</li>
            <li>Size</li>
            <li>Amplitude</li>
            <li>Character</li>
            <li>Duration</li>
            <li>Displacement</li>
          </ul>

          <h3>Clinical Interpretation</h3>

          <p>
            A displaced apex beat may indicate cardiac enlargement or altered
            thoracic anatomy. A sustained or forceful impulse may provide clues
            to ventricular pressure or volume loading.
          </p>

          <h3>Confirmation</h3>

          <p>
            Suspected cardiac enlargement or structural abnormalities should
            be assessed further using echocardiography and other appropriate
            investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 19. PARASTERNAL HEAVE AND THRILLS
    // ============================================================

    {
      id: "cv-heave-thrills",
      name: "Heaves and Thrills",

      notes: {
        anatomy: `

          <h2>Parasternal Heaves and Thrills</h2>

          <h3>Parasternal Heave</h3>

          <h4>STEP-BY-STEP</h4>

          <ol>
            <li>Place the heel or ulnar border of the hand along the left sternal border.</li>
            <li>Assess for sustained outward movement.</li>
            <li>Determine its location and intensity.</li>
          </ol>

          <p>
            A parasternal heave may indicate right ventricular pressure or
            volume overload.
          </p>

          <h3>Thrill</h3>

          <h4>STEP-BY-STEP</h4>

          <ol>
            <li>Place the palm over the precordium.</li>
            <li>Palpate the standard valve areas.</li>
            <li>Assess for palpable vibration.</li>
            <li>Localize the strongest vibration.</li>
          </ol>

          <p>
            A thrill indicates a palpable cardiac murmur and generally suggests
            significant turbulent blood flow.
          </p>

          <h3>Confirmation</h3>

          <p>
            A palpable thrill should be followed by careful auscultation and
            appropriate echocardiographic assessment.
          </p>

        `
      }
    },


    // ============================================================
    // 20. CARDIAC AUSCULTATION
    // ============================================================

    {
      id: "cv-auscultation",
      name: "Cardiac Auscultation",

      notes: {
        anatomy: `

          <h2>Cardiac Auscultation</h2>

          <h3>Standard Areas</h3>

          <ul>
            <li>Aortic area</li>
            <li>Pulmonary area</li>
            <li>Tricuspid area</li>
            <li>Mitral area</li>
            <li>Additional areas as clinically indicated</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient comfortably.</li>
            <li>Use the diaphragm of the stethoscope initially.</li>
            <li>Listen systematically over the standard valve areas.</li>
            <li>Identify S1.</li>
            <li>Identify S2.</li>
            <li>Assess heart rate and rhythm.</li>
            <li>Listen for additional sounds.</li>
            <li>Listen for murmurs.</li>
            <li>Assess murmur timing.</li>
            <li>Assess murmur intensity.</li>
            <li>Assess pitch and character.</li>
            <li>Assess radiation.</li>
            <li>Repeat using the bell where low-frequency sounds are suspected.</li>
            <li>Use appropriate patient positions to enhance specific findings.</li>
          </ol>

          <h3>Heart Sounds</h3>

          <h4>S1</h4>

          <p>
            S1 corresponds primarily to closure of the atrioventricular valves
            at the beginning of ventricular systole.
          </p>

          <h4>S2</h4>

          <p>
            S2 corresponds primarily to closure of the aortic and pulmonary
            valves at the end of ventricular systole.
          </p>

          <h3>Additional Sounds</h3>

          <ul>
            <li>S3</li>
            <li>S4</li>
            <li>Opening snap</li>
            <li>Ejection click</li>
            <li>Mid-systolic click</li>
            <li>Pericardial friction rub</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 21. MURMURS
    // ============================================================

    {
      id: "cv-murmurs",
      name: "Cardiac Murmurs",

      notes: {
        anatomy: `

          <h2>Assessment of Cardiac Murmurs</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Identify whether the murmur occurs during systole or diastole.</li>
            <li>Determine the exact timing within the cardiac cycle.</li>
            <li>Determine intensity.</li>
            <li>Determine pitch.</li>
            <li>Determine character.</li>
            <li>Determine location of maximal intensity.</li>
            <li>Determine radiation.</li>
            <li>Assess response to respiration.</li>
            <li>Assess response to position.</li>
            <li>Assess response to appropriate dynamic maneuvers.</li>
          </ol>

          <h3>Murmur Description</h3>

          <p>
            A complete murmur description should include:
          </p>

          <ul>
            <li>Timing</li>
            <li>Site</li>
            <li>Intensity</li>
            <li>Pitch</li>
            <li>Character</li>
            <li>Radiation</li>
            <li>Variation with respiration</li>
            <li>Variation with position</li>
            <li>Associated heart sounds</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Echocardiography is the principal investigation for structural
            characterization and assessment of clinically significant valvular
            disease.
          </p>

        `
      }
    },


    // ============================================================
    // 22. LUNG AND HEART FAILURE EXAMINATION
    // ============================================================

    {
      id: "cv-heart-failure",
      name: "Assessment for Heart Failure",

      notes: {
        anatomy: `

          <h2>Clinical Assessment of Heart Failure</h2>

          <h3>Symptoms</h3>

          <ul>
            <li>Dyspnoea</li>
            <li>Orthopnoea</li>
            <li>Paroxysmal nocturnal dyspnoea</li>
            <li>Fatigue</li>
            <li>Reduced exercise tolerance</li>
            <li>Peripheral oedema</li>
            <li>Weight gain</li>
            <li>Nocturnal cough</li>
          </ul>

          <h3>Signs</h3>

          <ul>
            <li>Raised JVP</li>
            <li>Peripheral oedema</li>
            <li>Basal crackles</li>
            <li>Third heart sound</li>
            <li>Tachycardia</li>
            <li>Displaced apex beat</li>
            <li>Hepatomegaly</li>
            <li>Ascites</li>
            <li>Cool extremities in severe low-output states</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Measure vital signs.</li>
            <li>Assess JVP.</li>
            <li>Assess peripheral oedema.</li>
            <li>Examine the precordium.</li>
            <li>Auscultate the heart.</li>
            <li>Auscultate the lungs.</li>
            <li>Assess the abdomen for hepatomegaly and ascites.</li>
            <li>Assess peripheral perfusion.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Suspected heart failure requires clinical assessment supported by
            investigations such as ECG, chest imaging, natriuretic peptide
            testing where appropriate and echocardiography.
          </p>

        `
      }
    },


    // ============================================================
    // 23. PERIPHERAL OEDEMA
    // ============================================================

    {
      id: "cv-oedema",
      name: "Peripheral Oedema",

      notes: {
        anatomy: `

          <h2>Assessment of Peripheral Oedema</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect both lower limbs.</li>
            <li>Compare both sides.</li>
            <li>Look for swelling.</li>
            <li>Assess the distribution.</li>
            <li>Press firmly over an appropriate bony surface.</li>
            <li>Release pressure.</li>
            <li>Assess whether an indentation remains.</li>
            <li>Determine the extent of oedema.</li>
            <li>Assess for associated skin changes.</li>
          </ol>

          <h3>Assess</h3>

          <ul>
            <li>Unilateral or bilateral</li>
            <li>Symmetrical or asymmetrical</li>
            <li>Pitting or non-pitting</li>
            <li>Extent</li>
            <li>Skin temperature</li>
            <li>Skin colour</li>
            <li>Ulceration</li>
          </ul>

          <h3>Clinical Correlation</h3>

          <p>
            Bilateral dependent pitting oedema may occur in heart failure,
            but also occurs in renal, hepatic, venous and medication-related
            conditions.
          </p>

        `
      }
    },


    // ============================================================
    // 24. PERIPHERAL VASCULAR EXAMINATION
    // ============================================================

    {
      id: "cv-peripheral-vascular",
      name: "Peripheral Vascular Examination",

      notes: {
        anatomy: `

          <h2>Peripheral Vascular Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Skin colour</li>
            <li>Temperature</li>
            <li>Hair distribution</li>
            <li>Skin trophic changes</li>
            <li>Ulcers</li>
            <li>Gangrene</li>
            <li>Varicose veins</li>
            <li>Oedema</li>
          </ul>

          <h3>Pulse Examination</h3>

          <p>
            Assess appropriate peripheral pulses systematically:
          </p>

          <ul>
            <li>Radial</li>
            <li>Brachial</li>
            <li>Femoral</li>
            <li>Popliteal</li>
            <li>Posterior tibial</li>
            <li>Dorsalis pedis</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect both limbs.</li>
            <li>Compare colour.</li>
            <li>Compare temperature.</li>
            <li>Assess capillary refill.</li>
            <li>Palpate peripheral pulses.</li>
            <li>Compare corresponding pulses bilaterally.</li>
            <li>Assess for ulcers and tissue loss.</li>
            <li>Assess for oedema.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Suspected peripheral arterial disease may require ankle-brachial
            pressure index assessment, Doppler ultrasound or other vascular
            imaging depending on the clinical situation.
          </p>

        `
      }
    },


    // ============================================================
    // 25. ABDOMINAL CARDIOVASCULAR EXAMINATION
    // ============================================================

    {
      id: "cv-abdominal",
      name: "Abdominal Examination in Cardiovascular Disease",

      notes: {
        anatomy: `

          <h2>Abdominal Examination in Cardiovascular Disease</h2>

          <p>
            Abdominal examination is particularly important when assessing
            systemic venous congestion and complications of cardiovascular disease.
          </p>

          <h3>Assess</h3>

          <ul>
            <li>Hepatomegaly</li>
            <li>Hepatic tenderness</li>
            <li>Ascites</li>
            <li>Abdominal venous distension</li>
            <li>Abdominal aortic pulsation where appropriate</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect the abdomen.</li>
            <li>Palpate for hepatomegaly.</li>
            <li>Assess for tenderness.</li>
            <li>Assess for ascites when indicated.</li>
            <li>Assess abdominal venous distension.</li>
            <li>Assess other relevant abdominal findings.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 26. NEUROVASCULAR ASSESSMENT
    // ============================================================

    {
      id: "cv-neurovascular",
      name: "Neurological and Cerebrovascular Assessment",

      notes: {
        anatomy: `

          <h2>Neurological and Cerebrovascular Assessment</h2>

          <p>
            Cardiovascular disease is closely associated with cerebrovascular
            disease. A focused neurological assessment may therefore be necessary.
          </p>

          <h3>Assess</h3>

          <ul>
            <li>Level of consciousness</li>
            <li>Speech</li>
            <li>Facial symmetry</li>
            <li>Upper limb power</li>
            <li>Lower limb power</li>
            <li>Sensation</li>
            <li>Coordination</li>
            <li>Gait when appropriate</li>
          </ul>

          <h3>Indications</h3>

          <ul>
            <li>History of stroke</li>
            <li>TIA symptoms</li>
            <li>Carotid disease</li>
            <li>Syncope</li>
            <li>Neurological symptoms associated with cardiovascular disease</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 27. ECG
    // ============================================================

    {
      id: "cv-ecg",
      name: "12-Lead ECG",

      notes: {
        anatomy: `

          <h2>12-Lead Electrocardiography</h2>

          <h3>Purpose</h3>

          <p>
            The ECG records the electrical activity of the heart and is essential
            for assessment of rhythm, conduction, myocardial ischemia or infarction,
            chamber abnormalities and other electrical disturbances.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Confirm patient identity.</li>
            <li>Explain the procedure.</li>
            <li>Position the patient comfortably.</li>
            <li>Expose the chest appropriately.</li>
            <li>Prepare the skin where necessary.</li>
            <li>Apply limb electrodes correctly.</li>
            <li>Apply precordial electrodes in their anatomical positions.</li>
            <li>Ask the patient to remain still.</li>
            <li>Record the ECG.</li>
            <li>Check the tracing for technical quality.</li>
            <li>Label the ECG appropriately.</li>
          </ol>

          <h3>Standard Chest Leads</h3>

          <ul>
            <li>V1</li>
            <li>V2</li>
            <li>V3</li>
            <li>V4</li>
            <li>V5</li>
            <li>V6</li>
          </ul>

          <h3>Systematic ECG Interpretation</h3>

          <ol>
            <li>Confirm patient details.</li>
            <li>Assess technical quality.</li>
            <li>Determine rate.</li>
            <li>Assess rhythm.</li>
            <li>Assess cardiac axis.</li>
            <li>Assess P waves.</li>
            <li>Assess PR interval.</li>
            <li>Assess QRS complex.</li>
            <li>Assess R-wave progression.</li>
            <li>Assess ST segments.</li>
            <li>Assess T waves.</li>
            <li>Assess QT interval.</li>
            <li>Compare with previous ECGs where available.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Abnormal ECG findings should be interpreted in clinical context.
            Acute ischemic patterns require urgent clinical correlation and
            appropriate serial testing where indicated.
          </p>

        `
      }
    },


    // ============================================================
    // 28. ECHOCARDIOGRAPHY
    // ============================================================

    {
      id: "cv-echocardiography",
      name: "Echocardiography",

      notes: {
        anatomy: `

          <h2>Echocardiography</h2>

          <p>
            Echocardiography uses ultrasound to evaluate cardiac structure and
            function.
          </p>

          <h3>Clinical Uses</h3>

          <ul>
            <li>Assessment of ventricular function</li>
            <li>Valvular disease</li>
            <li>Chamber size</li>
            <li>Pericardial effusion</li>
            <li>Congenital abnormalities</li>
            <li>Intracardiac masses</li>
            <li>Haemodynamic assessment</li>
          </ul>

          <h3>Clinical Confirmation</h3>

          <p>
            Echocardiography is commonly used to confirm or characterize
            suspected structural cardiac abnormalities identified clinically
            or on other investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 29. CARDIAC BIOMARKERS
    // ============================================================

    {
      id: "cv-cardiac-biomarkers",
      name: "Cardiac Biomarkers",

      notes: {
        anatomy: `

          <h2>Cardiac Biomarkers</h2>

          <h3>Troponin</h3>

          <p>
            Cardiac troponins are biomarkers of myocardial injury and are central
            to the assessment of suspected acute coronary syndrome when interpreted
            alongside the clinical presentation and ECG.
          </p>

          <h3>STEP-BY-STEP CLINICAL USE</h3>

          <ol>
            <li>Assess the clinical presentation.</li>
            <li>Obtain an ECG promptly when acute coronary syndrome is suspected.</li>
            <li>Collect the appropriate blood sample.</li>
            <li>Measure cardiac troponin using the available validated assay.</li>
            <li>Repeat testing according to the applicable clinical protocol.</li>
            <li>Interpret the pattern together with symptoms and ECG findings.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            An elevated troponin indicates myocardial injury but does not by
            itself establish acute coronary syndrome. The clinical context,
            ECG and serial change are important for diagnosis.
          </p>

        `
      }
    },


    // ============================================================
    // 30. CHEST X-RAY
    // ============================================================

    {
      id: "cv-chest-xray",
      name: "Chest X-Ray in Cardiovascular Assessment",

      notes: {
        anatomy: `

          <h2>Chest X-Ray</h2>

          <h3>Clinical Uses</h3>

          <ul>
            <li>Assessment of pulmonary congestion</li>
            <li>Assessment of pulmonary oedema</li>
            <li>Assessment of cardiac silhouette</li>
            <li>Assessment of pleural effusions</li>
            <li>Assessment of alternative causes of dyspnoea</li>
          </ul>

          <h3>STEP-BY-STEP INTERPRETATION</h3>

          <ol>
            <li>Confirm patient identity.</li>
            <li>Assess projection.</li>
            <li>Assess image quality.</li>
            <li>Assess cardiac silhouette.</li>
            <li>Assess pulmonary vascularity.</li>
            <li>Assess lung fields.</li>
            <li>Assess pleural spaces.</li>
            <li>Assess mediastinum.</li>
            <li>Assess bones and soft tissues.</li>
            <li>Correlate with clinical findings.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 31. COMPLETE CARDIOVASCULAR OSCE
    // ============================================================

    {
      id: "cv-osce",
      name: "Complete Cardiovascular Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Cardiovascular Examination — OSCE</h2>

          <h3>Opening</h3>

          <ol>
            <li>Wash hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain.</li>
            <li>Position the patient appropriately.</li>
            <li>Expose appropriately while preserving dignity.</li>
          </ol>

          <h3>General Inspection</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Assess respiratory distress.</li>
            <li>Assess nutritional status.</li>
            <li>Assess cyanosis.</li>
            <li>Assess pallor.</li>
            <li>Assess oedema.</li>
          </ol>

          <h3>Hands</h3>

          <ol>
            <li>Inspect hands.</li>
            <li>Assess temperature.</li>
            <li>Assess capillary refill.</li>
            <li>Assess clubbing.</li>
            <li>Look for peripheral signs of infective endocarditis.</li>
          </ol>

          <h3>Pulse</h3>

          <ol>
            <li>Assess rate.</li>
            <li>Assess rhythm.</li>
            <li>Assess volume.</li>
            <li>Assess character.</li>
            <li>Compare both radial pulses.</li>
            <li>Assess additional pulses when indicated.</li>
          </ol>

          <h3>Blood Pressure</h3>

          <ol>
            <li>Apply appropriately sized cuff.</li>
            <li>Measure blood pressure correctly.</li>
            <li>Repeat when clinically indicated.</li>
            <li>Measure both arms where indicated.</li>
          </ol>

          <h3>Face</h3>

          <ol>
            <li>Assess pallor.</li>
            <li>Assess cyanosis.</li>
            <li>Inspect eyes for relevant signs.</li>
          </ol>

          <h3>Neck</h3>

          <ol>
            <li>Assess JVP.</li>
            <li>Assess carotid pulse.</li>
            <li>Auscultate for carotid bruits where indicated.</li>
          </ol>

          <h3>Precordium</h3>

          <ol>
            <li>Inspect the precordium.</li>
            <li>Palpate the apex beat.</li>
            <li>Assess for displacement.</li>
            <li>Assess for parasternal heave.</li>
            <li>Assess for thrills.</li>
          </ol>

          <h3>Auscultation</h3>

          <ol>
            <li>Auscultate the aortic area.</li>
            <li>Auscultate the pulmonary area.</li>
            <li>Auscultate the tricuspid area.</li>
            <li>Auscultate the mitral area.</li>
            <li>Assess S1 and S2.</li>
            <li>Assess heart rhythm.</li>
            <li>Listen for additional sounds.</li>
            <li>Listen for murmurs.</li>
            <li>Assess murmur characteristics.</li>
            <li>Use the bell where appropriate.</li>
            <li>Use appropriate positional maneuvers when indicated.</li>
          </ol>

          <h3>Peripheral Examination</h3>

          <ol>
            <li>Assess peripheral pulses.</li>
            <li>Assess lower limbs.</li>
            <li>Assess for oedema.</li>
            <li>Assess skin changes.</li>
            <li>Assess for ulcers.</li>
          </ol>

          <h3>Abdomen</h3>

          <ol>
            <li>Assess for hepatomegaly.</li>
            <li>Assess for ascites.</li>
            <li>Assess for other signs of systemic venous congestion.</li>
          </ol>

          <h3>Respiratory Examination</h3>

          <p>
            Auscultate the lung bases when assessing for pulmonary congestion,
            pulmonary oedema or other cardiopulmonary pathology.
          </p>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Allow the patient to dress.</li>
            <li>Ensure the patient is comfortable.</li>
            <li>Wash hands.</li>
            <li>Summarize the findings.</li>
            <li>State the most likely clinical diagnosis or syndrome.</li>
            <li>Provide relevant differential diagnoses.</li>
            <li>Recommend appropriate investigations.</li>
          </ol>

          <h3>Final Confirmation Framework</h3>

          <p>
            Cardiovascular diagnoses should be established by integrating
            multiple sources of evidence rather than relying on a single
            physical sign.
          </p>

          <ol>
            <li>
              <strong>History:</strong>
              symptoms, chronology, risk factors and functional limitation.
            </li>

            <li>
              <strong>General examination:</strong>
              perfusion, congestion and systemic manifestations.
            </li>

            <li>
              <strong>Pulse and blood pressure:</strong>
              haemodynamic and rhythm assessment.
            </li>

            <li>
              <strong>JVP:</strong>
              assessment of systemic venous pressure.
            </li>

            <li>
              <strong>Precordial examination:</strong>
              assessment of cardiac size, movement and abnormal vibrations.
            </li>

            <li>
              <strong>Auscultation:</strong>
              assessment of heart sounds, rhythm and murmurs.
            </li>

            <li>
              <strong>ECG:</strong>
              confirmation and characterization of electrical abnormalities.
            </li>

            <li>
              <strong>Laboratory tests:</strong>
              assessment of myocardial injury and cardiovascular risk where
              clinically indicated.
            </li>

            <li>
              <strong>Echocardiography:</strong>
              structural and functional confirmation.
            </li>

            <li>
              <strong>Imaging and vascular studies:</strong>
              further anatomical confirmation where indicated.
            </li>
          </ol>

          <h3>Important Principle</h3>

          <p>
            The cardiovascular examination should always be systematic,
            bilateral where appropriate, and performed from general assessment
            toward focused examination. Abnormal findings should be confirmed
            using the appropriate physiological, laboratory, electrical or
            imaging investigation rather than interpreted in isolation.
          </p>

        `
      }
    }

  ]
};