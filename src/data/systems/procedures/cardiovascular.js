export const cardioprocedures = {

  id: "cardioprocedures",

  name: "Cardiovascular",

  parts: [

    {
      id: "cardiovascular-assessment",
      name: "Cardiovascular Assessment",

      notes: {

        anatomy: `
          <h2>Cardiovascular Clinical Assessment</h2>

          <h3>Overview</h3>
          <p>
            Cardiovascular assessment is a systematic process used to identify abnormalities
            involving the heart, arteries, veins, microcirculation, and cardiovascular
            haemodynamics. It combines history taking, physical examination, bedside
            measurements, electrocardiography, laboratory investigations, and imaging.
          </p>

          <h3>Objectives</h3>
          <ul>
            <li>Identify symptoms suggestive of cardiovascular disease.</li>
            <li>Assess cardiac output and systemic perfusion.</li>
            <li>Identify abnormal heart rhythms.</li>
            <li>Detect evidence of heart failure.</li>
            <li>Assess arterial and venous circulation.</li>
            <li>Identify cardiovascular risk factors.</li>
            <li>Determine the urgency of further investigation or treatment.</li>
          </ul>

          <h3>Important Cardiovascular Symptoms</h3>
          <ul>
            <li>Chest pain or chest discomfort</li>
            <li>Dyspnoea</li>
            <li>Orthopnoea</li>
            <li>Paroxysmal nocturnal dyspnoea</li>
            <li>Palpitations</li>
            <li>Syncope or presyncope</li>
            <li>Peripheral oedema</li>
            <li>Exercise intolerance</li>
            <li>Fatigue</li>
            <li>Claudication</li>
          </ul>

          <h3>Risk-Factor Assessment</h3>
          <p>
            Cardiovascular risk assessment should consider hypertension, diabetes mellitus,
            dyslipidaemia, smoking, obesity, physical inactivity, chronic kidney disease,
            family history of premature cardiovascular disease, age, psychosocial factors,
            and previous cardiovascular events.
          </p>

          <h3>General Examination</h3>
          <p>
            Begin by assessing the patient's general appearance, level of consciousness,
            respiratory distress, colour, nutritional state and signs of poor perfusion.
            Observe for cyanosis, pallor, diaphoresis, oedema and respiratory difficulty.
          </p>

          <h3>Vital Signs</h3>
          <ul>
            <li>Blood pressure</li>
            <li>Heart rate</li>
            <li>Respiratory rate</li>
            <li>Temperature</li>
            <li>Peripheral oxygen saturation</li>
          </ul>

          <h3>Peripheral Pulse Examination</h3>
          <p>
            Assess pulse rate, rhythm, volume, character and symmetry. Commonly assessed
            pulses include radial, brachial, carotid, femoral, popliteal, posterior tibial
            and dorsalis pedis pulses.
          </p>

          <h3>Jugular Venous Pressure</h3>
          <p>
            Jugular venous pressure provides an indirect estimate of right atrial pressure.
            It is particularly useful when assessing systemic venous congestion and heart
            failure.
          </p>

          <h3>Precordial Examination</h3>
          <p>
            The precordium is assessed through inspection and palpation for the apex beat,
            parasternal heave, thrills and abnormal pulsations.
          </p>

          <h3>Cardiac Auscultation</h3>
          <p>
            Auscultation evaluates the first and second heart sounds, additional sounds,
            murmurs, clicks, rubs and rhythm. The four traditional valve areas are the
            aortic, pulmonary, tricuspid and mitral areas.
          </p>

          <h3>Peripheral Oedema</h3>
          <p>
            Dependent pitting oedema should be assessed, particularly over the ankles and
            lower legs. Bilateral oedema may occur with systemic venous congestion, while
            unilateral swelling may suggest local venous or lymphatic pathology.
          </p>

          <h3>Clinical Interpretation</h3>
          <p>
            Cardiovascular examination findings should never be interpreted in isolation.
            They must be integrated with the patient's symptoms, vital signs, medical
            history, risk factors and investigations.
          </p>
        `,

        physiology: `
          <h2>Physiological Basis of Cardiovascular Assessment</h2>

          <p>
            Cardiovascular assessment evaluates the interaction between cardiac function,
            vascular resistance, blood volume and tissue perfusion.
          </p>

          <h3>Cardiac Output</h3>
          <p>
            Cardiac output is the volume of blood pumped by the heart per minute.
          </p>

          <p>
            <strong>Cardiac output = Heart rate × Stroke volume</strong>
          </p>

          <p>
            Changes in heart rate, preload, afterload and myocardial contractility can
            therefore alter systemic perfusion.
          </p>

          <h3>Blood Pressure</h3>
          <p>
            Arterial blood pressure is influenced principally by cardiac output and
            systemic vascular resistance.
          </p>

          <p>
            <strong>Mean arterial pressure is approximately related to cardiac output ×
            systemic vascular resistance.</strong>
          </p>

          <h3>Perfusion</h3>
          <p>
            Adequate tissue perfusion depends on sufficient oxygen delivery, cardiac output,
            haemoglobin concentration and vascular function. Clinical indicators include
            mental status, skin temperature, capillary refill, urine output and peripheral
            pulses.
          </p>
        `
      }
    },


    {
      id: "blood-pressure-measurement",
      name: "Blood Pressure Measurement",

      notes: {

        anatomy: `
          <h2>Blood Pressure Measurement</h2>

          <h3>Definition</h3>
          <p>
            Blood pressure measurement is a non-invasive procedure used to determine the
            pressure exerted by circulating blood against arterial walls.
          </p>

          <h3>Clinical Importance</h3>
          <p>
            Blood pressure measurement is fundamental in cardiovascular assessment and is
            used for screening, diagnosis, monitoring and treatment of hypertension and
            hypotension.
          </p>

          <h3>Equipment</h3>
          <ul>
            <li>Validated automated or manual blood pressure device</li>
            <li>Appropriately sized cuff</li>
            <li>Stethoscope when using the auscultatory method</li>
            <li>Chair and support for the patient's arm</li>
          </ul>

          <h3>Preparation</h3>
          <ul>
            <li>Allow the patient to rest before measurement.</li>
            <li>Ensure the patient is appropriately positioned.</li>
            <li>The back should be supported where possible.</li>
            <li>Feet should be supported and not unnecessarily crossed.</li>
            <li>The arm should be supported at approximately heart level.</li>
            <li>Select an appropriate cuff size.</li>
            <li>Avoid measuring over clothing.</li>
          </ul>

          <h3>Measurement</h3>
          <p>
            Position the cuff correctly around the upper arm with the bladder over the
            brachial artery. With a manual device, systolic pressure corresponds to the
            appearance of Korotkoff sounds and diastolic pressure to their disappearance
            during cuff deflation.
          </p>

          <h3>Important Considerations</h3>
          <ul>
            <li>Repeat unexpectedly abnormal readings.</li>
            <li>Consider measuring both arms during an initial assessment.</li>
            <li>Use the arm with the appropriate reading for subsequent monitoring according
                to clinical circumstances.</li>
            <li>Consider postural measurements when orthostatic hypotension is suspected.</li>
          </ul>

          <h3>Common Sources of Error</h3>
          <ul>
            <li>Incorrect cuff size</li>
            <li>Unsupported arm</li>
            <li>Talking during measurement</li>
            <li>Recent physical activity</li>
            <li>Incorrect patient positioning</li>
            <li>Repeated measurements without adequate interval</li>
            <li>Device calibration problems</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology of Blood Pressure</h2>

          <p>
            Systolic pressure reflects arterial pressure during ventricular contraction,
            while diastolic pressure represents arterial pressure during ventricular
            relaxation.
          </p>

          <p>
            Arterial pressure is determined by the interaction between cardiac output,
            vascular resistance, blood volume and arterial compliance.
          </p>

          <p>
            The autonomic nervous system, renin-angiotensin-aldosterone system, kidneys and
            local vascular mechanisms all contribute to long-term and short-term regulation
            of blood pressure.
          </p>
        `
      }
    },


    {
      id: "ecg",
      name: "12-Lead Electrocardiography",

      notes: {

        anatomy: `
          <h2>12-Lead Electrocardiography</h2>

          <h3>Definition</h3>
          <p>
            Electrocardiography (ECG) is a non-invasive procedure that records electrical
            activity generated by the myocardium through electrodes placed on the patient's
            skin.
          </p>

          <h3>Clinical Indications</h3>
          <ul>
            <li>Chest pain</li>
            <li>Palpitations</li>
            <li>Syncope or presyncope</li>
            <li>Suspected acute coronary syndrome</li>
            <li>Suspected arrhythmia</li>
            <li>Electrolyte abnormalities</li>
            <li>Monitoring patients receiving selected cardiotoxic medications</li>
            <li>Assessment of conduction abnormalities</li>
            <li>Assessment of suspected myocardial injury</li>
          </ul>

          <h3>ECG Leads</h3>
          <p>
            A standard 12-lead ECG consists of:
          </p>

          <ul>
            <li>I</li>
            <li>II</li>
            <li>III</li>
            <li>aVR</li>
            <li>aVL</li>
            <li>aVF</li>
            <li>V1</li>
            <li>V2</li>
            <li>V3</li>
            <li>V4</li>
            <li>V5</li>
            <li>V6</li>
          </ul>

          <h3>Preparation</h3>
          <ul>
            <li>Explain the procedure.</li>
            <li>Position the patient comfortably.</li>
            <li>Expose appropriate areas while maintaining privacy.</li>
            <li>Prepare the skin if necessary to improve electrode contact.</li>
            <li>Ensure the patient remains relaxed and relatively still.</li>
          </ul>

          <h3>Recording</h3>
          <p>
            Limb and precordial electrodes are positioned according to standard anatomical
            landmarks. Incorrect placement can produce significant waveform abnormalities
            and may result in diagnostic errors.
          </p>

          <h3>Systematic ECG Interpretation</h3>
          <ol>
            <li>Confirm patient identity and ECG calibration.</li>
            <li>Assess rate.</li>
            <li>Assess rhythm.</li>
            <li>Assess cardiac axis.</li>
            <li>Assess P waves.</li>
            <li>Measure PR interval.</li>
            <li>Assess QRS duration and morphology.</li>
            <li>Assess R-wave progression.</li>
            <li>Assess ST segments.</li>
            <li>Assess T waves.</li>
            <li>Assess QT/QTc interval.</li>
            <li>Compare with previous ECGs where available.</li>
          </ol>

          <h3>Important ECG Patterns</h3>
          <ul>
            <li>Sinus rhythm and sinus tachycardia</li>
            <li>Sinus bradycardia</li>
            <li>Atrial fibrillation</li>
            <li>Atrial flutter</li>
            <li>Supraventricular tachycardia</li>
            <li>Ventricular tachycardia</li>
            <li>Heart block</li>
            <li>Bundle branch block</li>
            <li>ST-segment elevation</li>
            <li>ST-segment depression</li>
            <li>T-wave abnormalities</li>
            <li>Prolonged QT</li>
          </ul>

          <h3>Common Errors</h3>
          <ul>
            <li>Incorrect electrode placement</li>
            <li>Poor skin contact</li>
            <li>Patient movement</li>
            <li>Electrical interference</li>
            <li>Failure to identify artefact</li>
            <li>Failure to compare with previous ECGs</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis of ECG</h2>

          <p>
            The ECG represents voltage differences generated by cardiac depolarisation and
            repolarisation as detected from different perspectives on the body surface.
          </p>

          <h3>Electrical Sequence</h3>
          <ol>
            <li>Sinoatrial node depolarisation</li>
            <li>Atrial depolarisation</li>
            <li>Atrioventricular nodal conduction</li>
            <li>His-Purkinje conduction</li>
            <li>Ventricular depolarisation</li>
            <li>Ventricular repolarisation</li>
          </ol>

          <p>
            The P wave represents atrial depolarisation, the QRS complex represents
            ventricular depolarisation and the T wave represents ventricular
            repolarisation.
          </p>
        `
      }
    },


    {
      id: "cardiac-monitoring",
      name: "Cardiac Monitoring",

      notes: {

        anatomy: `
          <h2>Cardiac Monitoring</h2>

          <p>
            Cardiac monitoring provides continuous or intermittent observation of cardiac
            electrical activity and heart rate. It is commonly used in emergency,
            intensive-care, perioperative and inpatient settings.
          </p>

          <h3>Indications</h3>
          <ul>
            <li>Suspected or known arrhythmia</li>
            <li>Acute coronary syndrome</li>
            <li>Electrolyte abnormalities</li>
            <li>Haemodynamic instability</li>
            <li>Post-resuscitation monitoring</li>
            <li>Use of medications capable of producing arrhythmias</li>
          </ul>

          <h3>Procedure Principles</h3>
          <ul>
            <li>Confirm patient identity.</li>
            <li>Explain monitoring.</li>
            <li>Apply electrodes to prepared skin.</li>
            <li>Select an appropriate monitoring lead.</li>
            <li>Set clinically appropriate alarm parameters.</li>
            <li>Regularly assess the patient rather than relying solely on the monitor.</li>
          </ul>

          <h3>Important Principle</h3>
          <p>
            Cardiac monitors are adjuncts to clinical assessment. An alarm should prompt
            assessment of the patient and the tracing rather than automatic treatment of the
            monitor reading.
          </p>
        `,

        physiology: `
          <h2>Physiology of Cardiac Monitoring</h2>

          <p>
            Continuous ECG monitoring detects electrical activity and rhythm disturbances.
            It does not independently establish effective mechanical cardiac output.
          </p>

          <p>
            A rhythm that appears electrically organised may therefore occur without
            effective mechanical circulation, as in pulseless electrical activity.
          </p>
        `
      }
    },


    {
      id: "venepuncture",
      name: "Peripheral Venous Access",

      notes: {

        anatomy: `
          <h2>Peripheral Intravenous Cannulation</h2>

          <h3>Definition</h3>
          <p>
            Peripheral intravenous cannulation involves placement of a catheter into a
            peripheral vein to provide venous access for administration of fluids,
            medications, blood products and selected contrast agents.
          </p>

          <h3>Common Sites</h3>
          <ul>
            <li>Dorsal veins of the hand</li>
            <li>Cephalic vein</li>
            <li>Basilic vein</li>
            <li>Median cubital region</li>
            <li>Forearm veins</li>
          </ul>

          <h3>Indications</h3>
          <ul>
            <li>Intravenous medication</li>
            <li>Fluid therapy</li>
            <li>Blood products</li>
            <li>Emergency access</li>
            <li>Perioperative treatment</li>
            <li>Contrast administration where appropriate</li>
          </ul>

          <h3>Basic Equipment</h3>
          <ul>
            <li>Appropriate IV cannula</li>
            <li>Tourniquet</li>
            <li>Skin antiseptic</li>
            <li>Gloves</li>
            <li>Extension tubing or compatible connector</li>
            <li>Flush solution according to local protocol</li>
            <li>IV dressing</li>
            <li>Sharps container</li>
          </ul>

          <h3>Core Procedural Principles</h3>
          <ol>
            <li>Verify indication and patient identity.</li>
            <li>Explain the procedure.</li>
            <li>Perform hand hygiene.</li>
            <li>Select an appropriate vein and catheter size.</li>
            <li>Apply appropriate skin antisepsis.</li>
            <li>Insert the cannula using aseptic technique.</li>
            <li>Confirm venous access.</li>
            <li>Secure the catheter.</li>
            <li>Dispose of sharps safely.</li>
            <li>Document the procedure.</li>
          </ol>

          <h3>Complications</h3>
          <ul>
            <li>Infiltration</li>
            <li>Extravasation</li>
            <li>Phlebitis</li>
            <li>Haematoma</li>
            <li>Bleeding</li>
            <li>Local infection</li>
            <li>Catheter occlusion</li>
            <li>Accidental arterial puncture</li>
            <li>Nerve irritation or injury</li>
            <li>Catheter-related bloodstream infection</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis of Peripheral Venous Access</h2>

          <p>
            Peripheral veins are capacitance vessels with relatively low intravascular
            pressure. This allows cannulation and administration of medications and fluids
            directly into the systemic venous circulation.
          </p>

          <p>
            Intravenous administration bypasses gastrointestinal absorption and allows
            predictable systemic delivery of appropriately formulated medications.
          </p>
        `
      }
    },


    {
      id: "arterial-blood-gas",
      name: "Arterial Blood Gas Sampling",

      notes: {

        anatomy: `
          <h2>Arterial Blood Gas Sampling</h2>

          <h3>Definition</h3>
          <p>
            Arterial blood gas (ABG) analysis evaluates oxygenation, ventilation and
            acid-base status using arterial blood.
          </p>

          <h3>Common Sampling Sites</h3>
          <ul>
            <li>Radial artery</li>
            <li>Femoral artery</li>
            <li>Brachial artery in selected circumstances</li>
          </ul>

          <h3>Indications</h3>
          <ul>
            <li>Acute respiratory failure</li>
            <li>Severe respiratory distress</li>
            <li>Assessment of oxygenation</li>
            <li>Assessment of ventilation</li>
            <li>Suspected metabolic or respiratory acid-base disorder</li>
            <li>Critical illness</li>
            <li>Assessment of response to selected interventions</li>
          </ul>

          <h3>Major Components</h3>
          <ul>
            <li>pH</li>
            <li>PaCO₂</li>
            <li>PaO₂</li>
            <li>HCO₃⁻</li>
            <li>Base excess or base deficit</li>
            <li>Oxygen saturation</li>
          </ul>

          <h3>Sampling Principles</h3>
          <p>
            The sample must be collected using appropriate arterial sampling equipment and
            handled promptly according to the requirements of the analyser and local
            laboratory protocol.
          </p>

          <h3>Complications</h3>
          <ul>
            <li>Pain</li>
            <li>Haematoma</li>
            <li>Bleeding</li>
            <li>Arterial spasm</li>
            <li>Infection</li>
            <li>Rare vascular or nerve injury</li>
          </ul>
        `,

        physiology: `
          <h2>Interpretation of Arterial Blood Gas</h2>

          <h3>Stepwise Approach</h3>
          <ol>
            <li>Assess pH.</li>
            <li>Determine whether the primary process is respiratory or metabolic.</li>
            <li>Assess PaCO₂.</li>
            <li>Assess bicarbonate.</li>
            <li>Assess compensation.</li>
            <li>Assess oxygenation.</li>
            <li>Consider the clinical context.</li>
          </ol>

          <h3>Primary Disorders</h3>
          <ul>
            <li>Respiratory acidosis</li>
            <li>Respiratory alkalosis</li>
            <li>Metabolic acidosis</li>
            <li>Metabolic alkalosis</li>
          </ul>

          <p>
            ABG interpretation should be integrated with the patient's respiratory status,
            haemodynamics, oxygen therapy and underlying disease.
          </p>
        `
      }
    },


    {
      id: "defibrillation",
      name: "Defibrillation",

      notes: {

        anatomy: `
          <h2>Defibrillation</h2>

          <h3>Definition</h3>
          <p>
            Defibrillation is the delivery of an unsynchronised electrical shock to the heart
            with the objective of terminating a shockable cardiac arrest rhythm and allowing
            organised cardiac electrical activity to resume.
          </p>

          <h3>Primary Indications</h3>
          <ul>
            <li>Ventricular fibrillation</li>
            <li>Pulseless ventricular tachycardia</li>
          </ul>

          <p>
            Defibrillation is not indicated for asystole or pulseless electrical activity
            because these rhythms are not treated by electrical shock in the standard
            cardiac-arrest algorithm.
          </p>

          <h3>Core Components</h3>
          <ul>
            <li>Recognition of cardiac arrest</li>
            <li>Activation of emergency response</li>
            <li>High-quality CPR</li>
            <li>Rapid rhythm assessment</li>
            <li>Early defibrillation when a shockable rhythm is present</li>
            <li>Immediate resumption of CPR after shock</li>
            <li>Repeated rhythm assessment according to the resuscitation algorithm</li>
          </ul>

          <h3>Safety</h3>
          <p>
            All personnel must ensure that nobody is in contact with the patient or connected
            equipment during shock delivery. The resuscitation team should communicate clearly
            before shock delivery.
          </p>

          <h3>Complications</h3>
          <ul>
            <li>Skin burns</li>
            <li>Myocardial injury</li>
            <li>Transient arrhythmias</li>
            <li>Interruption or delay of CPR</li>
            <li>Electrical injury to rescuers if safety precautions are violated</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis of Defibrillation</h2>

          <p>
            Ventricular fibrillation is characterised by chaotic electrical activity that
            prevents coordinated ventricular contraction. Defibrillation depolarises a
            critical mass of myocardium simultaneously, interrupting the disorganised rhythm.
          </p>

          <p>
            Successful defibrillation does not by itself guarantee restoration of effective
            circulation. High-quality CPR and post-resuscitation care remain essential.
          </p>
        `
      }
    },


    {
      id: "synchronized-cardioversion",
      name: "Synchronized Cardioversion",

      notes: {

        anatomy: `
          <h2>Synchronized Electrical Cardioversion</h2>

          <h3>Definition</h3>
          <p>
            Synchronized cardioversion is the delivery of an electrical shock timed with the
            cardiac cycle, usually synchronised to the R wave, to terminate selected
            tachyarrhythmias.
          </p>

          <h3>Common Indications</h3>
          <ul>
            <li>Haemodynamically unstable atrial fibrillation</li>
            <li>Haemodynamically unstable atrial flutter</li>
            <li>Selected supraventricular tachycardias</li>
            <li>Selected monomorphic ventricular tachycardia with a pulse</li>
          </ul>

          <h3>Pre-procedure Assessment</h3>
          <ul>
            <li>Assess airway and breathing.</li>
            <li>Assess haemodynamic stability.</li>
            <li>Confirm rhythm.</li>
            <li>Establish appropriate monitoring.</li>
            <li>Obtain intravenous access where appropriate.</li>
            <li>Assess thromboembolic risk in atrial fibrillation/flutter.</li>
            <li>Consider sedation when clinically appropriate and feasible.</li>
          </ul>

          <h3>Important Distinction</h3>
          <p>
            Synchronized cardioversion differs from defibrillation because the shock is
            synchronised with the QRS complex. Defibrillation is unsynchronised and is used
            primarily for pulseless shockable rhythms.
          </p>

          <h3>Complications</h3>
          <ul>
            <li>Thromboembolism</li>
            <li>Skin burns</li>
            <li>Arrhythmia</li>
            <li>Bradycardia</li>
            <li>Hypotension</li>
            <li>Sedation-related complications</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            Cardioversion interrupts abnormal re-entry or atrial/ventricular electrical
            activity by depolarising myocardial tissue. Synchronisation reduces the risk of
            delivering the shock during the vulnerable phase of ventricular repolarisation,
            which could precipitate ventricular fibrillation.
          </p>
        `
      }
    },


    {
      id: "cpr",
      name: "Cardiopulmonary Resuscitation",

      notes: {

        anatomy: `
          <h2>Cardiopulmonary Resuscitation</h2>

          <h3>Definition</h3>
          <p>
            Cardiopulmonary resuscitation (CPR) is an emergency intervention performed when
            effective circulation has ceased. It combines chest compressions with appropriate
            ventilation and other components of resuscitation.
          </p>

          <h3>Recognition of Cardiac Arrest</h3>
          <p>
            Cardiac arrest should be recognised rapidly. In a healthcare setting, assessment
            includes responsiveness, breathing and pulse assessment according to the current
            resuscitation protocol.
          </p>

          <h3>Core Principles</h3>
          <ol>
            <li>Recognise cardiac arrest rapidly.</li>
            <li>Activate the emergency response system.</li>
            <li>Begin high-quality CPR.</li>
            <li>Attach a defibrillator or AED as soon as available.</li>
            <li>Identify shockable versus non-shockable rhythms.</li>
            <li>Provide advanced life support when trained personnel and equipment are available.</li>
            <li>Continue appropriate post-cardiac-arrest care after return of circulation.</li>
          </ol>

          <h3>High-Quality CPR</h3>
          <p>
            High-quality CPR requires effective chest compressions with appropriate rate,
            depth, recoil and minimal interruptions, together with ventilation appropriate
            to the patient's circumstances and rescuer skill level.
          </p>

          <h3>Defibrillator/AED Integration</h3>
          <p>
            Early defibrillation is critical when ventricular fibrillation or pulseless
            ventricular tachycardia is present. CPR should be resumed promptly after shock
            delivery.
          </p>

          <h3>Advanced Resuscitation</h3>
          <p>
            Advanced life support may include airway management, vascular access,
            pharmacological therapy, rhythm management, identification and treatment of
            reversible causes, and post-cardiac-arrest care.
          </p>

          <h3>Reversible Causes</h3>
          <ul>
            <li>Hypovolaemia</li>
            <li>Hypoxia</li>
            <li>Hydrogen ion excess/acidosis</li>
            <li>Hypo-/hyperkalaemia and other major metabolic disturbances</li>
            <li>Hypothermia</li>
            <li>Tension pneumothorax</li>
            <li>Cardiac tamponade</li>
            <li>Toxins</li>
            <li>Pulmonary thrombosis</li>
            <li>Coronary thrombosis</li>
          </ul>

          <h3>Return of Spontaneous Circulation</h3>
          <p>
            Return of spontaneous circulation (ROSC) is followed by structured assessment
            and management of airway, breathing, circulation, neurological status and the
            underlying cause of arrest.
          </p>
        `,

        physiology: `
          <h2>Physiology of CPR</h2>

          <p>
            Chest compressions generate forward blood flow by mechanically compressing the
            heart and thoracic structures. Effective compressions produce coronary and
            cerebral perfusion during cardiac arrest.
          </p>

          <p>
            Coronary perfusion pressure is particularly important because myocardial
            perfusion during CPR influences the likelihood of successful defibrillation and
            return of circulation.
          </p>

          <p>
            CPR does not completely replace normal cardiac output. Its purpose is to maintain
            a minimum level of circulation until spontaneous circulation can be restored or
            definitive treatment is provided.
          </p>
        `
      }
    },


    {
      id: "pericardiocentesis",
      name: "Pericardiocentesis",

      notes: {

        anatomy: `
          <h2>Pericardiocentesis</h2>

          <h3>Definition</h3>
          <p>
            Pericardiocentesis is an invasive procedure in which fluid is aspirated from the
            pericardial space using a needle and/or catheter.
          </p>

          <h3>Major Indication</h3>
          <p>
            The most important emergency indication is cardiac tamponade causing significant
            haemodynamic compromise.
          </p>

          <h3>Other Indications</h3>
          <ul>
            <li>Diagnostic analysis of pericardial fluid in selected cases</li>
            <li>Large symptomatic pericardial effusion in appropriate circumstances</li>
            <li>Suspected purulent or malignant pericardial effusion</li>
          </ul>

          <h3>Assessment Before Procedure</h3>
          <ul>
            <li>Clinical assessment</li>
            <li>Haemodynamic assessment</li>
            <li>ECG</li>
            <li>Bedside echocardiography where available</li>
            <li>Coagulation assessment when clinically appropriate</li>
            <li>Identification of the safest access route</li>
          </ul>

          <h3>Image Guidance</h3>
          <p>
            Echocardiographic guidance is preferred where available because it allows
            identification of the effusion and helps guide needle placement while reducing
            procedural complications.
          </p>

          <h3>Potential Complications</h3>
          <ul>
            <li>Cardiac perforation</li>
            <li>Coronary artery injury</li>
            <li>Arrhythmia</li>
            <li>Bleeding</li>
            <li>Pneumothorax</li>
            <li>Infection</li>
            <li>Liver injury depending on access route</li>
            <li>Vasovagal reactions</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis of Pericardiocentesis</h2>

          <p>
            Cardiac tamponade occurs when increased pericardial pressure impairs cardiac
            chamber filling. Reduced ventricular filling decreases stroke volume and may
            produce hypotension and obstructive shock.
          </p>

          <p>
            Removal of pericardial fluid reduces external pressure on the heart and can
            restore ventricular filling and cardiac output.
          </p>
        `
      }
    },


    {
      id: "central-venous-access",
      name: "Central Venous Catheterization",

      notes: {

        anatomy: `
          <h2>Central Venous Catheterization</h2>

          <h3>Definition</h3>
          <p>
            Central venous catheterization involves placement of a catheter into a large
            central vein, commonly the internal jugular, subclavian or femoral vein, with
            the catheter tip positioned in the central venous circulation according to the
            intended use.
          </p>

          <h3>Indications</h3>
          <ul>
            <li>Administration of selected vasoactive medications</li>
            <li>Administration of irritant or hyperosmolar solutions</li>
            <li>Long-term intravenous therapy</li>
            <li>Haemodynamic monitoring in selected patients</li>
            <li>Difficult peripheral venous access</li>
            <li>Haemodialysis or extracorporeal therapies using appropriate catheters</li>
          </ul>

          <h3>Common Access Sites</h3>
          <ul>
            <li>Internal jugular vein</li>
            <li>Subclavian vein</li>
            <li>Femoral vein</li>
          </ul>

          <h3>Ultrasound Guidance</h3>
          <p>
            Ultrasound guidance can improve identification of vascular structures and may
            reduce complications for several central venous access approaches when performed
            by trained clinicians.
          </p>

          <h3>Aseptic Technique</h3>
          <p>
            Central venous catheter placement requires rigorous infection-prevention
            measures, including hand hygiene, appropriate skin antisepsis, sterile equipment,
            sterile barriers and appropriate catheter-site care.
          </p>

          <h3>Complications</h3>
          <ul>
            <li>Arterial puncture</li>
            <li>Haematoma</li>
            <li>Pneumothorax</li>
            <li>Haemothorax</li>
            <li>Air embolism</li>
            <li>Catheter malposition</li>
            <li>Arrhythmias during guidewire advancement</li>
            <li>Thrombosis</li>
            <li>Catheter-related bloodstream infection</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            Central veins provide access to high-flow vessels capable of rapidly diluting
            medications and solutions. Central venous access is therefore particularly
            useful when peripheral administration may cause tissue injury or when prolonged
            vascular access is required.
          </p>

          <p>
            Central venous pressure can provide information about right-sided filling
            pressure, although it must be interpreted in the context of the entire clinical
            picture rather than used as an isolated measure of fluid status.
          </p>
        `
      }
    },


    {
      id: "arterial-line",
      name: "Arterial Catheterization",

      notes: {

        anatomy: `
          <h2>Arterial Catheterization</h2>

          <h3>Definition</h3>
          <p>
            Arterial catheterization involves placement of a catheter into an artery to
            provide continuous beat-to-beat blood pressure monitoring and facilitate
            repeated arterial blood sampling.
          </p>

          <h3>Common Site</h3>
          <p>
            The radial artery is commonly used because it is relatively superficial and
            accessible. Other sites may be selected according to clinical circumstances.
          </p>

          <h3>Indications</h3>
          <ul>
            <li>Continuous blood pressure monitoring</li>
            <li>Haemodynamic instability</li>
            <li>Shock</li>
            <li>Use of vasoactive medications</li>
            <li>Frequent arterial blood gas measurements</li>
            <li>Major surgery or critical illness</li>
          </ul>

          <h3>Complications</h3>
          <ul>
            <li>Haematoma</li>
            <li>Bleeding</li>
            <li>Thrombosis</li>
            <li>Distal ischaemia</li>
            <li>Infection</li>
            <li>Arterial spasm</li>
            <li>Pseudoaneurysm</li>
            <li>Rare nerve injury</li>
          </ul>

          <h3>Monitoring</h3>
          <p>
            The arterial waveform should be inspected for damping, resonance, catheter
            obstruction and other artefacts because an abnormal pressure tracing can produce
            misleading systolic and diastolic measurements.
          </p>
        `,

        physiology: `
          <h2>Arterial Pressure Waveform</h2>

          <p>
            The arterial waveform reflects pressure generated by ventricular ejection and
            modified by arterial compliance and peripheral vascular resistance.
          </p>

          <p>
            Systolic pressure occurs during ventricular ejection, while diastolic pressure
            reflects pressure remaining within the arterial system during ventricular
            relaxation.
          </p>

          <p>
            Mean arterial pressure is particularly important clinically because it
            approximates the average pressure driving systemic organ perfusion.
          </p>
        `
      }
    },


    {
      id: "echocardiography",
      name: "Echocardiography",

      notes: {

        anatomy: `
          <h2>Echocardiography</h2>

          <h3>Definition</h3>
          <p>
            Echocardiography is an ultrasound-based imaging technique used to assess cardiac
            anatomy, chamber size, valve function, ventricular performance, blood flow and
            pericardial pathology.
          </p>

          <h3>Types</h3>
          <ul>
            <li>Transthoracic echocardiography (TTE)</li>
            <li>Transoesophageal echocardiography (TEE)</li>
            <li>Stress echocardiography</li>
            <li>Focused cardiac ultrasound</li>
          </ul>

          <h3>Major Applications</h3>
          <ul>
            <li>Assessment of ventricular systolic function</li>
            <li>Assessment of chamber size</li>
            <li>Valve disease</li>
            <li>Pericardial effusion</li>
            <li>Cardiomyopathy</li>
            <li>Intracardiac masses</li>
            <li>Selected congenital heart disease</li>
            <li>Assessment of haemodynamic states</li>
          </ul>

          <h3>Transthoracic Echocardiography</h3>
          <p>
            TTE obtains cardiac images through the chest wall using an ultrasound transducer.
            It is non-invasive and is commonly the initial echocardiographic examination.
          </p>

          <h3>Transoesophageal Echocardiography</h3>
          <p>
            TEE places an ultrasound transducer within the oesophagus to obtain close-range
            images of cardiac structures. It may provide improved visualisation of selected
            structures compared with transthoracic imaging.
          </p>

          <h3>Limitations</h3>
          <ul>
            <li>Poor acoustic windows</li>
            <li>Obesity</li>
            <li>Chest wall abnormalities</li>
            <li>Patient cooperation limitations</li>
            <li>Operator dependence</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis of Echocardiography</h2>

          <p>
            Ultrasound waves are transmitted into tissues and reflected at interfaces with
            different acoustic properties. The returning echoes are processed to generate
            images and measurements.
          </p>

          <p>
            Doppler techniques allow assessment of moving blood cells and therefore provide
            information about blood-flow direction and velocity.
          </p>

          <p>
            Echocardiography can therefore provide both structural and functional
            cardiovascular information.
          `
      }
    },


    {
      id: "exercise-stress-test",
      name: "Exercise Stress Testing",

      notes: {

        anatomy: `
          <h2>Exercise Stress Testing</h2>

          <h3>Definition</h3>
          <p>
            Exercise stress testing evaluates cardiovascular response to controlled physical
            exertion while monitoring symptoms, ECG, heart rate and blood pressure.
          </p>

          <h3>Potential Uses</h3>
          <ul>
            <li>Assessment of exertional symptoms</li>
            <li>Evaluation of suspected myocardial ischaemia in selected patients</li>
            <li>Assessment of exercise capacity</li>
            <li>Evaluation of selected arrhythmias</li>
            <li>Functional assessment in selected cardiovascular conditions</li>
          </ul>

          <h3>Monitoring</h3>
          <ul>
            <li>Continuous or appropriate ECG monitoring</li>
            <li>Heart rate</li>
            <li>Blood pressure</li>
            <li>Symptoms</li>
            <li>Exercise workload</li>
          </ul>

          <h3>Reasons to Stop</h3>
          <p>
            Testing should be stopped when clinically significant symptoms, dangerous
            arrhythmias, significant haemodynamic abnormalities or other predefined
            termination criteria occur.
          </p>

          <h3>Complications</h3>
          <p>
            Exercise stress testing can rarely precipitate significant arrhythmia,
            myocardial ischaemia or other cardiovascular events; therefore appropriate
            patient selection, monitoring and emergency preparedness are required.
          </p>
        `,

        physiology: `
          <h2>Physiology of Exercise Testing</h2>

          <p>
            During exercise, sympathetic activation increases heart rate, myocardial
            contractility and cardiac output. Skeletal muscle blood flow also increases.
          </p>

          <p>
            Patients with significant coronary limitation may develop myocardial ischaemia
            when oxygen demand rises beyond the ability of coronary blood flow to increase
            adequately.
          </p>
        `
      }
    },


    {
      id: "coronary-angiography",
      name: "Coronary Angiography",

      notes: {

        anatomy: `
          <h2>Coronary Angiography</h2>

          <h3>Definition</h3>
          <p>
            Coronary angiography is an invasive imaging procedure used to visualise the
            coronary arteries by introducing radiographic contrast into the coronary
            circulation and obtaining fluoroscopic images.
          </p>

          <h3>Access</h3>
          <p>
            Arterial access is commonly obtained through the radial or femoral artery,
            depending on patient factors, operator expertise and clinical circumstances.
          </p>

          <h3>Indications</h3>
          <ul>
            <li>Selected patients with acute coronary syndrome</li>
            <li>Suspected significant coronary artery disease</li>
            <li>Assessment before selected cardiac procedures</li>
            <li>Selected patients with recurrent or high-risk symptoms</li>
          </ul>

          <h3>Procedure Components</h3>
          <ol>
            <li>Patient assessment and consent</li>
            <li>Vascular access</li>
            <li>Catheter advancement under fluoroscopic guidance</li>
            <li>Selective coronary engagement</li>
            <li>Contrast administration</li>
            <li>Acquisition of angiographic views</li>
            <li>Interpretation of coronary anatomy</li>
            <li>Haemostasis following catheter removal</li>
          </ol>

          <h3>Potential Complications</h3>
          <ul>
            <li>Bleeding</li>
            <li>Haematoma</li>
            <li>Arterial injury</li>
            <li>Contrast-associated complications</li>
            <li>Arrhythmias</li>
            <li>Coronary dissection</li>
            <li>Myocardial infarction</li>
            <li>Stroke</li>
            <li>Rare death</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            Coronary angiography provides anatomical information about coronary lumen
            narrowing and occlusion. It does not directly measure myocardial oxygen demand
            or tissue perfusion and should therefore be interpreted alongside clinical and
            physiological information.
          </p>
        `
      }
    },


    {
      id: "percutaneous-coronary-intervention",
      name: "Percutaneous Coronary Intervention",

      notes: {

        anatomy: `
          <h2>Percutaneous Coronary Intervention</h2>

          <h3>Definition</h3>
          <p>
            Percutaneous coronary intervention (PCI) is a catheter-based treatment used to
            restore or improve coronary artery blood flow in selected patients with
            obstructive coronary artery disease.
          </p>

          <h3>Major Components</h3>
          <ul>
            <li>Coronary angiography</li>
            <li>Guidewire passage</li>
            <li>Balloon angioplasty where indicated</li>
            <li>Stent deployment when indicated</li>
            <li>Assessment of the final coronary result</li>
          </ul>

          <h3>Stents</h3>
          <p>
            Coronary stents are expandable devices used to maintain vessel patency after
            coronary intervention. Modern PCI commonly uses drug-eluting stents.
          </p>

          <h3>Potential Complications</h3>
          <ul>
            <li>Bleeding</li>
            <li>Vascular injury</li>
            <li>Coronary dissection</li>
            <li>Coronary perforation</li>
            <li>Acute vessel closure</li>
            <li>Stent thrombosis</li>
            <li>Contrast-associated complications</li>
            <li>Arrhythmia</li>
            <li>Myocardial infarction</li>
            <li>Stroke</li>
          </ul>

          <h3>Post-Procedure Care</h3>
          <ul>
            <li>Monitor vital signs.</li>
            <li>Assess the access site.</li>
            <li>Monitor distal circulation.</li>
            <li>Monitor for recurrent chest pain.</li>
            <li>Monitor for arrhythmias.</li>
            <li>Administer prescribed antithrombotic therapy.</li>
            <li>Provide appropriate discharge and secondary-prevention counselling.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            PCI aims to increase coronary blood flow by enlarging a narrowed arterial lumen.
            Restoration of coronary perfusion can improve myocardial oxygen delivery and
            reduce ischaemia.
          </p>

          <p>
            Successful treatment of a coronary lesion does not eliminate the underlying
            atherosclerotic disease process. Long-term risk-factor modification and
            guideline-directed medical therapy therefore remain important.
          </p>
        `
      }
    },


    {
      id: "temporary-pacing",
      name: "Temporary Cardiac Pacing",

      notes: {

        anatomy: `
          <h2>Temporary Cardiac Pacing</h2>

          <h3>Definition</h3>
          <p>
            Temporary cardiac pacing provides an artificial electrical stimulus to the heart
            when the intrinsic cardiac rhythm is inadequate to maintain an acceptable heart
            rate or cardiac output.
          </p>

          <h3>Indications</h3>
          <ul>
            <li>Symptomatic severe bradycardia</li>
            <li>High-grade atrioventricular block</li>
            <li>Selected conduction disturbances</li>
            <li>Selected tachyarrhythmia management strategies</li>
            <li>Bridge to permanent pacemaker implantation in appropriate patients</li>
          </ul>

          <h3>Types</h3>
          <ul>
            <li>Transcutaneous pacing</li>
            <li>Transvenous pacing</li>
            <li>Temporary epicardial pacing in selected surgical patients</li>
          </ul>

          <h3>Complications</h3>
          <ul>
            <li>Failure to capture</li>
            <li>Failure to sense</li>
            <li>Arrhythmia</li>
            <li>Vascular injury</li>
            <li>Cardiac perforation</li>
            <li>Infection</li>
            <li>Pneumothorax depending on access route</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            Cardiac pacing depolarises myocardial tissue using an externally generated
            electrical impulse. When capture occurs, the stimulus produces myocardial
            depolarisation followed by mechanical contraction.
          </p>

          <p>
            Effective pacing therefore requires both electrical capture and sufficient
            mechanical cardiac response.
          </p>
        `
      }
    },


    {
      id: "permanent-pacemaker",
      name: "Permanent Pacemaker Implantation",

      notes: {

        anatomy: `
          <h2>Permanent Pacemaker Implantation</h2>

          <h3>Definition</h3>
          <p>
            Permanent pacemaker implantation involves placing a pulse generator and one or
            more pacing leads to provide long-term treatment of clinically significant
            bradyarrhythmias or conduction disorders.
          </p>

          <h3>Components</h3>
          <ul>
            <li>Pulse generator</li>
            <li>Atrial lead when required</li>
            <li>Ventricular lead when required</li>
            <li>Lead connection system</li>
          </ul>

          <h3>Indications</h3>
          <ul>
            <li>Selected symptomatic sinus node dysfunction</li>
            <li>Selected high-grade atrioventricular block</li>
            <li>Selected advanced conduction disease</li>
          </ul>

          <h3>General Procedure Concept</h3>
          <p>
            Leads are introduced into the venous circulation and positioned within the
            appropriate cardiac chamber. The pulse generator is placed in a subcutaneous
            pocket and connected to the leads. The device is then programmed according to
            the patient's clinical requirements.
          </p>

          <h3>Complications</h3>
          <ul>
            <li>Infection</li>
            <li>Haematoma</li>
            <li>Pneumothorax</li>
            <li>Lead displacement</li>
            <li>Lead malfunction</li>
            <li>Cardiac perforation</li>
            <li>Venous thrombosis</li>
          </ul>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            Permanent pacing prevents excessively slow cardiac rates by providing electrical
            stimulation when intrinsic impulse generation or conduction is inadequate.
          </p>
        `
      }
    },


    {
      id: "cardioversion",
      name: "Cardioversion and Arrhythmia Management",

      notes: {

        anatomy: `
          <h2>Cardioversion and Acute Arrhythmia Management</h2>

          <h3>Overview</h3>
          <p>
            Management of arrhythmias requires identification of the rhythm, assessment of
            haemodynamic stability and treatment of reversible causes.
          </p>

          <h3>Initial Assessment</h3>
          <ul>
            <li>Airway</li>
            <li>Breathing</li>
            <li>Circulation</li>
            <li>Level of consciousness</li>
            <li>Blood pressure</li>
            <li>ECG rhythm</li>
            <li>Chest pain or myocardial ischaemia</li>
            <li>Signs of shock</li>
            <li>Electrolyte and metabolic abnormalities</li>
          </ul>

          <h3>Broad Management Categories</h3>
          <ul>
            <li>Observation for stable benign rhythms</li>
            <li>Pharmacological therapy</li>
            <li>Vagal manoeuvres in appropriate supraventricular tachycardias</li>
            <li>Synchronized cardioversion</li>
            <li>Defibrillation</li>
            <li>Temporary or permanent pacing</li>
            <li>Catheter-based electrophysiological procedures</li>
          </ul>
        `,

        physiology: `
          <h2>Arrhythmia Physiology</h2>

          <p>
            Arrhythmias arise from abnormalities of impulse formation, impulse conduction,
            re-entry, abnormal automaticity or triggered activity.
          </p>

          <p>
            The clinical consequences depend on ventricular rate, rhythm regularity,
            ventricular filling, myocardial contractility and the presence of structural
            heart disease.
          </p>
        `
      }
    },


    {
      id: "cardiac-catheterization",
      name: "Cardiac Catheterization",

      notes: {

        anatomy: `
          <h2>Cardiac Catheterization</h2>

          <h3>Definition</h3>
          <p>
            Cardiac catheterization is an invasive procedure in which a catheter is advanced
            through the vascular system into the heart or great vessels for diagnostic
            measurement, imaging or therapeutic intervention.
          </p>

          <h3>Applications</h3>
          <ul>
            <li>Measurement of intracardiac pressures</li>
            <li>Assessment of cardiac output</li>
            <li>Coronary angiography</li>
            <li>Assessment of selected congenital heart diseases</li>
            <li>Valve assessment</li>
            <li>Percutaneous cardiovascular interventions</li>
          </ul>

          <h3>Right Heart Catheterization</h3>
          <p>
            A catheter is advanced through the venous circulation to assess right-sided
            pressures, pulmonary artery pressure and other haemodynamic variables.
          </p>

          <h3>Left Heart Catheterization</h3>
          <p>
            Left-sided catheterization may be used to assess left ventricular and aortic
            pressures and is commonly associated with coronary angiography.
          </p>

          <h3>Potential Complications</h3>
          <ul>
            <li>Bleeding</li>
            <li>Vascular injury</li>
            <li>Arrhythmia</li>
            <li>Infection</li>
            <li>Thromboembolism</li>
            <li>Cardiac perforation</li>
            <li>Contrast-related complications</li>
          </ul>
        `,

        physiology: `
          <h2>Cardiac Haemodynamics</h2>

          <p>
            Cardiac catheterization permits direct measurement of pressures within cardiac
            chambers and major vessels. These measurements can help characterise preload,
            afterload, pulmonary pressures and patterns of cardiac dysfunction.
          </p>
        `
      }
    },


    {
      id: "thrombolysis",
      name: "Systemic Thrombolytic Therapy",

      notes: {

        anatomy: `
          <h2>Thrombolytic Therapy</h2>

          <h3>Definition</h3>
          <p>
            Thrombolytic therapy involves administration of fibrinolytic medication to
            promote dissolution of an intravascular thrombus in carefully selected clinical
            circumstances.
          </p>

          <h3>Cardiovascular Applications</h3>
          <ul>
            <li>Selected patients with acute ST-elevation myocardial infarction when timely
                primary PCI is unavailable or inappropriate</li>
            <li>Selected patients with life-threatening pulmonary embolism</li>
          </ul>

          <h3>Assessment Before Therapy</h3>
          <ul>
            <li>Confirm the diagnosis and indication.</li>
            <li>Determine timing of symptom onset where relevant.</li>
            <li>Assess contraindications.</li>
            <li>Assess bleeding risk.</li>
            <li>Assess neurological status.</li>
            <li>Check relevant laboratory investigations when appropriate.</li>
          </ul>

          <h3>Major Complication</h3>
          <p>
            The major complication is serious bleeding, including intracranial haemorrhage.
            Patient selection and adherence to current evidence-based protocols are therefore
            essential.
          </p>
        `,

        physiology: `
          <h2>Physiological Basis</h2>

          <p>
            Fibrinolytic drugs promote conversion of plasminogen to plasmin, which degrades
            fibrin within thrombi. Restoration of vascular patency may improve tissue
            perfusion.
          </p>

          <p>
            Because fibrin is also involved in normal haemostasis, systemic fibrinolysis can
            increase bleeding risk.
          `
      }
    },


    {
      id: "cardiac-surgery-introduction",
      name: "Introduction to Cardiovascular Surgery",

      notes: {

        anatomy: `
          <h2>Introduction to Cardiovascular Surgery</h2>

          <p>
            Cardiovascular surgery encompasses operative procedures involving the heart,
            coronary arteries, cardiac valves, great vessels and selected peripheral
            vascular structures.
          </p>

          <h3>Examples</h3>
          <ul>
            <li>Coronary artery bypass grafting</li>
            <li>Valve repair</li>
            <li>Valve replacement</li>
            <li>Aortic surgery</li>
            <li>Surgery for congenital heart disease</li>
            <li>Cardiac tumour surgery</li>
            <li>Selected vascular reconstruction procedures</li>
          </ul>

          <h3>Preoperative Principles</h3>
          <ul>
            <li>Confirm diagnosis and indication.</li>
            <li>Assess operative risk.</li>
            <li>Optimise comorbidities.</li>
            <li>Review medications.</li>
            <li>Assess cardiovascular and respiratory function.</li>
            <li>Plan blood management.</li>
            <li>Confirm informed consent.</li>
            <li>Perform appropriate multidisciplinary planning.</li>
          </ul>

          <h3>Perioperative Safety</h3>
          <p>
            Major cardiovascular procedures require structured communication among surgeons,
            anaesthesia professionals, nurses, perfusionists and other members of the
            multidisciplinary team. Surgical safety checklists help ensure confirmation of
            patient identity, procedure, consent, equipment, anticipated critical events
            and postoperative concerns.
          </p>

          <h3>Postoperative Monitoring</h3>
          <ul>
            <li>Haemodynamic status</li>
            <li>Cardiac rhythm</li>
            <li>Respiratory function</li>
            <li>Bleeding</li>
            <li>Urine output</li>
            <li>Neurological status</li>
            <li>Temperature</li>
            <li>Electrolytes and metabolic status</li>
            <li>Evidence of infection</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology of Cardiovascular Surgery</h2>

          <p>
            Cardiovascular surgery can alter preload, afterload, contractility, vascular
            resistance, blood volume and cardiac rhythm. Patients therefore require careful
            perioperative haemodynamic monitoring.
          </p>

          <p>
            Cardiopulmonary bypass, when used, temporarily takes over the functions of
            cardiac pumping and pulmonary gas exchange. This permits surgeons to operate on
            a relatively bloodless and controlled cardiac field.
          </p>
        `
      }
    },


    {
      id: "procedure-safety",
      name: "Cardiovascular Procedure Safety",

      notes: {

        anatomy: `
          <h2>Safety Principles for Cardiovascular Procedures</h2>

          <h3>Patient Identification</h3>
          <p>
            Every procedure begins with correct patient identification, confirmation of the
            indication, relevant diagnosis, planned procedure and appropriate consent.
          </p>

          <h3>Informed Consent</h3>
          <p>
            Where the clinical situation permits, the patient should receive understandable
            information about the nature of the procedure, expected benefits, significant
            risks, alternatives and consequences of declining treatment.
          </p>

          <h3>Infection Prevention</h3>
          <ul>
            <li>Hand hygiene</li>
            <li>Aseptic technique</li>
            <li>Appropriate skin antisepsis</li>
            <li>Sterile equipment where indicated</li>
            <li>Appropriate catheter-site care</li>
            <li>Safe disposal of sharps</li>
          </ul>

          <h3>Monitoring</h3>
          <p>
            Depending on the procedure, monitoring may include ECG, blood pressure, oxygen
            saturation, respiratory rate, level of consciousness, temperature and invasive
            haemodynamic measurements.
          </p>

          <h3>Emergency Preparedness</h3>
          <p>
            Procedures with potential cardiovascular instability should be undertaken in an
            environment where appropriate resuscitation equipment, monitoring and trained
            personnel are available.
          </p>

          <h3>Documentation</h3>
          <p>
            Documentation should include the indication, procedure performed, relevant
            findings, complications, specimens or devices where applicable, patient
            tolerance, post-procedure instructions and follow-up plan.
          </p>

          <h3>Post-procedure Assessment</h3>
          <p>
            After an invasive cardiovascular procedure, reassessment should specifically
            consider haemodynamic stability, bleeding, vascular access-site complications,
            distal perfusion, neurological status, cardiac rhythm and procedure-specific
            complications.
          </p>
        `,

        physiology: `
          <h2>Patient Safety and Cardiovascular Physiology</h2>

          <p>
            Cardiovascular procedures can rapidly alter vascular resistance, preload,
            afterload, cardiac rhythm and cardiac output. Continuous clinical assessment is
            therefore essential during procedures that can produce haemodynamic instability.
          </p>

          <p>
            The WHO Surgical Safety Checklist emphasises confirmation of patient identity,
            procedure and consent, assessment of anaesthetic and airway risks, equipment
            readiness, anticipated blood loss, sterility, specimen handling and postoperative
            concerns.
          </p>
        `
      }
    }

  ]

};