export const neuroprocedures = {

  id: "neuroprocedures",

  name: "Neuro-Psychiatry",

  parts: [

    {
      id: "neurological-examination",
      name: "Neurological Examination",

      notes: {
        anatomy: `
          <h2>Neurological Examination</h2>

          <h3>Overview</h3>
          <p>
            A neurological examination systematically evaluates the central and
            peripheral nervous systems. It assesses higher cortical function,
            cranial nerves, motor function, sensory function, coordination,
            reflexes and gait.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. General Observation</h4>
          <ol>
            <li>Assess level of consciousness.</li>
            <li>Observe posture and spontaneous movements.</li>
            <li>Assess speech and behaviour.</li>
            <li>Look for abnormal movements, tremor or fasciculations.</li>
            <li>Observe gait where appropriate.</li>
          </ol>

          <h4>2. Higher Mental Functions</h4>
          <ol>
            <li>Assess orientation to person, place and time.</li>
            <li>Assess attention and concentration.</li>
            <li>Assess memory.</li>
            <li>Assess language.</li>
            <li>Assess executive function where clinically indicated.</li>
            <li>Assess insight and judgement when appropriate.</li>
          </ol>

          <h4>3. Cranial Nerves</h4>
          <ol>
            <li>Assess smell when indicated.</li>
            <li>Assess visual acuity and visual fields.</li>
            <li>Assess pupillary responses.</li>
            <li>Examine eye movements.</li>
            <li>Assess facial sensation and facial movement.</li>
            <li>Assess hearing.</li>
            <li>Assess palate elevation and gag reflex where indicated.</li>
            <li>Assess shoulder elevation and head rotation.</li>
            <li>Assess tongue movement.</li>
          </ol>

          <h4>4. Motor System</h4>
          <ol>
            <li>Inspect muscle bulk.</li>
            <li>Assess muscle tone.</li>
            <li>Assess power using an appropriate grading system.</li>
            <li>Look for involuntary movements.</li>
          </ol>

          <h4>5. Reflexes</h4>
          <ol>
            <li>Test relevant deep tendon reflexes.</li>
            <li>Assess superficial reflexes where indicated.</li>
            <li>Assess plantar responses.</li>
          </ol>

          <h4>6. Sensory System</h4>
          <ol>
            <li>Test light touch.</li>
            <li>Test pinprick when indicated.</li>
            <li>Assess vibration.</li>
            <li>Assess joint position sense.</li>
            <li>Perform cortical sensory testing where appropriate.</li>
          </ol>

          <h4>7. Coordination</h4>
          <ol>
            <li>Perform finger-to-nose testing.</li>
            <li>Perform heel-to-shin testing where appropriate.</li>
            <li>Assess rapid alternating movements.</li>
          </ol>

          <h4>8. Gait and Balance</h4>
          <ol>
            <li>Observe normal gait.</li>
            <li>Assess tandem gait where safe.</li>
            <li>Assess heel and toe walking where appropriate.</li>
            <li>Perform Romberg testing when indicated and safe.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            Neurological findings should be internally consistent and localized
            anatomically. Abnormal findings may be confirmed using appropriate
            investigations such as neuroimaging, electrodiagnostic studies,
            laboratory investigations or cerebrospinal fluid examination.
          </p>
        `
      }
    },

    {
      id: "glasgow-coma-scale",
      name: "Glasgow Coma Scale Assessment",

      notes: {
        anatomy: `
          <h2>Glasgow Coma Scale Assessment</h2>

          <h3>Overview</h3>
          <p>
            The Glasgow Coma Scale (GCS) provides a structured assessment of
            consciousness using eye opening, verbal response and motor response.
            It is particularly useful in patients with acute neurological illness
            or trauma.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Eye Response</h4>
          <ol>
            <li>Observe whether the patient's eyes open spontaneously.</li>
            <li>If not, give a verbal stimulus.</li>
            <li>If there is no response, apply an appropriate physical stimulus.</li>
            <li>Record the best eye response.</li>
          </ol>

          <h4>2. Verbal Response</h4>
          <ol>
            <li>Assess whether the patient is oriented.</li>
            <li>Assess whether the patient responds coherently but is confused.</li>
            <li>Assess for inappropriate words.</li>
            <li>Assess for incomprehensible sounds.</li>
            <li>Record the best verbal response.</li>
          </ol>

          <h4>3. Motor Response</h4>
          <ol>
            <li>Ask the patient to obey a simple command.</li>
            <li>If unable to obey, assess response to an appropriate stimulus.</li>
            <li>Determine whether the patient localizes, withdraws or demonstrates
                abnormal flexion or extension.</li>
            <li>Record the best motor response.</li>
          </ol>

          <h3>SCORING</h3>
          <ul>
            <li><strong>Eye:</strong> 1–4.</li>
            <li><strong>Verbal:</strong> 1–5.</li>
            <li><strong>Motor:</strong> 1–6.</li>
            <li><strong>Total:</strong> 3–15.</li>
          </ul>

          <h3>CONFIRMATION</h3>
          <p>
            Record the individual components rather than only the total score.
            Serial GCS assessments are more informative than a single measurement
            because a change from the patient's baseline may indicate neurological
            deterioration.
          </p>

          <p>
            Intubation, aphasia, severe hearing impairment or other factors may
            interfere with assessment and should be documented rather than assuming
            an absent response represents impaired consciousness.
          </p>
        `
      }
    },

    {
      id: "pupil-examination",
      name: "Pupillary Examination",

      notes: {
        anatomy: `
          <h2>Pupillary Examination</h2>

          <h3>Relevant Anatomy</h3>
          <p>
            Pupillary responses involve the optic nerve (CN II), midbrain
            parasympathetic pathways carried by the oculomotor nerve (CN III),
            the ciliary ganglion and the iris sphincter muscle. Sympathetic
            pathways contribute to pupillary dilation.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <ol>
            <li>Dim the room when appropriate.</li>
            <li>Inspect pupil size and shape.</li>
            <li>Compare the pupils for symmetry.</li>
            <li>Assess direct response to light.</li>
            <li>Assess consensual response in the opposite eye.</li>
            <li>Assess the near response when clinically indicated.</li>
            <li>Perform a swinging flashlight test when a relative afferent
                pupillary defect is suspected.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <ul>
            <li>
              <strong>Normal response:</strong> Pupillary constriction occurs in
              response to light with an appropriate consensual response.
            </li>
            <li>
              <strong>Relative afferent pupillary defect:</strong> An abnormal
              response may be demonstrated using the swinging flashlight test.
            </li>
            <li>
              <strong>Further investigation:</strong> New anisocoria, an abnormal
              pupil with neurological signs or unexplained pupillary abnormalities
              may require urgent neurological or ophthalmological assessment.
            </li>
          </ul>
        `
      }
    },

    {
      id: "cranial-nerve-examination",
      name: "Cranial Nerve Examination",

      notes: {
        anatomy: `
          <h2>Cranial Nerve Examination</h2>

          <h3>Overview</h3>
          <p>
            Examination of cranial nerves assesses the sensory and motor functions
            of cranial nerves I–XII and helps localize lesions within the brain,
            brainstem, skull base and peripheral cranial nerve pathways.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>CN I — Olfactory</h4>
          <ol>
            <li>Assess each nostril separately when indicated.</li>
            <li>Use a familiar non-irritating odor.</li>
            <li>Ask the patient to identify the odor.</li>
          </ol>

          <h4>CN II — Optic</h4>
          <ol>
            <li>Assess visual acuity.</li>
            <li>Assess visual fields.</li>
            <li>Assess pupillary afferent function.</li>
            <li>Examine the optic disc when indicated.</li>
          </ol>

          <h4>CN III, IV and VI — Ocular Movement</h4>
          <ol>
            <li>Inspect eye position.</li>
            <li>Assess pupil size and reaction.</li>
            <li>Assess extraocular movements.</li>
            <li>Look for diplopia or nystagmus.</li>
          </ol>

          <h4>CN V — Trigeminal</h4>
          <ol>
            <li>Assess facial sensation in the three divisions.</li>
            <li>Assess corneal reflex when indicated.</li>
            <li>Assess muscles of mastication.</li>
          </ol>

          <h4>CN VII — Facial</h4>
          <ol>
            <li>Ask the patient to raise the eyebrows.</li>
            <li>Ask the patient to close the eyes tightly.</li>
            <li>Ask the patient to smile.</li>
            <li>Ask the patient to puff the cheeks.</li>
          </ol>

          <h4>CN VIII — Vestibulocochlear</h4>
          <ol>
            <li>Assess hearing.</li>
            <li>Perform tuning-fork tests when indicated.</li>
            <li>Assess vestibular function when clinically required.</li>
          </ol>

          <h4>CN IX and X — Glossopharyngeal and Vagus</h4>
          <ol>
            <li>Listen to the patient's voice.</li>
            <li>Ask the patient to open the mouth and say "ah".</li>
            <li>Observe palatal movement.</li>
            <li>Assess swallowing where appropriate.</li>
          </ol>

          <h4>CN XI — Accessory</h4>
          <ol>
            <li>Assess shoulder shrug against resistance.</li>
            <li>Assess head rotation against resistance.</li>
          </ol>

          <h4>CN XII — Hypoglossal</h4>
          <ol>
            <li>Ask the patient to protrude the tongue.</li>
            <li>Observe for deviation, wasting or fasciculations.</li>
            <li>Assess tongue movement against resistance where appropriate.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            Abnormal cranial nerve findings should be localized according to the
            anatomical pathway involved. Depending on the suspected lesion,
            confirmation may involve neuroimaging, formal visual testing,
            audiological testing, electrophysiology or specialist assessment.
          </p>
        `
      }
    },

    {
      id: "motor-system-examination",
      name: "Motor System Examination",

      notes: {
        anatomy: `
          <h2>Motor System Examination</h2>

          <h3>Overview</h3>
          <p>
            Motor examination evaluates the corticospinal system, lower motor
            neurons, peripheral nerves, neuromuscular junctions and muscles.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Inspection</h4>
          <ol>
            <li>Inspect muscle bulk.</li>
            <li>Look for wasting.</li>
            <li>Look for fasciculations.</li>
            <li>Observe tremor or other involuntary movements.</li>
          </ol>

          <h4>2. Tone</h4>
          <ol>
            <li>Ask the patient to relax.</li>
            <li>Move the limb passively through its range.</li>
            <li>Assess resistance to passive movement.</li>
            <li>Compare both sides.</li>
          </ol>

          <h4>3. Power</h4>
          <ol>
            <li>Test major muscle groups systematically.</li>
            <li>Apply resistance against the patient's movement.</li>
            <li>Grade power using an established scale.</li>
            <li>Compare right and left sides.</li>
          </ol>

          <h4>4. Functional Testing</h4>
          <ol>
            <li>Assess ability to stand where safe.</li>
            <li>Assess gait.</li>
            <li>Assess fine motor movements when relevant.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            A consistent pattern of weakness can help distinguish upper motor
            neuron, lower motor neuron, peripheral nerve, neuromuscular junction
            and muscle disease. Electrodiagnostic testing and imaging may be used
            to confirm the anatomical localization when required.
          </p>
        `
      }
    },

    {
      id: "sensory-system-examination",
      name: "Sensory System Examination",

      notes: {
        anatomy: `
          <h2>Sensory System Examination</h2>

          <h3>Overview</h3>
          <p>
            Sensory examination evaluates peripheral sensory receptors, peripheral
            nerves, spinal cord pathways, brainstem, thalamus and cerebral sensory
            cortex.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Primary Sensation</h4>
          <ol>
            <li>Test light touch.</li>
            <li>Test pinprick when indicated.</li>
            <li>Test temperature when clinically relevant.</li>
          </ol>

          <h4>2. Posterior Column Function</h4>
          <ol>
            <li>Test vibration using an appropriate tuning fork.</li>
            <li>Test joint position sense.</li>
          </ol>

          <h4>3. Cortical Sensory Function</h4>
          <ol>
            <li>Assess stereognosis.</li>
            <li>Assess graphesthesia.</li>
            <li>Assess two-point discrimination where indicated.</li>
            <li>Assess sensory extinction where appropriate.</li>
          </ol>

          <h4>4. Distribution</h4>
          <ol>
            <li>Map abnormal sensation.</li>
            <li>Compare both sides.</li>
            <li>Determine whether the pattern follows a peripheral nerve,
                dermatome, stocking distribution or central pattern.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            Sensory deficits should be mapped anatomically. Where indicated,
            nerve conduction studies, electromyography, spinal imaging or brain
            imaging may be used to confirm localization and cause.
          </p>
        `
      }
    },

    {
      id: "reflex-examination",
      name: "Deep Tendon Reflex Examination",

      notes: {
        anatomy: `
          <h2>Deep Tendon Reflex Examination</h2>

          <h3>Overview</h3>
          <p>
            Deep tendon reflexes assess the integrity of sensory afferent pathways,
            spinal cord segments, motor efferent pathways, peripheral nerves and
            descending supraspinal control.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <ol>
            <li>Position the patient comfortably and ensure the muscles are relaxed.</li>
            <li>Identify the appropriate tendon.</li>
            <li>Strike the tendon with a reflex hammer using an appropriate technique.</li>
            <li>Observe the resulting muscle contraction.</li>
            <li>Compare the response with the opposite side.</li>
            <li>Assess relevant reflexes systematically.</li>
          </ol>

          <h3>Common Reflexes</h3>
          <ul>
            <li>Biceps reflex.</li>
            <li>Triceps reflex.</li>
            <li>Brachioradialis reflex.</li>
            <li>Patellar reflex.</li>
            <li>Achilles reflex.</li>
          </ul>

          <h3>CONFIRMATION</h3>
          <p>
            Reflex findings should be interpreted in relation to muscle power,
            tone and sensory findings. Asymmetry is often more clinically useful
            than an isolated reflex grade. Persistent or significant abnormalities
            may require further neurological investigation.
          </p>
        `
      }
    },

    {
      id: "lumbar-puncture",
      name: "Lumbar Puncture",

      notes: {
        anatomy: `
          <h2>Lumbar Puncture</h2>

          <h3>Overview</h3>
          <p>
            Lumbar puncture involves insertion of a needle into the lumbar
            subarachnoid space to obtain cerebrospinal fluid (CSF), measure opening
            pressure when indicated, or administer selected medications.
          </p>

          <h3>Relevant Anatomy</h3>
          <p>
            The spinal cord usually terminates around the L1–L2 vertebral level in
            adults, forming the conus medullaris. The lumbar subarachnoid space
            extends below this level and contains the cauda equina, allowing CSF
            sampling from the lower lumbar region.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Pre-procedure Assessment</h4>
          <ol>
            <li>Confirm the indication.</li>
            <li>Assess for contraindications.</li>
            <li>Assess for features suggesting raised intracranial pressure or
                intracranial mass effect.</li>
            <li>Review bleeding risk and relevant medications.</li>
            <li>Obtain informed consent.</li>
          </ol>

          <h4>2. Positioning</h4>
          <ol>
            <li>Position the patient in the lateral decubitus or sitting position
                according to the clinical situation.</li>
            <li>Flex the lumbar spine appropriately while maintaining patient comfort.</li>
            <li>Identify the appropriate lumbar interspace using anatomical landmarks
                or image guidance where indicated.</li>
          </ol>

          <h4>3. Aseptic Preparation</h4>
          <ol>
            <li>Perform hand hygiene.</li>
            <li>Prepare a sterile field.</li>
            <li>Clean the skin using appropriate antiseptic technique.</li>
            <li>Allow the antiseptic to dry.</li>
            <li>Use sterile gloves and equipment.</li>
            <li>Administer local anaesthesia when appropriate.</li>
          </ol>

          <h4>4. Needle Insertion</h4>
          <ol>
            <li>Insert the spinal needle at the selected lumbar level.</li>
            <li>Advance carefully through the tissues toward the subarachnoid space.</li>
            <li>Recognize entry into the CSF-containing space.</li>
            <li>Measure opening pressure when clinically indicated and using
                appropriate positioning.</li>
            <li>Collect CSF into appropriately labelled sterile containers.</li>
            <li>Remove the needle and apply a dressing.</li>
          </ol>

          <h3>CSF INVESTIGATIONS</h3>
          <ul>
            <li>Opening pressure.</li>
            <li>Appearance.</li>
            <li>Cell count and differential.</li>
            <li>Protein.</li>
            <li>Glucose.</li>
            <li>Gram stain and culture where indicated.</li>
            <li>Additional microbiological, molecular or immunological tests when indicated.</li>
          </ul>

          <h3>CONFIRMATION</h3>
          <ul>
            <li>
              <strong>CSF return:</strong> Free-flowing CSF confirms access to the
              subarachnoid space.
            </li>
            <li>
              <strong>Opening pressure:</strong> Provides physiological information
              when measured correctly.
            </li>
            <li>
              <strong>Laboratory confirmation:</strong> CSF analysis establishes
              the biochemical, cellular and microbiological characteristics relevant
              to the suspected diagnosis.
            </li>
          </ul>

          <h3>Complications</h3>
          <ul>
            <li>Post-dural puncture headache.</li>
            <li>Local pain.</li>
            <li>Bleeding.</li>
            <li>Infection.</li>
            <li>Nerve irritation.</li>
            <li>Rarely, neurological deterioration in patients with dangerous
                intracranial pressure gradients.</li>
          </ul>
        `
      }
    },

    {
      id: "mental-status-examination",
      name: "Mental Status Examination",

      notes: {
        anatomy: `
          <h2>Mental Status Examination</h2>

          <h3>Overview</h3>
          <p>
            The Mental Status Examination (MSE) is a structured assessment of a
            person's current psychological functioning. It evaluates observable
            behaviour and mental processes including appearance, behaviour,
            speech, mood, affect, thought, perception, cognition, insight and
            judgement.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Appearance and Behaviour</h4>
          <ol>
            <li>Observe grooming and hygiene.</li>
            <li>Assess clothing and appropriateness.</li>
            <li>Observe posture and psychomotor activity.</li>
            <li>Assess eye contact and interaction.</li>
          </ol>

          <h4>2. Speech</h4>
          <ol>
            <li>Assess rate.</li>
            <li>Assess volume.</li>
            <li>Assess tone and prosody.</li>
            <li>Assess fluency and spontaneity.</li>
          </ol>

          <h4>3. Mood and Affect</h4>
          <ol>
            <li>Ask the patient to describe their mood.</li>
            <li>Observe affect.</li>
            <li>Assess affective range.</li>
            <li>Assess congruence between reported mood and observed affect.</li>
          </ol>

          <h4>4. Thought Process</h4>
          <ol>
            <li>Assess the organization of thoughts.</li>
            <li>Assess associations.</li>
            <li>Look for flight of ideas, loosening of associations,
                thought blocking or other abnormalities.</li>
          </ol>

          <h4>5. Thought Content</h4>
          <ol>
            <li>Assess for delusions.</li>
            <li>Assess excessive or pathological preoccupations.</li>
            <li>Assess obsessive thoughts where relevant.</li>
            <li>Assess thoughts of self-harm or harm to others when clinically indicated.</li>
          </ol>

          <h4>6. Perception</h4>
          <ol>
            <li>Assess for hallucinations.</li>
            <li>Assess other perceptual disturbances.</li>
          </ol>

          <h4>7. Cognition</h4>
          <ol>
            <li>Assess orientation.</li>
            <li>Assess attention.</li>
            <li>Assess concentration.</li>
            <li>Assess memory.</li>
            <li>Assess language and executive function when required.</li>
          </ol>

          <h4>8. Insight and Judgement</h4>
          <ol>
            <li>Assess the patient's understanding of their condition.</li>
            <li>Assess recognition of the need for treatment.</li>
            <li>Assess decision-making and judgement.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            The MSE is primarily a clinical assessment. Findings can be supported
            using validated cognitive or psychiatric rating instruments where
            appropriate. Diagnosis requires integration of the MSE with history,
            collateral information, physical examination and relevant investigations.
          </p>
        `
      }
    },

    {
      id: "cognitive-assessment",
      name: "Cognitive Assessment",

      notes: {
        anatomy: `
          <h2>Cognitive Assessment</h2>

          <h3>Overview</h3>
          <p>
            Cognitive assessment evaluates domains including orientation, attention,
            memory, language, visuospatial ability and executive function.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Orientation</h4>
          <ol>
            <li>Assess orientation to person.</li>
            <li>Assess orientation to place.</li>
            <li>Assess orientation to time.</li>
            <li>Assess orientation to situation when relevant.</li>
          </ol>

          <h4>2. Attention</h4>
          <ol>
            <li>Assess ability to maintain attention.</li>
            <li>Use an appropriate digit-span, serial calculation or attention task.</li>
          </ol>

          <h4>3. Memory</h4>
          <ol>
            <li>Assess immediate registration.</li>
            <li>Assess delayed recall.</li>
            <li>Assess remote memory.</li>
          </ol>

          <h4>4. Language</h4>
          <ol>
            <li>Assess naming.</li>
            <li>Assess repetition.</li>
            <li>Assess comprehension.</li>
            <li>Assess verbal fluency.</li>
          </ol>

          <h4>5. Executive Function</h4>
          <ol>
            <li>Assess planning.</li>
            <li>Assess abstraction.</li>
            <li>Assess sequencing.</li>
            <li>Assess problem-solving.</li>
          </ol>

          <h4>6. Visuospatial Function</h4>
          <ol>
            <li>Assess copying or constructional ability.</li>
            <li>Assess spatial orientation where indicated.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            Standardized tools such as the Montreal Cognitive Assessment (MoCA)
            or Mini-Mental State Examination (MMSE) may support assessment where
            appropriate. Abnormal screening results should not be interpreted as
            a diagnosis by themselves and may require formal neuropsychological
            assessment.
          </p>
        `
      }
    },

    {
      id: "delirium-assessment",
      name: "Delirium Assessment",

      notes: {
        anatomy: `
          <h2>Delirium Assessment</h2>

          <h3>Overview</h3>
          <p>
            Delirium is an acute disturbance in attention and awareness accompanied
            by changes in cognition. It commonly develops over a short period and
            fluctuates during the day.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <ol>
            <li>Establish the patient's baseline mental state.</li>
            <li>Determine whether there has been an acute change in mental status.</li>
            <li>Assess attention.</li>
            <li>Assess level of consciousness.</li>
            <li>Assess orientation and cognition.</li>
            <li>Assess whether symptoms fluctuate.</li>
            <li>Review medications and possible precipitants.</li>
            <li>Assess for infection, metabolic disturbance, hypoxia, pain,
                dehydration and other potential causes.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            A validated instrument such as the Confusion Assessment Method (CAM)
            can support identification of delirium. Confirmation requires recognition
            of an acute or fluctuating disturbance in attention and awareness together
            with the characteristic associated features.
          </p>

          <h3>Important Principle</h3>
          <p>
            Delirium is a clinical syndrome rather than a final etiological diagnosis.
            Once identified, the underlying cause should be actively investigated.
          </p>
        `
      }
    },

    {
      id: "psychiatric-risk-assessment",
      name: "Psychiatric Risk Assessment",

      notes: {
        anatomy: `
          <h2>Psychiatric Risk Assessment</h2>

          <h3>Overview</h3>
          <p>
            Psychiatric risk assessment evaluates immediate and longer-term risks
            associated with self-harm, suicide, violence, vulnerability, neglect
            and inability to maintain personal safety.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Establish Immediate Safety</h4>
          <ol>
            <li>Determine whether there is an immediate threat to life or safety.</li>
            <li>Ensure an appropriate level of observation and supervision.</li>
            <li>Remove access to immediately dangerous means when appropriate.</li>
          </ol>

          <h4>2. Assess Suicidal Risk</h4>
          <ol>
            <li>Ask directly about suicidal thoughts.</li>
            <li>Assess intent.</li>
            <li>Assess planning.</li>
            <li>Assess access to means.</li>
            <li>Assess previous attempts.</li>
            <li>Assess recent stressors and precipitating factors.</li>
          </ol>

          <h4>3. Assess Protective Factors</h4>
          <ol>
            <li>Assess social support.</li>
            <li>Assess reasons for living.</li>
            <li>Assess engagement with treatment.</li>
            <li>Assess willingness to seek help during deterioration.</li>
          </ol>

          <h4>4. Assess Violence Risk</h4>
          <ol>
            <li>Assess thoughts or intentions of harming others.</li>
            <li>Assess previous violent behaviour.</li>
            <li>Assess current agitation or disinhibition.</li>
            <li>Assess access to potential means.</li>
          </ol>

          <h4>5. Assess Vulnerability</h4>
          <ol>
            <li>Assess ability to care for basic needs.</li>
            <li>Assess exploitation or abuse risk.</li>
            <li>Assess cognitive impairment.</li>
            <li>Assess environmental safety.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <p>
            Risk assessment is confirmed through synthesis of the interview,
            mental status examination, collateral information and clinical
            observation. Structured tools may support assessment but should not
            replace clinical judgement.
          </p>

          <h3>Documentation</h3>
          <p>
            Document the specific risk factors identified, protective factors,
            current intent or plans where present, level of risk, immediate safety
            measures and follow-up plan.
          </p>
        `
      }
    },

    {
      id: "neurological-observation",
      name: "Neurological Observation",

      notes: {
        anatomy: `
          <h2>Neurological Observation</h2>

          <h3>Overview</h3>
          <p>
            Neurological observation is serial monitoring used to detect changes
            in consciousness, pupil responses, motor function and other neurological
            signs.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <ol>
            <li>Establish the patient's baseline neurological status.</li>
            <li>Assess level of consciousness.</li>
            <li>Record the GCS where appropriate.</li>
            <li>Assess pupil size and reactivity.</li>
            <li>Assess limb movement and strength.</li>
            <li>Assess speech and orientation.</li>
            <li>Assess vital signs.</li>
            <li>Repeat observations at the prescribed frequency.</li>
            <li>Compare each assessment with previous observations.</li>
          </ol>

          <h3>CONFIRMATION OF DETERIORATION</h3>
          <p>
            Neurological deterioration is identified through a clinically significant
            change from baseline, such as a reduction in GCS, new pupillary abnormality,
            new focal weakness, altered speech, seizure activity or significant
            change in behaviour or consciousness.
          </p>

          <h3>Response</h3>
          <ol>
            <li>Repeat the assessment to verify the finding when appropriate.</li>
            <li>Assess airway, breathing and circulation.</li>
            <li>Check blood glucose where indicated.</li>
            <li>Escalate urgently when significant deterioration is confirmed.</li>
            <li>Document the change and response.</li>
          </ol>
        `
      }
    },

    {
      id: "seizure-assessment",
      name: "Seizure Assessment",

      notes: {
        anatomy: `
          <h2>Seizure Assessment</h2>

          <h3>Overview</h3>
          <p>
            Seizure assessment determines whether an episode is consistent with
            epileptic seizure activity and identifies potential provoking factors,
            complications and the need for urgent intervention.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <h4>1. Immediate Assessment</h4>
          <ol>
            <li>Assess airway, breathing and circulation.</li>
            <li>Protect the patient from injury.</li>
            <li>Do not place objects in the patient's mouth.</li>
            <li>Record the duration of the event.</li>
            <li>Assess consciousness.</li>
          </ol>

          <h4>2. Characterize the Event</h4>
          <ol>
            <li>Determine the onset.</li>
            <li>Determine whether onset was focal or generalized when possible.</li>
            <li>Assess motor activity.</li>
            <li>Assess eye deviation or head turning.</li>
            <li>Assess responsiveness.</li>
            <li>Assess tongue injury or incontinence.</li>
          </ol>

          <h4>3. Post-event Assessment</h4>
          <ol>
            <li>Assess recovery of consciousness.</li>
            <li>Assess postictal confusion.</li>
            <li>Assess focal neurological deficits.</li>
            <li>Check blood glucose where appropriate.</li>
            <li>Assess for injury.</li>
          </ol>

          <h3>CONFIRMATION</h3>
          <ul>
            <li>
              <strong>Witness history:</strong> Often provides essential information
              about the event.
            </li>
            <li>
              <strong>Video recording:</strong> When safely and appropriately obtained,
              may assist specialist assessment.
            </li>
            <li>
              <strong>EEG:</strong> May support diagnosis and classification of epilepsy.
            </li>
            <li>
              <strong>Neuroimaging:</strong> CT or MRI may identify structural causes.
            </li>
            <li>
              <strong>Laboratory testing:</strong> May identify metabolic or toxic
              precipitants.
            </li>
          </ul>
        `
      }
    },

    {
      id: "mini-mental-state-examination",
      name: "Mini-Mental State Examination",

      notes: {
        anatomy: `
          <h2>Mini-Mental State Examination</h2>

          <h3>Overview</h3>
          <p>
            The Mini-Mental State Examination (MMSE) is a structured cognitive
            screening instrument assessing several cognitive domains. It is used
            to support assessment of cognitive impairment and to monitor change
            over time.
          </p>

          <h3>STEP-BY-STEP PROCEDURE</h3>

          <ol>
            <li>Assess orientation to time.</li>
            <li>Assess orientation to place.</li>
            <li>Assess immediate registration of information.</li>
            <li>Assess attention and calculation.</li>
            <li>Assess delayed recall.</li>
            <li>Assess naming.</li>
            <li>Assess repetition.</li>
            <li>Assess comprehension and execution of commands.</li>
            <li>Assess reading where included.</li>
            <li>Assess writing.</li>
            <li>Assess visuoconstructional ability where included.</li>
          </ol>

          <h3>CONFIRMATION AND INTERPRETATION</h3>
          <p>
            The result should be scored according to the validated version being
            used. Performance can be influenced by education, language, culture,
            hearing, vision and other factors. The MMSE is a screening instrument
            and does not independently establish a diagnosis.
          </p>

          <p>
            Abnormal findings should be interpreted alongside history, functional
            assessment, physical examination and, where necessary, formal
            neuropsychological testing.
          </p>
        `
      }
    }

  ]
};
