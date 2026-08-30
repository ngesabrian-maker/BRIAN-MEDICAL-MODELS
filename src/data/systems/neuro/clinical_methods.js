export const clinicalMethodsNeuroPsychiatry = {

  id: "clinicalMethodsNeuroPsychiatry",

  name: "🩺 Clinical Methods",

  modelPath: "models/neuro-psychiatry/",

  modelFile: "clinical_methods.glb",

  parts: [

    // ============================================================
    // 1. INTRODUCTION
    // ============================================================

    {
      id: "neuropsych-overview",
      name: "Introduction to Neuro-Psychiatric Assessment",

      notes: {
        anatomy: `

          <h2>Neuro-Psychiatric Clinical Assessment</h2>

          <p>
            Neuro-psychiatric assessment combines systematic neurological and
            psychiatric evaluation. The neurological examination assesses the
            central and peripheral nervous systems, while the psychiatric
            assessment evaluates mental state, behaviour, cognition, mood,
            thought, perception, insight and judgement.
          </p>

          <h3>Major Components</h3>

          <ol>
            <li>History taking</li>
            <li>General physical examination</li>
            <li>Neurological examination</li>
            <li>Mental status examination</li>
            <li>Cognitive assessment</li>
            <li>Cranial nerve examination</li>
            <li>Motor system examination</li>
            <li>Sensory system examination</li>
            <li>Reflex examination</li>
            <li>Coordination and cerebellar examination</li>
            <li>Gait examination</li>
            <li>Autonomic assessment where indicated</li>
            <li>Risk assessment</li>
            <li>Laboratory and imaging investigations</li>
            <li>Diagnostic formulation</li>
          </ol>

          <h3>General Neurological Examination Sequence</h3>

          <p>
            <strong>
              General inspection → Higher mental functions → Cranial nerves →
              Motor system → Reflexes → Sensory system → Coordination → Gait →
              Autonomic function → Special investigations
            </strong>
          </p>

          <h3>General Psychiatric Assessment Sequence</h3>

          <p>
            <strong>
              Appearance and behaviour → Speech → Mood → Affect → Thought →
              Perception → Cognition → Insight → Judgement → Risk assessment →
              Diagnostic formulation
            </strong>
          </p>

        `
      }
    },


    // ============================================================
    // 2. NEUROLOGICAL HISTORY
    // ============================================================

    {
      id: "neurological-history",
      name: "Neurological History",

      notes: {
        anatomy: `

          <h2>Neurological History</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Confirm patient identity.</li>
            <li>Establish the chief complaint.</li>
            <li>Determine the exact onset of symptoms.</li>
            <li>Determine duration.</li>
            <li>Determine progression.</li>
            <li>Identify precipitating or relieving factors.</li>
            <li>Determine associated neurological symptoms.</li>
            <li>Ask about previous neurological episodes.</li>
            <li>Review past medical and surgical history.</li>
            <li>Review medication history.</li>
            <li>Ask about substance use.</li>
            <li>Obtain relevant family history.</li>
            <li>Assess social and occupational history.</li>
          </ol>

          <h3>Important Neurological Complaints</h3>

          <ul>
            <li>Headache</li>
            <li>Seizures</li>
            <li>Loss of consciousness</li>
            <li>Weakness</li>
            <li>Numbness</li>
            <li>Tingling</li>
            <li>Visual disturbance</li>
            <li>Hearing disturbance</li>
            <li>Speech disturbance</li>
            <li>Dizziness</li>
            <li>Vertigo</li>
            <li>Ataxia</li>
            <li>Tremor</li>
            <li>Abnormal movements</li>
            <li>Memory impairment</li>
            <li>Personality change</li>
            <li>Bladder or bowel dysfunction</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 3. HEADACHE
    // ============================================================

    {
      id: "neurological-headache",
      name: "Headache Assessment",

      notes: {
        anatomy: `

          <h2>Clinical Assessment of Headache</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Identify the exact location.</li>
            <li>Determine onset.</li>
            <li>Determine whether onset was sudden or gradual.</li>
            <li>Determine duration.</li>
            <li>Determine frequency.</li>
            <li>Determine severity.</li>
            <li>Determine character.</li>
            <li>Ask about radiation.</li>
            <li>Ask about aggravating factors.</li>
            <li>Ask about relieving factors.</li>
            <li>Ask about visual symptoms.</li>
            <li>Ask about nausea or vomiting.</li>
            <li>Ask about photophobia or phonophobia.</li>
            <li>Ask about neurological deficits.</li>
            <li>Ask about fever or neck stiffness.</li>
            <li>Ask about trauma.</li>
          </ol>

          <h3>Red Flags</h3>

          <ul>
            <li>Sudden thunderclap headache</li>
            <li>New neurological deficit</li>
            <li>Fever with neck stiffness</li>
            <li>New headache with altered consciousness</li>
            <li>New headache after significant trauma</li>
            <li>Progressively worsening headache</li>
            <li>New headache in an appropriate high-risk clinical context</li>
            <li>Headache associated with seizures</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Investigations are guided by the clinical presentation. Depending on
            the suspected cause, assessment may include neuroimaging, lumbar
            puncture, blood investigations or other targeted studies.
          </p>

        `
      }
    },


    // ============================================================
    // 4. SEIZURE
    // ============================================================

    {
      id: "neurological-seizure",
      name: "Seizure Assessment",

      notes: {
        anatomy: `

          <h2>Clinical Assessment of Seizures</h2>

          <h3>History From Patient or Witness</h3>

          <ol>
            <li>Determine what happened immediately before the event.</li>
            <li>Determine the onset of the episode.</li>
            <li>Determine whether there was loss of consciousness.</li>
            <li>Assess abnormal movements.</li>
            <li>Assess eye deviation.</li>
            <li>Assess tongue biting.</li>
            <li>Assess urinary or faecal incontinence.</li>
            <li>Determine duration.</li>
            <li>Determine recovery time.</li>
            <li>Ask about confusion after the event.</li>
            <li>Ask about previous similar episodes.</li>
            <li>Ask about precipitating factors.</li>
            <li>Ask about medication adherence.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            The diagnosis is primarily clinical. Depending on the presentation,
            investigations may include blood glucose, electrolytes, toxicology
            testing where indicated, EEG and neuroimaging.
          </p>

          <h3>Important Differential Diagnoses</h3>

          <ul>
            <li>Syncope</li>
            <li>Psychogenic non-epileptic seizures</li>
            <li>Metabolic disturbance</li>
            <li>Sleep-related events</li>
            <li>Movement disorders</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 5. LOSS OF CONSCIOUSNESS
    // ============================================================

    {
      id: "neurological-loc",
      name: "Loss of Consciousness",

      notes: {
        anatomy: `

          <h2>Assessment of Loss of Consciousness</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Determine the circumstances immediately before the event.</li>
            <li>Ask about posture.</li>
            <li>Ask about prodromal symptoms.</li>
            <li>Determine whether collapse was witnessed.</li>
            <li>Determine duration of unconsciousness.</li>
            <li>Ask about abnormal movements.</li>
            <li>Ask about injury during collapse.</li>
            <li>Ask about tongue biting.</li>
            <li>Ask about incontinence.</li>
            <li>Determine speed of recovery.</li>
            <li>Ask about post-event confusion.</li>
            <li>Ask about previous episodes.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Investigation depends on the suspected mechanism and may include
            ECG, blood glucose, laboratory tests, neurological assessment,
            EEG or neuroimaging.
          </p>

        `
      }
    },


    // ============================================================
    // 6. MENTAL HEALTH HISTORY
    // ============================================================

    {
      id: "psychiatric-history",
      name: "Psychiatric History",

      notes: {
        anatomy: `

          <h2>Psychiatric History</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Establish rapport.</li>
            <li>Explain confidentiality and its limits.</li>
            <li>Establish the presenting complaint.</li>
            <li>Explore the history of the presenting illness.</li>
            <li>Assess mood symptoms.</li>
            <li>Assess anxiety symptoms.</li>
            <li>Assess psychotic symptoms.</li>
            <li>Assess cognitive symptoms.</li>
            <li>Assess behavioural changes.</li>
            <li>Assess substance use.</li>
            <li>Assess sleep.</li>
            <li>Assess appetite and biological functions.</li>
            <li>Assess previous psychiatric illness.</li>
            <li>Assess previous treatment and response.</li>
            <li>Assess medical history.</li>
            <li>Assess medication history.</li>
            <li>Assess family psychiatric history.</li>
            <li>Assess developmental history where relevant.</li>
            <li>Assess educational and occupational history.</li>
            <li>Assess relationships and social circumstances.</li>
            <li>Perform risk assessment.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 7. MENTAL STATUS EXAMINATION
    // ============================================================

    {
      id: "mental-status-examination",
      name: "Mental Status Examination",

      notes: {
        anatomy: `

          <h2>Mental Status Examination</h2>

          <h3>1. Appearance</h3>

          <ul>
            <li>Level of self-care</li>
            <li>Dress</li>
            <li>Grooming</li>
            <li>Posture</li>
            <li>Signs of intoxication or withdrawal</li>
          </ul>

          <h3>2. Behaviour</h3>

          <ul>
            <li>Cooperation</li>
            <li>Eye contact</li>
            <li>Psychomotor activity</li>
            <li>Agitation</li>
            <li>Retardation</li>
            <li>Abnormal movements</li>
          </ul>

          <h3>3. Speech</h3>

          <ul>
            <li>Rate</li>
            <li>Volume</li>
            <li>Quantity</li>
            <li>Fluency</li>
            <li>Latency</li>
            <li>Spontaneity</li>
            <li>Pressure of speech</li>
          </ul>

          <h3>4. Mood</h3>

          <p>
            Ask the patient how they have been feeling.
          </p>

          <h3>5. Affect</h3>

          <ul>
            <li>Range</li>
            <li>Intensity</li>
            <li>Reactivity</li>
            <li>Congruence with mood</li>
          </ul>

          <h3>6. Thought</h3>

          <ul>
            <li>Thought form</li>
            <li>Thought flow</li>
            <li>Thought content</li>
            <li>Delusions</li>
            <li>Obsessions</li>
            <li>Preoccupations</li>
          </ul>

          <h3>7. Perception</h3>

          <ul>
            <li>Hallucinations</li>
            <li>Illusions</li>
            <li>Other perceptual disturbances</li>
          </ul>

          <h3>8. Cognition</h3>

          <ul>
            <li>Orientation</li>
            <li>Attention</li>
            <li>Concentration</li>
            <li>Memory</li>
            <li>Language</li>
            <li>Executive function</li>
          </ul>

          <h3>9. Insight</h3>

          <p>
            Assess the patient's understanding and acceptance of their illness
            and need for treatment.
          </p>

          <h3>10. Judgement</h3>

          <p>
            Assess the patient's ability to make appropriate decisions and
            understand consequences.
          </p>

        `
      }
    },


    // ============================================================
    // 8. PSYCHIATRIC RISK ASSESSMENT
    // ============================================================

    {
      id: "psychiatric-risk",
      name: "Psychiatric Risk Assessment",

      notes: {
        anatomy: `

          <h2>Psychiatric Risk Assessment</h2>

          <h3>Suicide and Self-Harm Assessment</h3>

          <ol>
            <li>Ask directly about thoughts of death.</li>
            <li>Ask about suicidal thoughts.</li>
            <li>Ask whether there is a plan.</li>
            <li>Assess intent.</li>
            <li>Assess access to means.</li>
            <li>Ask about previous attempts.</li>
            <li>Ask about recent self-harm.</li>
            <li>Identify precipitating factors.</li>
            <li>Identify protective factors.</li>
            <li>Determine available social support.</li>
          </ol>

          <h3>Risk to Others</h3>

          <ol>
            <li>Ask about thoughts of harming others.</li>
            <li>Assess violent thoughts.</li>
            <li>Assess intent.</li>
            <li>Assess specific target where relevant.</li>
            <li>Assess access to potential means.</li>
            <li>Assess previous violent behaviour.</li>
          </ol>

          <h3>Other Risks</h3>

          <ul>
            <li>Self-neglect</li>
            <li>Wandering</li>
            <li>Vulnerability</li>
            <li>Substance-related harm</li>
            <li>Impulsive behaviour</li>
            <li>Risk from psychosis or severe mood disturbance</li>
          </ul>

          <h3>Clinical Principle</h3>

          <p>
            Risk assessment should be documented explicitly and should result in
            an appropriate safety and management plan rather than being treated
            as a numerical score alone.
          </p>

        `
      }
    },


    // ============================================================
    // 9. COGNITIVE ASSESSMENT
    // ============================================================

    {
      id: "neuro-cognition",
      name: "Cognitive Assessment",

      notes: {
        anatomy: `

          <h2>Cognitive Assessment</h2>

          <h3>Orientation</h3>

          <ol>
            <li>Ask the patient's name.</li>
            <li>Ask where they are.</li>
            <li>Ask the date.</li>
            <li>Ask the approximate time or time of day.</li>
            <li>Assess awareness of the situation.</li>
          </ol>

          <h3>Attention</h3>

          <ul>
            <li>Digit span</li>
            <li>Serial subtraction where appropriate</li>
            <li>Days or months in reverse order</li>
          </ul>

          <h3>Memory</h3>

          <ul>
            <li>Immediate registration</li>
            <li>Short-term recall</li>
            <li>Delayed recall</li>
            <li>Remote memory</li>
          </ul>

          <h3>Language</h3>

          <ul>
            <li>Naming</li>
            <li>Repetition</li>
            <li>Comprehension</li>
            <li>Fluency</li>
            <li>Reading</li>
            <li>Writing</li>
          </ul>

          <h3>Executive Function</h3>

          <ul>
            <li>Planning</li>
            <li>Abstraction</li>
            <li>Set shifting</li>
            <li>Problem solving</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Standardized cognitive instruments such as the Mini-Mental State
            Examination or Montreal Cognitive Assessment may support assessment
            when appropriate, but results must be interpreted in clinical
            context.
          </p>

        `
      }
    },


    // ============================================================
    // 10. CRANIAL NERVES
    // ============================================================

    {
      id: "cranial-nerves",
      name: "Cranial Nerve Examination",

      notes: {
        anatomy: `

          <h2>Cranial Nerve Examination</h2>

          <h3>CN I — Olfactory</h3>

          <ol>
            <li>Assess smell when clinically indicated.</li>
            <li>Test each nostril separately.</li>
            <li>Use a familiar non-irritant odour.</li>
          </ol>

          <h3>CN II — Optic</h3>

          <ol>
            <li>Assess visual acuity.</li>
            <li>Assess visual fields.</li>
            <li>Assess pupillary responses.</li>
            <li>Perform fundoscopy where indicated.</li>
          </ol>

          <h3>CN III, IV and VI — Oculomotor, Trochlear and Abducens</h3>

          <ol>
            <li>Inspect resting eye position.</li>
            <li>Assess pupil size and symmetry.</li>
            <li>Assess direct and consensual light reflexes.</li>
            <li>Assess accommodation where appropriate.</li>
            <li>Assess eye movements in the six cardinal directions.</li>
            <li>Look for nystagmus.</li>
          </ol>

          <h3>CN V — Trigeminal</h3>

          <ol>
            <li>Assess facial sensation.</li>
            <li>Compare the three divisions.</li>
            <li>Assess muscles of mastication.</li>
            <li>Assess corneal reflex when indicated.</li>
          </ol>

          <h3>CN VII — Facial</h3>

          <ol>
            <li>Inspect facial symmetry.</li>
            <li>Ask the patient to raise eyebrows.</li>
            <li>Ask the patient to close eyes tightly.</li>
            <li>Ask the patient to smile.</li>
            <li>Ask the patient to puff out cheeks.</li>
          </ol>

          <h3>CN VIII — Vestibulocochlear</h3>

          <ol>
            <li>Assess hearing.</li>
            <li>Perform Rinne test where appropriate.</li>
            <li>Perform Weber test where appropriate.</li>
            <li>Assess vestibular function when indicated.</li>
          </ol>

          <h3>CN IX and X — Glossopharyngeal and Vagus</h3>

          <ol>
            <li>Assess voice.</li>
            <li>Assess swallowing.</li>
            <li>Inspect palate movement.</li>
            <li>Assess gag reflex when clinically indicated.</li>
          </ol>

          <h3>CN XI — Accessory</h3>

          <ol>
            <li>Assess shoulder shrug against resistance.</li>
            <li>Assess head rotation against resistance.</li>
          </ol>

          <h3>CN XII — Hypoglossal</h3>

          <ol>
            <li>Inspect the tongue.</li>
            <li>Ask the patient to protrude the tongue.</li>
            <li>Assess tongue movement.</li>
            <li>Assess for wasting or fasciculations.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 11. MOTOR SYSTEM
    // ============================================================

    {
      id: "motor-system",
      name: "Motor System Examination",

      notes: {
        anatomy: `

          <h2>Motor System Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Muscle bulk</li>
            <li>Muscle wasting</li>
            <li>Hypertrophy</li>
            <li>Fasciculations</li>
            <li>Tremor</li>
            <li>Abnormal movements</li>
          </ul>

          <h3>Muscle Tone</h3>

          <ol>
            <li>Ensure the patient is relaxed.</li>
            <li>Move the limb passively.</li>
            <li>Assess resistance to movement.</li>
            <li>Compare both sides.</li>
          </ol>

          <h3>Power</h3>

          <p>
            Test major muscle groups against resistance and grade power using
            the Medical Research Council scale.
          </p>

          <h3>MRC Scale</h3>

          <ul>
            <li><strong>0:</strong> No contraction</li>
            <li><strong>1:</strong> Flicker of contraction</li>
            <li><strong>2:</strong> Movement with gravity eliminated</li>
            <li><strong>3:</strong> Movement against gravity</li>
            <li><strong>4:</strong> Movement against resistance but weaker than normal</li>
            <li><strong>5:</strong> Normal power</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Persistent weakness may require laboratory investigations,
            neuroimaging, nerve-conduction studies, electromyography or other
            targeted investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 12. REFLEXES
    // ============================================================

    {
      id: "neurological-reflexes",
      name: "Reflex Examination",

      notes: {
        anatomy: `

          <h2>Neurological Reflex Examination</h2>

          <h3>Deep Tendon Reflexes</h3>

          <ul>
            <li>Biceps reflex</li>
            <li>Triceps reflex</li>
            <li>Supinator/brachioradialis reflex</li>
            <li>Knee reflex</li>
            <li>Ankle reflex</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Position the patient comfortably.</li>
            <li>Ensure the muscle is relaxed.</li>
            <li>Identify the appropriate tendon.</li>
            <li>Strike the tendon with a reflex hammer.</li>
            <li>Observe the response.</li>
            <li>Compare both sides.</li>
          </ol>

          <h3>Plantar Response</h3>

          <ol>
            <li>Position the foot comfortably.</li>
            <li>Stimulate the lateral sole appropriately.</li>
            <li>Observe movement of the toes.</li>
          </ol>

          <h3>Interpretation</h3>

          <p>
            Reflexes may be reduced, absent, normal or exaggerated. Interpretation
            should consider the clinical context and symmetry.
          </p>

        `
      }
    },


    // ============================================================
    // 13. SENSORY SYSTEM
    // ============================================================

    {
      id: "sensory-system",
      name: "Sensory Examination",

      notes: {
        anatomy: `

          <h2>Sensory System Examination</h2>

          <h3>General Principles</h3>

          <ol>
            <li>Explain each test before performing it.</li>
            <li>Ensure the patient understands the response required.</li>
            <li>Ask the patient to close their eyes when appropriate.</li>
            <li>Compare corresponding areas bilaterally.</li>
            <li>Map abnormalities systematically.</li>
          </ol>

          <h3>Primary Sensations</h3>

          <ul>
            <li>Light touch</li>
            <li>Pain</li>
            <li>Temperature</li>
            <li>Vibration</li>
            <li>Joint position</li>
          </ul>

          <h3>Cortical Sensory Function</h3>

          <ul>
            <li>Two-point discrimination</li>
            <li>Graphesthesia</li>
            <li>Stereognosis</li>
            <li>Extinction</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            The distribution of sensory loss helps localize pathology to a
            peripheral nerve, nerve root, plexus, spinal cord, brainstem,
            thalamus or cerebral cortex. Further investigations are selected
            according to the localization.
          </p>

        `
      }
    },


    // ============================================================
    // 14. COORDINATION
    // ============================================================

    {
      id: "cerebellar-coordination",
      name: "Coordination and Cerebellar Examination",

      notes: {
        anatomy: `

          <h2>Coordination and Cerebellar Examination</h2>

          <h3>Upper Limb</h3>

          <ol>
            <li>Perform finger-nose testing.</li>
            <li>Assess for dysmetria.</li>
            <li>Assess intention tremor.</li>
            <li>Assess rapid alternating movements.</li>
          </ol>

          <h3>Lower Limb</h3>

          <ol>
            <li>Perform heel-shin testing.</li>
            <li>Assess lower-limb coordination.</li>
          </ol>

          <h3>Additional Assessment</h3>

          <ul>
            <li>Speech</li>
            <li>Nystagmus</li>
            <li>Truncal stability</li>
            <li>Gait</li>
          </ul>

          <h3>Romberg Test</h3>

          <ol>
            <li>Ask the patient to stand with feet together.</li>
            <li>Ensure adequate support and safety.</li>
            <li>Observe with eyes open.</li>
            <li>Repeat with eyes closed if safe.</li>
            <li>Observe for excessive sway or loss of balance.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 15. GAIT
    // ============================================================

    {
      id: "neurological-gait",
      name: "Neurological Gait Examination",

      notes: {
        anatomy: `

          <h2>Gait Examination</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ensure the patient can walk safely.</li>
            <li>Observe standing posture.</li>
            <li>Ask the patient to walk normally.</li>
            <li>Observe from the front.</li>
            <li>Observe from behind.</li>
            <li>Observe from the side.</li>
            <li>Assess stride length.</li>
            <li>Assess base of gait.</li>
            <li>Assess foot clearance.</li>
            <li>Assess arm swing.</li>
            <li>Assess turning.</li>
            <li>Assess heel-to-toe walking where appropriate.</li>
            <li>Assess toe walking and heel walking where appropriate.</li>
          </ol>

          <h3>Patterns</h3>

          <ul>
            <li>Hemiplegic gait</li>
            <li>Spastic gait</li>
            <li>Parkinsonian gait</li>
            <li>Cerebellar gait</li>
            <li>High-stepping gait</li>
            <li>Sensory ataxic gait</li>
            <li>Apraxic gait</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 16. MENINGEAL SIGNS
    // ============================================================

    {
      id: "meningeal-signs",
      name: "Meningeal Examination",

      notes: {
        anatomy: `

          <h2>Assessment for Meningeal Irritation</h2>

          <h3>Clinical Assessment</h3>

          <ol>
            <li>Assess general appearance.</li>
            <li>Assess temperature.</li>
            <li>Assess level of consciousness.</li>
            <li>Assess for neck stiffness.</li>
            <li>Assess for associated neurological deficits.</li>
          </ol>

          <h3>Associated Symptoms</h3>

          <ul>
            <li>Headache</li>
            <li>Fever</li>
            <li>Photophobia</li>
            <li>Vomiting</li>
            <li>Altered consciousness</li>
            <li>Seizures</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            When meningitis or another central nervous system infection is
            suspected, diagnostic evaluation may include blood investigations,
            blood cultures and cerebrospinal fluid analysis following assessment
            of whether lumbar puncture is safe and appropriate.
          </p>

        `
      }
    },


    // ============================================================
    // 17. PARKINSONISM
    // ============================================================

    {
      id: "parkinsonism-examination",
      name: "Parkinsonism Examination",

      notes: {
        anatomy: `

          <h2>Clinical Examination for Parkinsonism</h2>

          <h3>Observe</h3>

          <ul>
            <li>Resting tremor</li>
            <li>Bradykinesia</li>
            <li>Reduced facial expression</li>
            <li>Reduced arm swing</li>
            <li>Posture</li>
            <li>Gait</li>
          </ul>

          <h3>Assess Rigidity</h3>

          <ol>
            <li>Ask the patient to relax.</li>
            <li>Passively move the limb.</li>
            <li>Assess resistance.</li>
            <li>Use activation manoeuvres when appropriate.</li>
          </ol>

          <h3>Assess Bradykinesia</h3>

          <ul>
            <li>Finger tapping</li>
            <li>Hand opening and closing</li>
            <li>Rapid alternating movements</li>
            <li>Foot tapping</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Parkinsonism is diagnosed clinically. Neuroimaging or other
            investigations may be used when the presentation is atypical or an
            alternative diagnosis must be excluded.
          </p>

        `
      }
    },


    // ============================================================
    // 18. PERIPHERAL NEUROPATHY
    // ============================================================

    {
      id: "peripheral-neuropathy",
      name: "Peripheral Neuropathy Assessment",

      notes: {
        anatomy: `

          <h2>Peripheral Neuropathy Assessment</h2>

          <h3>History</h3>

          <ul>
            <li>Numbness</li>
            <li>Burning pain</li>
            <li>Tingling</li>
            <li>Weakness</li>
            <li>Balance disturbance</li>
            <li>Autonomic symptoms</li>
          </ul>

          <h3>Examination</h3>

          <ol>
            <li>Inspect muscle bulk.</li>
            <li>Assess tone.</li>
            <li>Assess power.</li>
            <li>Assess reflexes.</li>
            <li>Assess light touch.</li>
            <li>Assess pain sensation.</li>
            <li>Assess vibration.</li>
            <li>Assess joint position.</li>
            <li>Assess gait.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Depending on the suspected cause, investigations may include
            glucose assessment, vitamin levels, renal and liver function,
            thyroid testing, electrophysiological studies and targeted
            investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 19. SPINAL CORD
    // ============================================================

    {
      id: "spinal-cord-examination",
      name: "Spinal Cord Examination",

      notes: {
        anatomy: `

          <h2>Spinal Cord Examination</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess motor power.</li>
            <li>Assess muscle tone.</li>
            <li>Assess deep tendon reflexes.</li>
            <li>Assess plantar responses.</li>
            <li>Assess superficial sensation.</li>
            <li>Assess vibration and proprioception.</li>
            <li>Identify a sensory level.</li>
            <li>Assess gait.</li>
            <li>Ask about bladder and bowel function.</li>
            <li>Ask about sexual dysfunction where relevant.</li>
          </ol>

          <h3>Localization</h3>

          <p>
            A sensory level, upper motor neuron signs below the lesion and
            associated bladder or bowel dysfunction may support spinal cord
            localization.
          </p>

          <h3>Confirmation</h3>

          <p>
            MRI is an important investigation when structural spinal cord
            pathology is suspected.
          </p>

        `
      }
    },


    // ============================================================
    // 20. AUTONOMIC SYSTEM
    // ============================================================

    {
      id: "autonomic-assessment",
      name: "Autonomic Assessment",

      notes: {
        anatomy: `

          <h2>Autonomic Nervous System Assessment</h2>

          <h3>History</h3>

          <ul>
            <li>Postural dizziness</li>
            <li>Syncope</li>
            <li>Abnormal sweating</li>
            <li>Urinary dysfunction</li>
            <li>Bowel dysfunction</li>
            <li>Sexual dysfunction</li>
            <li>Abnormal heart-rate responses</li>
          </ul>

          <h3>Examination</h3>

          <ol>
            <li>Measure pulse.</li>
            <li>Measure blood pressure.</li>
            <li>Assess lying and standing blood pressure when indicated.</li>
            <li>Assess pupils.</li>
            <li>Assess sweating abnormalities.</li>
            <li>Assess relevant neurological findings.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Further autonomic testing is selected according to the suspected
            disorder and may include cardiovascular autonomic testing or
            specialized autonomic investigations.
          </p>

        `
      }
    },


    // ============================================================
    // 21. DELIRIUM
    // ============================================================

    {
      id: "delirium-assessment",
      name: "Delirium Assessment",

      notes: {
        anatomy: `

          <h2>Clinical Assessment of Delirium</h2>

          <h3>Key Features</h3>

          <ul>
            <li>Acute onset</li>
            <li>Fluctuating course</li>
            <li>Impaired attention</li>
            <li>Altered awareness</li>
            <li>Cognitive disturbance</li>
            <li>Possible perceptual disturbance</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Establish baseline cognitive function.</li>
            <li>Determine the onset of change.</li>
            <li>Assess attention.</li>
            <li>Assess orientation.</li>
            <li>Assess consciousness.</li>
            <li>Look for hallucinations or perceptual disturbance.</li>
            <li>Search for an underlying medical cause.</li>
            <li>Review medications.</li>
            <li>Assess for infection and metabolic abnormalities.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Diagnosis is clinical and supported by structured tools such as the
            Confusion Assessment Method when appropriate. Investigation should
            focus on identifying the underlying cause.
          </p>

        `
      }
    },


    // ============================================================
    // 22. PSYCHOSIS
    // ============================================================

    {
      id: "psychosis-assessment",
      name: "Psychosis Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Psychosis</h2>

          <h3>History</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine progression.</li>
            <li>Assess hallucinations.</li>
            <li>Assess delusions.</li>
            <li>Assess thought disorder.</li>
            <li>Assess disorganized behaviour.</li>
            <li>Assess negative symptoms.</li>
            <li>Assess mood symptoms.</li>
            <li>Assess substance use.</li>
            <li>Assess medication history.</li>
            <li>Assess risk.</li>
          </ol>

          <h3>Mental Status Examination</h3>

          <ul>
            <li>Appearance</li>
            <li>Behaviour</li>
            <li>Speech</li>
            <li>Mood and affect</li>
            <li>Thought form</li>
            <li>Thought content</li>
            <li>Perception</li>
            <li>Cognition</li>
            <li>Insight</li>
            <li>Judgement</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Psychosis is a clinical syndrome. Medical, neurological and
            substance-related causes should be considered, particularly when
            onset is acute, atypical or associated with altered consciousness.
          </p>

        `
      }
    },


    // ============================================================
    // 23. DEPRESSION
    // ============================================================

    {
      id: "depression-assessment",
      name: "Depression Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Depression</h2>

          <h3>Core Areas</h3>

          <ol>
            <li>Depressed mood.</li>
            <li>Loss of interest or pleasure.</li>
            <li>Energy and fatigue.</li>
            <li>Sleep disturbance.</li>
            <li>Appetite or weight change.</li>
            <li>Psychomotor change.</li>
            <li>Concentration difficulties.</li>
            <li>Feelings of worthlessness or excessive guilt.</li>
            <li>Thoughts of death or suicide.</li>
          </ol>

          <h3>Further Assessment</h3>

          <ul>
            <li>Duration</li>
            <li>Functional impairment</li>
            <li>Previous episodes</li>
            <li>Manic or hypomanic episodes</li>
            <li>Psychotic symptoms</li>
            <li>Substance use</li>
            <li>Medical causes</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Diagnosis is clinical. Standardized instruments such as PHQ-9 may
            support symptom assessment and monitoring but should not replace a
            comprehensive clinical assessment.
          </p>

        `
      }
    },


    // ============================================================
    // 24. MANIA
    // ============================================================

    {
      id: "mania-assessment",
      name: "Mania and Hypomania Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Mania and Hypomania</h2>

          <h3>Assess</h3>

          <ul>
            <li>Elevated or irritable mood</li>
            <li>Increased energy</li>
            <li>Reduced need for sleep</li>
            <li>Increased speech</li>
            <li>Racing thoughts</li>
            <li>Increased goal-directed activity</li>
            <li>Grandiosity</li>
            <li>Distractibility</li>
            <li>Impulsive behaviour</li>
            <li>Risk-taking</li>
          </ul>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Establish baseline personality and functioning.</li>
            <li>Determine duration of the change.</li>
            <li>Assess severity.</li>
            <li>Assess functional impairment.</li>
            <li>Assess psychotic symptoms.</li>
            <li>Assess substance use.</li>
            <li>Assess risk-taking behaviour.</li>
            <li>Assess risk to self and others.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Diagnosis requires clinical assessment of the duration, severity and
            functional consequences of the episode and exclusion of relevant
            substance-induced or medical causes.
          </p>

        `
      }
    },


    // ============================================================
    // 25. ANXIETY
    // ============================================================

    {
      id: "anxiety-assessment",
      name: "Anxiety Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Anxiety Disorders</h2>

          <h3>Psychological Symptoms</h3>

          <ul>
            <li>Excessive worry</li>
            <li>Fear</li>
            <li>Sense of impending danger</li>
            <li>Restlessness</li>
            <li>Difficulty concentrating</li>
          </ul>

          <h3>Physical Symptoms</h3>

          <ul>
            <li>Palpitations</li>
            <li>Sweating</li>
            <li>Tremor</li>
            <li>Shortness of breath</li>
            <li>Chest discomfort</li>
            <li>Dizziness</li>
            <li>Gastrointestinal symptoms</li>
          </ul>

          <h3>Assessment</h3>

          <ol>
            <li>Determine triggers.</li>
            <li>Determine duration.</li>
            <li>Assess frequency.</li>
            <li>Assess avoidance behaviour.</li>
            <li>Assess functional impairment.</li>
            <li>Screen for depression.</li>
            <li>Assess substance use.</li>
            <li>Assess suicide risk where indicated.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 26. SUBSTANCE USE
    // ============================================================

    {
      id: "substance-assessment",
      name: "Substance Use Assessment",

      notes: {
        anatomy: `

          <h2>Substance Use Assessment</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ask what substances are being used.</li>
            <li>Determine route of administration.</li>
            <li>Determine frequency.</li>
            <li>Determine quantity.</li>
            <li>Determine duration of use.</li>
            <li>Ask about tolerance.</li>
            <li>Ask about withdrawal symptoms.</li>
            <li>Assess cravings.</li>
            <li>Assess loss of control.</li>
            <li>Assess social and occupational consequences.</li>
            <li>Assess previous attempts to stop.</li>
            <li>Assess overdose or intoxication history.</li>
            <li>Assess coexisting psychiatric illness.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Diagnosis is clinical and may be supported by validated screening
            instruments and targeted toxicology testing where clinically
            appropriate.
          </p>

        `
      }
    },


    // ============================================================
    // 27. NEUROLOGICAL LOCALIZATION
    // ============================================================

    {
      id: "neurological-localization",
      name: "Neurological Localization",

      notes: {
        anatomy: `

          <h2>Neurological Localization</h2>

          <p>
            Neurological diagnosis depends heavily on anatomical localization.
            The examination should determine where in the nervous system the
            lesion is most likely located.
          </p>

          <h3>Major Localizations</h3>

          <ul>
            <li>Cerebral cortex</li>
            <li>Subcortical structures</li>
            <li>Brainstem</li>
            <li>Cerebellum</li>
            <li>Spinal cord</li>
            <li>Nerve root</li>
            <li>Plexus</li>
            <li>Peripheral nerve</li>
            <li>Neuromuscular junction</li>
            <li>Muscle</li>
          </ul>

          <h3>Localization Strategy</h3>

          <ol>
            <li>Identify the dominant neurological deficit.</li>
            <li>Determine whether it is motor, sensory, cranial nerve or cognitive.</li>
            <li>Determine the anatomical distribution.</li>
            <li>Assess associated signs.</li>
            <li>Localize the lesion.</li>
            <li>Develop the differential diagnosis.</li>
            <li>Select investigations that confirm the suspected localization.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 28. NEUROLOGICAL INVESTIGATIONS
    // ============================================================

    {
      id: "neurological-investigations",
      name: "Neurological Investigations",

      notes: {
        anatomy: `

          <h2>Neurological Investigations</h2>

          <h3>Laboratory Tests</h3>

          <ul>
            <li>Full blood count</li>
            <li>Blood glucose</li>
            <li>Electrolytes</li>
            <li>Renal function</li>
            <li>Liver function</li>
            <li>Thyroid function</li>
            <li>Vitamin levels where indicated</li>
            <li>Inflammatory markers where indicated</li>
            <li>Infectious disease testing where indicated</li>
          </ul>

          <h3>Neuroimaging</h3>

          <ul>
            <li>CT brain</li>
            <li>MRI brain</li>
            <li>Spinal MRI</li>
            <li>Vascular imaging where indicated</li>
          </ul>

          <h3>Electrophysiology</h3>

          <ul>
            <li>Electroencephalography</li>
            <li>Nerve-conduction studies</li>
            <li>Electromyography</li>
            <li>Evoked potentials in selected circumstances</li>
          </ul>

          <h3>Cerebrospinal Fluid</h3>

          <p>
            Lumbar puncture may be used when clinically indicated to evaluate
            selected infections, inflammatory disorders, malignancy and other
            central nervous system conditions.
          </p>

        `
      }
    },


    // ============================================================
    // 29. PSYCHIATRIC INVESTIGATIONS
    // ============================================================

    {
      id: "psychiatric-investigations",
      name: "Psychiatric Diagnostic Investigations",

      notes: {
        anatomy: `

          <h2>Investigations in Psychiatry</h2>

          <p>
            Psychiatric diagnoses are primarily clinical. Investigations are
            used to identify medical, neurological, metabolic or substance
            related causes and to establish baseline safety before treatment
            where appropriate.
          </p>

          <h3>Possible Investigations</h3>

          <ul>
            <li>Full blood count</li>
            <li>Electrolytes</li>
            <li>Renal function</li>
            <li>Liver function</li>
            <li>Glucose</li>
            <li>Thyroid function</li>
            <li>Pregnancy testing where relevant</li>
            <li>Toxicology testing where clinically indicated</li>
            <li>ECG where clinically indicated</li>
            <li>Neuroimaging when neurological disease is suspected</li>
          </ul>

          <h3>Important Principle</h3>

          <p>
            Investigations should be clinically driven rather than used as a
            substitute for psychiatric history and mental status examination.
          </p>

        `
      }
    },


    // ============================================================
    // 30. COMPLETE NEUROLOGICAL OSCE
    // ============================================================

    {
      id: "complete-neurological-osce",
      name: "Complete Neurological Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Neurological Examination — OSCE</h2>

          <h3>Opening</h3>

          <ol>
            <li>Wash hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Position the patient appropriately.</li>
          </ol>

          <h3>General Inspection</h3>

          <ol>
            <li>Assess level of consciousness.</li>
            <li>Observe posture.</li>
            <li>Observe speech.</li>
            <li>Observe abnormal movements.</li>
            <li>Look for muscle wasting.</li>
            <li>Observe gait where appropriate.</li>
          </ol>

          <h3>Higher Mental Functions</h3>

          <ol>
            <li>Assess orientation.</li>
            <li>Assess attention.</li>
            <li>Assess memory.</li>
            <li>Assess language.</li>
            <li>Assess cognition.</li>
          </ol>

          <h3>Cranial Nerves</h3>

          <p>
            Examine cranial nerves systematically according to the clinical
            indication.
          </p>

          <h3>Motor System</h3>

          <ol>
            <li>Inspect muscle bulk.</li>
            <li>Assess tone.</li>
            <li>Assess power.</li>
            <li>Assess involuntary movements.</li>
          </ol>

          <h3>Reflexes</h3>

          <ol>
            <li>Assess upper-limb reflexes.</li>
            <li>Assess lower-limb reflexes.</li>
            <li>Assess plantar responses.</li>
          </ol>

          <h3>Sensory System</h3>

          <ol>
            <li>Assess light touch.</li>
            <li>Assess pain.</li>
            <li>Assess vibration.</li>
            <li>Assess proprioception.</li>
            <li>Assess cortical sensory function where indicated.</li>
          </ol>

          <h3>Coordination</h3>

          <ol>
            <li>Finger-nose test.</li>
            <li>Rapid alternating movements.</li>
            <li>Heel-shin test.</li>
          </ol>

          <h3>Gait</h3>

          <ol>
            <li>Observe normal walking.</li>
            <li>Assess turning.</li>
            <li>Assess tandem gait where safe.</li>
            <li>Assess heel and toe walking where appropriate.</li>
          </ol>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Ensure patient comfort.</li>
            <li>Wash hands.</li>
            <li>Summarize positive and negative findings.</li>
            <li>Localize the lesion.</li>
            <li>State the likely differential diagnosis.</li>
            <li>Recommend appropriate investigations.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 31. COMPLETE MENTAL STATUS OSCE
    // ============================================================

    {
      id: "complete-mse-osce",
      name: "Complete Mental Status Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Mental Status Examination — OSCE</h2>

          <h3>Opening</h3>

          <ol>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the assessment.</li>
            <li>Establish rapport.</li>
            <li>Explain confidentiality and its limits.</li>
          </ol>

          <h3>Observe</h3>

          <ol>
            <li>Appearance.</li>
            <li>Behaviour.</li>
            <li>Psychomotor activity.</li>
            <li>Eye contact.</li>
            <li>Level of cooperation.</li>
          </ol>

          <h3>Assess Speech</h3>

          <ul>
            <li>Rate</li>
            <li>Volume</li>
            <li>Fluency</li>
            <li>Quantity</li>
            <li>Latency</li>
          </ul>

          <h3>Assess Mood and Affect</h3>

          <ol>
            <li>Ask about subjective mood.</li>
            <li>Observe objective affect.</li>
            <li>Assess range.</li>
            <li>Assess reactivity.</li>
            <li>Assess congruence.</li>
          </ol>

          <h3>Assess Thought</h3>

          <ol>
            <li>Assess thought form.</li>
            <li>Assess thought flow.</li>
            <li>Assess thought content.</li>
            <li>Ask about delusions.</li>
            <li>Ask about obsessions.</li>
            <li>Assess suicidal or homicidal thoughts.</li>
          </ol>

          <h3>Assess Perception</h3>

          <ol>
            <li>Ask about hallucinations.</li>
            <li>Ask about illusions.</li>
            <li>Assess the patient's interpretation of perceptual experiences.</li>
          </ol>

          <h3>Assess Cognition</h3>

          <ol>
            <li>Orientation.</li>
            <li>Attention.</li>
            <li>Concentration.</li>
            <li>Memory.</li>
            <li>Language.</li>
            <li>Executive function where indicated.</li>
          </ol>

          <h3>Insight and Judgement</h3>

          <ol>
            <li>Assess awareness of illness.</li>
            <li>Assess understanding of treatment.</li>
            <li>Assess ability to make appropriate decisions.</li>
          </ol>

          <h3>Risk Assessment</h3>

          <ol>
            <li>Suicide risk.</li>
            <li>Self-harm risk.</li>
            <li>Risk to others.</li>
            <li>Self-neglect.</li>
            <li>Vulnerability.</li>
            <li>Substance-related risk.</li>
          </ol>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Summarize findings.</li>
            <li>Formulate the clinical problem.</li>
            <li>State differential diagnoses.</li>
            <li>Identify required investigations.</li>
            <li>State immediate risk and management priorities.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 32. CLINICAL FORMULATION
    // ============================================================

    {
      id: "neuropsychiatric-formulation",
      name: "Clinical Formulation and Diagnosis",

      notes: {
        anatomy: `

          <h2>Neuro-Psychiatric Clinical Formulation</h2>

          <h3>Neurological Formulation</h3>

          <ol>
            <li>Identify the principal neurological syndrome.</li>
            <li>Localize the lesion anatomically.</li>
            <li>Determine the likely pathological process.</li>
            <li>Develop differential diagnoses.</li>
            <li>Select targeted investigations.</li>
            <li>Correlate investigation results with examination findings.</li>
          </ol>

          <h3>Psychiatric Formulation</h3>

          <ol>
            <li>Identify the presenting syndrome.</li>
            <li>Establish chronology.</li>
            <li>Identify predisposing factors.</li>
            <li>Identify precipitating factors.</li>
            <li>Identify perpetuating factors.</li>
            <li>Identify protective factors.</li>
            <li>Assess comorbid medical conditions.</li>
            <li>Assess substance use.</li>
            <li>Assess risk.</li>
            <li>Develop a differential diagnosis.</li>
          </ol>

          <h3>Confirmation Principle</h3>

          <p>
            The final diagnosis should be based on the complete clinical
            picture. Neurological and psychiatric investigations should confirm,
            refine or exclude diagnostic possibilities rather than replacing
            clinical reasoning.
          </p>

        `
      }
    }

  ]
};