export const clinicalMethodsRespiratory = {

  id: "clinicalMethodsRespiratory",

  name: "🩺 Clinical Methods",

  modelPath: "models/respiratory/",

  modelFile: "clinical_methods.glb",

  parts: [

    // ============================================================
    // 1. INTRODUCTION TO RESPIRATORY CLINICAL ASSESSMENT
    // ============================================================

    {
      id: "resp-clinical-overview",
      name: "Introduction to Respiratory Clinical Assessment",

      notes: {
        anatomy: `

          <h2>Introduction to Respiratory Clinical Assessment</h2>

          <h3>Overview</h3>

          <p>
            Clinical assessment of the respiratory system is a systematic process
            used to identify respiratory symptoms, determine the likely anatomical
            site of disease, assess physiological impairment, estimate severity,
            formulate differential diagnoses and select appropriate investigations.
          </p>

          <p>
            A complete respiratory assessment consists of:
          </p>

          <ol>
            <li>Patient identification and preparation</li>
            <li>History taking</li>
            <li>General physical examination</li>
            <li>Respiratory-specific examination</li>
            <li>Examination of relevant extra-respiratory systems</li>
            <li>Assessment of severity</li>
            <li>Selection of investigations</li>
            <li>Clinical interpretation and formulation of a diagnosis</li>
          </ol>

          <h3>Basic Examination Sequence</h3>

          <p>
            The classical respiratory examination follows:
          </p>

          <p>
            <strong>Inspection → Palpation → Percussion → Auscultation</strong>
          </p>

          <p>
            Throughout the examination, corresponding areas of the two sides of
            the chest should be compared systematically.
          </p>

          <h3>Objectives of Respiratory Examination</h3>

          <ul>
            <li>Identify the nature of the respiratory complaint.</li>
            <li>Determine the duration and progression of disease.</li>
            <li>Identify risk factors and exposures.</li>
            <li>Determine whether the problem is airway, parenchymal, pleural,
                vascular, chest-wall or neuromuscular in origin.</li>
            <li>Assess the severity of respiratory compromise.</li>
            <li>Identify complications.</li>
            <li>Generate appropriate differential diagnoses.</li>
            <li>Select investigations to confirm or exclude important diagnoses.</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 2. HISTORY
    // ============================================================

    {
      id: "resp-history",
      name: "History Taking",

      notes: {
        anatomy: `

          <h2>Respiratory History Taking</h2>

          <h3>1. Introduction</h3>

          <p>
            A good respiratory history establishes the patient's principal
            complaints, their chronology, associated symptoms, risk factors,
            previous respiratory disease, medication exposure, occupational
            exposure and relevant family and social history.
          </p>

          <h3>2. Patient Identification</h3>

          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>Sex</li>
            <li>Occupation</li>
            <li>Residence</li>
            <li>Source of history</li>
            <li>Reliability of the informant</li>
          </ul>

          <p>
            Age and occupational and environmental exposures can substantially
            alter the respiratory differential diagnosis.
          </p>

          <h3>3. Chief Complaints</h3>

          <p>
            Record the major complaints using the patient's own words where
            possible and include the duration of each complaint.
          </p>

          <ul>
            <li>Cough</li>
            <li>Sputum production</li>
            <li>Shortness of breath</li>
            <li>Wheeze</li>
            <li>Chest pain</li>
            <li>Haemoptysis</li>
            <li>Fever</li>
            <li>Stridor</li>
            <li>Reduced exercise tolerance</li>
            <li>Orthopnoea</li>
            <li>Paroxysmal nocturnal dyspnoea</li>
            <li>Night sweats</li>
            <li>Weight loss</li>
          </ul>

          <h3>4. History of Presenting Illness</h3>

          <p>
            Establish the chronology of the illness from the first symptom to the
            current presentation.
          </p>

          <p>
            Determine:
          </p>

          <ul>
            <li>Exact onset</li>
            <li>Mode of onset</li>
            <li>Duration</li>
            <li>Progression</li>
            <li>Severity</li>
            <li>Associated symptoms</li>
            <li>Aggravating factors</li>
            <li>Relieving factors</li>
            <li>Previous episodes</li>
            <li>Previous treatment</li>
            <li>Response to treatment</li>
          </ul>

          <h3>5. Important Respiratory Symptoms</h3>

          <h4>Cough</h4>

          <p>Characterize the cough according to:</p>

          <ul>
            <li>Onset</li>
            <li>Duration</li>
            <li>Frequency</li>
            <li>Dry or productive</li>
            <li>Daytime or nocturnal predominance</li>
            <li>Triggering factors</li>
            <li>Relation to exercise</li>
            <li>Relation to position</li>
            <li>Associated wheeze</li>
            <li>Associated dyspnoea</li>
            <li>Associated chest pain</li>
            <li>Haemoptysis</li>
          </ul>

          <h4>Sputum</h4>

          <p>Determine:</p>

          <ul>
            <li>Quantity</li>
            <li>Colour</li>
            <li>Consistency</li>
            <li>Odour</li>
            <li>Presence of blood</li>
            <li>Frequency</li>
            <li>Change from baseline</li>
          </ul>

          <p>
            Purulent sputum may suggest infection. Large-volume sputum production
            may occur in bronchiectasis and other suppurative lung disorders.
          </p>

          <h4>Haemoptysis</h4>

          <p>
            Establish the amount, frequency, colour and duration of bleeding.
          </p>

          <ul>
            <li>Fresh blood or blood-streaked sputum</li>
            <li>Clots</li>
            <li>Frequency</li>
            <li>Estimated volume</li>
            <li>Associated cough</li>
            <li>Associated dyspnoea</li>
            <li>Chest pain</li>
            <li>Fever</li>
            <li>Weight loss</li>
          </ul>

          <p>
            Distinguish haemoptysis from haematemesis and bleeding originating
            from the upper airway.
          </p>

          <h4>Dyspnoea</h4>

          <p>Assess:</p>

          <ul>
            <li>Onset</li>
            <li>Duration</li>
            <li>Progression</li>
            <li>Severity</li>
            <li>Exertional or resting symptoms</li>
            <li>Exercise tolerance</li>
            <li>Orthopnoea</li>
            <li>Paroxysmal nocturnal dyspnoea</li>
            <li>Wheeze</li>
            <li>Chest pain</li>
            <li>Cough</li>
          </ul>

          <p>
            Establish the patient's functional limitation by asking how far they
            can walk, whether they can climb stairs and whether routine activities
            such as bathing or dressing cause breathlessness.
          </p>

          <h4>Wheeze</h4>

          <ul>
            <li>Onset</li>
            <li>Frequency</li>
            <li>Duration</li>
            <li>Nocturnal symptoms</li>
            <li>Exercise relationship</li>
            <li>Allergen exposure</li>
            <li>Seasonal variation</li>
            <li>Response to bronchodilators</li>
          </ul>

          <h4>Chest Pain</h4>

          <p>
            Characterize using:
          </p>

          <ul>
            <li>Site</li>
            <li>Onset</li>
            <li>Character</li>
            <li>Radiation</li>
            <li>Severity</li>
            <li>Duration</li>
            <li>Frequency</li>
            <li>Relationship to breathing</li>
            <li>Relationship to coughing</li>
            <li>Relationship to exertion</li>
            <li>Relationship to position</li>
            <li>Relieving factors</li>
          </ul>

          <h4>Fever and Constitutional Symptoms</h4>

          <ul>
            <li>Fever</li>
            <li>Chills</li>
            <li>Rigors</li>
            <li>Night sweats</li>
            <li>Weight loss</li>
            <li>Loss of appetite</li>
            <li>Fatigue</li>
            <li>Malaise</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 3. PAST HISTORY
    // ============================================================

    {
      id: "resp-past-history",
      name: "Past Medical, Drug and Allergy History",

      notes: {
        anatomy: `

          <h2>Past Medical, Drug and Allergy History</h2>

          <h3>1. Past Respiratory History</h3>

          <p>Ask specifically about:</p>

          <ul>
            <li>Previous pneumonia</li>
            <li>Asthma</li>
            <li>COPD</li>
            <li>Tuberculosis</li>
            <li>Previous tuberculosis treatment</li>
            <li>Bronchiectasis</li>
            <li>Interstitial lung disease</li>
            <li>Pulmonary embolism</li>
            <li>Pleural disease</li>
            <li>Lung cancer</li>
            <li>Previous respiratory admissions</li>
            <li>Previous intensive care admission</li>
            <li>Previous intubation</li>
            <li>Previous mechanical ventilation</li>
            <li>Previous thoracic surgery</li>
          </ul>

          <h3>2. Other Medical Conditions</h3>

          <ul>
            <li>Heart failure</li>
            <li>Ischaemic heart disease</li>
            <li>Hypertension</li>
            <li>Diabetes mellitus</li>
            <li>Autoimmune disease</li>
            <li>Connective tissue disease</li>
            <li>Neuromuscular disease</li>
            <li>Gastro-oesophageal reflux disease</li>
            <li>Immunosuppression</li>
          </ul>

          <h3>3. Drug History</h3>

          <p>Ask about:</p>

          <ul>
            <li>Current medications</li>
            <li>Previous medications</li>
            <li>Inhalers</li>
            <li>Bronchodilators</li>
            <li>Corticosteroids</li>
            <li>Antibiotics</li>
            <li>Anticoagulants</li>
            <li>ACE inhibitors</li>
            <li>Immunosuppressive drugs</li>
            <li>Medication adherence</li>
            <li>Recent medication changes</li>
          </ul>

          <p>
            ACE inhibitors can cause persistent dry cough. Medication adherence
            should be assessed when symptoms appear poorly controlled despite
            prescribed therapy.
          </p>

          <h3>4. Allergy History</h3>

          <ul>
            <li>Drug allergies</li>
            <li>Food allergies</li>
            <li>Environmental allergies</li>
            <li>Seasonal allergies</li>
            <li>Previous anaphylaxis</li>
            <li>Reaction to inhaled substances</li>
          </ul>

          <h3>5. Previous Investigations</h3>

          <p>Ask whether the patient has previously undergone:</p>

          <ul>
            <li>Chest X-ray</li>
            <li>CT chest</li>
            <li>Spirometry</li>
            <li>Peak-flow monitoring</li>
            <li>Bronchoscopy</li>
            <li>Arterial blood gas analysis</li>
            <li>Sputum testing</li>
            <li>Pulmonary function testing</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 4. SOCIAL, OCCUPATIONAL AND FAMILY HISTORY
    // ============================================================

    {
      id: "resp-social-history",
      name: "Social, Occupational and Family History",

      notes: {
        anatomy: `

          <h2>Social, Occupational and Family History</h2>

          <h3>1. Smoking History</h3>

          <p>
            Determine whether the patient is a current smoker, former smoker or
            has never smoked.
          </p>

          <p>
            Quantify tobacco exposure using pack-years:
          </p>

          <p>
            <strong>
              Pack-years = number of packs smoked per day × number of years smoked.
            </strong>
          </p>

          <p>Also ask about:</p>

          <ul>
            <li>Vaping</li>
            <li>Shisha</li>
            <li>Cannabis</li>
            <li>Other inhaled substances</li>
            <li>Passive smoking</li>
          </ul>

          <h3>2. Occupational History</h3>

          <p>
            Occupational history is essential in suspected occupational lung
            disease.
          </p>

          <p>Ask about exposure to:</p>

          <ul>
            <li>Silica</li>
            <li>Asbestos</li>
            <li>Coal dust</li>
            <li>Cotton dust</li>
            <li>Wood dust</li>
            <li>Metal fumes</li>
            <li>Welding fumes</li>
            <li>Industrial chemicals</li>
            <li>Gases</li>
            <li>Animal products</li>
            <li>Grain dust</li>
            <li>Mould</li>
          </ul>

          <p>
            Establish the duration of exposure, use of personal protective
            equipment and whether symptoms improve when the patient is away
            from work.
          </p>

          <h3>3. Environmental History</h3>

          <ul>
            <li>Indoor biomass fuel exposure</li>
            <li>Household smoking</li>
            <li>Dust</li>
            <li>Mould</li>
            <li>Poor ventilation</li>
            <li>Animal exposure</li>
            <li>Recent travel</li>
            <li>Crowded living conditions</li>
            <li>Contact with tuberculosis</li>
            <li>Contact with respiratory infections</li>
          </ul>

          <h3>4. Family History</h3>

          <p>Ask about:</p>

          <ul>
            <li>Asthma</li>
            <li>Atopy</li>
            <li>COPD</li>
            <li>Tuberculosis exposure</li>
            <li>Lung cancer</li>
            <li>Inherited pulmonary disease</li>
            <li>Autoimmune disease</li>
          </ul>

          <h3>5. Immunization History</h3>

          <p>
            Establish relevant vaccination history, particularly vaccination
            against respiratory pathogens when clinically appropriate.
          </p>

        `
      }
    },


    // ============================================================
    // 5. REVIEW OF SYSTEMS
    // ============================================================

    {
      id: "resp-review-systems",
      name: "Review of Systems",

      notes: {
        anatomy: `

          <h2>Respiratory Review of Systems</h2>

          <p>
            Respiratory disease may be a manifestation of systemic disease.
            A focused review of other systems can therefore reveal important
            diagnostic clues.
          </p>

          <h3>Cardiovascular System</h3>

          <ul>
            <li>Palpitations</li>
            <li>Exertional chest pain</li>
            <li>Orthopnoea</li>
            <li>Paroxysmal nocturnal dyspnoea</li>
            <li>Peripheral oedema</li>
            <li>Syncope</li>
          </ul>

          <h3>Ear, Nose and Throat</h3>

          <ul>
            <li>Nasal obstruction</li>
            <li>Nasal discharge</li>
            <li>Sinusitis</li>
            <li>Postnasal drip</li>
            <li>Sore throat</li>
            <li>Voice changes</li>
            <li>Stridor</li>
          </ul>

          <h3>Gastrointestinal System</h3>

          <ul>
            <li>Gastro-oesophageal reflux</li>
            <li>Heartburn</li>
            <li>Dysphagia</li>
            <li>Regurgitation</li>
            <li>Aspiration episodes</li>
          </ul>

          <h3>Rheumatological System</h3>

          <ul>
            <li>Joint pain</li>
            <li>Joint swelling</li>
            <li>Skin changes</li>
            <li>Raynaud phenomenon</li>
            <li>Features of connective tissue disease</li>
          </ul>

          <h3>Neurological System</h3>

          <ul>
            <li>Muscle weakness</li>
            <li>Bulbar symptoms</li>
            <li>Difficulty swallowing</li>
            <li>Reduced consciousness</li>
            <li>Neuromuscular symptoms</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 6. GENERAL EXAMINATION
    // ============================================================

    {
      id: "resp-general-examination",
      name: "General Examination",

      notes: {
        anatomy: `

          <h2>General Physical Examination</h2>

          <h3>Preparation</h3>

          <ol>
            <li>Wash or sanitize your hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm the patient's identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ensure privacy.</li>
            <li>Position the patient appropriately.</li>
            <li>Expose the patient adequately while maintaining dignity.</li>
          </ol>

          <h3>1. General Appearance</h3>

          <p>Observe the patient before beginning formal examination.</p>

          <ul>
            <li>Level of consciousness</li>
            <li>General distress</li>
            <li>Respiratory distress</li>
            <li>Body habitus</li>
            <li>Nutritional status</li>
            <li>Posture</li>
            <li>Ability to speak</li>
            <li>Use of accessory muscles</li>
            <li>Cyanosis</li>
            <li>Pallor</li>
            <li>Clubbing</li>
            <li>Peripheral oedema</li>
          </ul>

          <h3>2. Vital Signs</h3>

          <ul>
            <li>Temperature</li>
            <li>Pulse rate</li>
            <li>Respiratory rate</li>
            <li>Blood pressure</li>
            <li>Oxygen saturation</li>
          </ul>

          <h3>3. Respiratory Rate</h3>

          <ol>
            <li>Observe the patient's breathing without unnecessarily drawing
                attention to the counting.</li>
            <li>Count respiratory movements for an appropriate interval.</li>
            <li>Assess rate, rhythm and depth.</li>
            <li>Record the respiratory rate.</li>
          </ol>

          <h3>4. Signs of Respiratory Distress</h3>

          <ul>
            <li>Tachypnoea</li>
            <li>Bradypnoea</li>
            <li>Accessory muscle use</li>
            <li>Intercostal recession</li>
            <li>Supraclavicular recession</li>
            <li>Nasal flaring</li>
            <li>Paradoxical breathing</li>
            <li>Inability to speak normally</li>
            <li>Cyanosis</li>
            <li>Altered consciousness</li>
            <li>Exhaustion</li>
          </ul>

          <h3>5. Hands</h3>

          <p>Inspect the hands for:</p>

          <ul>
            <li>Clubbing</li>
            <li>Peripheral cyanosis</li>
            <li>Nicotine staining</li>
            <li>Tremor</li>
            <li>Flapping tremor</li>
            <li>Peripheral perfusion abnormalities</li>
          </ul>

          <h3>6. Face and Eyes</h3>

          <ul>
            <li>Central cyanosis</li>
            <li>Pallor</li>
            <li>Nasal obstruction</li>
            <li>Nasal polyps</li>
            <li>Allergic features</li>
            <li>Facial swelling</li>
            <li>Horner syndrome features</li>
            <li>Conjunctival pallor</li>
          </ul>

          <h3>7. Mouth</h3>

          <ul>
            <li>Central cyanosis</li>
            <li>Oral infection</li>
            <li>Dental disease</li>
            <li>Dehydration</li>
            <li>Upper airway obstruction</li>
          </ul>

          <h3>8. Neck</h3>

          <ul>
            <li>Tracheal position</li>
            <li>Jugular venous pressure</li>
            <li>Cervical lymphadenopathy</li>
            <li>Supraclavicular lymphadenopathy</li>
            <li>Accessory muscle activity</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 7. RESPIRATORY INSPECTION
    // ============================================================

    {
      id: "resp-inspection",
      name: "Inspection of the Respiratory System",

      notes: {
        anatomy: `

          <h2>Inspection of the Respiratory System</h2>

          <p>
            Inspect the patient from the front, side and back. The examination
            should assess the chest wall, respiratory movements, breathing pattern,
            symmetry and visible abnormalities.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient comfortably, preferably sitting upright.</li>
            <li>Expose the chest appropriately.</li>
            <li>Inspect from the front.</li>
            <li>Inspect from the side.</li>
            <li>Inspect from behind.</li>
            <li>Observe the respiratory rate and rhythm.</li>
            <li>Assess depth of respiration.</li>
            <li>Compare movement of both sides.</li>
            <li>Look for chest wall deformities.</li>
            <li>Look for scars, sinuses, masses and skin abnormalities.</li>
            <li>Assess for use of accessory muscles.</li>
          </ol>

          <h3>Chest Shape</h3>

          <p>Look for:</p>

          <ul>
            <li>Normal configuration</li>
            <li>Barrel chest</li>
            <li>Pectus excavatum</li>
            <li>Pectus carinatum</li>
            <li>Kyphosis</li>
            <li>Scoliosis</li>
            <li>Chest wall asymmetry</li>
          </ul>

          <h3>Respiratory Movement</h3>

          <ul>
            <li>Rate</li>
            <li>Rhythm</li>
            <li>Depth</li>
            <li>Symmetry</li>
            <li>Accessory muscle use</li>
            <li>Intercostal recession</li>
            <li>Supraclavicular recession</li>
            <li>Paradoxical movement</li>
          </ul>

          <h3>Chest Wall</h3>

          <p>Look for:</p>

          <ul>
            <li>Surgical scars</li>
            <li>Trauma</li>
            <li>Sinuses</li>
            <li>Skin lesions</li>
            <li>Visible masses</li>
            <li>Dilated veins</li>
            <li>Previous chest drains</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Any apparent asymmetry should subsequently be assessed using
            palpation, percussion and auscultation.
          </p>

        `
      }
    },


    // ============================================================
    // 8. PALPATION
    // ============================================================

    {
      id: "resp-palpation",
      name: "Palpation",

      notes: {
        anatomy: `

          <h2>Palpation of the Respiratory System</h2>

          <h3>1. Tracheal Position</h3>

          <h4>STEP-BY-STEP</h4>

          <ol>
            <li>Position yourself facing the patient.</li>
            <li>Identify the suprasternal notch.</li>
            <li>Palpate gently around the trachea.</li>
            <li>Determine whether the trachea is central or deviated.</li>
            <li>Compare the spaces between the trachea and sternocleidomastoid
                muscles if necessary.</li>
          </ol>

          <h4>Confirmation</h4>

          <p>
            A suspected tracheal deviation should be correlated with chest
            expansion, percussion, auscultation and appropriate imaging.
          </p>

          <h3>2. Chest Expansion</h3>

          <h4>Anterior Chest Expansion</h4>

          <ol>
            <li>Place both hands symmetrically on the anterior chest.</li>
            <li>Position the thumbs appropriately near the lower chest.</li>
            <li>Ask the patient to take a deep breath.</li>
            <li>Observe movement of the thumbs.</li>
            <li>Compare both sides.</li>
          </ol>

          <h4>Posterior Chest Expansion</h4>

          <ol>
            <li>Stand behind the patient.</li>
            <li>Place both hands symmetrically on the lower posterior chest.</li>
            <li>Place the thumbs near the midline.</li>
            <li>Ask the patient to inhale deeply.</li>
            <li>Observe lateral movement of both thumbs.</li>
            <li>Compare both sides.</li>
          </ol>

          <h3>Interpretation</h3>

          <p>
            Reduced unilateral expansion may occur with pleural effusion,
            pneumothorax, consolidation, lung collapse or chest wall restriction.
          </p>

          <h3>3. Tactile Vocal Fremitus</h3>

          <h4>STEP-BY-STEP</h4>

          <ol>
            <li>Place the palmar surface or ulnar border of the hands on the chest.</li>
            <li>Place the hands symmetrically.</li>
            <li>Ask the patient to repeat a phrase such as "ninety-nine".</li>
            <li>Feel the transmitted vibrations.</li>
            <li>Compare corresponding areas on both sides.</li>
            <li>Repeat over upper, middle and lower lung zones.</li>
          </ol>

          <h4>Interpretation</h4>

          <ul>
            <li>
              <strong>Increased fremitus:</strong> may occur with consolidation.
            </li>
            <li>
              <strong>Reduced fremitus:</strong> may occur with pleural fluid,
              pneumothorax or other conditions that separate lung tissue from
              the chest wall.
            </li>
          </ul>

        `
      }
    },


    // ============================================================
    // 9. PERCUSSION
    // ============================================================

    {
      id: "resp-percussion",
      name: "Percussion",

      notes: {
        anatomy: `

          <h2>Respiratory Percussion</h2>

          <h3>Purpose</h3>

          <p>
            Percussion helps estimate the underlying physical characteristics
            of the tissues beneath the chest wall and can identify areas where
            normal aerated lung has been replaced or displaced by fluid, solid
            tissue or excessive air.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient appropriately.</li>
            <li>Place the middle finger of the non-dominant hand firmly against
                the chest wall.</li>
            <li>Keep the other fingers elevated from the chest.</li>
            <li>Strike the middle finger with the tip of the middle finger of
                the dominant hand.</li>
            <li>Compare corresponding areas on both sides.</li>
            <li>Move systematically from upper to lower lung fields.</li>
            <li>Include anterior, lateral and posterior chest areas.</li>
          </ol>

          <h3>Percussion Notes</h3>

          <ul>
            <li>
              <strong>Resonant:</strong> expected over normally aerated lung.
            </li>

            <li>
              <strong>Dull:</strong> may occur over consolidation or pleural fluid.
            </li>

            <li>
              <strong>Stony dull:</strong> classically associated with pleural effusion.
            </li>

            <li>
              <strong>Hyperresonant:</strong> may occur when there is increased
              air within the thoracic cavity or lung.
            </li>

            <li>
              <strong>Flat:</strong> may occur over substantial fluid or solid tissue.
            </li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Percussion findings should always be correlated with tactile fremitus,
            breath sounds, vocal resonance and imaging where clinically indicated.
          </p>

        `
      }
    },


    // ============================================================
    // 10. AUSCULTATION
    // ============================================================

    {
      id: "resp-auscultation",
      name: "Auscultation",

      notes: {
        anatomy: `

          <h2>Respiratory Auscultation</h2>

          <h3>Purpose</h3>

          <p>
            Auscultation assesses the character and distribution of breath sounds
            and detects additional sounds produced within the respiratory tract
            or pleural space.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient sitting upright where possible.</li>
            <li>Ask the patient to breathe through the mouth.</li>
            <li>Place the diaphragm of the stethoscope firmly against the chest.</li>
            <li>Listen to a complete respiratory cycle at each location.</li>
            <li>Compare corresponding areas on both sides.</li>
            <li>Move systematically from upper to lower lung fields.</li>
            <li>Listen anteriorly, laterally and posteriorly.</li>
            <li>Assess intensity and character of breath sounds.</li>
            <li>Listen for added sounds.</li>
          </ol>

          <h3>Normal Breath Sounds</h3>

          <h4>Vesicular Breath Sounds</h4>

          <p>
            Normally heard over most peripheral lung fields. Inspiration is
            generally longer and louder than expiration.
          </p>

          <h4>Bronchial Breath Sounds</h4>

          <p>
            Normally heard over central large airways. Bronchial breathing heard
            unexpectedly over peripheral lung tissue may suggest abnormal
            transmission through consolidated lung.
          </p>

          <h3>Added Breath Sounds</h3>

          <ul>
            <li>Wheezes</li>
            <li>Crackles</li>
            <li>Rhonchi</li>
            <li>Pleural friction rub</li>
            <li>Stridor</li>
          </ul>

          <h3>Wheezes</h3>

          <p>
            Wheezes are musical continuous sounds commonly associated with
            narrowed airways.
          </p>

          <h3>Crackles</h3>

          <p>
            Crackles are discontinuous sounds that may occur when small airways
            or alveoli suddenly open or when air moves through secretions.
          </p>

          <h3>Rhonchi</h3>

          <p>
            Rhonchi are low-pitched continuous sounds that may be associated
            with secretions within larger airways.
          </p>

          <h3>Pleural Friction Rub</h3>

          <p>
            A pleural rub is a superficial grating sound caused by inflamed
            pleural surfaces moving against one another.
          </p>

          <h3>Stridor</h3>

          <p>
            Stridor is a harsh predominantly inspiratory sound suggesting
            upper-airway obstruction and may require urgent assessment.
          </p>

          <h3>Confirmation</h3>

          <p>
            Abnormal breath sounds should be assessed for location, timing,
            intensity, reproducibility and change with coughing or position
            where appropriate.
          </p>

        `
      }
    },


    // ============================================================
    // 11. VOCAL RESONANCE
    // ============================================================

    {
      id: "resp-vocal-resonance",
      name: "Vocal Resonance and Vocal Tests",

      notes: {
        anatomy: `

          <h2>Vocal Resonance</h2>

          <h3>Purpose</h3>

          <p>
            Vocal resonance evaluates transmission of the patient's spoken voice
            through the lungs and chest wall.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient comfortably.</li>
            <li>Place the stethoscope over a lung field.</li>
            <li>Ask the patient to repeat a standardized phrase.</li>
            <li>Listen to the transmitted voice.</li>
            <li>Compare corresponding areas on both sides.</li>
            <li>Repeat systematically across the lung fields.</li>
          </ol>

          <h3>Bronchophony</h3>

          <p>
            Bronchophony assesses whether spoken sounds are transmitted more
            clearly than expected through an area of abnormal lung.
          </p>

          <h3>Whispered Pectoriloquy</h3>

          <ol>
            <li>Ask the patient to whisper selected words.</li>
            <li>Auscultate corresponding chest areas.</li>
            <li>Compare both sides.</li>
          </ol>

          <p>
            Abnormally clear transmission of whispered sounds may occur over
            consolidated lung.
          </p>

          <h3>Interpretation</h3>

          <ul>
            <li>
              Increased vocal resonance may occur with consolidation.
            </li>

            <li>
              Reduced vocal resonance may occur with pleural fluid or air
              separating the lung from the chest wall.
            </li>
          </ul>

        `
      }
    },


    // ============================================================
    // 12. SPECIAL ASSESSMENT — OXYGENATION
    // ============================================================

    {
      id: "resp-oxygen-saturation",
      name: "Pulse Oximetry and Oxygenation",

      notes: {
        anatomy: `

          <h2>Pulse Oximetry</h2>

          <h3>Purpose</h3>

          <p>
            Pulse oximetry provides a non-invasive estimate of peripheral
            arterial oxygen saturation and pulse rate.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Explain the procedure.</li>
            <li>Ensure the patient's hand is adequately perfused.</li>
            <li>Remove factors that may interfere with the sensor when necessary.</li>
            <li>Apply the probe correctly.</li>
            <li>Allow the reading to stabilize.</li>
            <li>Record oxygen saturation.</li>
            <li>Record pulse rate.</li>
            <li>Document whether the patient is breathing room air or receiving
                supplemental oxygen.</li>
            <li>Document the oxygen delivery method when applicable.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Ensure that the pulse oximeter displays a reliable pulse signal and
            that the reading is clinically consistent. Poor peripheral perfusion,
            movement and other factors can produce unreliable measurements.
          </p>

          <p>
            Oxygen saturation should always be interpreted in the context of the
            patient's clinical condition and underlying disease.
          </p>

        `
      }
    },


    // ============================================================
    // 13. PEAK FLOW
    // ============================================================

    {
      id: "resp-peak-flow",
      name: "Peak Expiratory Flow Measurement",

      notes: {
        anatomy: `

          <h2>Peak Expiratory Flow Measurement</h2>

          <h3>Purpose</h3>

          <p>
            Peak expiratory flow (PEF) measures the maximum flow generated during
            a forceful expiration following maximal inspiration. It is particularly
            useful in assessing and monitoring variable airflow limitation,
            especially asthma.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <ol>
            <li>Explain the procedure to the patient.</li>
            <li>Ensure the peak-flow meter is correctly assembled.</li>
            <li>Reset the indicator.</li>
            <li>Ask the patient to stand or sit upright.</li>
            <li>Ask the patient to take a maximal breath in.</li>
            <li>Place the mouth firmly around the mouthpiece.</li>
            <li>Blow out as hard and as fast as possible.</li>
            <li>Record the reading.</li>
            <li>Reset the device.</li>
            <li>Repeat the maneuver according to the relevant protocol.</li>
            <li>Record the best technically acceptable reading.</li>
          </ol>

          <h3>Confirmation of Technique</h3>

          <ul>
            <li>A maximal inspiration should precede the maneuver.</li>
            <li>The mouth should form a good seal around the mouthpiece.</li>
            <li>The patient should produce a rapid forceful expiration.</li>
            <li>Repeated attempts should be reasonably reproducible.</li>
          </ul>

          <h3>Interpretation</h3>

          <p>
            Compare the measurement with the patient's personal best or an
            appropriate reference value. Interpret the result together with
            symptoms and other objective respiratory measurements.
          </p>

        `
      }
    },


    // ============================================================
    // 14. SPIROMETRY
    // ============================================================

    {
      id: "resp-spirometry",
      name: "Spirometry",

      notes: {
        anatomy: `

          <h2>Spirometry</h2>

          <h3>Purpose</h3>

          <p>
            Spirometry is a pulmonary function test used to assess airflow and
            identify ventilatory patterns, particularly obstructive airflow
            limitation.
          </p>

          <h3>Important Measurements</h3>

          <ul>
            <li>Forced expiratory volume in one second (FEV1)</li>
            <li>Forced vital capacity (FVC)</li>
            <li>FEV1/FVC ratio</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Explain the test.</li>
            <li>Demonstrate the maneuver.</li>
            <li>Ensure appropriate patient preparation.</li>
            <li>Position the patient correctly.</li>
            <li>Apply a nose clip when appropriate.</li>
            <li>Ask the patient to inhale maximally.</li>
            <li>Seal the lips firmly around the mouthpiece.</li>
            <li>Exhale as forcefully and continuously as instructed.</li>
            <li>Continue expiration adequately.</li>
            <li>Repeat the maneuver to obtain acceptable and reproducible efforts.</li>
            <li>Record the relevant spirometric measurements.</li>
            <li>Perform bronchodilator testing when clinically indicated.</li>
          </ol>

          <h3>Confirmation of Test Quality</h3>

          <p>
            A technically acceptable spirometry test requires appropriate patient
            effort and a satisfactory maneuver. Coughing, poor inspiration,
            premature termination, air leakage or other technical problems may
            invalidate the measurement.
          </p>

          <h3>Basic Interpretation</h3>

          <h4>Obstructive Pattern</h4>

          <p>
            Characterized by airflow limitation with a reduced FEV1/FVC ratio
            according to the applicable reference criteria.
          </p>

          <h4>Possible Restrictive Pattern</h4>

          <p>
            A reduced FVC with a preserved or increased FEV1/FVC ratio may suggest
            restriction, but true restriction requires confirmation with lung-volume
            measurement.
          </p>

          <h4>Bronchodilator Testing</h4>

          <p>
            Spirometry may be repeated after administration of a bronchodilator
            when clinically indicated. Changes should be interpreted according
            to current technical and clinical criteria.
          </p>

        `
      }
    },


    // ============================================================
    // 15. ARTERIAL BLOOD GAS
    // ============================================================

    {
      id: "resp-abg",
      name: "Arterial Blood Gas Assessment",

      notes: {
        anatomy: `

          <h2>Arterial Blood Gas Assessment</h2>

          <h3>Purpose</h3>

          <p>
            Arterial blood gas analysis assesses oxygenation, ventilation and
            acid-base status.
          </p>

          <h3>Important Parameters</h3>

          <ul>
            <li>pH</li>
            <li>PaO2</li>
            <li>PaCO2</li>
            <li>HCO3−</li>
            <li>Oxygen saturation</li>
            <li>Base excess where reported</li>
          </ul>

          <h3>STEP-BY-STEP SAMPLING</h3>

          <ol>
            <li>Confirm the indication.</li>
            <li>Identify the patient.</li>
            <li>Explain the procedure.</li>
            <li>Obtain consent where appropriate.</li>
            <li>Identify the intended arterial site.</li>
            <li>Use appropriate infection-prevention measures.</li>
            <li>Use an appropriate heparinized blood-gas syringe.</li>
            <li>Obtain the arterial sample using appropriate technique.</li>
            <li>Remove the needle safely.</li>
            <li>Apply firm pressure to the puncture site.</li>
            <li>Remove visible air bubbles promptly.</li>
            <li>Mix the sample appropriately.</li>
            <li>Label the sample correctly.</li>
            <li>Transport and analyze promptly according to laboratory protocol.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Confirm correct patient identification, appropriate sample collection,
            absence of significant air contamination and correct documentation of
            oxygen therapy at the time of sampling.
          </p>

          <h3>Basic Interpretation Sequence</h3>

          <ol>
            <li>Assess pH.</li>
            <li>Assess PaCO2.</li>
            <li>Assess bicarbonate.</li>
            <li>Determine the primary acid-base disturbance.</li>
            <li>Assess compensation.</li>
            <li>Assess PaO2 and oxygenation.</li>
            <li>Interpret the findings in the clinical context.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 16. CHEST X-RAY
    // ============================================================

    {
      id: "resp-chest-xray",
      name: "Chest X-Ray Interpretation",

      notes: {
        anatomy: `

          <h2>Chest X-Ray Interpretation</h2>

          <h3>Purpose</h3>

          <p>
            Chest radiography provides structural information about the lungs,
            pleura, heart, mediastinum, diaphragm and bony thorax.
          </p>

          <h3>STEP-BY-STEP SYSTEMATIC APPROACH</h3>

          <ol>
            <li>Confirm patient identity.</li>
            <li>Confirm the date and type of radiograph.</li>
            <li>Determine whether the film is PA, AP or another projection.</li>
            <li>Assess image quality.</li>
            <li>Assess rotation.</li>
            <li>Assess inspiration.</li>
            <li>Assess exposure.</li>
            <li>Assess the airway and trachea.</li>
            <li>Assess the lungs.</li>
            <li>Assess the pleura.</li>
            <li>Assess the cardiac silhouette.</li>
            <li>Assess the mediastinum.</li>
            <li>Assess the hila.</li>
            <li>Assess the diaphragm.</li>
            <li>Assess the costophrenic angles.</li>
            <li>Assess the bones.</li>
            <li>Assess soft tissues.</li>
            <li>Check lines, tubes and other devices.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Radiographic findings should be correlated with the clinical history
            and examination. Further imaging such as CT may be required when
            detailed anatomical characterization is necessary.
          </p>

        `
      }
    },


    // ============================================================
    // 17. RESPIRATORY MICROBIOLOGY
    // ============================================================

    {
      id: "resp-microbiology",
      name: "Respiratory Specimen Collection",

      notes: {
        anatomy: `

          <h2>Respiratory Specimen Collection</h2>

          <h3>Indications</h3>

          <p>
            Respiratory specimens may be required when infection is suspected
            or when microbiological confirmation is necessary.
          </p>

          <h3>Common Specimens</h3>

          <ul>
            <li>Sputum</li>
            <li>Induced sputum</li>
            <li>Nasopharyngeal specimens</li>
            <li>Oropharyngeal specimens</li>
            <li>Bronchoalveolar lavage samples</li>
            <li>Pleural fluid</li>
          </ul>

          <h3>General Sputum Collection</h3>

          <ol>
            <li>Confirm the indication.</li>
            <li>Explain the procedure to the patient.</li>
            <li>Provide an appropriate sterile specimen container.</li>
            <li>Instruct the patient to produce material from the lower respiratory
                tract rather than saliva.</li>
            <li>Ask the patient to cough deeply and expectorate into the container.</li>
            <li>Close the container securely.</li>
            <li>Label the specimen correctly.</li>
            <li>Send the specimen promptly according to laboratory requirements.</li>
          </ol>

          <h3>Confirmation of Specimen Quality</h3>

          <p>
            A useful sputum specimen should represent lower respiratory secretions
            rather than predominantly saliva. Laboratory assessment may determine
            specimen adequacy.
          </p>

          <h3>Tuberculosis Assessment</h3>

          <p>
            In patients with suspected pulmonary tuberculosis, appropriate
            respiratory specimens should be collected according to the local
            diagnostic protocol and sent for the recommended microbiological
            tests.
          </p>

        `
      }
    },


    // ============================================================
    // 18. CARDIOVASCULAR EXAMINATION
    // ============================================================

    {
      id: "resp-cardiovascular",
      name: "Relevant Cardiovascular Examination",

      notes: {
        anatomy: `

          <h2>Cardiovascular Examination in a Respiratory Patient</h2>

          <p>
            Cardiovascular disease can produce respiratory symptoms and may
            coexist with primary respiratory disease. A cardiovascular examination
            is therefore important when clinically indicated.
          </p>

          <h3>Assess</h3>

          <ul>
            <li>Pulse</li>
            <li>Blood pressure</li>
            <li>Jugular venous pressure</li>
            <li>Peripheral oedema</li>
            <li>Heart sounds</li>
            <li>Murmurs</li>
            <li>Signs of heart failure</li>
          </ul>

          <h3>Clinical Correlation</h3>

          <p>
            Breathlessness, orthopnoea, paroxysmal nocturnal dyspnoea, peripheral
            oedema and elevated JVP may suggest cardiovascular involvement.
          </p>

        `
      }
    },


    // ============================================================
    // 19. UPPER AIRWAY EXAMINATION
    // ============================================================

    {
      id: "resp-upper-airway",
      name: "Upper Airway Examination",

      notes: {
        anatomy: `

          <h2>Upper Airway Examination</h2>

          <p>
            Examination of the upper airway is important because nasal,
            pharyngeal and laryngeal disorders may cause cough, dyspnoea,
            wheeze-like sounds or stridor.
          </p>

          <h3>Assess</h3>

          <ul>
            <li>Nasal obstruction</li>
            <li>Nasal discharge</li>
            <li>Nasal polyps</li>
            <li>Sinus tenderness</li>
            <li>Oral cavity</li>
            <li>Pharynx</li>
            <li>Tonsils</li>
            <li>Voice</li>
            <li>Stridor</li>
          </ul>

          <h3>Clinical Confirmation</h3>

          <p>
            Persistent upper-airway symptoms may require direct visualization,
            specialist assessment or appropriate imaging depending on the
            suspected pathology.
          </p>

        `
      }
    },


    // ============================================================
    // 20. RESPIRATORY CLINICAL PATTERNS
    // ============================================================

    {
      id: "resp-clinical-patterns",
      name: "Clinical Patterns and Correlation",

      notes: {
        anatomy: `

          <h2>Respiratory Clinical Patterns</h2>

          <h3>1. Consolidation</h3>

          <p>Possible findings include:</p>

          <ul>
            <li>Reduced chest expansion</li>
            <li>Dull percussion</li>
            <li>Bronchial breathing</li>
            <li>Increased vocal resonance</li>
            <li>Crackles</li>
          </ul>

          <p>
            Findings should be correlated with the history, imaging and relevant
            laboratory investigations.
          </p>

          <h3>2. Pleural Effusion</h3>

          <p>Possible findings include:</p>

          <ul>
            <li>Reduced chest expansion</li>
            <li>Stony dull percussion</li>
            <li>Reduced breath sounds</li>
            <li>Reduced tactile vocal fremitus</li>
            <li>Reduced vocal resonance</li>
          </ul>

          <h3>3. Pneumothorax</h3>

          <p>Possible findings include:</p>

          <ul>
            <li>Reduced chest expansion</li>
            <li>Hyperresonant percussion</li>
            <li>Reduced or absent breath sounds</li>
            <li>Reduced vocal fremitus</li>
          </ul>

          <p>
            Tension pneumothorax is a medical emergency and may present with
            severe respiratory distress and cardiovascular compromise.
          </p>

          <h3>4. Airway Obstruction</h3>

          <ul>
            <li>Wheeze</li>
            <li>Prolonged expiration</li>
            <li>Reduced expiratory airflow</li>
            <li>Accessory muscle use</li>
            <li>Hyperinflation in chronic disease</li>
          </ul>

          <h3>5. Pulmonary Oedema</h3>

          <ul>
            <li>Dyspnoea</li>
            <li>Crackles</li>
            <li>Hypoxaemia</li>
            <li>Orthopnoea</li>
            <li>Peripheral oedema</li>
            <li>Raised JVP when associated with cardiac failure</li>
          </ul>

          <h3>6. Lung Collapse</h3>

          <ul>
            <li>Reduced chest expansion</li>
            <li>Dull percussion</li>
            <li>Reduced breath sounds</li>
            <li>Volume-loss features</li>
            <li>Possible mediastinal shift toward the affected side</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 21. RESPIRATORY EXAMINATION OSCE
    // ============================================================

    {
      id: "resp-osce",
      name: "Complete Respiratory Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Respiratory Examination — OSCE Sequence</h2>

          <h3>Opening</h3>

          <ol>
            <li>Wash hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm the patient's identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain before proceeding.</li>
            <li>Position the patient appropriately.</li>
            <li>Expose the chest adequately while maintaining dignity.</li>
          </ol>

          <h3>General Examination</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Assess respiratory distress.</li>
            <li>Observe ability to speak.</li>
            <li>Measure respiratory rate.</li>
            <li>Measure pulse.</li>
            <li>Measure blood pressure.</li>
            <li>Measure temperature.</li>
            <li>Measure oxygen saturation.</li>
            <li>Inspect the hands.</li>
            <li>Assess for clubbing.</li>
            <li>Assess for cyanosis.</li>
            <li>Inspect the face and eyes.</li>
            <li>Inspect the mouth.</li>
            <li>Assess the neck.</li>
            <li>Assess JVP when relevant.</li>
            <li>Assess cervical and supraclavicular lymph nodes.</li>
          </ol>

          <h3>Respiratory Examination</h3>

          <h4>Inspection</h4>

          <ol>
            <li>Inspect the chest from the front.</li>
            <li>Inspect from the side.</li>
            <li>Inspect from behind.</li>
            <li>Assess chest shape.</li>
            <li>Assess respiratory movement.</li>
            <li>Assess symmetry.</li>
            <li>Look for scars and deformities.</li>
            <li>Look for accessory muscle use.</li>
          </ol>

          <h4>Palpation</h4>

          <ol>
            <li>Assess tracheal position.</li>
            <li>Assess chest expansion.</li>
            <li>Assess tactile vocal fremitus when indicated.</li>
          </ol>

          <h4>Percussion</h4>

          <ol>
            <li>Percuss anterior chest.</li>
            <li>Percuss lateral chest.</li>
            <li>Percuss posterior chest.</li>
            <li>Compare corresponding areas bilaterally.</li>
          </ol>

          <h4>Auscultation</h4>

          <ol>
            <li>Auscultate anterior lung fields.</li>
            <li>Auscultate lateral lung fields.</li>
            <li>Auscultate posterior lung fields.</li>
            <li>Compare both sides.</li>
            <li>Assess breath sounds.</li>
            <li>Listen for added sounds.</li>
            <li>Assess vocal resonance when indicated.</li>
          </ol>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Allow the patient to dress.</li>
            <li>Ensure the patient is comfortable.</li>
            <li>Wash hands.</li>
            <li>Summarize the findings.</li>
            <li>State the likely clinical pattern.</li>
            <li>Formulate differential diagnoses.</li>
            <li>Recommend appropriate investigations.</li>
          </ol>

          <h3>Confirmation Framework</h3>

          <p>
            The final clinical impression should be based on concordance between:
          </p>

          <ol>
            <li>
              <strong>History:</strong> symptom pattern, chronology and risk factors.
            </li>

            <li>
              <strong>General examination:</strong> severity and systemic manifestations.
            </li>

            <li>
              <strong>Respiratory examination:</strong> anatomical localization
              and physical signs.
            </li>

            <li>
              <strong>Physiological assessment:</strong> oxygenation, ventilation
              and airflow.
            </li>

            <li>
              <strong>Imaging:</strong> structural confirmation where indicated.
            </li>

            <li>
              <strong>Laboratory and microbiology:</strong> confirmation of
              infectious, inflammatory or other causes.
            </li>

            <li>
              <strong>Special investigations:</strong> pulmonary function testing,
              CT, bronchoscopy, echocardiography or other targeted tests when
              clinically indicated.
            </li>
          </ol>

        `
      }
    }

  ]
};