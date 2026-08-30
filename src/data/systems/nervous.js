import { clinicalMethodsNeuroPsychiatry } from "./neuro/clinical_methods.js";

export const nervousSystem = {
  id: "nervous",
  name: "Nervous System",

  notes: {
    anatomy: `
      <h2>Nervous System Anatomy</h2>

      <h3>Overview</h3>
      <p>
        The nervous system is the body's principal communication, control and integration system.
        It receives information from the internal and external environment, processes that information,
        generates appropriate responses and coordinates the activities of virtually every organ system.
      </p>

      <h3>Major Divisions</h3>
      <ul>
        <li><strong>Central nervous system (CNS):</strong> consists of the brain and spinal cord.</li>
        <li><strong>Peripheral nervous system (PNS):</strong> consists of cranial nerves, spinal nerves, ganglia and peripheral sensory and motor nerve structures.</li>
      </ul>

      <h3>Functional Divisions</h3>
      <ul>
        <li><strong>Sensory / afferent division:</strong> carries information from receptors toward the CNS.</li>
        <li><strong>Motor / efferent division:</strong> carries commands from the CNS to effectors.</li>
        <li><strong>Somatic nervous system:</strong> primarily associated with conscious sensation and skeletal muscle control.</li>
        <li><strong>Autonomic nervous system:</strong> regulates involuntary visceral functions.</li>
        <li><strong>Sympathetic division:</strong> supports activity associated with stress and increased metabolic demand.</li>
        <li><strong>Parasympathetic division:</strong> supports rest, digestion and energy conservation.</li>
        <li><strong>Enteric nervous system:</strong> regulates many functions of the gastrointestinal tract.</li>
      </ul>

      <h3>Basic Structural Components</h3>
      <p>
        The nervous system contains neurons and neuroglial cells. Neurons are specialized for electrical
        signaling, while glial cells provide structural, metabolic, insulating and immune support.
      </p>
    `,

    physiology: `
      <h2>Nervous System Physiology</h2>

      <h3>Major Functions</h3>
      <ol>
        <li>Sensory reception</li>
        <li>Transmission of information</li>
        <li>Central integration</li>
        <li>Motor control</li>
        <li>Autonomic regulation</li>
        <li>Endocrine coordination</li>
        <li>Learning and memory</li>
        <li>Emotion and behavior</li>
        <li>Maintenance of homeostasis</li>
      </ol>

      <h3>Neural Signaling</h3>
      <p>
        Neurons communicate through electrical changes in their membranes and through chemical or electrical
        synapses. Action potentials allow information to travel along axons, while neurotransmitters
        transmit information across many synaptic junctions.
      </p>
    `,

    biochemistry: `
      <h2>Nervous System Biochemistry</h2>

      <h3>Major Neurotransmitters</h3>
      <ul>
        <li><strong>Glutamate:</strong> major excitatory neurotransmitter in the CNS.</li>
        <li><strong>GABA:</strong> major inhibitory neurotransmitter in the brain.</li>
        <li><strong>Dopamine:</strong> involved in movement, motivation, reward and cognition.</li>
        <li><strong>Serotonin:</strong> involved in mood, sleep, appetite and other regulatory processes.</li>
        <li><strong>Acetylcholine:</strong> important in cognition, autonomic function and neuromuscular transmission.</li>
        <li><strong>Norepinephrine:</strong> involved in arousal, attention and sympathetic responses.</li>
      </ul>

      <h3>Energy Metabolism</h3>
      <p>
        Nervous tissue has a high metabolic demand. Neurons depend heavily on oxidative metabolism and require
        continuous production of ATP to maintain ion gradients, membrane potentials, synaptic transmission
        and cellular integrity.
      </p>
    `,

    pathology: `
      <h2>Nervous System Pathology</h2>

      <ul>
        <li>Stroke</li>
        <li>Traumatic brain and spinal cord injury</li>
        <li>Meningitis</li>
        <li>Encephalitis</li>
        <li>Epilepsy</li>
        <li>Multiple sclerosis</li>
        <li>Peripheral neuropathies</li>
        <li>Neurodegenerative diseases</li>
        <li>Brain and spinal cord tumors</li>
        <li>Hydrocephalus</li>
        <li>Spinal cord compression</li>
      </ul>
    `
  },

  organs: [

    /* ============================================================
       BRAIN
       ============================================================ */

    {
      id: "brain",
      name: "Brain",
      modelPath: "models/brain/",
      modelFile: "brain.glb",

      notes: {

        anatomy: `
          <h2>Brain Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The brain is the principal organ of the central nervous system. It lies within the cranial cavity
            and is continuous inferiorly with the spinal cord through the foramen magnum. The adult brain
            weighs approximately 1.3–1.5 kg and contains billions of neurons and glial cells.
          </p>

          <p>
            The brain is responsible for sensory perception, voluntary movement, autonomic regulation,
            consciousness, cognition, memory, learning, language, emotion, behavior and coordination of
            endocrine and homeostatic functions.
          </p>

          <h3>Major Anatomical Divisions</h3>
          <ul>
            <li><strong>Cerebrum</strong></li>
            <li><strong>Diencephalon</strong></li>
            <li><strong>Brainstem</strong></li>
            <li><strong>Cerebellum</strong></li>
          </ul>

          <h3>Protective Structures</h3>
          <ul>
            <li>Skull</li>
            <li>Dura mater</li>
            <li>Arachnoid mater</li>
            <li>Pia mater</li>
            <li>Cerebrospinal fluid</li>
            <li>Blood-brain barrier</li>
          </ul>
        `,

        physiology: `
          <h2>Brain Physiology</h2>

          <h3>Major Functions</h3>
          <ul>
            <li>Integration of sensory information</li>
            <li>Generation and regulation of voluntary movement</li>
            <li>Regulation of autonomic functions</li>
            <li>Maintenance of homeostasis</li>
            <li>Language</li>
            <li>Learning</li>
            <li>Memory</li>
            <li>Emotion</li>
            <li>Consciousness</li>
            <li>Executive function</li>
            <li>Coordination of endocrine activity</li>
          </ul>

          <h3>Higher Cortical Functions</h3>
          <p>
            The cerebral cortex supports conscious perception, planning, decision-making, language,
            voluntary motor activity, attention and complex cognitive behavior.
          </p>
        `,

        biochemistry: `
          <h2>Brain Biochemistry</h2>

          <h3>Energy Metabolism</h3>
          <p>
            The brain has a high demand for oxygen and glucose. Under normal conditions, glucose is the
            principal metabolic substrate. During prolonged fasting, ketone bodies become increasingly
            important as an alternative energy source.
          </p>

          <h3>Important Neurotransmitters</h3>
          <ul>
            <li><strong>Glutamate:</strong> principal excitatory neurotransmitter.</li>
            <li><strong>GABA:</strong> principal inhibitory neurotransmitter.</li>
            <li><strong>Dopamine:</strong> movement, reward and motivation.</li>
            <li><strong>Serotonin:</strong> mood, sleep and appetite.</li>
            <li><strong>Acetylcholine:</strong> attention and memory.</li>
            <li><strong>Norepinephrine:</strong> arousal and attention.</li>
            <li><strong>Histamine:</strong> wakefulness and appetite regulation.</li>
          </ul>
        `,

        pathology: `
          <h2>Brain Pathology</h2>

          <h3>Vascular Diseases</h3>
          <ul>
            <li>Ischemic stroke</li>
            <li>Intracerebral hemorrhage</li>
            <li>Subarachnoid hemorrhage</li>
            <li>Cerebral venous thrombosis</li>
          </ul>

          <h3>Infectious Diseases</h3>
          <ul>
            <li>Meningitis</li>
            <li>Encephalitis</li>
            <li>Brain abscess</li>
            <li>Tuberculous meningitis</li>
          </ul>

          <h3>Other Disorders</h3>
          <ul>
            <li>Epilepsy</li>
            <li>Hydrocephalus</li>
            <li>Traumatic brain injury</li>
            <li>Brain tumors</li>
            <li>Multiple sclerosis</li>
            <li>Alzheimer disease</li>
            <li>Parkinson disease</li>
            <li>Huntington disease</li>
          </ul>
        `,

        microbiology: `
          <h2>Brain Microbiology</h2>

          <h3>Bacterial Infections</h3>
          <ul>
            <li><strong>Neisseria meningitidis</strong></li>
            <li><strong>Streptococcus pneumoniae</strong></li>
            <li><strong>Haemophilus influenzae</strong></li>
            <li><strong>Listeria monocytogenes</strong></li>
            <li><strong>Mycobacterium tuberculosis</strong></li>
          </ul>

          <h3>Viral Infections</h3>
          <ul>
            <li>Herpes simplex virus</li>
            <li>Varicella-zoster virus</li>
            <li>Enteroviruses</li>
            <li>Rabies virus</li>
          </ul>

          <h3>Fungal Infections</h3>
          <ul>
            <li>Cryptococcus neoformans</li>
            <li>Aspergillus species</li>
          </ul>
        `,

        parasitology: `
          <h2>Brain Parasitology</h2>

          <h3>Neurocysticercosis</h3>
          <p>
            Neurocysticercosis results from infection of the CNS by the larval stage of
            <strong>Taenia solium</strong>. Seizures are a common clinical manifestation.
          </p>

          <h3>Toxoplasmosis</h3>
          <p>
            <strong>Toxoplasma gondii</strong> may produce encephalitis, especially in severely
            immunocompromised individuals.
          </p>

          <h3>Cerebral Malaria</h3>
          <p>
            Severe <strong>Plasmodium falciparum</strong> malaria may cause impaired consciousness,
            seizures and coma.
          </p>

          <h3>African Trypanosomiasis</h3>
          <p>
            <strong>Trypanosoma brucei</strong> may invade the CNS during later disease and produce
            neurological and sleep disturbances.
          </p>
        `,

        immunology: `
          <h2>Brain Immunology</h2>

          <h3>Microglia</h3>
          <p>
            Microglia are resident immune cells of the CNS. They perform immune surveillance,
            phagocytosis and inflammatory signaling.
          </p>

          <h3>Blood-Brain Barrier</h3>
          <p>
            The blood-brain barrier restricts movement of many substances from the circulation into
            neural tissue and helps maintain the specialized extracellular environment required for
            neuronal function.
          </p>

          <h3>Neuroinflammation</h3>
          <p>
            Neuroinflammation occurs in response to infection, trauma, ischemia, autoimmune disease
            and neurodegeneration.
          </p>
        `,

        pharmacology: `
          <h2>Brain Pharmacology</h2>

          <ul>
            <li><strong>Antiepileptic drugs:</strong> reduce abnormal neuronal excitability.</li>
            <li><strong>Antipsychotics:</strong> principally influence dopamine and other neurotransmitter systems.</li>
            <li><strong>Antidepressants:</strong> modify serotonergic, noradrenergic or related signaling.</li>
            <li><strong>Benzodiazepines:</strong> enhance GABA-A receptor activity.</li>
            <li><strong>Levodopa:</strong> increases dopamine synthesis in the CNS.</li>
            <li><strong>Opioids:</strong> act primarily through opioid receptors and influence pain perception.</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Brain Correlations</h2>

          <h3>Frontal Lobe</h3>
          <p>
            Lesions may cause weakness, executive dysfunction, personality changes and impaired speech
            production when the dominant hemisphere is involved.
          </p>

          <h3>Parietal Lobe</h3>
          <p>
            Lesions may cause sensory deficits, impaired spatial awareness and neglect.
          </p>

          <h3>Temporal Lobe</h3>
          <p>
            Lesions may affect memory, hearing, language comprehension and emotional processing.
          </p>

          <h3>Occipital Lobe</h3>
          <p>
            Lesions may produce visual field abnormalities and visual processing deficits.
          </p>

          <h3>Brainstem</h3>
          <p>
            Brainstem lesions may produce cranial nerve abnormalities, long-tract neurological signs
            and disturbances of consciousness or vital autonomic functions.
          </p>

          <h3>Cerebellum</h3>
          <p>
            Cerebellar lesions may cause ataxia, dysmetria, intention tremor, dysarthria and impaired
            coordination.
          </p>
        `
      },

      /* ========================================================
         BRAIN PARTS
         ======================================================== */

      parts: [

        /* ======================================================
           CEREBRUM
           ====================================================== */

        {
          id: "cerebrum",
          name: "Cerebrum",
          modelPath: "models/brain/cerebrum/",
          modelFile: "cerebrum.glb",

          notes: {

            anatomy: `
              <h2>Cerebrum Anatomy</h2>

              <h3>Overview</h3>
              <p>
                The cerebrum is the largest division of the brain. It consists of right and left
                cerebral hemispheres separated by the longitudinal cerebral fissure.
              </p>

              <h3>Major Components</h3>
              <ul>
                <li>Cerebral cortex</li>
                <li>Subcortical white matter</li>
                <li>Basal nuclei</li>
                <li>Limbic structures</li>
              </ul>

              <h3>Cerebral Hemispheres</h3>
              <p>
                The two hemispheres are connected by commissural fibres, particularly the corpus callosum.
                Each hemisphere contains frontal, parietal, temporal and occipital lobes. The insula lies
                deep to parts of the frontal, parietal and temporal opercula.
              </p>

              <h3>Cerebral Lobes</h3>
              <ul>
                <li><strong>Frontal lobe:</strong> motor control and executive functions.</li>
                <li><strong>Parietal lobe:</strong> somatic sensation and spatial processing.</li>
                <li><strong>Temporal lobe:</strong> hearing, memory and language comprehension.</li>
                <li><strong>Occipital lobe:</strong> visual processing.</li>
                <li><strong>Insula:</strong> visceral sensation, taste and integration of sensory information.</li>
              </ul>

              <h3>Cerebral Cortex</h3>
              <p>
                The cerebral cortex is composed predominantly of grey matter and is organized into
                functional areas responsible for sensory processing, motor control and higher cognition.
              </p>

              <h3>White Matter</h3>
              <ul>
                <li>Association fibres</li>
                <li>Commissural fibres</li>
                <li>Projection fibres</li>
              </ul>

              <h3>Major White Matter Structures</h3>
              <ul>
                <li>Corpus callosum</li>
                <li>Internal capsule</li>
                <li>Corona radiata</li>
                <li>Fornix</li>
              </ul>
            `,

            physiology: `
              <h2>Cerebrum Physiology</h2>

              <h3>Motor Function</h3>
              <p>
                The primary motor cortex generates commands for voluntary skeletal muscle movement.
                Motor planning involves premotor and supplementary motor areas.
              </p>

              <h3>Sensory Function</h3>
              <p>
                The primary somatosensory cortex receives information regarding touch, pressure,
                vibration, proprioception, pain and temperature.
              </p>

              <h3>Language</h3>
              <p>
                Language functions are usually strongly represented in the dominant hemisphere.
                Broca-related networks participate in speech production, while posterior temporal
                and parietal networks contribute to language comprehension.
              </p>

              <h3>Executive Function</h3>
              <p>
                Prefrontal networks contribute to planning, decision-making, working memory,
                inhibition, attention and behavioral regulation.
              </p>
            `,

            pathology: `
              <h2>Cerebral Pathology</h2>

              <ul>
                <li>Cerebral infarction</li>
                <li>Intracerebral hemorrhage</li>
                <li>Epilepsy</li>
                <li>Brain tumors</li>
                <li>Traumatic injury</li>
                <li>Neurodegenerative disease</li>
                <li>Demyelinating disease</li>
              </ul>

              <h3>Dominant Hemisphere Lesions</h3>
              <p>
                May produce aphasia, impaired language comprehension or impaired language production.
              </p>

              <h3>Non-Dominant Hemisphere Lesions</h3>
              <p>
                May produce visuospatial deficits, neglect and impaired awareness of one side of space.
              </p>
            `
          },

          parts: [

            {
              id: "frontal-lobe",
              name: "Frontal Lobe",
              modelPath: "models/brain/cerebrum/frontal/",
              modelFile: "frontal_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Frontal Lobe</h2>

                  <p>
                    The frontal lobe forms the anterior portion of each cerebral hemisphere and extends
                    from the central sulcus posteriorly to the frontal pole anteriorly.
                  </p>

                  <h3>Important Structures</h3>
                  <ul>
                    <li>Precentral gyrus</li>
                    <li>Premotor cortex</li>
                    <li>Supplementary motor area</li>
                    <li>Prefrontal cortex</li>
                    <li>Broca-associated language cortex in the dominant hemisphere</li>
                  </ul>
                `,

                physiology: `
                  <h2>Frontal Lobe Physiology</h2>
                  <ul>
                    <li>Voluntary motor control</li>
                    <li>Motor planning</li>
                    <li>Executive function</li>
                    <li>Working memory</li>
                    <li>Attention</li>
                    <li>Decision-making</li>
                    <li>Behavioral regulation</li>
                    <li>Speech production</li>
                  </ul>
                `,

                pathology: `
                  <h2>Frontal Lobe Lesions</h2>
                  <p>
                    Lesions may cause contralateral weakness, impaired planning, personality changes,
                    disinhibition, apathy, impaired judgment and, when the dominant hemisphere is
                    affected, expressive language impairment.
                  </p>
                `
              }
            },

            {
              id: "parietal-lobe",
              name: "Parietal Lobe",
              modelPath: "models/brain/cerebrum/parietal/",
              modelFile: "parietal_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Parietal Lobe Anatomy</h2>
                  <p>
                    The parietal lobe lies posterior to the central sulcus and superior to the
                    lateral sulcus. It contains the postcentral gyrus and important association areas.
                  </p>

                  <h3>Major Structures</h3>
                  <ul>
                    <li>Postcentral gyrus</li>
                    <li>Superior parietal lobule</li>
                    <li>Inferior parietal lobule</li>
                    <li>Supramarginal gyrus</li>
                    <li>Angular gyrus</li>
                  </ul>
                `,

                physiology: `
                  <h2>Parietal Lobe Physiology</h2>
                  <ul>
                    <li>Conscious somatic sensation</li>
                    <li>Spatial orientation</li>
                    <li>Body representation</li>
                    <li>Sensory integration</li>
                    <li>Recognition of objects through sensory information</li>
                  </ul>
                `,

                pathology: `
                  <h2>Parietal Lobe Lesions</h2>
                  <ul>
                    <li>Contralateral sensory impairment</li>
                    <li>Spatial neglect</li>
                    <li>Astereognosis</li>
                    <li>Apraxia</li>
                    <li>Higher-order sensory deficits</li>
                  </ul>
                `
              }
            },

            {
              id: "temporal-lobe",
              name: "Temporal Lobe",
              modelPath: "models/brain/cerebrum/temporal/",
              modelFile: "temporal_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Temporal Lobe Anatomy</h2>
                  <p>
                    The temporal lobe lies inferior to the lateral sulcus and contributes to the
                    lateral and inferior aspects of the cerebral hemisphere.
                  </p>

                  <h3>Important Structures</h3>
                  <ul>
                    <li>Superior temporal gyrus</li>
                    <li>Middle temporal gyrus</li>
                    <li>Inferior temporal gyrus</li>
                    <li>Hippocampus</li>
                    <li>Amygdala</li>
                    <li>Parahippocampal gyrus</li>
                  </ul>
                `,

                physiology: `
                  <h2>Temporal Lobe Physiology</h2>
                  <ul>
                    <li>Auditory processing</li>
                    <li>Language comprehension</li>
                    <li>Memory formation</li>
                    <li>Emotional processing</li>
                    <li>Recognition of complex sensory information</li>
                  </ul>
                `,

                pathology: `
                  <h2>Temporal Lobe Pathology</h2>
                  <p>
                    Temporal lobe disease may cause memory impairment, auditory abnormalities,
                    language comprehension deficits and focal seizures.
                  </p>
                `
              }
            },

            {
              id: "occipital-lobe",
              name: "Occipital Lobe",
              modelPath: "models/brain/cerebrum/occipital/",
              modelFile: "occipital_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Occipital Lobe Anatomy</h2>
                  <p>
                    The occipital lobe forms the posterior portion of the cerebral hemisphere and
                    contains the primary and association visual cortices.
                  </p>

                  <h3>Important Structures</h3>
                  <ul>
                    <li>Primary visual cortex</li>
                    <li>Visual association cortex</li>
                    <li>Calcarine sulcus</li>
                    <li>Cuneus</li>
                    <li>Lingual gyrus</li>
                  </ul>
                `,

                physiology: `
                  <h2>Occipital Lobe Physiology</h2>
                  <p>
                    The occipital cortex receives and processes visual information, including
                    aspects of visual field, shape, motion, color and spatial characteristics.
                  </p>
                `,

                pathology: `
                  <h2>Occipital Lobe Lesions</h2>
                  <p>
                    Lesions may produce visual field defects, cortical visual impairment and
                    abnormalities of higher-order visual processing.
                  </p>
                `
              }
            },

            {
              id: "insula",
              name: "Insula",
              modelPath: "models/brain/cerebrum/insula/",
              modelFile: "insula.glb",

              notes: {
                anatomy: `
                  <h2>Insula Anatomy</h2>
                  <p>
                    The insula is a region of cerebral cortex located deep within the lateral sulcus
                    and covered by portions of the frontal, parietal and temporal lobes.
                  </p>
                `,

                physiology: `
                  <h2>Insular Physiology</h2>
                  <ul>
                    <li>Visceral sensation</li>
                    <li>Taste perception</li>
                    <li>Pain processing</li>
                    <li>Interoception</li>
                    <li>Emotional processing</li>
                    <li>Autonomic integration</li>
                  </ul>
                `,

                pathology: `
                  <h2>Insular Pathology</h2>
                  <p>
                    Insular lesions may disturb visceral sensation, taste, autonomic regulation
                    and integration of internal bodily states.
                  </p>
                `
              }
            },

            {
              id: "basal-ganglia",
              name: "Basal Ganglia",
              modelPath: "models/brain/cerebrum/basal-ganglia/",
              modelFile: "basal_ganglia.glb",

              notes: {
                anatomy: `
                  <h2>Basal Ganglia Anatomy</h2>
                  <p>
                    The basal ganglia are collections of deep grey matter involved in motor control
                    and several cognitive and behavioral circuits.
                  </p>

                  <h3>Major Components</h3>
                  <ul>
                    <li>Caudate nucleus</li>
                    <li>Putamen</li>
                    <li>Globus pallidus</li>
                    <li>Subthalamic nucleus</li>
                    <li>Substantia nigra</li>
                  </ul>
                `,

                physiology: `
                  <h2>Basal Ganglia Physiology</h2>
                  <p>
                    Basal ganglia circuits help select, initiate, suppress and regulate motor
                    programs. They also participate in reward, habit formation and cognition.
                  </p>
                `,

                pathology: `
                  <h2>Basal Ganglia Disorders</h2>
                  <ul>
                    <li>Parkinson disease</li>
                    <li>Huntington disease</li>
                    <li>Hemiballismus</li>
                    <li>Dystonia</li>
                    <li>Chorea</li>
                  </ul>
                `
              }
            },

            {
              id: "limbic-system",
              name: "Limbic System",
              modelPath: "models/brain/cerebrum/limbic/",
              modelFile: "limbic_system.glb",

              notes: {
                anatomy: `
                  <h2>Limbic System</h2>
                  <p>
                    The limbic system is a functional network involving cortical and subcortical
                    structures associated with emotion, motivation, learning and memory.
                  </p>

                  <h3>Important Structures</h3>
                  <ul>
                    <li>Hippocampal formation</li>
                    <li>Amygdala</li>
                    <li>Cingulate cortex</li>
                    <li>Parahippocampal regions</li>
                    <li>Fornix</li>
                    <li>Mammillary bodies</li>
                  </ul>
                `,

                physiology: `
                  <h2>Limbic Physiology</h2>
                  <ul>
                    <li>Memory formation</li>
                    <li>Emotional processing</li>
                    <li>Motivation</li>
                    <li>Reward behavior</li>
                    <li>Learning</li>
                  </ul>
                `,

                pathology: `
                  <h2>Limbic Pathology</h2>
                  <p>
                    Limbic dysfunction may occur in epilepsy, neurodegenerative disease,
                    psychiatric disorders and disorders affecting memory and emotional regulation.
                  </p>
                `
              }
            }
          ]
        },

        /* ======================================================
           DIENCEPHALON
           ====================================================== */

        {
          id: "diencephalon",
          name: "Diencephalon",
          modelPath: "models/brain/diencephalon/",
          modelFile: "diencephalon.glb",

          notes: {
            anatomy: `
              <h2>Diencephalon Anatomy</h2>

              <p>
                The diencephalon is a central region of the forebrain surrounding the third ventricle.
                It lies between the cerebral hemispheres and the midbrain.
              </p>

              <h3>Major Components</h3>
              <ul>
                <li>Thalamus</li>
                <li>Hypothalamus</li>
                <li>Epithalamus</li>
                <li>Subthalamus</li>
              </ul>
            `,

            physiology: `
              <h2>Diencephalon Physiology</h2>
              <p>
                The diencephalon participates in sensory relay, motor integration, endocrine regulation,
                autonomic control, circadian rhythms, appetite, temperature regulation and emotional
                and behavioral processes.
              </p>
            `,

            pathology: `
              <h2>Diencephalic Disorders</h2>
              <ul>
                <li>Hypothalamic tumors</li>
                <li>Thalamic infarction</li>
                <li>Thalamic pain syndromes</li>
                <li>Endocrine disorders related to hypothalamic dysfunction</li>
                <li>Sleep and circadian disorders</li>
              </ul>
            `
          },

          parts: [

            {
              id: "thalamus",
              name: "Thalamus",
              modelPath: "models/brain/diencephalon/thalamus/",
              modelFile: "thalamus.glb",

              notes: {
                anatomy: `
                  <h2>Thalamus Anatomy</h2>
                  <p>
                    The thalamus is a paired collection of grey matter located on either side of
                    the third ventricle.
                  </p>
                `,

                physiology: `
                  <h2>Thalamic Physiology</h2>
                  <p>
                    The thalamus acts as a major relay and integration centre for sensory and motor
                    information traveling between subcortical structures and the cerebral cortex.
                  </p>

                  <p>
                    Almost all major sensory modalities, except olfaction in the classical pathway,
                    relay through thalamic nuclei before reaching the cerebral cortex.
                  </p>
                `,

                pathology: `
                  <h2>Thalamic Lesions</h2>
                  <p>
                    Thalamic lesions can cause contralateral sensory disturbances, altered consciousness,
                    movement abnormalities and central neuropathic pain.
                  </p>
                `
              }
            },

            {
              id: "hypothalamus",
              name: "Hypothalamus",
              modelPath: "models/brain/diencephalon/hypothalamus/",
              modelFile: "hypothalamus.glb",

              notes: {
                anatomy: `
                  <h2>Hypothalamus Anatomy</h2>
                  <p>
                    The hypothalamus lies inferior to the thalamus and forms part of the floor and
                    lower walls of the third ventricle.
                  </p>

                  <h3>Important Structures</h3>
                  <ul>
                    <li>Suprachiasmatic nucleus</li>
                    <li>Supraoptic nucleus</li>
                    <li>Paraventricular nucleus</li>
                    <li>Mammillary bodies</li>
                    <li>Infundibulum</li>
                  </ul>
                `,

                physiology: `
                  <h2>Hypothalamic Physiology</h2>
                  <ul>
                    <li>Thermoregulation</li>
                    <li>Thirst regulation</li>
                    <li>Appetite and energy balance</li>
                    <li>Autonomic regulation</li>
                    <li>Endocrine regulation</li>
                    <li>Stress responses</li>
                    <li>Reproductive function</li>
                    <li>Circadian rhythms</li>
                  </ul>
                `,

                pathology: `
                  <h2>Hypothalamic Disorders</h2>
                  <ul>
                    <li>Diabetes insipidus</li>
                    <li>Hypothalamic obesity</li>
                    <li>Thermoregulatory abnormalities</li>
                    <li>Sleep disorders</li>
                    <li>Endocrine disturbances</li>
                  </ul>
                `
              }
            },

            {
              id: "epithalamus",
              name: "Epithalamus",
              modelPath: "models/brain/diencephalon/epithalamus/",
              modelFile: "epithalamus.glb",

              notes: {
                anatomy: `
                  <h2>Epithalamus</h2>
                  <p>
                    The epithalamus includes structures associated with the roof of the diencephalon,
                    including the pineal gland and habenular nuclei.
                  </p>
                `,

                physiology: `
                  <h2>Epithalamic Physiology</h2>
                  <p>
                    The pineal gland contributes to circadian regulation through secretion of melatonin.
                    The habenular system participates in limbic and behavioral circuits.
                  </p>
                `
              }
            },

            {
              id: "subthalamus",
              name: "Subthalamus",
              modelPath: "models/brain/diencephalon/subthalamus/",
              modelFile: "subthalamus.glb",

              notes: {
                anatomy: `
                  <h2>Subthalamus</h2>
                  <p>
                    The subthalamus is located inferior to the thalamus and contains the subthalamic
                    nucleus and related structures.
                  </p>
                `,

                physiology: `
                  <h2>Subthalamic Physiology</h2>
                  <p>
                    The subthalamic nucleus participates in basal ganglia circuits and contributes
                    to regulation of movement.
                  </p>
                `,

                pathology: `
                  <h2>Subthalamic Lesion</h2>
                  <p>
                    Damage to the subthalamic nucleus can produce contralateral hemiballismus,
                    characterized by sudden, involuntary, large-amplitude movements.
                  </p>
                `
              }
            }
          ]
        },

        /* ======================================================
           BRAINSTEM
           ====================================================== */

        {
          id: "brainstem",
          name: "Brainstem",
          modelPath: "models/brain/brainstem/",
          modelFile: "brainstem.glb",

          notes: {
            anatomy: `
              <h2>Brainstem Anatomy</h2>

              <p>
                The brainstem is the inferior part of the brain and forms the connection between
                the cerebrum, cerebellum and spinal cord.
              </p>

              <h3>Major Divisions</h3>
              <ol>
                <li>Midbrain</li>
                <li>Pons</li>
                <li>Medulla oblongata</li>
              </ol>

              <h3>Major Functions</h3>
              <ul>
                <li>Conduction of ascending and descending pathways</li>
                <li>Cranial nerve nuclei</li>
                <li>Control of consciousness and arousal</li>
                <li>Respiratory regulation</li>
                <li>Cardiovascular regulation</li>
                <li>Protective reflexes</li>
              </ul>
            `,

            physiology: `
              <h2>Brainstem Physiology</h2>
              <p>
                The brainstem contains important neural pathways and nuclei involved in movement,
                sensation, autonomic control, consciousness, eye movements, swallowing, hearing,
                balance and respiratory and cardiovascular regulation.
              </p>
            `,

            pathology: `
              <h2>Brainstem Pathology</h2>
              <p>
                Brainstem lesions can be life-threatening because they may disrupt consciousness,
                respiratory control, cardiovascular regulation and cranial nerve function.
              </p>
            `
          },

          parts: [

            {
              id: "midbrain",
              name: "Midbrain",
              modelPath: "models/brain/brainstem/midbrain/",
              modelFile: "midbrain.glb",

              notes: {
                anatomy: `
                  <h2>Midbrain Anatomy</h2>

                  <p>
                    The midbrain is the superior portion of the brainstem and lies between the
                    diencephalon and pons.
                  </p>

                  <h3>Major Structures</h3>
                  <ul>
                    <li>Cerebral peduncles</li>
                    <li>Tegmentum</li>
                    <li>Substantia nigra</li>
                    <li>Superior colliculi</li>
                    <li>Inferior colliculi</li>
                    <li>Periaqueductal grey</li>
                  </ul>
                `,

                physiology: `
                  <h2>Midbrain Physiology</h2>
                  <ul>
                    <li>Eye movement control</li>
                    <li>Visual reflexes</li>
                    <li>Auditory reflexes</li>
                    <li>Motor pathway transmission</li>
                    <li>Pain modulation</li>
                    <li>Motor regulation through substantia nigra</li>
                  </ul>
                `,

                pathology: `
                  <h2>Midbrain Disorders</h2>
                  <p>
                    Midbrain lesions may cause ocular motor abnormalities, altered consciousness,
                    movement disorders and characteristic combinations of cranial nerve and long-tract
                    signs.
                  </p>
                `
              }
            },

            {
              id: "pons",
              name: "Pons",
              modelPath: "models/brain/brainstem/pons/",
              modelFile: "pons.glb",

              notes: {
                anatomy: `
                  <h2>Pons Anatomy</h2>
                  <p>
                    The pons lies between the midbrain and medulla and forms an important connection
                    between the cerebral cortex and cerebellum.
                  </p>

                  <h3>Important Components</h3>
                  <ul>
                    <li>Pontine nuclei</li>
                    <li>Corticospinal pathways</li>
                    <li>Cerebellar connections</li>
                    <li>Cranial nerve nuclei</li>
                  </ul>
                `,

                physiology: `
                  <h2>Pons Physiology</h2>
                  <ul>
                    <li>Relay between cerebrum and cerebellum</li>
                    <li>Facial sensation and movement</li>
                    <li>Eye movement control</li>
                    <li>Hearing and balance pathways</li>
                    <li>Contribution to respiratory regulation</li>
                  </ul>
                `,

                pathology: `
                  <h2>Pontine Lesions</h2>
                  <p>
                    Pontine lesions may cause cranial nerve deficits, facial weakness, gaze abnormalities,
                    sensory and motor deficits and severe disorders such as locked-in syndrome.
                  </p>
                `
              }
            },

            {
              id: "medulla",
              name: "Medulla Oblongata",
              modelPath: "models/brain/brainstem/medulla/",
              modelFile: "medulla.glb",

              notes: {
                anatomy: `
                  <h2>Medulla Oblongata</h2>
                  <p>
                    The medulla is the inferior portion of the brainstem and continues caudally with
                    the spinal cord.
                  </p>

                  <h3>Important Structures</h3>
                  <ul>
                    <li>Pyramids</li>
                    <li>Inferior olivary nuclei</li>
                    <li>Gracile nuclei</li>
                    <li>Cuneate nuclei</li>
                    <li>Cranial nerve nuclei</li>
                  </ul>
                `,

                physiology: `
                  <h2>Medullary Physiology</h2>
                  <ul>
                    <li>Respiratory control</li>
                    <li>Cardiovascular regulation</li>
                    <li>Swallowing</li>
                    <li>Coughing</li>
                    <li>Vomiting</li>
                    <li>Sneezing</li>
                    <li>Autonomic regulation</li>
                  </ul>
                `,

                pathology: `
                  <h2>Medullary Lesions</h2>
                  <p>
                    Medullary damage can produce severe motor and sensory deficits, cranial nerve
                    abnormalities, respiratory failure and cardiovascular instability.
                  </p>
                `
              }
            }
          ]
        },

        /* ======================================================
           CEREBELLUM
           ====================================================== */

        {
          id: "cerebellum",
          name: "Cerebellum",
          modelPath: "models/brain/",
          modelFile: "cerebellum.glb",

          notes: {
            anatomy: `
              <h2>Cerebellum Anatomy</h2>

              <p>
                The cerebellum lies posterior to the brainstem and inferior to the occipital lobes.
                It consists of two hemispheres connected by the vermis.
              </p>

              <h3>Major Components</h3>
              <ul>
                <li>Right cerebellar hemisphere</li>
                <li>Left cerebellar hemisphere</li>
                <li>Vermis</li>
                <li>Cerebellar cortex</li>
                <li>Deep cerebellar nuclei</li>
                <li>White matter</li>
              </ul>

              <h3>Cerebellar Lobes</h3>
              <ul>
                <li>Anterior lobe</li>
                <li>Posterior lobe</li>
                <li>Flocculonodular lobe</li>
              </ul>

              <h3>Deep Cerebellar Nuclei</h3>
              <ul>
                <li>Dentate nucleus</li>
                <li>Emboliform nucleus</li>
                <li>Globose nucleus</li>
                <li>Fastigial nucleus</li>
              </ul>

              <h3>Cerebellar Peduncles</h3>
              <ul>
                <li>Superior cerebellar peduncle</li>
                <li>Middle cerebellar peduncle</li>
                <li>Inferior cerebellar peduncle</li>
              </ul>
            `,

            physiology: `
              <h2>Cerebellar Physiology</h2>

              <p>
                The cerebellum does not normally initiate voluntary movement. Instead, it compares
                intended movement with actual performance and modifies motor activity to improve
                coordination, timing and accuracy.
              </p>

              <ul>
                <li>Coordination of voluntary movement</li>
                <li>Balance</li>
                <li>Postural control</li>
                <li>Motor learning</li>
                <li>Movement timing</li>
                <li>Correction of movement errors</li>
                <li>Eye movement coordination</li>
              </ul>
            `,

            pathology: `
              <h2>Cerebellar Pathology</h2>

              <h3>Cerebellar Dysfunction</h3>
              <ul>
                <li>Ataxia</li>
                <li>Dysmetria</li>
                <li>Intention tremor</li>
                <li>Dysdiadochokinesia</li>
                <li>Hypotonia</li>
                <li>Nystagmus</li>
                <li>Ataxic dysarthria</li>
                <li>Impaired balance</li>
              </ul>

              <p>
                Cerebellar lesions typically produce deficits on the same side of the body as the
                affected cerebellar hemisphere.
              </p>
            `,

            histology: `
              <h2>Cerebellar Histology</h2>

              <h3>Cerebellar Cortex</h3>
              <p>
                The cerebellar cortex has three layers:
              </p>

              <ol>
                <li><strong>Molecular layer</strong></li>
                <li><strong>Purkinje cell layer</strong></li>
                <li><strong>Granular layer</strong></li>
              </ol>

              <h3>Purkinje Cells</h3>
              <p>
                Purkinje cells are large inhibitory neurons whose axons provide the principal
                output from the cerebellar cortex to the deep cerebellar nuclei.
              </p>
            `
          },

          parts: [
            {
              id: "cerebellar-vermis",
              name: "Cerebellar Vermis",
              modelPath: "models/brain/cerebellum/vermis/",
              modelFile: "vermis.glb",

              notes: {
                anatomy: `
                  <h2>Cerebellar Vermis</h2>
                  <p>
                    The vermis is the midline portion of the cerebellum connecting the two
                    cerebellar hemispheres.
                  </p>
                `,

                physiology: `
                  <p>
                    The vermis contributes particularly to control of axial posture, gait and
                    coordination of the trunk and proximal musculature.
                  </p>
                `,

                pathology: `
                  <p>
                    Midline cerebellar lesions may produce truncal ataxia and impaired gait.
                  </p>
                `
              }
            },

            {
              id: "cerebellar-hemispheres",
              name: "Cerebellar Hemispheres",
              modelPath: "models/brain/cerebellum/hemispheres/",
              modelFile: "cerebellar_hemispheres.glb",

              notes: {
                anatomy: `
                  <h2>Cerebellar Hemispheres</h2>
                  <p>
                    The right and left cerebellar hemispheres lie on either side of the vermis.
                  </p>
                `,

                physiology: `
                  <p>
                    The cerebellar hemispheres are especially important for coordination and
                    fine control of limb movements.
                  </p>
                `,

                pathology: `
                  <p>
                    Cerebellar hemisphere lesions can produce ipsilateral limb ataxia,
                    dysmetria and intention tremor.
                  </p>
                `
              }
            }
          ]
        }
      ]
    },

    /* ============================================================
       SPINAL CORD
       ============================================================ */

    {
      id: "spinal-cord",
      name: "Spinal Cord",
      modelPath: "models/spinal-cord/",
      modelFile: "spinal_cord.glb",

      notes: {

        anatomy: `
          <h2>Spinal Cord Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The spinal cord is a long cylindrical structure of the central nervous system that extends
            from the medulla oblongata at the foramen magnum to approximately the level of the L1–L2
            vertebral region in most adults.
          </p>

          <p>
            It is protected by the vertebral column, meninges and cerebrospinal fluid. The spinal cord
            provides the major neural connection between the brain and peripheral nervous system.
          </p>

          <h3>Spinal Cord Enlargements</h3>
          <ul>
            <li><strong>Cervical enlargement:</strong> associated with innervation of the upper limbs.</li>
            <li><strong>Lumbosacral enlargement:</strong> associated with innervation of the lower limbs.</li>
          </ul>

          <h3>Terminal Structures</h3>
          <ul>
            <li>Conus medullaris</li>
            <li>Filum terminale</li>
            <li>Cauda equina</li>
          </ul>

          <h3>Spinal Cord Segments</h3>
          <ul>
            <li>8 cervical segments</li>
            <li>12 thoracic segments</li>
            <li>5 lumbar segments</li>
            <li>5 sacral segments</li>
            <li>1 coccygeal segment</li>
          </ul>

          <h3>Spinal Nerves</h3>
          <p>
            Thirty-one pairs of spinal nerves arise from the spinal cord:
          </p>

          <ul>
            <li>8 cervical pairs</li>
            <li>12 thoracic pairs</li>
            <li>5 lumbar pairs</li>
            <li>5 sacral pairs</li>
            <li>1 coccygeal pair</li>
          </ul>

          <h3>External Features</h3>
          <ul>
            <li>Anterior median fissure</li>
            <li>Posterior median sulcus</li>
            <li>Anterior roots</li>
            <li>Posterior roots</li>
            <li>Dorsal root ganglia</li>
          </ul>

          <h3>Internal Organization</h3>
          <p>
            In cross-section, the spinal cord contains central grey matter surrounded by white matter.
          </p>

          <h4>Grey Matter</h4>
          <ul>
            <li>Posterior horn</li>
            <li>Anterior horn</li>
            <li>Lateral horn, particularly prominent in thoracic and upper lumbar regions</li>
            <li>Grey commissure</li>
            <li>Central canal</li>
          </ul>

          <h4>White Matter</h4>
          <ul>
            <li>Posterior funiculus</li>
            <li>Lateral funiculus</li>
            <li>Anterior funiculus</li>
          </ul>
        `,

        physiology: `
          <h2>Spinal Cord Physiology</h2>

          <h3>Major Functions</h3>
          <ol>
            <li>Conduction of sensory information to the brain</li>
            <li>Conduction of motor commands from the brain</li>
            <li>Integration of spinal reflexes</li>
            <li>Coordination of patterned motor activity</li>
            <li>Participation in autonomic regulation</li>
          </ol>

          <h3>Ascending Pathways</h3>
          <ul>
            <li><strong>Dorsal column–medial lemniscus system:</strong> fine touch, vibration and conscious proprioception.</li>
            <li><strong>Spinothalamic pathways:</strong> pain, temperature and crude touch.</li>
            <li><strong>Spinocerebellar pathways:</strong> proprioceptive information used for coordination.</li>
          </ul>

          <h3>Descending Pathways</h3>
          <ul>
            <li><strong>Corticospinal tract:</strong> voluntary motor control.</li>
            <li><strong>Reticulospinal pathways:</strong> posture and motor modulation.</li>
            <li><strong>Vestibulospinal pathways:</strong> balance and postural control.</li>
            <li><strong>Rubrospinal pathway:</strong> contributes to motor control.</li>
          </ul>

          <h3>Reflexes</h3>
          <p>
            The spinal cord can integrate reflex responses without requiring conscious processing
            by the cerebral cortex.
          </p>

          <h4>Basic Reflex Arc</h4>
          <ol>
            <li>Receptor</li>
            <li>Sensory / afferent neuron</li>
            <li>Integration centre in the CNS</li>
            <li>Motor / efferent neuron</li>
            <li>Effector</li>
          </ol>

          <h3>Autonomic Function</h3>
          <p>
            The spinal cord contains important autonomic neurons. Preganglionic sympathetic neurons
            are located primarily in thoracic and upper lumbar segments, while parasympathetic
            preganglionic neurons associated with pelvic organs arise from sacral segments.
          </p>
        `,

        biochemistry: `
          <h2>Spinal Cord Biochemistry</h2>

          <h3>Neurotransmitters</h3>
          <ul>
            <li><strong>Glutamate:</strong> important excitatory neurotransmitter.</li>
            <li><strong>GABA:</strong> inhibitory neurotransmitter.</li>
            <li><strong>Glycine:</strong> important inhibitory neurotransmitter in the spinal cord.</li>
            <li><strong>Acetylcholine:</strong> involved in motor and autonomic transmission.</li>
            <li><strong>Substance P:</strong> participates in nociceptive signaling.</li>
            <li><strong>Endogenous opioids:</strong> contribute to modulation of pain transmission.</li>
          </ul>

          <h3>Myelin</h3>
          <p>
            Spinal cord white matter contains large numbers of myelinated axons. Myelin is produced
            by oligodendrocytes and increases the speed of electrical conduction through saltatory
            conduction.
          </p>
        `,

        pathology: `
          <h2>Spinal Cord Pathology</h2>

          <h3>Spinal Cord Injury</h3>
          <p>
            Trauma may produce complete or incomplete spinal cord injury. The neurological consequences
            depend on the level and severity of the lesion.
          </p>

          <h3>Spinal Cord Compression</h3>
          <p>
            Compression may result from tumors, vertebral disease, epidural abscess, hematoma,
            degenerative disease or other space-occupying processes.
          </p>

          <h3>Transverse Myelitis</h3>
          <p>
            Inflammatory injury affecting a transverse region of the spinal cord may produce bilateral
            motor, sensory and autonomic dysfunction.
          </p>

          <h3>Multiple Sclerosis</h3>
          <p>
            Demyelinating lesions may involve spinal cord white matter and produce sensory, motor
            and autonomic abnormalities.
          </p>

          <h3>Syringomyelia</h3>
          <p>
            Syringomyelia involves formation of a fluid-filled cavity within the spinal cord.
            Depending on its location, it may particularly affect crossing pain and temperature fibres.
          </p>
        `,

        microbiology: `
          <h2>Spinal Cord Microbiology</h2>

          <h3>Infectious Disorders</h3>
          <ul>
            <li>Spinal epidural abscess</li>
            <li>Tuberculous spondylitis with cord compression</li>
            <li>Viral myelitis</li>
            <li>Post-infectious inflammatory myelitis</li>
          </ul>

          <h3>Important Organisms</h3>
          <ul>
            <li><strong>Staphylococcus aureus:</strong> important cause of spinal epidural abscess.</li>
            <li><strong>Mycobacterium tuberculosis:</strong> may cause vertebral tuberculosis with secondary spinal cord compression.</li>
            <li><strong>Herpes viruses:</strong> can cause viral myelitis.</li>
          </ul>
        `,

        parasitology: `
          <h2>Spinal Cord Parasitology</h2>

          <h3>Neurocysticercosis</h3>
          <p>
            Taenia solium larvae can occasionally involve the spinal cord or spinal subarachnoid
            spaces and produce neurological symptoms through inflammation, compression or obstruction
            of CSF pathways.
          </p>

          <h3>Other Parasitic Disease</h3>
          <p>
            Parasitic involvement of the spinal cord is uncommon but may occur through direct invasion,
            migration or inflammatory complications of parasitic infection.
          </p>
        `,

        immunology: `
          <h2>Spinal Cord Immunology</h2>

          <p>
            The spinal cord contains resident immune cells including microglia and astrocytes capable
            of participating in inflammatory responses.
          </p>

          <h3>Inflammatory Myelitis</h3>
          <p>
            Immune-mediated inflammation can damage spinal cord neurons, axons and myelin and result
            in motor, sensory and autonomic dysfunction.
          </p>
        `,

        pharmacology: `
          <h2>Spinal Cord Pharmacology</h2>

          <h3>Analgesic Modulation</h3>
          <p>
            Pain transmission in the spinal dorsal horn can be modified by opioids, alpha-2 agonists,
            local anesthetics and other analgesic mechanisms.
          </p>

          <h3>Muscle Spasticity</h3>
          <ul>
            <li><strong>Baclofen:</strong> GABA-B receptor agonist used to reduce spasticity.</li>
            <li><strong>Tizanidine:</strong> alpha-2 adrenergic agonist used to reduce muscle spasticity.</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Spinal Cord Correlations</h2>

          <h3>Cervical Cord Lesion</h3>
          <p>
            May affect all four limbs and, depending on level and severity, may compromise
            respiratory function.
          </p>

          <h3>Thoracic Cord Lesion</h3>
          <p>
            Primarily affects the trunk and lower limbs while upper limb function is generally preserved.
          </p>

          <h3>Lumbar Cord Lesion</h3>
          <p>
            May produce lower-limb weakness, sensory abnormalities and bladder, bowel or sexual
            dysfunction depending on the level.
          </p>

          <h3>Cauda Equina Syndrome</h3>
          <p>
            Compression of the lumbosacral nerve roots can cause saddle anesthesia, lower motor
            neuron weakness, reduced reflexes and bladder or bowel dysfunction.
          </p>

          <h3>Upper Motor Neuron Pattern</h3>
          <ul>
            <li>Weakness</li>
            <li>Spasticity</li>
            <li>Hyperreflexia</li>
            <li>Clonus</li>
            <li>Extensor plantar response</li>
          </ul>

          <h3>Lower Motor Neuron Pattern</h3>
          <ul>
            <li>Weakness</li>
            <li>Hypotonia</li>
            <li>Hyporeflexia</li>
            <li>Muscle wasting</li>
            <li>Fasciculations</li>
          </ul>
        `,

        histology: `
          <h2>Spinal Cord Histology</h2>

          <h3>Grey Matter</h3>
          <p>
            Spinal grey matter contains neuronal cell bodies, dendrites, synapses and glial cells.
            It forms the characteristic H- or butterfly-shaped central region.
          </p>

          <h3>White Matter</h3>
          <p>
            White matter surrounds the grey matter and contains ascending and descending myelinated
            axonal pathways.
          </p>

          <h3>Anterior Horn</h3>
          <p>
            Contains lower motor neurons whose axons leave the spinal cord through anterior roots
            to innervate skeletal muscle.
          </p>

          <h3>Posterior Horn</h3>
          <p>
            Contains neurons involved in processing incoming sensory information.
          </p>

          <h3>Lateral Horn</h3>
          <p>
            Contains autonomic neurons, particularly sympathetic preganglionic neurons in thoracic
            and upper lumbar segments.
          </p>
        `
      },

      parts: [

        {
          id: "cervical-cord",
          name: "Cervical Spinal Cord",
          modelPath: "models/spinal-cord/cervical/",
          modelFile: "cervical_cord.glb",

          notes: {
            anatomy: `
              <h2>Cervical Spinal Cord</h2>
              <p>
                The cervical spinal cord contains eight cervical segments and contributes to
                innervation of the neck, diaphragm and upper limbs.
              </p>
            `,

            physiology: `
              <p>
                Cervical segments carry ascending and descending pathways and give rise to
                cervical spinal nerves.
              </p>
            `,

            clinical: `
              <p>
                High cervical cord injury can compromise respiratory function because the
                phrenic nerve arises primarily from C3–C5 spinal segments.
              </p>
            `
          }
        },

        {
          id: "thoracic-cord",
          name: "Thoracic Spinal Cord",
          modelPath: "models/spinal-cord/thoracic/",
          modelFile: "thoracic_cord.glb",

          notes: {
            anatomy: `
              <h2>Thoracic Spinal Cord</h2>
              <p>
                The thoracic cord contains twelve spinal segments and gives rise to thoracic
                spinal nerves.
              </p>
            `,

            physiology: `
              <p>
                Thoracic segments contribute to trunk sensation and movement and contain many
                of the preganglionic sympathetic neurons of the autonomic nervous system.
              </p>
            `
          }
        },

        {
          id: "lumbar-cord",
          name: "Lumbar Spinal Cord",
          modelPath: "models/spinal-cord/lumbar/",
          modelFile: "lumbar_cord.glb",

          notes: {
            anatomy: `
              <h2>Lumbar Spinal Cord</h2>
              <p>
                The lumbar spinal cord contains five lumbar segments and contributes to
                innervation of the lower limbs.
              </p>
            `,

            physiology: `
              <p>
                Lumbar spinal circuits participate in lower-limb movement, sensation and
                reflex activity.
              </p>
            `
          }
        },

        {
          id: "sacral-cord",
          name: "Sacral Spinal Cord",
          modelPath: "models/spinal-cord/sacral/",
          modelFile: "sacral_cord.glb",

          notes: {
            anatomy: `
              <h2>Sacral Spinal Cord</h2>
              <p>
                The sacral spinal cord contains five sacral segments and contributes to
                innervation of the pelvis, perineum and parts of the lower limbs.
              </p>
            `,

            physiology: `
              <p>
                Sacral segments contain parasympathetic preganglionic neurons involved in
                bladder, bowel and sexual function.
              </p>
            `
          }
        },

        {
          id: "conus-medullaris",
          name: "Conus Medullaris",
          modelPath: "models/spinal-cord/conus/",
          modelFile: "conus_medullaris.glb",

          notes: {
            anatomy: `
              <h2>Conus Medullaris</h2>
              <p>
                The conus medullaris is the tapered inferior end of the spinal cord.
              </p>
            `,

            clinical: `
              <h2>Conus Medullaris Syndrome</h2>
              <p>
                Injury to the conus may produce bilateral neurological deficits, saddle anesthesia,
                bladder and bowel dysfunction and sexual dysfunction.
              </p>
            `
          }
        },

        {
          id: "cauda-equina",
          name: "Cauda Equina",
          modelPath: "models/spinal-cord/cauda-equina/",
          modelFile: "cauda_equina.glb",

          notes: {
            anatomy: `
              <h2>Cauda Equina</h2>
              <p>
                The cauda equina is a collection of lumbar, sacral and coccygeal nerve roots
                descending within the vertebral canal below the conus medullaris.
              </p>
            `,

            clinical: `
              <h2>Cauda Equina Syndrome</h2>
              <p>
                Compression of the cauda equina may cause severe low-back or radicular pain,
                saddle anesthesia, lower motor neuron weakness and bladder or bowel dysfunction.
              </p>
            `
          }
        }
      ]
    },
    clinicalMethodsNeuroPsychiatry
  ]
};
