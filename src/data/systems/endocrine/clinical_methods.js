export const clinicalMethodsEndocrine = {

  id: "clinicalMethodsEndocrine",

  name: "🩺 Clinical Methods",

  modelPath: "models/endocrine/",

  modelFile: "clinical_methods.glb",

  parts: [

    // ============================================================
    // 1. INTRODUCTION
    // ============================================================

    {
      id: "endocrine-overview",
      name: "Introduction to Endocrine Clinical Assessment",

      notes: {
        anatomy: `

          <h2>Endocrine Clinical Assessment</h2>

          <p>
            Endocrine assessment is based on a structured history, general
            examination, focused examination of individual endocrine glands,
            assessment of hormone-related syndromes and appropriate biochemical
            and imaging investigations.
          </p>

          <h3>Major Components</h3>

          <ol>
            <li>History taking</li>
            <li>General physical examination</li>
            <li>Anthropometric assessment</li>
            <li>Thyroid examination</li>
            <li>Parathyroid assessment</li>
            <li>Adrenal assessment</li>
            <li>Pituitary assessment</li>
            <li>Pancreatic endocrine assessment</li>
            <li>Gonadal and reproductive endocrine assessment</li>
            <li>Assessment of calcium and bone metabolism</li>
            <li>Assessment for endocrine complications</li>
            <li>Biochemical confirmation</li>
            <li>Dynamic endocrine testing</li>
            <li>Endocrine imaging</li>
          </ol>

          <h3>General Approach</h3>

          <p>
            The clinician should first identify the dominant endocrine syndrome,
            determine which gland or hormonal axis is likely involved, assess
            severity and complications, and then select appropriate tests for
            confirmation.
          </p>

        `
      }
    },


    // ============================================================
    // 2. ENDOCRINE HISTORY
    // ============================================================

    {
      id: "endocrine-history",
      name: "Endocrine History",

      notes: {
        anatomy: `

          <h2>Endocrine History</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Confirm patient identity.</li>
            <li>Establish the chief complaint.</li>
            <li>Determine the onset of symptoms.</li>
            <li>Determine duration and progression.</li>
            <li>Identify associated endocrine symptoms.</li>
            <li>Ask about weight change.</li>
            <li>Ask about appetite and thirst.</li>
            <li>Ask about urinary frequency.</li>
            <li>Ask about heat or cold intolerance.</li>
            <li>Ask about sweating.</li>
            <li>Ask about bowel habit.</li>
            <li>Ask about menstrual and reproductive function where relevant.</li>
            <li>Ask about sexual function.</li>
            <li>Ask about changes in hair and skin.</li>
            <li>Ask about muscle weakness.</li>
            <li>Ask about visual changes and headache.</li>
            <li>Review past medical history.</li>
            <li>Review medication history.</li>
            <li>Ask about previous endocrine disease.</li>
            <li>Ask about family history of endocrine disorders.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 3. GENERAL EXAMINATION
    // ============================================================

    {
      id: "endocrine-general-examination",
      name: "General Endocrine Examination",

      notes: {
        anatomy: `

          <h2>General Endocrine Examination</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Assess level of consciousness.</li>
            <li>Measure temperature where appropriate.</li>
            <li>Measure pulse rate and rhythm.</li>
            <li>Measure blood pressure.</li>
            <li>Measure respiratory rate.</li>
            <li>Measure weight.</li>
            <li>Measure height.</li>
            <li>Calculate BMI.</li>
            <li>Assess nutritional status.</li>
            <li>Inspect skin.</li>
            <li>Assess hair distribution.</li>
            <li>Inspect eyes.</li>
            <li>Inspect mouth and tongue.</li>
            <li>Look for oedema.</li>
            <li>Look for tremor.</li>
            <li>Assess muscle bulk and strength where indicated.</li>
          </ol>

          <h3>Important General Signs</h3>

          <ul>
            <li>Obesity or unexplained weight loss</li>
            <li>Thin or fragile skin</li>
            <li>Hyperpigmentation</li>
            <li>Pallor</li>
            <li>Excessive sweating</li>
            <li>Dry skin</li>
            <li>Hirsutism</li>
            <li>Alopecia</li>
            <li>Peripheral oedema</li>
            <li>Tremor</li>
            <li>Proximal muscle weakness</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 4. THYROID HISTORY
    // ============================================================

    {
      id: "thyroid-history",
      name: "Thyroid History",

      notes: {
        anatomy: `

          <h2>Thyroid Clinical History</h2>

          <h3>Symptoms of Hyperthyroidism</h3>

          <ul>
            <li>Weight loss</li>
            <li>Heat intolerance</li>
            <li>Excessive sweating</li>
            <li>Palpitations</li>
            <li>Tremor</li>
            <li>Anxiety</li>
            <li>Increased bowel frequency</li>
            <li>Increased appetite</li>
            <li>Menstrual disturbance</li>
          </ul>

          <h3>Symptoms of Hypothyroidism</h3>

          <ul>
            <li>Weight gain</li>
            <li>Cold intolerance</li>
            <li>Fatigue</li>
            <li>Constipation</li>
            <li>Dry skin</li>
            <li>Hair changes</li>
            <li>Bradycardia</li>
            <li>Menstrual disturbance</li>
            <li>Cognitive slowing</li>
          </ul>

          <h3>Local Thyroid Symptoms</h3>

          <ul>
            <li>Neck swelling</li>
            <li>Dysphagia</li>
            <li>Dyspnoea</li>
            <li>Hoarseness</li>
            <li>Neck pain</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 5. THYROID EXAMINATION
    // ============================================================

    {
      id: "thyroid-examination",
      name: "Thyroid Examination",

      notes: {
        anatomy: `

          <h2>Thyroid Examination</h2>

          <h3>STEP 1 — Inspection</h3>

          <ol>
            <li>Position the patient comfortably.</li>
            <li>Expose the neck appropriately.</li>
            <li>Inspect the anterior neck.</li>
            <li>Ask the patient to swallow.</li>
            <li>Observe movement of the swelling.</li>
            <li>Look for visible venous congestion.</li>
          </ol>

          <h3>STEP 2 — Palpation</h3>

          <ol>
            <li>Stand in front of or behind the patient.</li>
            <li>Identify the thyroid cartilage.</li>
            <li>Palpate the thyroid isthmus.</li>
            <li>Palpate each thyroid lobe.</li>
            <li>Assess size.</li>
            <li>Assess consistency.</li>
            <li>Assess tenderness.</li>
            <li>Assess nodules.</li>
            <li>Assess mobility with swallowing.</li>
            <li>Assess cervical lymph nodes.</li>
          </ol>

          <h3>STEP 3 — Retrosternal Extension</h3>

          <p>
            Assess for clinical evidence of retrosternal extension, including
            venous congestion and other compressive features.
          </p>

          <h3>STEP 4 — Auscultation</h3>

          <p>
            Auscultate an enlarged thyroid when clinically indicated for a
            vascular bruit.
          </p>

          <h3>Confirmation</h3>

          <ul>
            <li>TSH</li>
            <li>Free T4 and/or free T3</li>
            <li>Thyroid antibodies where indicated</li>
            <li>Thyroid ultrasound</li>
            <li>Fine-needle aspiration for appropriate thyroid nodules</li>
            <li>Radionuclide scanning in selected cases</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 6. DIABETES HISTORY
    // ============================================================

    {
      id: "diabetes-history",
      name: "Diabetes Mellitus History",

      notes: {
        anatomy: `

          <h2>Clinical History of Diabetes Mellitus</h2>

          <h3>Symptoms of Hyperglycaemia</h3>

          <ul>
            <li>Polyuria</li>
            <li>Polydipsia</li>
            <li>Polyphagia</li>
            <li>Weight loss</li>
            <li>Fatigue</li>
            <li>Blurred vision</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Establish when diabetes was diagnosed.</li>
            <li>Determine the type if known.</li>
            <li>Assess current treatment.</li>
            <li>Assess adherence.</li>
            <li>Ask about home glucose monitoring.</li>
            <li>Ask about symptoms of hypoglycaemia.</li>
            <li>Assess previous hyperglycaemic emergencies.</li>
            <li>Assess microvascular complications.</li>
            <li>Assess macrovascular complications.</li>
            <li>Assess cardiovascular risk factors.</li>
            <li>Assess lifestyle and dietary factors.</li>
            <li>Review renal function history.</li>
            <li>Assess eye screening history.</li>
            <li>Assess foot problems.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 7. DIABETIC EXAMINATION
    // ============================================================

    {
      id: "diabetes-examination",
      name: "Diabetes Examination",

      notes: {
        anatomy: `

          <h2>Clinical Examination of a Patient With Diabetes</h2>

          <h3>General Examination</h3>

          <ol>
            <li>Assess BMI and nutritional status.</li>
            <li>Measure blood pressure.</li>
            <li>Inspect skin.</li>
            <li>Look for injection sites where relevant.</li>
            <li>Look for evidence of infection.</li>
          </ol>

          <h3>Foot Examination</h3>

          <ol>
            <li>Inspect both feet.</li>
            <li>Look for ulcers.</li>
            <li>Look for calluses.</li>
            <li>Look for deformities.</li>
            <li>Assess skin integrity.</li>
            <li>Assess pulses.</li>
            <li>Assess temperature.</li>
            <li>Assess protective sensation.</li>
            <li>Assess vibration where indicated.</li>
          </ol>

          <h3>Complication Assessment</h3>

          <ul>
            <li>Peripheral neuropathy</li>
            <li>Peripheral arterial disease</li>
            <li>Retinopathy</li>
            <li>Nephropathy</li>
            <li>Cardiovascular disease</li>
          </ul>

          <h3>Confirmation and Monitoring</h3>

          <ul>
            <li>Fasting plasma glucose</li>
            <li>Random plasma glucose where appropriate</li>
            <li>HbA1c</li>
            <li>Oral glucose tolerance testing in selected circumstances</li>
            <li>Urine albumin assessment</li>
            <li>Renal function</li>
            <li>Lipid profile</li>
            <li>Eye assessment</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 8. HYPOGLYCAEMIA
    // ============================================================

    {
      id: "hypoglycaemia",
      name: "Hypoglycaemia Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Hypoglycaemia</h2>

          <h3>Symptoms</h3>

          <ul>
            <li>Sweating</li>
            <li>Tremor</li>
            <li>Palpitations</li>
            <li>Hunger</li>
            <li>Anxiety</li>
            <li>Confusion</li>
            <li>Abnormal behaviour</li>
            <li>Seizures</li>
            <li>Loss of consciousness</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess airway, breathing and circulation if severely unwell.</li>
            <li>Check capillary blood glucose immediately.</li>
            <li>Assess level of consciousness.</li>
            <li>Review diabetes medications.</li>
            <li>Ask about missed meals.</li>
            <li>Ask about alcohol intake where relevant.</li>
            <li>Assess renal and hepatic disease where relevant.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Low plasma glucose during symptoms with improvement after glucose
            correction supports the clinical diagnosis.
          </p>

        `
      }
    },


    // ============================================================
    // 9. ADRENAL HISTORY
    // ============================================================

    {
      id: "adrenal-history",
      name: "Adrenal Clinical Assessment",

      notes: {
        anatomy: `

          <h2>Adrenal Clinical Assessment</h2>

          <h3>Possible Adrenal Insufficiency</h3>

          <ul>
            <li>Fatigue</li>
            <li>Weight loss</li>
            <li>Weakness</li>
            <li>Postural dizziness</li>
            <li>Abdominal symptoms</li>
            <li>Salt craving</li>
            <li>Hyperpigmentation</li>
          </ul>

          <h3>Possible Cortisol Excess</h3>

          <ul>
            <li>Central obesity</li>
            <li>Facial rounding</li>
            <li>Skin fragility</li>
            <li>Easy bruising</li>
            <li>Wide violaceous striae</li>
            <li>Proximal muscle weakness</li>
            <li>Hypertension</li>
            <li>Glucose intolerance</li>
          </ul>

          <h3>Possible Catecholamine Excess</h3>

          <ul>
            <li>Paroxysmal headache</li>
            <li>Palpitations</li>
            <li>Sweating</li>
            <li>Hypertension</li>
            <li>Tremor</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 10. CUSHING EXAMINATION
    // ============================================================

    {
      id: "cushing-examination",
      name: "Cushing Syndrome Examination",

      notes: {
        anatomy: `

          <h2>Clinical Examination for Cushing Syndrome</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess body habitus.</li>
            <li>Measure blood pressure.</li>
            <li>Inspect the face.</li>
            <li>Inspect the skin.</li>
            <li>Look for bruising.</li>
            <li>Look for striae.</li>
            <li>Assess proximal muscle strength.</li>
            <li>Assess for acne and hirsutism where relevant.</li>
            <li>Assess for osteoporosis or fracture history.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Confirmation requires biochemical assessment of cortisol excess,
            usually using an appropriate validated screening approach followed
            by further testing to establish the cause.
          </p>

        `
      }
    },


    // ============================================================
    // 11. ADRENAL INSUFFICIENCY
    // ============================================================

    {
      id: "adrenal-insufficiency",
      name: "Adrenal Insufficiency Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Adrenal Insufficiency</h2>

          <h3>Examination</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Measure blood pressure.</li>
            <li>Assess postural blood pressure where appropriate.</li>
            <li>Inspect skin for hyperpigmentation.</li>
            <li>Assess hydration.</li>
            <li>Assess weight.</li>
            <li>Look for features of associated autoimmune disease where relevant.</li>
          </ol>

          <h3>Confirmation</h3>

          <ul>
            <li>Morning serum cortisol</li>
            <li>ACTH measurement</li>
            <li>ACTH stimulation test when indicated</li>
            <li>Electrolytes</li>
            <li>Glucose</li>
            <li>Additional testing to determine the cause</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 12. PITUITARY ASSESSMENT
    // ============================================================

    {
      id: "pituitary-examination",
      name: "Pituitary Clinical Assessment",

      notes: {
        anatomy: `

          <h2>Pituitary Clinical Assessment</h2>

          <h3>Symptoms Suggesting Pituitary Disease</h3>

          <ul>
            <li>Headache</li>
            <li>Visual field disturbance</li>
            <li>Menstrual abnormalities</li>
            <li>Galactorrhoea</li>
            <li>Infertility</li>
            <li>Loss of libido</li>
            <li>Growth abnormalities</li>
            <li>Symptoms of hormone deficiency</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Assess visual symptoms.</li>
            <li>Perform visual field assessment where indicated.</li>
            <li>Assess cranial nerves when appropriate.</li>
            <li>Assess body proportions.</li>
            <li>Assess sexual and reproductive development.</li>
            <li>Look for acromegalic features where relevant.</li>
            <li>Assess for galactorrhoea where clinically appropriate.</li>
          </ol>

          <h3>Confirmation</h3>

          <ul>
            <li>Targeted pituitary hormone testing</li>
            <li>Prolactin</li>
            <li>IGF-1 where acromegaly is suspected</li>
            <li>Thyroid axis assessment</li>
            <li>Adrenal axis assessment</li>
            <li>Gonadal axis assessment</li>
            <li>Serum and urine osmolality where diabetes insipidus is suspected</li>
            <li>MRI of the pituitary when indicated</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 13. ACROMEGALY
    // ============================================================

    {
      id: "acromegaly",
      name: "Acromegaly Examination",

      notes: {
        anatomy: `

          <h2>Clinical Examination for Acromegaly</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Coarse facial features</li>
            <li>Prominent brow</li>
            <li>Enlarged nose</li>
            <li>Enlarged lips</li>
            <li>Macroglossia</li>
            <li>Large hands and feet</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Inspect facial features.</li>
            <li>Inspect hands.</li>
            <li>Assess ring or glove size changes where relevant.</li>
            <li>Inspect feet.</li>
            <li>Assess skin.</li>
            <li>Assess blood pressure.</li>
            <li>Assess visual fields.</li>
            <li>Look for associated endocrine complications.</li>
          </ol>

          <h3>Confirmation</h3>

          <ol>
            <li>Measure IGF-1.</li>
            <li>Confirm growth hormone excess using appropriate dynamic testing.</li>
            <li>Perform pituitary MRI where indicated.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 14. PARATHYROID AND CALCIUM
    // ============================================================

    {
      id: "parathyroid-assessment",
      name: "Parathyroid and Calcium Assessment",

      notes: {
        anatomy: `

          <h2>Parathyroid and Calcium Clinical Assessment</h2>

          <h3>Symptoms of Hypercalcaemia</h3>

          <ul>
            <li>Polyuria</li>
            <li>Polydipsia</li>
            <li>Constipation</li>
            <li>Abdominal discomfort</li>
            <li>Weakness</li>
            <li>Cognitive changes</li>
            <li>Bone pain</li>
            <li>Renal stones</li>
          </ul>

          <h3>Symptoms of Hypocalcaemia</h3>

          <ul>
            <li>Perioral tingling</li>
            <li>Paraesthesia</li>
            <li>Muscle cramps</li>
            <li>Carpopedal spasm</li>
            <li>Seizures in severe cases</li>
          </ul>

          <h3>Confirmation</h3>

          <ul>
            <li>Serum calcium</li>
            <li>Albumin</li>
            <li>Phosphate</li>
            <li>PTH</li>
            <li>Vitamin D</li>
            <li>Renal function</li>
            <li>Urinary calcium where indicated</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 15. DIABETES INSIPIDUS
    // ============================================================

    {
      id: "diabetes-insipidus",
      name: "Diabetes Insipidus Assessment",

      notes: {
        anatomy: `

          <h2>Diabetes Insipidus Assessment</h2>

          <h3>Key Symptoms</h3>

          <ul>
            <li>Marked thirst</li>
            <li>Polyuria</li>
            <li>Nocturia</li>
            <li>Preference for water</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Quantify urine output where appropriate.</li>
            <li>Assess fluid intake.</li>
            <li>Assess hydration status.</li>
            <li>Review medications.</li>
            <li>Assess pituitary and neurological history.</li>
            <li>Assess serum sodium.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Assessment may include serum and urine osmolality and, when
            appropriate, supervised dynamic testing to distinguish causes of
            polyuria.
          </p>

        `
      }
    },


    // ============================================================
    // 16. REPRODUCTIVE ENDOCRINOLOGY
    // ============================================================

    {
      id: "reproductive-endocrine",
      name: "Reproductive Endocrine Assessment",

      notes: {
        anatomy: `

          <h2>Reproductive Endocrine Assessment</h2>

          <h3>Female History</h3>

          <ul>
            <li>Menarche</li>
            <li>Menstrual regularity</li>
            <li>Cycle duration</li>
            <li>Menstrual flow</li>
            <li>Amenorrhoea</li>
            <li>Infertility</li>
            <li>Galactorrhoea</li>
            <li>Hirsutism</li>
            <li>Acne</li>
            <li>Menopausal symptoms</li>
          </ul>

          <h3>Male History</h3>

          <ul>
            <li>Pubertal development</li>
            <li>Loss of libido</li>
            <li>Erectile dysfunction</li>
            <li>Infertility</li>
            <li>Reduced body hair</li>
            <li>Testicular changes</li>
            <li>Gynaecomastia</li>
          </ul>

          <h3>Confirmation</h3>

          <ul>
            <li>Appropriate sex hormone testing</li>
            <li>LH and FSH</li>
            <li>Prolactin</li>
            <li>Thyroid function</li>
            <li>Testosterone where indicated</li>
            <li>Oestradiol where indicated</li>
            <li>Pregnancy testing where relevant</li>
            <li>Pelvic or testicular imaging where indicated</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 17. HIRSUTISM
    // ============================================================

    {
      id: "hirsutism",
      name: "Hirsutism and Androgen Excess",

      notes: {
        anatomy: `

          <h2>Assessment of Hirsutism and Androgen Excess</h2>

          <h3>History</h3>

          <ol>
            <li>Determine age of onset.</li>
            <li>Determine rate of progression.</li>
            <li>Assess menstrual pattern.</li>
            <li>Ask about acne.</li>
            <li>Ask about voice deepening.</li>
            <li>Ask about increased muscle mass.</li>
            <li>Ask about scalp hair loss.</li>
            <li>Review medications.</li>
            <li>Assess fertility.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Assess facial hair.</li>
            <li>Assess chest and abdominal hair.</li>
            <li>Assess acne.</li>
            <li>Assess scalp hair.</li>
            <li>Assess body habitus.</li>
            <li>Look for signs of virilisation.</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Hormonal investigations are guided by the clinical presentation and
            may include androgen measurements and assessment for associated
            endocrine disorders.
          </p>

        `
      }
    },


    // ============================================================
    // 18. OSTEOPOROSIS
    // ============================================================

    {
      id: "osteoporosis-assessment",
      name: "Osteoporosis and Bone Health",

      notes: {
        anatomy: `

          <h2>Clinical Assessment of Osteoporosis</h2>

          <h3>History</h3>

          <ul>
            <li>Previous fractures</li>
            <li>Low-trauma fractures</li>
            <li>Height loss</li>
            <li>Back pain</li>
            <li>Falls</li>
            <li>Calcium intake</li>
            <li>Vitamin D status</li>
            <li>Physical activity</li>
            <li>Smoking</li>
            <li>Alcohol use</li>
            <li>Glucocorticoid exposure</li>
            <li>Family history of fractures</li>
          </ul>

          <h3>Examination</h3>

          <ol>
            <li>Measure height.</li>
            <li>Assess posture.</li>
            <li>Assess spinal deformity.</li>
            <li>Assess gait and balance.</li>
            <li>Assess muscle strength.</li>
            <li>Assess falls risk.</li>
          </ol>

          <h3>Confirmation</h3>

          <ul>
            <li>Bone mineral density assessment by DXA</li>
            <li>Calcium</li>
            <li>Vitamin D</li>
            <li>Renal function</li>
            <li>Other secondary-cause investigations where indicated</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 19. ENDOCRINE EMERGENCIES
    // ============================================================

    {
      id: "endocrine-emergencies",
      name: "Endocrine Emergencies",

      notes: {
        anatomy: `

          <h2>Assessment of Endocrine Emergencies</h2>

          <p>
            Endocrine emergencies require simultaneous stabilization and
            diagnostic assessment. Treatment should not be unnecessarily delayed
            when a life-threatening endocrine emergency is strongly suspected.
          </p>

          <h3>Important Emergencies</h3>

          <ul>
            <li>Diabetic ketoacidosis</li>
            <li>Hyperosmolar hyperglycaemic state</li>
            <li>Severe hypoglycaemia</li>
            <li>Adrenal crisis</li>
            <li>Thyroid storm</li>
            <li>Severe myxoedema</li>
            <li>Severe hypercalcaemia</li>
          </ul>

          <h3>Initial Approach</h3>

          <ol>
            <li>Assess airway.</li>
            <li>Assess breathing.</li>
            <li>Assess circulation.</li>
            <li>Assess level of consciousness.</li>
            <li>Check bedside glucose.</li>
            <li>Measure vital signs.</li>
            <li>Establish intravenous access when indicated.</li>
            <li>Obtain urgent laboratory investigations.</li>
            <li>Start emergency treatment according to the suspected condition.</li>
            <li>Monitor response continuously.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 20. ENDOCRINE INVESTIGATIONS
    // ============================================================

    {
      id: "endocrine-investigations",
      name: "Endocrine Investigations",

      notes: {
        anatomy: `

          <h2>Endocrine Investigations</h2>

          <h3>Basic Biochemical Tests</h3>

          <ul>
            <li>Blood glucose</li>
            <li>HbA1c</li>
            <li>Electrolytes</li>
            <li>Calcium</li>
            <li>Phosphate</li>
            <li>Renal function</li>
            <li>Liver function</li>
            <li>Lipid profile</li>
          </ul>

          <h3>Hormonal Tests</h3>

          <ul>
            <li>TSH</li>
            <li>Free T4</li>
            <li>Free T3</li>
            <li>Cortisol</li>
            <li>ACTH</li>
            <li>Prolactin</li>
            <li>IGF-1</li>
            <li>LH</li>
            <li>FSH</li>
            <li>Testosterone</li>
            <li>Oestradiol</li>
            <li>PTH</li>
            <li>Vitamin D</li>
          </ul>

          <h3>Dynamic Tests</h3>

          <p>
            Dynamic endocrine tests assess how a hormonal axis responds to
            stimulation or suppression. They should be performed using
            standardized protocols with appropriate clinical supervision.
          </p>

          <h3>Imaging</h3>

          <ul>
            <li>Thyroid ultrasound</li>
            <li>CT</li>
            <li>MRI</li>
            <li>DXA scanning</li>
            <li>Radionuclide imaging where indicated</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 21. COMPLETE ENDOCRINE OSCE
    // ============================================================

    {
      id: "complete-endocrine-osce",
      name: "Complete Endocrine Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Endocrine Examination — OSCE</h2>

          <h3>Opening</h3>

          <ol>
            <li>Wash hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ensure adequate exposure and privacy.</li>
          </ol>

          <h3>General Examination</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Measure pulse.</li>
            <li>Measure blood pressure.</li>
            <li>Measure temperature where indicated.</li>
            <li>Assess weight and BMI.</li>
            <li>Inspect skin and hair.</li>
            <li>Inspect eyes.</li>
            <li>Assess for tremor.</li>
            <li>Assess for oedema.</li>
          </ol>

          <h3>Focused Examination</h3>

          <ol>
            <li>Examine the thyroid.</li>
            <li>Assess cervical lymph nodes.</li>
            <li>Assess visual fields where indicated.</li>
            <li>Assess cardiovascular findings.</li>
            <li>Assess muscle strength.</li>
            <li>Assess peripheral pulses.</li>
            <li>Examine the feet in diabetes.</li>
            <li>Assess relevant reproductive or secondary sexual characteristics.</li>
          </ol>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Ensure the patient is comfortable.</li>
            <li>Wash hands.</li>
            <li>Summarize the findings.</li>
            <li>State the likely endocrine syndrome.</li>
            <li>Identify the likely gland or hormonal axis involved.</li>
            <li>Give the differential diagnoses.</li>
            <li>Recommend appropriate biochemical confirmation.</li>
            <li>Recommend appropriate imaging where indicated.</li>
            <li>Assess for complications.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 22. CLINICAL REASONING
    // ============================================================

    {
      id: "endocrine-clinical-reasoning",
      name: "Endocrine Clinical Reasoning",

      notes: {
        anatomy: `

          <h2>Endocrine Clinical Reasoning</h2>

          <p>
            Endocrine disorders are diagnosed by correlating clinical findings
            with biochemical evidence and, when necessary, anatomical imaging.
            A single abnormal hormone result should not automatically be
            interpreted as a definitive diagnosis.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Identify the dominant clinical syndrome.</li>
            <li>Determine which endocrine axis is likely involved.</li>
            <li>Review medications and physiological factors that may alter results.</li>
            <li>Select the appropriate initial biochemical test.</li>
            <li>Interpret the result in its clinical context.</li>
            <li>Use confirmatory or dynamic testing where indicated.</li>
            <li>Determine the anatomical source when necessary.</li>
            <li>Assess disease severity.</li>
            <li>Screen for complications.</li>
            <li>Formulate the final diagnosis.</li>
          </ol>

          <h3>Confirmation Principle</h3>

          <p>
            The diagnostic pathway should generally progress from clinical
            suspicion to appropriate biochemical testing, confirmatory testing
            where required, localization of the source and assessment of
            complications.
          </p>

        `
      }
    }

  ]
};