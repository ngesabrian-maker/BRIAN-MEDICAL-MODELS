export const clinicalMethodsGastrointestinal = {

  id: "clinicalMethodsGastrointestinal",

  name: "🩺 Clinical Methods",

  modelPath: "models/gastrointestinal/",

  modelFile: "clinical_methods.glb",

  parts: [

    // ============================================================
    // 1. INTRODUCTION
    // ============================================================

    {
      id: "gi-clinical-overview",
      name: "Introduction to Gastrointestinal Clinical Assessment",

      notes: {
        anatomy: `

          <h2>Gastrointestinal Clinical Assessment</h2>

          <h3>Overview</h3>

          <p>
            Gastrointestinal clinical assessment is a systematic process of
            obtaining a focused history, performing a general and abdominal
            examination, identifying gastrointestinal and hepatobiliary
            abnormalities, developing differential diagnoses and selecting
            appropriate investigations for confirmation.
          </p>

          <h3>Main Components</h3>

          <ol>
            <li>Patient identification and preparation</li>
            <li>Gastrointestinal history</li>
            <li>General examination</li>
            <li>Abdominal examination</li>
            <li>Perianal and rectal assessment when indicated</li>
            <li>Hepatobiliary examination</li>
            <li>Relevant systemic examination</li>
            <li>Laboratory investigations</li>
            <li>Imaging and endoscopic investigations</li>
            <li>Clinical interpretation and confirmation</li>
          </ol>

          <h3>Basic Examination Sequence</h3>

          <p>
            A systematic abdominal examination follows:
          </p>

          <p>
            <strong>
              General inspection → Hands → Face → Mouth → Abdomen inspection →
              Auscultation → Percussion → Palpation → Special tests →
              Hernial or rectal examination when indicated
            </strong>
          </p>

          <h3>Important Principle</h3>

          <p>
            In abdominal examination, auscultation is performed before percussion
            and palpation because manipulation of the abdomen may alter bowel
            sounds.
          </p>

        `
      }
    },


    // ============================================================
    // 2. CHIEF COMPLAINTS
    // ============================================================

    {
      id: "gi-chief-complaints",
      name: "Gastrointestinal Complaints",

      notes: {
        anatomy: `

          <h2>Gastrointestinal Chief Complaints</h2>

          <p>
            Begin by identifying the patient's principal complaints and document
            each complaint with its duration.
          </p>

          <h3>Common Complaints</h3>

          <ul>
            <li>Abdominal pain</li>
            <li>Nausea</li>
            <li>Vomiting</li>
            <li>Diarrhoea</li>
            <li>Constipation</li>
            <li>Abdominal distension</li>
            <li>Dysphagia</li>
            <li>Odynophagia</li>
            <li>Heartburn</li>
            <li>Regurgitation</li>
            <li>Haematemesis</li>
            <li>Melena</li>
            <li>Hematochezia</li>
            <li>Jaundice</li>
            <li>Pruritus</li>
            <li>Weight loss</li>
            <li>Loss of appetite</li>
            <li>Altered bowel habit</li>
            <li>Tenesmus</li>
          </ul>

          <h3>Documentation</h3>

          <p>
            Each complaint should be recorded with the duration and arranged
            chronologically where possible.
          </p>

        `
      }
    },


    // ============================================================
    // 3. HISTORY OF PRESENTING ILLNESS
    // ============================================================

    {
      id: "gi-hpi",
      name: "History of Presenting Illness",

      notes: {
        anatomy: `

          <h2>History of Presenting Illness</h2>

          <p>
            Establish the sequence of events from the first symptom to the
            current presentation.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Identify the first symptom.</li>
            <li>Determine its onset.</li>
            <li>Determine whether onset was sudden or gradual.</li>
            <li>Determine duration.</li>
            <li>Determine progression.</li>
            <li>Characterize each major symptom.</li>
            <li>Identify precipitating factors.</li>
            <li>Identify relieving factors.</li>
            <li>Ask about associated gastrointestinal symptoms.</li>
            <li>Ask about systemic symptoms.</li>
            <li>Ask about previous similar episodes.</li>
            <li>Determine previous treatment and response.</li>
          </ol>

          <h3>Important Associated Symptoms</h3>

          <ul>
            <li>Fever</li>
            <li>Weight loss</li>
            <li>Anorexia</li>
            <li>Night sweats</li>
            <li>Fatigue</li>
            <li>Jaundice</li>
            <li>Urinary symptoms</li>
            <li>Respiratory symptoms</li>
            <li>Cardiovascular symptoms</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 4. ABDOMINAL PAIN
    // ============================================================

    {
      id: "gi-abdominal-pain",
      name: "Abdominal Pain Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Abdominal Pain</h2>

          <p>
            Abdominal pain should be characterized systematically because
            location, radiation, timing and associated features can provide
            important diagnostic clues.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ask the patient to point to the site of maximum pain.</li>
            <li>Determine the onset.</li>
            <li>Determine whether onset was sudden or gradual.</li>
            <li>Determine duration.</li>
            <li>Determine the course.</li>
            <li>Determine the character.</li>
            <li>Determine severity.</li>
            <li>Determine radiation.</li>
            <li>Ask about aggravating factors.</li>
            <li>Ask about relieving factors.</li>
            <li>Ask about relationship to meals.</li>
            <li>Ask about bowel movements.</li>
            <li>Ask about urination.</li>
            <li>Ask about menstrual or pregnancy-related factors when relevant.</li>
            <li>Ask about associated symptoms.</li>
          </ol>

          <h3>Character</h3>

          <ul>
            <li>Colicky</li>
            <li>Burning</li>
            <li>Cramping</li>
            <li>Sharp</li>
            <li>Dull</li>
            <li>Constant</li>
            <li>Intermittent</li>
          </ul>

          <h3>Associated Symptoms</h3>

          <ul>
            <li>Vomiting</li>
            <li>Diarrhoea</li>
            <li>Constipation</li>
            <li>Abdominal distension</li>
            <li>Fever</li>
            <li>Gastrointestinal bleeding</li>
            <li>Jaundice</li>
            <li>Weight loss</li>
            <li>Urinary symptoms</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            The location and character of pain guide further examination and
            investigation. Confirmation depends on the suspected diagnosis and
            may require laboratory tests, ultrasound, CT, endoscopy or other
            targeted investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 5. NAUSEA AND VOMITING
    // ============================================================

    {
      id: "gi-nausea-vomiting",
      name: "Nausea and Vomiting",

      notes: {
        anatomy: `

          <h2>Nausea and Vomiting</h2>

          <h3>STEP-BY-STEP HISTORY</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine duration.</li>
            <li>Determine frequency.</li>
            <li>Determine relationship to meals.</li>
            <li>Characterize the vomitus.</li>
            <li>Determine volume where possible.</li>
            <li>Ask about blood.</li>
            <li>Ask about bile.</li>
            <li>Ask about feculent material.</li>
            <li>Ask about abdominal pain.</li>
            <li>Ask about bowel obstruction symptoms.</li>
            <li>Assess hydration status.</li>
          </ol>

          <h3>Vomitus Characteristics</h3>

          <ul>
            <li>Food particles</li>
            <li>Bile</li>
            <li>Blood</li>
            <li>Coffee-ground material</li>
            <li>Feculent material</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Investigation depends on the suspected cause. Assessment may include
            electrolyte measurement, renal function, pregnancy testing where
            appropriate, abdominal imaging or endoscopy.
          </p>

        `
      }
    },


    // ============================================================
    // 6. DYSPHAGIA
    // ============================================================

    {
      id: "gi-dysphagia",
      name: "Dysphagia Assessment",

      notes: {
        anatomy: `

          <h2>Dysphagia</h2>

          <p>
            Dysphagia refers to difficulty swallowing. The history should
            distinguish oropharyngeal from oesophageal dysphagia.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine whether symptoms are progressive.</li>
            <li>Determine whether difficulty occurs with solids.</li>
            <li>Determine whether difficulty occurs with liquids.</li>
            <li>Ask about difficulty initiating swallowing.</li>
            <li>Ask about coughing during swallowing.</li>
            <li>Ask about choking.</li>
            <li>Ask about food sticking in the chest.</li>
            <li>Ask about regurgitation.</li>
            <li>Ask about weight loss.</li>
            <li>Ask about odynophagia.</li>
          </ol>

          <h3>Clinical Significance</h3>

          <p>
            Difficulty initiating swallowing, coughing or choking may suggest
            oropharyngeal dysfunction. Difficulty with food passage after
            swallowing may suggest oesophageal pathology.
          </p>

          <h3>Confirmation</h3>

          <p>
            Depending on the suspected cause, confirmation may involve upper
            gastrointestinal endoscopy, contrast swallow studies, swallowing
            assessment or oesophageal manometry.
          </p>

        `
      }
    },


    // ============================================================
    // 7. DIARRHOEA
    // ============================================================

    {
      id: "gi-diarrhoea",
      name: "Diarrhoea Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Diarrhoea</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine duration.</li>
            <li>Determine frequency of stools.</li>
            <li>Determine stool consistency.</li>
            <li>Ask about blood.</li>
            <li>Ask about mucus.</li>
            <li>Ask about tenesmus.</li>
            <li>Ask about abdominal pain.</li>
            <li>Ask about fever.</li>
            <li>Ask about vomiting.</li>
            <li>Ask about recent travel.</li>
            <li>Ask about unsafe food or water exposure.</li>
            <li>Ask about recent antibiotics.</li>
            <li>Ask about sick contacts.</li>
            <li>Assess dehydration.</li>
            <li>Ask about weight loss in chronic diarrhoea.</li>
          </ol>

          <h3>Stool Description</h3>

          <ul>
            <li>Watery</li>
            <li>Loose</li>
            <li>Bloody</li>
            <li>Mucous</li>
            <li>Greasy or bulky</li>
            <li>Black or tarry</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Depending on the presentation, investigations may include stool
            microscopy, culture, molecular testing, occult blood testing,
            full blood count, electrolytes and other targeted investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 8. CONSTIPATION
    // ============================================================

    {
      id: "gi-constipation",
      name: "Constipation Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Constipation</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Determine duration.</li>
            <li>Determine stool frequency.</li>
            <li>Determine stool consistency.</li>
            <li>Ask about straining.</li>
            <li>Ask about incomplete evacuation.</li>
            <li>Ask about manual assistance.</li>
            <li>Ask about abdominal pain.</li>
            <li>Ask about abdominal distension.</li>
            <li>Ask about vomiting.</li>
            <li>Ask about blood in stool.</li>
            <li>Ask about weight loss.</li>
            <li>Review medications.</li>
            <li>Assess diet and fluid intake.</li>
            <li>Assess physical activity.</li>
          </ol>

          <h3>Red Flags</h3>

          <ul>
            <li>New onset in an older patient</li>
            <li>Rectal bleeding</li>
            <li>Unexplained weight loss</li>
            <li>Iron-deficiency anaemia</li>
            <li>Persistent vomiting</li>
            <li>Severe abdominal pain</li>
            <li>Progressive change in bowel habit</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Further evaluation depends on the clinical presentation and presence
            of alarm features. Rectal examination, laboratory investigations,
            endoscopy or imaging may be required.
          </p>

        `
      }
    },


    // ============================================================
    // 9. GI BLEEDING
    // ============================================================

    {
      id: "gi-bleeding",
      name: "Gastrointestinal Bleeding",

      notes: {
        anatomy: `

          <h2>Gastrointestinal Bleeding</h2>

          <h3>Major Presentations</h3>

          <ul>
            <li>Haematemesis</li>
            <li>Coffee-ground vomiting</li>
            <li>Melena</li>
            <li>Hematochezia</li>
          </ul>

          <h3>STEP-BY-STEP HISTORY</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine estimated amount of bleeding.</li>
            <li>Characterize the blood.</li>
            <li>Ask whether blood was vomited or passed per rectum.</li>
            <li>Ask about dizziness.</li>
            <li>Ask about syncope.</li>
            <li>Ask about weakness.</li>
            <li>Ask about abdominal pain.</li>
            <li>Ask about previous gastrointestinal bleeding.</li>
            <li>Ask about NSAID use.</li>
            <li>Ask about anticoagulant or antiplatelet use.</li>
            <li>Ask about liver disease.</li>
            <li>Ask about alcohol use.</li>
          </ol>

          <h3>Immediate Examination</h3>

          <ul>
            <li>Airway</li>
            <li>Breathing</li>
            <li>Circulation</li>
            <li>Pulse</li>
            <li>Blood pressure</li>
            <li>Level of consciousness</li>
            <li>Peripheral perfusion</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Investigations may include full blood count, blood grouping and
            crossmatching, coagulation studies, renal and liver function tests,
            and endoscopy according to the clinical presentation.
          </p>

        `
      }
    },


    // ============================================================
    // 10. JAUNDICE
    // ============================================================

    {
      id: "gi-jaundice",
      name: "Jaundice Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Jaundice</h2>

          <p>
            Jaundice is yellow discoloration of tissues caused by increased
            bilirubin. Clinical assessment should distinguish hepatocellular,
            cholestatic and prehepatic patterns.
          </p>

          <h3>STEP-BY-STEP HISTORY</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine progression.</li>
            <li>Ask about dark urine.</li>
            <li>Ask about pale stools.</li>
            <li>Ask about pruritus.</li>
            <li>Ask about abdominal pain.</li>
            <li>Ask about fever.</li>
            <li>Ask about weight loss.</li>
            <li>Ask about alcohol exposure.</li>
            <li>Ask about medications.</li>
            <li>Ask about hepatitis exposure.</li>
            <li>Ask about blood transfusion.</li>
            <li>Ask about travel.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Scleral icterus</li>
            <li>Skin jaundice</li>
            <li>Scratch marks</li>
            <li>Hepatomegaly</li>
            <li>Splenomegaly</li>
            <li>Ascites</li>
            <li>Signs of chronic liver disease</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Confirm biochemical jaundice with serum bilirubin testing and
            characterize the pattern using liver function tests. Ultrasound
            and other imaging may be required to identify biliary obstruction
            or structural disease.
          </p>

        `
      }
    },


    // ============================================================
    // 11. WEIGHT LOSS AND APPETITE
    // ============================================================

    {
      id: "gi-weight-loss",
      name: "Weight Loss and Appetite Assessment",

      notes: {
        anatomy: `

          <h2>Weight Loss and Appetite</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Determine whether weight loss is intentional.</li>
            <li>Determine the amount of weight lost.</li>
            <li>Determine the time period.</li>
            <li>Ask about appetite.</li>
            <li>Ask about early satiety.</li>
            <li>Ask about dysphagia.</li>
            <li>Ask about vomiting.</li>
            <li>Ask about diarrhoea.</li>
            <li>Ask about abdominal pain.</li>
            <li>Ask about gastrointestinal bleeding.</li>
            <li>Ask about systemic symptoms.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Body mass</li>
            <li>Muscle wasting</li>
            <li>Subcutaneous fat loss</li>
            <li>Dehydration</li>
            <li>Pallor</li>
            <li>Jaundice</li>
            <li>Lymphadenopathy</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Investigations should be guided by the clinical history and
            examination. They may include blood tests, stool investigations,
            imaging and endoscopy where indicated.
          </p>

        `
      }
    },


    // ============================================================
    // 12. GENERAL EXAMINATION
    // ============================================================

    {
      id: "gi-general-examination",
      name: "General Examination",

      notes: {
        anatomy: `

          <h2>General Examination in Gastrointestinal Disease</h2>

          <h3>Preparation</h3>

          <ol>
            <li>Wash or sanitize hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain.</li>
            <li>Position the patient appropriately.</li>
            <li>Expose the patient adequately while maintaining dignity.</li>
          </ol>

          <h3>General Appearance</h3>

          <ul>
            <li>Level of consciousness</li>
            <li>Degree of distress</li>
            <li>Nutritional status</li>
            <li>Hydration status</li>
            <li>Body habitus</li>
            <li>Cachexia</li>
            <li>Pallor</li>
            <li>Jaundice</li>
          </ul>

          <h3>Vital Signs</h3>

          <ul>
            <li>Temperature</li>
            <li>Pulse</li>
            <li>Blood pressure</li>
            <li>Respiratory rate</li>
            <li>Oxygen saturation where clinically indicated</li>
          </ul>

          <h3>Look for Signs of</h3>

          <ul>
            <li>Dehydration</li>
            <li>Shock</li>
            <li>Anaemia</li>
            <li>Sepsis</li>
            <li>Chronic liver disease</li>
            <li>Malnutrition</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 13. HANDS
    // ============================================================

    {
      id: "gi-hands",
      name: "Hands and Peripheral Signs",

      notes: {
        anatomy: `

          <h2>Examination of the Hands</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect the dorsum of the hands.</li>
            <li>Inspect the palms.</li>
            <li>Inspect the nails.</li>
            <li>Assess for pallor.</li>
            <li>Assess for clubbing.</li>
            <li>Assess for peripheral cyanosis.</li>
            <li>Assess for palmar erythema.</li>
            <li>Assess for tremor.</li>
          </ol>

          <h3>Important Signs</h3>

          <ul>
            <li>Clubbing</li>
            <li>Palmar erythema</li>
            <li>Leukonychia</li>
            <li>Koilonychia</li>
            <li>Peripheral cyanosis</li>
            <li>Tremor</li>
            <li>Dupuytren contracture</li>
          </ul>

          <h3>Clinical Interpretation</h3>

          <p>
            These findings may provide clues to chronic liver disease,
            nutritional deficiency, anaemia or systemic gastrointestinal disease.
          </p>

        `
      }
    },


    // ============================================================
    // 14. FACE AND MOUTH
    // ============================================================

    {
      id: "gi-face-mouth",
      name: "Face, Eyes and Mouth",

      notes: {
        anatomy: `

          <h2>Face, Eyes and Mouth Examination</h2>

          <h3>Face and Eyes</h3>

          <ul>
            <li>Pallor</li>
            <li>Jaundice</li>
            <li>Dehydration</li>
            <li>Periorbital changes</li>
            <li>Temporal wasting</li>
          </ul>

          <h3>Mouth</h3>

          <ol>
            <li>Inspect the lips.</li>
            <li>Inspect the tongue.</li>
            <li>Inspect the oral mucosa.</li>
            <li>Assess hydration.</li>
            <li>Look for ulcers.</li>
            <li>Look for pigmentation.</li>
            <li>Assess dentition where relevant.</li>
          </ol>

          <h3>Look For</h3>

          <ul>
            <li>Dry mucous membranes</li>
            <li>Oral ulcers</li>
            <li>Glossitis</li>
            <li>Angular cheilitis</li>
            <li>Oral candidiasis</li>
            <li>Hyperpigmentation</li>
            <li>Jaundice</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 15. ABDOMINAL INSPECTION
    // ============================================================

    {
      id: "gi-abdominal-inspection",
      name: "Abdominal Inspection",

      notes: {
        anatomy: `

          <h2>Inspection of the Abdomen</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient supine.</li>
            <li>Expose the abdomen from the costal margins to the pubic region.</li>
            <li>Ensure adequate lighting.</li>
            <li>Inspect the abdomen from the end of the bed.</li>
            <li>Inspect from both sides.</li>
            <li>Observe abdominal contour.</li>
            <li>Look for scars.</li>
            <li>Look for distension.</li>
            <li>Look for visible veins.</li>
            <li>Look for hernias.</li>
            <li>Look for masses.</li>
            <li>Look for visible peristalsis.</li>
            <li>Look for pulsations.</li>
            <li>Inspect the umbilicus.</li>
            <li>Inspect the skin.</li>
          </ol>

          <h3>Important Findings</h3>

          <ul>
            <li>Distension</li>
            <li>Scars</li>
            <li>Striae</li>
            <li>Visible veins</li>
            <li>Umbilical abnormalities</li>
            <li>Hernias</li>
            <li>Visible peristalsis</li>
            <li>Abdominal masses</li>
            <li>Ascites</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 16. ABDOMINAL AUSCULTATION
    // ============================================================

    {
      id: "gi-auscultation",
      name: "Abdominal Auscultation",

      notes: {
        anatomy: `

          <h2>Abdominal Auscultation</h2>

          <p>
            Auscultation is performed before percussion and palpation.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Place the patient supine.</li>
            <li>Ensure the abdomen is adequately exposed.</li>
            <li>Warm the stethoscope where possible.</li>
            <li>Place the diaphragm over the abdomen.</li>
            <li>Listen for bowel sounds.</li>
            <li>Assess their frequency and character.</li>
            <li>Listen for vascular bruits when indicated.</li>
            <li>Listen for other abnormal sounds where clinically relevant.</li>
          </ol>

          <h3>Assess For</h3>

          <ul>
            <li>Normal bowel sounds</li>
            <li>Increased bowel sounds</li>
            <li>Reduced bowel sounds</li>
            <li>Absent bowel sounds</li>
            <li>Abdominal bruits</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Abnormal bowel sounds are nonspecific and should be interpreted
            together with the history and other abdominal findings. Suspected
            obstruction or vascular pathology may require imaging.
          </p>

        `
      }
    },


    // ============================================================
    // 17. ABDOMINAL PERCUSSION
    // ============================================================

    {
      id: "gi-percussion",
      name: "Abdominal Percussion",

      notes: {
        anatomy: `

          <h2>Abdominal Percussion</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ensure the patient is relaxed.</li>
            <li>Begin percussion systematically across the abdomen.</li>
            <li>Assess for tympany.</li>
            <li>Assess for areas of dullness.</li>
            <li>Percuss the liver.</li>
            <li>Percuss the spleen when indicated.</li>
            <li>Assess for shifting dullness when ascites is suspected.</li>
          </ol>

          <h3>Clinical Uses</h3>

          <ul>
            <li>Estimate liver span.</li>
            <li>Assess splenic enlargement.</li>
            <li>Identify areas of abnormal dullness.</li>
            <li>Assess for ascites.</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Percussion findings suggesting organ enlargement or ascites should
            be correlated with palpation and, where necessary, confirmed with
            ultrasonography or other imaging.
          </p>

        `
      }
    },


    // ============================================================
    // 18. ABDOMINAL PALPATION
    // ============================================================

    {
      id: "gi-palpation",
      name: "Abdominal Palpation",

      notes: {
        anatomy: `

          <h2>Abdominal Palpation</h2>

          <h3>Preparation</h3>

          <ol>
            <li>Ask the patient to empty the bladder where appropriate.</li>
            <li>Position the patient supine.</li>
            <li>Flex the knees slightly if this improves relaxation.</li>
            <li>Warm your hands.</li>
            <li>Ask the patient where the pain is greatest.</li>
            <li>Examine the painful area last.</li>
          </ol>

          <h3>Light Palpation</h3>

          <ol>
            <li>Begin away from the area of pain.</li>
            <li>Palpate each abdominal region systematically.</li>
            <li>Assess tenderness.</li>
            <li>Assess guarding.</li>
            <li>Assess superficial masses.</li>
          </ol>

          <h3>Deep Palpation</h3>

          <ol>
            <li>Palpate each abdominal region systematically.</li>
            <li>Assess for deeper masses.</li>
            <li>Assess organ enlargement.</li>
            <li>Assess tenderness.</li>
            <li>Assess consistency and mobility of masses.</li>
          </ol>

          <h3>Assess</h3>

          <ul>
            <li>Tenderness</li>
            <li>Guarding</li>
            <li>Rigidity</li>
            <li>Rebound tenderness where clinically appropriate</li>
            <li>Masses</li>
            <li>Organomegaly</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 19. LIVER
    // ============================================================

    {
      id: "gi-liver-examination",
      name: "Liver Examination",

      notes: {
        anatomy: `

          <h2>Examination of the Liver</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient supine.</li>
            <li>Stand on the patient's right side.</li>
            <li>Place your hand in the right lower abdomen.</li>
            <li>Ask the patient to breathe deeply.</li>
            <li>Advance the hand toward the right costal margin.</li>
            <li>Repeat during inspiration.</li>
            <li>Determine whether the liver edge is palpable.</li>
            <li>Assess the liver edge.</li>
            <li>Assess consistency.</li>
            <li>Assess tenderness.</li>
            <li>Assess surface where appropriate.</li>
            <li>Estimate the extent of enlargement.</li>
          </ol>

          <h3>Assess</h3>

          <ul>
            <li>Size</li>
            <li>Surface</li>
            <li>Edge</li>
            <li>Consistency</li>
            <li>Tenderness</li>
            <li>Pulsatility</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Suspected hepatomegaly should be confirmed and characterized with
            appropriate imaging, usually ultrasonography as an initial modality
            where available and clinically appropriate.
          </p>

        `
      }
    },


    // ============================================================
    // 20. SPLEEN
    // ============================================================

    {
      id: "gi-spleen-examination",
      name: "Spleen Examination",

      notes: {
        anatomy: `

          <h2>Examination of the Spleen</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient supine.</li>
            <li>Stand on the patient's right side.</li>
            <li>Begin palpation in the right lower abdomen.</li>
            <li>Move diagonally toward the left costal margin.</li>
            <li>Ask the patient to breathe deeply.</li>
            <li>Advance the hand toward the left costal margin during inspiration.</li>
            <li>Determine whether the spleen is palpable.</li>
            <li>Assess its edge.</li>
            <li>Assess consistency.</li>
            <li>Assess tenderness.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Suspected splenomegaly should be confirmed with imaging,
            particularly abdominal ultrasonography when appropriate.
          </p>

        `
      }
    },


    // ============================================================
    // 21. KIDNEY EXAMINATION
    // ============================================================

    {
      id: "gi-kidney-examination",
      name: "Renal Examination",

      notes: {
        anatomy: `

          <h2>Examination of the Kidneys</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient supine.</li>
            <li>Place one hand posteriorly at the renal angle.</li>
            <li>Place the other hand anteriorly.</li>
            <li>Ask the patient to breathe deeply.</li>
            <li>Attempt to capture the kidney between the hands.</li>
            <li>Assess for enlargement or tenderness.</li>
            <li>Repeat on the opposite side.</li>
          </ol>

          <h3>Assess</h3>

          <ul>
            <li>Renal enlargement</li>
            <li>Renal tenderness</li>
            <li>Renal masses</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Suspected renal enlargement or renal pathology is usually evaluated
            with appropriate imaging and renal function testing.
          </p>

        `
      }
    },


    // ============================================================
    // 22. ASCITES
    // ============================================================

    {
      id: "gi-ascites",
      name: "Assessment of Ascites",

      notes: {
        anatomy: `

          <h2>Assessment of Ascites</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Abdominal distension</li>
            <li>Flank fullness</li>
            <li>Everted umbilicus</li>
            <li>Abdominal wall veins</li>
          </ul>

          <h3>Shifting Dullness</h3>

          <ol>
            <li>Position the patient supine.</li>
            <li>Percuss from the central abdomen toward the flank.</li>
            <li>Identify the transition from tympany to dullness.</li>
            <li>Mark or note the area of dullness.</li>
            <li>Ask the patient to turn onto one side.</li>
            <li>Allow sufficient time for fluid redistribution.</li>
            <li>Repeat percussion.</li>
            <li>Assess whether the area of dullness shifts.</li>
          </ol>

          <h3>Fluid Thrill</h3>

          <p>
            A fluid thrill may be assessed in marked ascites using appropriate
            technique while preventing transmission through the abdominal wall.
          </p>

          <h3>Confirmation</h3>

          <p>
            Clinical suspicion of ascites should be confirmed with
            ultrasonography. Diagnostic paracentesis may be required when the
            cause needs evaluation or when infection or another complication is
            suspected.
          </p>

        `
      }
    },


    // ============================================================
    // 23. HERNIA EXAMINATION
    // ============================================================

    {
      id: "gi-hernia",
      name: "Hernia Examination",

      notes: {
        anatomy: `

          <h2>Examination for Hernias</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect the abdomen and groin for swellings.</li>
            <li>Ask the patient to cough or strain where appropriate.</li>
            <li>Observe for an impulse.</li>
            <li>Palpate the swelling.</li>
            <li>Assess tenderness.</li>
            <li>Assess consistency.</li>
            <li>Assess whether the swelling is reducible when safe.</li>
            <li>Identify the anatomical location.</li>
            <li>Assess for signs of obstruction or strangulation.</li>
          </ol>

          <h3>Warning Signs</h3>

          <ul>
            <li>Severe pain</li>
            <li>Tender irreducible swelling</li>
            <li>Skin discoloration</li>
            <li>Vomiting</li>
            <li>Abdominal distension</li>
            <li>Failure to pass stool or flatus</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Many hernias are diagnosed clinically. Ultrasound or CT may be used
            when the diagnosis is uncertain or complications are suspected.
          </p>

        `
      }
    },


    // ============================================================
    // 24. RECTAL EXAMINATION
    // ============================================================

    {
      id: "gi-rectal-examination",
      name: "Digital Rectal Examination",

      notes: {
        anatomy: `

          <h2>Digital Rectal Examination</h2>

          <p>
            Digital rectal examination is performed only when clinically
            indicated and requires explanation, consent, appropriate privacy
            and a suitable chaperone according to local policy.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Explain the procedure clearly.</li>
            <li>Obtain consent.</li>
            <li>Provide privacy.</li>
            <li>Offer an appropriate chaperone.</li>
            <li>Position the patient appropriately.</li>
            <li>Inspect the perianal region.</li>
            <li>Use appropriate gloves and lubricant.</li>
            <li>Warn the patient before insertion.</li>
            <li>Insert the lubricated finger gently.</li>
            <li>Assess anal tone.</li>
            <li>Assess the rectal wall.</li>
            <li>Assess for masses or tenderness.</li>
            <li>Assess stool where present.</li>
            <li>Inspect the glove for blood or abnormal material.</li>
            <li>Withdraw gently.</li>
            <li>Ensure patient comfort and dignity.</li>
          </ol>

          <h3>Clinical Indications</h3>

          <ul>
            <li>Rectal bleeding</li>
            <li>Suspected rectal mass</li>
            <li>Altered bowel habit</li>
            <li>Anal or rectal pain</li>
            <li>Selected neurological or pelvic conditions</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Abnormal findings may require proctoscopy, sigmoidoscopy,
            colonoscopy, imaging or biopsy depending on the suspected pathology.
          </p>

        `
      }
    },


    // ============================================================
    // 25. LIVER DISEASE
    // ============================================================

    {
      id: "gi-chronic-liver-disease",
      name: "Examination for Chronic Liver Disease",

      notes: {
        anatomy: `

          <h2>Clinical Examination for Chronic Liver Disease</h2>

          <h3>General Inspection</h3>

          <ul>
            <li>Jaundice</li>
            <li>Cachexia</li>
            <li>Muscle wasting</li>
            <li>Ascites</li>
            <li>Peripheral oedema</li>
          </ul>

          <h3>Hands</h3>

          <ul>
            <li>Clubbing</li>
            <li>Palmar erythema</li>
            <li>Leukonychia</li>
            <li>Dupuytren contracture</li>
            <li>Asterixis</li>
          </ul>

          <h3>Face</h3>

          <ul>
            <li>Jaundice</li>
            <li>Temporal wasting</li>
            <li>Parotid enlargement</li>
          </ul>

          <h3>Chest</h3>

          <ul>
            <li>Spider naevi</li>
            <li>Gynaecomastia</li>
          </ul>

          <h3>Abdomen</h3>

          <ul>
            <li>Hepatomegaly</li>
            <li>Splenomegaly</li>
            <li>Ascites</li>
            <li>Abdominal wall veins</li>
          </ul>

          <h3>Neurological Assessment</h3>

          <ul>
            <li>Confusion</li>
            <li>Asterixis</li>
            <li>Altered level of consciousness</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Chronic liver disease is evaluated using liver biochemistry,
            synthetic function assessment, blood counts, viral studies where
            appropriate, abdominal imaging and other targeted investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 26. ACUTE ABDOMEN
    // ============================================================

    {
      id: "gi-acute-abdomen",
      name: "Acute Abdomen",

      notes: {
        anatomy: `

          <h2>Assessment of the Acute Abdomen</h2>

          <p>
            An acute abdomen may represent a surgical emergency. Assessment
            should prioritize stabilization while simultaneously identifying
            potentially life-threatening causes.
          </p>

          <h3>Immediate Assessment</h3>

          <ol>
            <li>Assess airway.</li>
            <li>Assess breathing.</li>
            <li>Assess circulation.</li>
            <li>Measure vital signs.</li>
            <li>Assess level of consciousness.</li>
            <li>Assess hydration and perfusion.</li>
            <li>Assess severity of pain.</li>
          </ol>

          <h3>Abdominal Assessment</h3>

          <ol>
            <li>Inspect for distension.</li>
            <li>Listen for bowel sounds.</li>
            <li>Percuss the abdomen.</li>
            <li>Palpate for tenderness.</li>
            <li>Assess guarding.</li>
            <li>Assess rigidity.</li>
            <li>Assess for masses.</li>
            <li>Assess for hernias.</li>
            <li>Perform rectal or pelvic examination when indicated.</li>
          </ol>

          <h3>Red Flags</h3>

          <ul>
            <li>Shock</li>
            <li>Severe or rapidly worsening pain</li>
            <li>Peritonism</li>
            <li>Persistent vomiting</li>
            <li>Gastrointestinal bleeding</li>
            <li>Marked abdominal distension</li>
            <li>Absent bowel sounds in the appropriate context</li>
            <li>Severe tenderness</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Investigation depends on the suspected diagnosis and may include
            full blood count, electrolytes, renal function, liver tests,
            lactate where indicated, pregnancy testing where relevant,
            ultrasound, CT and other targeted investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 27. ENDOSCOPY
    // ============================================================

    {
      id: "gi-endoscopy",
      name: "Gastrointestinal Endoscopy",

      notes: {
        anatomy: `

          <h2>Gastrointestinal Endoscopy</h2>

          <h3>Upper GI Endoscopy</h3>

          <p>
            Upper gastrointestinal endoscopy allows direct visualization of the
            oesophagus, stomach and duodenum and permits biopsy or therapeutic
            intervention where indicated.
          </p>

          <h3>Clinical Uses</h3>

          <ul>
            <li>Upper gastrointestinal bleeding</li>
            <li>Dysphagia</li>
            <li>Persistent upper gastrointestinal symptoms</li>
            <li>Suspected malignancy</li>
            <li>Peptic ulcer disease</li>
            <li>Selected causes of anaemia</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Endoscopy can provide direct anatomical confirmation and allows
            tissue diagnosis through biopsy when required.
          </p>

          <h3>Colonoscopy</h3>

          <p>
            Colonoscopy permits direct visualization of the colon and terminal
            ileum where appropriate and allows biopsy or removal of selected
            lesions.
          </p>

          <h3>Clinical Uses</h3>

          <ul>
            <li>Rectal bleeding</li>
            <li>Unexplained iron-deficiency anaemia</li>
            <li>Persistent change in bowel habit</li>
            <li>Suspected colorectal malignancy</li>
            <li>Inflammatory bowel disease assessment</li>
            <li>Polyp detection and removal</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 28. ABDOMINAL ULTRASOUND
    // ============================================================

    {
      id: "gi-ultrasound",
      name: "Abdominal Ultrasonography",

      notes: {
        anatomy: `

          <h2>Abdominal Ultrasonography</h2>

          <p>
            Ultrasound is a non-invasive imaging technique commonly used to
            evaluate abdominal organs and the biliary system.
          </p>

          <h3>Clinical Uses</h3>

          <ul>
            <li>Gallstones</li>
            <li>Biliary obstruction</li>
            <li>Liver disease</li>
            <li>Hepatomegaly</li>
            <li>Splenomegaly</li>
            <li>Ascites</li>
            <li>Renal pathology</li>
            <li>Abdominal masses</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Ultrasound can confirm or characterize several structural
            abnormalities suspected during clinical examination, but findings
            should always be interpreted in the clinical context.
          </p>

        `
      }
    },


    // ============================================================
    // 29. LABORATORY INVESTIGATIONS
    // ============================================================

    {
      id: "gi-laboratory",
      name: "Gastrointestinal Laboratory Investigations",

      notes: {
        anatomy: `

          <h2>Laboratory Investigations</h2>

          <h3>Common Investigations</h3>

          <ul>
            <li>Full blood count</li>
            <li>Electrolytes</li>
            <li>Renal function</li>
            <li>Liver function tests</li>
            <li>Serum bilirubin</li>
            <li>Albumin</li>
            <li>Coagulation profile</li>
            <li>Amylase or lipase when indicated</li>
            <li>Inflammatory markers</li>
            <li>Iron studies</li>
            <li>Stool investigations</li>
          </ul>

          <h3>Stool Investigations</h3>

          <ul>
            <li>Microscopy</li>
            <li>Culture</li>
            <li>Occult blood testing</li>
            <li>Targeted pathogen testing</li>
            <li>Other specialized tests when indicated</li>
          </ul>

          <h3>Confirmation Principle</h3>

          <p>
            Laboratory investigations should be selected according to the
            clinical question rather than ordered indiscriminately.
          </p>

        `
      }
    },


    // ============================================================
    // 30. COMPLETE ABDOMINAL EXAMINATION
    // ============================================================

    {
      id: "gi-complete-abdominal-examination",
      name: "Complete Abdominal Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Abdominal Examination — OSCE</h2>

          <h3>Opening</h3>

          <ol>
            <li>Wash hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain.</li>
            <li>Position the patient appropriately.</li>
            <li>Expose the abdomen adequately.</li>
          </ol>

          <h3>General Inspection</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Assess nutritional status.</li>
            <li>Assess hydration.</li>
            <li>Look for pallor.</li>
            <li>Look for jaundice.</li>
            <li>Look for cachexia.</li>
          </ol>

          <h3>Hands</h3>

          <ol>
            <li>Inspect palms.</li>
            <li>Inspect nails.</li>
            <li>Assess clubbing.</li>
            <li>Assess palmar erythema.</li>
            <li>Assess for asterixis when indicated.</li>
          </ol>

          <h3>Face and Mouth</h3>

          <ol>
            <li>Assess conjunctivae for pallor.</li>
            <li>Assess sclerae for jaundice.</li>
            <li>Inspect the mouth.</li>
            <li>Assess hydration.</li>
            <li>Look for oral lesions.</li>
          </ol>

          <h3>Abdominal Inspection</h3>

          <ol>
            <li>Inspect abdominal contour.</li>
            <li>Look for scars.</li>
            <li>Look for distension.</li>
            <li>Look for visible veins.</li>
            <li>Inspect the umbilicus.</li>
            <li>Look for hernias.</li>
            <li>Look for visible peristalsis.</li>
            <li>Look for masses or pulsations.</li>
          </ol>

          <h3>Auscultation</h3>

          <ol>
            <li>Listen for bowel sounds.</li>
            <li>Assess their character.</li>
            <li>Listen for bruits where indicated.</li>
          </ol>

          <h3>Percussion</h3>

          <ol>
            <li>Percuss all abdominal regions.</li>
            <li>Assess for abnormal dullness.</li>
            <li>Assess liver span.</li>
            <li>Assess spleen where indicated.</li>
            <li>Assess for ascites.</li>
          </ol>

          <h3>Palpation</h3>

          <ol>
            <li>Perform light palpation.</li>
            <li>Assess tenderness.</li>
            <li>Assess guarding.</li>
            <li>Perform deep palpation.</li>
            <li>Assess for masses.</li>
            <li>Palpate the liver.</li>
            <li>Palpate the spleen.</li>
            <li>Assess the kidneys when indicated.</li>
            <li>Assess the aorta where appropriate.</li>
          </ol>

          <h3>Special Tests</h3>

          <ol>
            <li>Assess for ascites when indicated.</li>
            <li>Assess hernias.</li>
            <li>Perform appropriate hepatobiliary tests.</li>
            <li>Perform rectal examination when indicated.</li>
          </ol>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Allow the patient to dress.</li>
            <li>Ensure the patient is comfortable.</li>
            <li>Wash hands.</li>
            <li>Summarize the findings.</li>
            <li>State the major clinical abnormalities.</li>
            <li>Provide a differential diagnosis.</li>
            <li>Recommend appropriate investigations.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 31. DIAGNOSTIC CONFIRMATION
    // ============================================================

    {
      id: "gi-diagnostic-confirmation",
      name: "Diagnostic Confirmation Methods",

      notes: {
        anatomy: `

          <h2>Gastrointestinal Diagnostic Confirmation</h2>

          <p>
            A gastrointestinal diagnosis should be based on integration of the
            history, physical examination and appropriate investigations.
          </p>

          <h3>History</h3>

          <p>
            Establish the dominant symptom, chronology, risk factors, exposures,
            medication history and associated features.
          </p>

          <h3>Physical Examination</h3>

          <p>
            Identify objective findings such as tenderness, masses,
            organomegaly, jaundice, ascites, gastrointestinal bleeding,
            dehydration or peritonism.
          </p>

          <h3>Laboratory Confirmation</h3>

          <ul>
            <li>Full blood count</li>
            <li>Electrolytes</li>
            <li>Renal function</li>
            <li>Liver function tests</li>
            <li>Coagulation profile</li>
            <li>Pancreatic enzymes where indicated</li>
            <li>Inflammatory markers</li>
            <li>Stool testing</li>
          </ul>

          <h3>Imaging Confirmation</h3>

          <ul>
            <li>Ultrasound</li>
            <li>Plain abdominal radiography when indicated</li>
            <li>CT abdomen</li>
            <li>MRI or MRCP when indicated</li>
            <li>Specialized vascular imaging when required</li>
          </ul>

          <h3>Endoscopic Confirmation</h3>

          <ul>
            <li>Upper gastrointestinal endoscopy</li>
            <li>Colonoscopy</li>
            <li>Flexible sigmoidoscopy</li>
            <li>Proctoscopy where indicated</li>
          </ul>

          <h3>Histological Confirmation</h3>

          <p>
            When malignancy, inflammatory disease or another tissue pathology
            is suspected, biopsy followed by histopathological examination may
            provide definitive tissue diagnosis.
          </p>

          <h3>Important Principle</h3>

          <p>
            No single examination finding should automatically be considered
            diagnostic. Clinical findings should be correlated with the most
            appropriate confirmatory investigation.
          </p>

        `
      }
    }

  ]
};