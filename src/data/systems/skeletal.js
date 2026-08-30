import { clinicalMethodsMusculoskeletal } from "./musculoskeletal/clinical_methods.js";

export const skeletalsystem = {
  id: "skeletal",
  name: "Skeletal",
  modelPath: "models/skeletal/",
  modelFile: "skeletal.glb",

  notes: {
    anatomy: `
      <h2>Skeletal System Anatomy</h2>

      <h3>Overview</h3>
      <p>
        The skeletal system is the structural framework of the human body. It consists
        primarily of bones and cartilage, together with associated joints and ligaments.
        In the adult human, the skeleton contains approximately 206 bones. The skeleton
        provides structural support, protects vital organs, provides attachment sites
        for muscles, permits movement, stores minerals, and contains bone marrow involved
        in blood-cell production.
      </p>

      <h3>Major Divisions</h3>
      <p>
        The skeleton is divided anatomically into the axial skeleton and the appendicular
        skeleton.
      </p>

      <ul>
        <li>
          <strong>Axial skeleton:</strong> consists of the skull, vertebral column,
          ribs, sternum, and associated structures.
        </li>
        <li>
          <strong>Appendicular skeleton:</strong> consists of the pectoral girdles,
          upper limbs, pelvic girdle, and lower limbs.
        </li>
      </ul>

      <h3>Major Functions</h3>
      <ul>
        <li>Provides structural support.</li>
        <li>Protects internal organs.</li>
        <li>Provides attachment sites for skeletal muscles.</li>
        <li>Acts as a system of levers for movement.</li>
        <li>Stores calcium, phosphate, and other minerals.</li>
        <li>Contains bone marrow responsible for hematopoiesis.</li>
        <li>Participates in endocrine and metabolic regulation.</li>
      </ul>

      <h3>Bone Tissue</h3>
      <p>
        Bone is a specialized connective tissue composed of cells embedded within a
        mineralized extracellular matrix. The matrix contains an organic component,
        primarily type I collagen, and an inorganic mineral component consisting largely
        of calcium and phosphate in the form of hydroxyapatite.
      </p>

      <h3>Bone Cells</h3>
      <ul>
        <li><strong>Osteoblasts:</strong> bone-forming cells.</li>
        <li><strong>Osteocytes:</strong> mature bone cells that maintain the bone matrix.</li>
        <li><strong>Osteoclasts:</strong> cells responsible for bone resorption.</li>
        <li><strong>Bone-lining cells:</strong> cells covering inactive bone surfaces.</li>
      </ul>

      <h3>Types of Bone Tissue</h3>
      <ul>
        <li>
          <strong>Compact bone:</strong> dense cortical bone forming much of the outer
          portion of bones.
        </li>
        <li>
          <strong>Cancellous bone:</strong> also called trabecular or spongy bone,
          consisting of interconnected trabeculae.
        </li>
      </ul>

      <h3>Bone Marrow</h3>
      <p>
        Red bone marrow contains hematopoietic tissue responsible for production of
        red blood cells, white blood cells, and platelets. Yellow marrow contains a
        higher proportion of adipose tissue and serves as an energy reservoir.
      </p>
    `,

    physiology: `
      <h2>Skeletal System Physiology</h2>

      <h3>Support</h3>
      <p>
        The skeleton provides the rigid internal framework that supports the body.
        It maintains body shape and provides a stable framework to which muscles and
        connective tissues attach.
      </p>

      <h3>Protection</h3>
      <p>
        Bones protect vulnerable organs. The skull protects the brain, the vertebral
        column protects the spinal cord, and the rib cage protects major thoracic
        organs including the heart and lungs.
      </p>

      <h3>Movement</h3>
      <p>
        Bones function as mechanical levers. Skeletal muscles generate force and
        transmit that force through tendons to bones. Joints provide controlled
        movement between skeletal elements.
      </p>

      <h3>Mineral Homeostasis</h3>
      <p>
        Bone serves as a major reservoir for calcium and phosphate. These minerals
        can be deposited into or released from bone as required to maintain
        extracellular mineral concentrations.
      </p>

      <h3>Hematopoiesis</h3>
      <p>
        Red bone marrow produces blood cells through hematopoiesis. This includes
        erythrocytes, leukocytes, and megakaryocytes whose cytoplasmic fragments
        form platelets.
      </p>

      <h3>Endocrine Functions</h3>
      <p>
        Bone is also an endocrine organ. Osteocytes and osteoblast-lineage cells
        participate in signaling pathways involved in mineral metabolism and
        systemic physiology.
      </p>

      <h3>Bone Remodeling</h3>
      <p>
        Bone is continuously remodeled throughout life. Osteoclasts resorb old or
        damaged bone while osteoblasts produce new bone. Remodeling allows bone to
        adapt to mechanical stress, repair microscopic damage, and participate in
        mineral homeostasis.
      </p>

      <h3>Mechanical Adaptation</h3>
      <p>
        Bone responds to mechanical loading. Regular mechanical stress promotes
        maintenance of bone mass, while prolonged reduction in mechanical loading
        can result in bone loss.
      </p>
    `,

    biochemistry: `
      <h2>Skeletal System Biochemistry</h2>

      <h3>Bone Matrix</h3>
      <p>
        Bone matrix contains both organic and inorganic components. Approximately
        the majority of the organic matrix consists of type I collagen, while the
        inorganic component consists predominantly of calcium phosphate minerals.
      </p>

      <h3>Collagen</h3>
      <p>
        Type I collagen provides tensile strength and forms the structural framework
        upon which mineral is deposited.
      </p>

      <h3>Hydroxyapatite</h3>
      <p>
        Hydroxyapatite crystals provide much of the hardness and compressive strength
        of bone. The principal mineral elements are calcium and phosphate.
      </p>

      <h3>Vitamin D</h3>
      <p>
        Vitamin D increases intestinal absorption of calcium and phosphate and is
        therefore essential for normal mineralization of bone.
      </p>

      <h3>Parathyroid Hormone</h3>
      <p>
        Parathyroid hormone increases serum calcium through effects on bone,
        kidney, and indirectly the intestine. Persistent elevation promotes
        osteoclast-mediated bone resorption through signaling by osteoblast-lineage
        cells.
      </p>

      <h3>Calcitonin</h3>
      <p>
        Calcitonin can inhibit osteoclast activity and therefore reduce bone
        resorption, although its role in day-to-day adult calcium homeostasis is
        relatively limited.
      </p>

      <h3>Phosphate</h3>
      <p>
        Phosphate is essential for hydroxyapatite formation, cellular metabolism,
        nucleic acids, phospholipids, and ATP.
      </p>

      <h3>Bone Remodeling</h3>
      <p>
        Bone remodeling depends on coordinated signaling between osteoblasts,
        osteoclasts, and osteocytes. The RANK-RANKL-OPG system is particularly
        important in regulation of osteoclast differentiation and activity.
      </p>
    `
  },

  organs: [

    // ============================================================
    // SKULL
    // ============================================================

    {
      id: "skull",
      name: "Skull", 
      modelPath: "models/skeletal/skull/",
      modelFile: "skull.glb",

      notes: {
        anatomy: `
          <h2>Skull Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The skull is the bony framework of the head. It protects the brain,
            forms the facial skeleton, houses the organs of special sensation,
            provides attachment sites for muscles, and contains foramina through
            which cranial nerves and blood vessels pass.
          </p>

          <h3>Major Divisions</h3>
          <ul>
            <li>
              <strong>Neurocranium:</strong> forms the protective cranial cavity
              surrounding the brain.
            </li>
            <li>
              <strong>Viscerocranium:</strong> forms the facial skeleton.
            </li>
          </ul>

          <h3>Number of Bones</h3>
          <p>
            The adult skull contains 22 bones: 8 cranial bones and 14 facial bones.
            The hyoid bone is anatomically associated with the head and neck but is
            not counted among the 22 skull bones.
          </p>

          <h3>Major Cranial Bones</h3>
          <ul>
            <li>Frontal bone</li>
            <li>Two parietal bones</li>
            <li>Two temporal bones</li>
            <li>Occipital bone</li>
            <li>Sphenoid bone</li>
            <li>Ethmoid bone</li>
          </ul>

          <h3>Major Facial Bones</h3>
          <ul>
            <li>Two maxillary bones</li>
            <li>Two zygomatic bones</li>
            <li>Two nasal bones</li>
            <li>Two lacrimal bones</li>
            <li>Two palatine bones</li>
            <li>Two inferior nasal conchae</li>
            <li>Mandible</li>
            <li>Vomer</li>
          </ul>

          <p>
            The present anatomical model specifically includes the structures
            selected for this application.
          </p>
        `,

        physiology: `
          <h2>Skull Physiology</h2>

          <h3>Protection</h3>
          <p>
            The skull provides rigid protection for the brain and sensory organs.
          </p>

          <h3>Mastication</h3>
          <p>
            The mandible and associated structures participate in chewing by
            providing attachment and articulation for the muscles of mastication.
          </p>

          <h3>Speech</h3>
          <p>
            The skull provides attachment sites and structural relationships for
            muscles involved in speech and swallowing.
          </p>

          <h3>Special Senses</h3>
          <p>
            The skull forms cavities and channels associated with vision, hearing,
            equilibrium, and olfaction.
          </p>

          <h3>Airway and Respiration</h3>
          <p>
            The facial skeleton contributes to the nasal cavity and upper airway.
            The nasal structures help condition inspired air by filtering,
            humidifying, and warming it.
          </p>
        `,

        biochemistry: `
          <h2>Skull Biochemistry</h2>

          <p>
            Skull bones contain type I collagen and mineralized extracellular
            matrix. Calcium and phosphate form hydroxyapatite crystals that
            provide hardness.
          </p>

          <p>
            Bone remodeling within the skull is regulated by osteoblasts,
            osteoclasts, osteocytes, systemic hormones, local signaling molecules,
            and mechanical forces.
          </p>
        `
      },

      parts: [

        // ------------------------------------------------------------
        // FRONTAL BONE
        // ------------------------------------------------------------

        {
          id: "frontal-bone",
          name: "Frontal Bone",

          notes: {
            anatomy: `
              <h2>Frontal Bone Anatomy</h2>

              <p>
                The frontal bone forms the forehead, the anterior portion of the
                cranial vault, and much of the roof of the orbits.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Squamous part</li>
                <li>Orbital parts</li>
                <li>Nasal part</li>
                <li>Frontal sinus</li>
                <li>Supraorbital margin</li>
                <li>Supraorbital notch or foramen</li>
                <li>Glabella</li>
              </ul>

              <p>
                The frontal bone articulates with the parietal, sphenoid, ethmoid,
                nasal, zygomatic, maxillary, lacrimal, and other adjacent bones.
              </p>
            `,

            physiology: `
              <h2>Frontal Bone Physiology</h2>

              <p>
                The frontal bone protects the anterior part of the brain and
                contributes to the roof of the orbit, thereby protecting the eyes.
              </p>

              <p>
                The frontal sinus contributes to the paranasal sinus system and
                influences resonance of the voice and conditioning of inspired air.
              </p>
            `,

            biochemistry: `
              <h2>Frontal Bone Biochemistry</h2>

              <p>
                The frontal bone contains mineralized type I collagen matrix.
                Hydroxyapatite provides rigidity while collagen contributes
                tensile strength.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // PARIETAL BONES
        // ------------------------------------------------------------

        {
          id: "parietal-bones",
          name: "Parietal Bones",

          notes: {
            anatomy: `
              <h2>Parietal Bones Anatomy</h2>

              <p>
                The paired parietal bones form a large portion of the superior
                and lateral walls of the cranial vault.
              </p>

              <h3>Major Sutures</h3>
              <ul>
                <li>Coronal suture</li>
                <li>Sagittal suture</li>
                <li>Lambdoid suture</li>
                <li>Squamous suture</li>
              </ul>

              <p>
                The internal surface contains grooves associated with meningeal
                vessels and the venous sinuses.
              </p>
            `,

            physiology: `
              <h2>Parietal Bones Physiology</h2>

              <p>
                The parietal bones protect the superior and lateral aspects of
                the brain and provide attachment areas for cranial membranes
                and muscles.
              </p>
            `,

            biochemistry: `
              <h2>Parietal Bones Biochemistry</h2>

              <p>
                Parietal bone is composed of compact and cancellous bone
                containing collagen and calcium-phosphate mineral.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // TEMPORAL BONES
        // ------------------------------------------------------------

        {
          id: "temporal-bones",
          name: "Temporal Bones",

          notes: {
            anatomy: `
              <h2>Temporal Bones Anatomy</h2>

              <p>
                The paired temporal bones form parts of the lateral skull and
                cranial base. They contain the structures of the middle and
                inner ear.
              </p>

              <h3>Major Parts</h3>
              <ul>
                <li>Squamous part</li>
                <li>Mastoid part</li>
                <li>Petrous part</li>
                <li>Tympanic part</li>
                <li>Styloid process</li>
                <li>Zygomatic process</li>
                <li>Mandibular fossa</li>
              </ul>
            `,

            physiology: `
              <h2>Temporal Bones Physiology</h2>

              <p>
                The temporal bones protect the organs of hearing and equilibrium.
                Their mandibular fossae also participate in formation of the
                temporomandibular joints.
              </p>
            `,

            biochemistry: `
              <h2>Temporal Bones Biochemistry</h2>

              <p>
                The temporal bones contain dense mineralized bone tissue.
                Their exceptionally dense petrous portions provide strong
                protection for the delicate inner-ear structures.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // OCCIPITAL
        // ------------------------------------------------------------

        {
          id: "occipital-bone",
          name: "Occipital Bone",

          notes: {
            anatomy: `
              <h2>Occipital Bone Anatomy</h2>

              <p>
                The occipital bone forms the posterior and inferior portions
                of the skull and contributes to the posterior cranial fossa.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Foramen magnum</li>
                <li>Occipital condyles</li>
                <li>External occipital protuberance</li>
                <li>Nuchal lines</li>
                <li>Basilar part</li>
              </ul>

              <p>
                The foramen magnum provides passage between the cranial cavity
                and vertebral canal for the medulla/spinal cord continuity and
                associated vessels and membranes.
              </p>
            `,

            physiology: `
              <h2>Occipital Bone Physiology</h2>

              <p>
                The occipital bone protects the posterior brain and forms the
                connection between the skull and vertebral column through its
                articulation with the first cervical vertebra.
              </p>
            `,

            biochemistry: `
              <h2>Occipital Bone Biochemistry</h2>

              <p>
                Like other cranial bones, the occipital bone consists of
                collagen-rich organic matrix reinforced by calcium-phosphate
                mineral.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // SPHENOID
        // ------------------------------------------------------------

        {
          id: "sphenoid-bone",
          name: "Sphenoid Bone",

          notes: {
            anatomy: `
              <h2>Sphenoid Bone Anatomy</h2>

              <p>
                The sphenoid is a complex bone located centrally at the base of
                the skull. It articulates with numerous cranial and facial bones.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Body</li>
                <li>Greater wings</li>
                <li>Lesser wings</li>
                <li>Pterygoid processes</li>
                <li>Sella turcica</li>
                <li>Optic canals</li>
                <li>Superior orbital fissures</li>
              </ul>

              <p>
                The sella turcica contains the hypophyseal fossa, which houses
                the pituitary gland.
              </p>
            `,

            physiology: `
              <h2>Sphenoid Bone Physiology</h2>

              <p>
                The sphenoid forms an important structural component of the
                cranial base and contributes to the walls of the orbit.
              </p>

              <p>
                Its foramina and fissures provide pathways for important cranial
                nerves and blood vessels.
              </p>
            `,

            biochemistry: `
              <h2>Sphenoid Bone Biochemistry</h2>

              <p>
                The sphenoid consists of mineralized connective tissue containing
                type I collagen and hydroxyapatite.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // ETHMOID
        // ------------------------------------------------------------

        {
          id: "ethmoid-bone",
          name: "Ethmoid Bone",

          notes: {
            anatomy: `
              <h2>Ethmoid Bone Anatomy</h2>

              <p>
                The ethmoid is a lightweight bone located between the orbits
                and contributes to the anterior cranial floor, nasal septum,
                and nasal cavity.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Cribriform plate</li>
                <li>Crista galli</li>
                <li>Perpendicular plate</li>
                <li>Ethmoidal labyrinths</li>
                <li>Superior nasal concha</li>
                <li>Middle nasal concha</li>
              </ul>

              <p>
                The cribriform plate contains small foramina through which
                olfactory nerve fibers pass.
              </p>
            `,

            physiology: `
              <h2>Ethmoid Bone Physiology</h2>

              <p>
                The ethmoid contributes to the nasal cavity and provides
                structures important for olfaction. Its nasal components help
                create the complex airflow pattern of the nasal cavity.
              </p>
            `,

            biochemistry: `
              <h2>Ethmoid Bone Biochemistry</h2>

              <p>
                The ethmoid contains thin mineralized bone structures and
                air-containing spaces associated with the ethmoidal air cells.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // MAXILLA
        // ------------------------------------------------------------

        {
          id: "maxillary-bones",
          name: "Maxillary Bones",

          notes: {
            anatomy: `
              <h2>Maxillary Bones Anatomy</h2>

              <p>
                The paired maxillary bones form much of the central facial
                skeleton. They form the upper jaw and contribute to the orbit,
                nasal cavity, and hard palate.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Body of maxilla</li>
                <li>Alveolar process</li>
                <li>Palatine process</li>
                <li>Frontal process</li>
                <li>Zygomatic process</li>
                <li>Maxillary sinus</li>
              </ul>

              <p>
                The alveolar processes contain sockets for the upper teeth.
              </p>
            `,

            physiology: `
              <h2>Maxillary Bones Physiology</h2>

              <p>
                The maxilla supports the upper teeth and participates in
                mastication. It also contributes to the structure of the nasal
                cavity, orbit, and oral cavity.
              </p>
            `,

            biochemistry: `
              <h2>Maxillary Bones Biochemistry</h2>

              <p>
                The maxilla contains mineralized bone matrix and supports the
                alveolar structures that maintain the teeth.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // ZYGOMATIC
        // ------------------------------------------------------------

        {
          id: "zygomatic-bones",
          name: "Zygomatic Bones",

          notes: {
            anatomy: `
              <h2>Zygomatic Bones Anatomy</h2>

              <p>
                The paired zygomatic bones form the prominence of the cheeks
                and contribute to the lateral and inferior walls of the orbit.
              </p>

              <p>
                The zygomatic bone also participates in the zygomatic arch
                through its articulation with the temporal bone.
              </p>
            `,

            physiology: `
              <h2>Zygomatic Bones Physiology</h2>

              <p>
                The zygomatic bones protect the lateral aspect of the orbit
                and provide attachment sites for facial and masticatory muscles.
              </p>
            `,

            biochemistry: `
              <h2>Zygomatic Bones Biochemistry</h2>

              <p>
                Zygomatic bone contains collagen-rich mineralized matrix that
                provides structural strength while maintaining relatively low
                mass.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // NASAL
        // ------------------------------------------------------------

        {
          id: "nasal-bones",
          name: "Nasal Bones",

          notes: {
            anatomy: `
              <h2>Nasal Bones Anatomy</h2>

              <p>
                The paired nasal bones form the bony bridge of the nose.
                They articulate with the frontal bone superiorly and with
                neighboring facial bones laterally.
              </p>
            `,

            physiology: `
              <h2>Nasal Bones Physiology</h2>

              <p>
                The nasal bones provide structural support and protection for
                the superior portion of the external nose.
              </p>
            `,

            biochemistry: `
              <h2>Nasal Bones Biochemistry</h2>

              <p>
                Nasal bones contain mineralized collagenous matrix typical of
                cortical and cancellous bone.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // LACRIMAL
        // ------------------------------------------------------------

        {
          id: "lacrimal-bones",
          name: "Lacrimal Bones",

          notes: {
            anatomy: `
              <h2>Lacrimal Bones Anatomy</h2>

              <p>
                The lacrimal bones are small paired bones located on the medial
                walls of the orbits.
              </p>

              <p>
                Each lacrimal bone contributes to the lacrimal groove and the
                passage associated with the nasolacrimal drainage system.
              </p>
            `,

            physiology: `
              <h2>Lacrimal Bones Physiology</h2>

              <p>
                The lacrimal bones contribute to the bony framework surrounding
                the lacrimal drainage apparatus.
              </p>
            `,

            biochemistry: `
              <h2>Lacrimal Bones Biochemistry</h2>

              <p>
                Lacrimal bones are composed of mineralized connective tissue
                with type I collagen and calcium-phosphate mineral.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // PALATINE
        // ------------------------------------------------------------

        {
          id: "palatine-bones",
          name: "Palatine Bones",

          notes: {
            anatomy: `
              <h2>Palatine Bones Anatomy</h2>

              <p>
                The paired palatine bones are located posteriorly in the facial
                skeleton. They contribute to the hard palate, nasal cavity,
                and small portions of the orbit.
              </p>

              <h3>Major Components</h3>
              <ul>
                <li>Horizontal plate</li>
                <li>Perpendicular plate</li>
              </ul>
            `,

            physiology: `
              <h2>Palatine Bones Physiology</h2>

              <p>
                The palatine bones contribute to separation of the oral and
                nasal cavities and therefore play an important structural role
                in swallowing and speech.
              </p>
            `,

            biochemistry: `
              <h2>Palatine Bones Biochemistry</h2>

              <p>
                Palatine bones consist of mineralized collagenous tissue
                containing calcium-phosphate crystals.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // INFERIOR NASAL CONCHA
        // ------------------------------------------------------------

        {
          id: "inferior-nasal-concha",
          name: "Inferior Nasal Concha",

          notes: {
            anatomy: `
              <h2>Inferior Nasal Concha Anatomy</h2>

              <p>
                The inferior nasal concha is a paired, curved bone projecting
                from the lateral wall of the nasal cavity.
              </p>

              <p>
                Unlike the superior and middle nasal conchae, which are parts
                of the ethmoid bone, the inferior nasal concha is an independent
                facial bone.
              </p>
            `,

            physiology: `
              <h2>Inferior Nasal Concha Physiology</h2>

              <p>
                The inferior nasal concha increases the surface area of the
                nasal cavity and contributes to turbulent airflow. This allows
                inspired air to be warmed, humidified, and filtered before
                reaching deeper respiratory passages.
              </p>
            `,

            biochemistry: `
              <h2>Inferior Nasal Concha Biochemistry</h2>

              <p>
                The inferior nasal concha consists of thin bone covered by
                vascular respiratory mucosa.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // MANDIBLE
        // ------------------------------------------------------------

        {
          id: "mandible",
          name: "Mandible",

          notes: {
            anatomy: `
              <h2>Mandible Anatomy</h2>

              <p>
                The mandible is the largest and strongest bone of the facial
                skeleton and forms the lower jaw.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Body</li>
                <li>Ramus</li>
                <li>Angle</li>
                <li>Coronoid process</li>
                <li>Condylar process</li>
                <li>Mandibular foramen</li>
                <li>Mental foramen</li>
                <li>Alveolar part</li>
              </ul>

              <p>
                The mandibular condyle articulates with the temporal bone to
                form the temporomandibular joint.
              </p>
            `,

            physiology: `
              <h2>Mandible Physiology</h2>

              <p>
                The mandible provides the mechanical framework for mastication.
                Movements include elevation, depression, protrusion, retrusion,
                and lateral excursion.
              </p>

              <p>
                It also contributes to speech and provides attachment sites
                for muscles of mastication and facial expression.
              </p>
            `,

            biochemistry: `
              <h2>Mandible Biochemistry</h2>

              <p>
                The mandible contains compact and cancellous bone. Its alveolar
                bone undergoes continuous remodeling in response to mechanical
                forces and tooth-related stimuli.
              </p>
            `
          }
        },

        // ------------------------------------------------------------
        // HYOID
        // ------------------------------------------------------------

        {
          id: "hyoid-bone",
          name: "Hyoid Bone",

          notes: {
            anatomy: `
              <h2>Hyoid Bone Anatomy</h2>

              <p>
                The hyoid is a U-shaped bone located in the anterior neck.
                It is unusual because it does not directly articulate with
                another bone.
              </p>

              <h3>Major Parts</h3>
              <ul>
                <li>Body</li>
                <li>Greater horns</li>
                <li>Lesser horns</li>
              </ul>

              <p>
                The hyoid is suspended by muscles and ligaments and is closely
                associated with the tongue, larynx, and pharynx.
              </p>
            `,

            physiology: `
              <h2>Hyoid Bone Physiology</h2>

              <p>
                The hyoid provides an attachment framework for muscles involved
                in swallowing, speech, tongue movement, and movements of the
                larynx.
              </p>

              <p>
                Movement of the hyoid helps elevate and stabilize structures
                during swallowing.
              </p>
            `,

            biochemistry: `
              <h2>Hyoid Bone Biochemistry</h2>

              <p>
                The hyoid consists of mineralized bone matrix containing type I
                collagen and calcium-phosphate mineral.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // VERTEBRAL COLUMN
    // ============================================================

    {
      id: "vertebral-column",
      name: "Vertebral Column",

      notes: {
        anatomy: `
          <h2>Vertebral Column Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The vertebral column, also called the spine or backbone, forms the
            central longitudinal axis of the trunk. It extends from the base
            of the skull to the pelvis and encloses the vertebral canal.
          </p>

          <h3>Regions</h3>
          <ul>
            <li>7 cervical vertebrae</li>
            <li>12 thoracic vertebrae</li>
            <li>5 lumbar vertebrae</li>
            <li>5 fused sacral vertebrae</li>
            <li>Usually 4 fused coccygeal vertebrae</li>
          </ul>

          <h3>Normal Curvatures</h3>
          <ul>
            <li>Cervical lordosis</li>
            <li>Thoracic kyphosis</li>
            <li>Lumbar lordosis</li>
            <li>Sacral kyphosis</li>
          </ul>

          <h3>Intervertebral Discs</h3>
          <p>
            Intervertebral discs occur between most adjacent vertebral bodies.
            They consist of an outer annulus fibrosus and inner nucleus pulposus.
          </p>
        `,

        physiology: `
          <h2>Vertebral Column Physiology</h2>

          <ul>
            <li>Supports the head and trunk.</li>
            <li>Protects the spinal cord.</li>
            <li>Provides attachment sites for muscles and ligaments.</li>
            <li>Allows controlled movement of the trunk.</li>
            <li>Transmits loads between the trunk and pelvis.</li>
            <li>Absorbs mechanical forces.</li>
          </ul>

          <h3>Spinal Movement</h3>
          <p>
            The vertebral column permits flexion, extension, lateral flexion,
            and rotation. The amount of movement differs between spinal regions.
          </p>
        `,

        biochemistry: `
          <h2>Vertebral Column Biochemistry</h2>

          <p>
            Vertebral bodies contain mineralized type I collagen matrix.
            Intervertebral discs contain collagen, proteoglycans,
            glycosaminoglycans, and water.
          </p>

          <p>
            Proteoglycans within the nucleus pulposus bind water and contribute
            to the disc's ability to resist compression.
          </p>
        `
      },

      parts: [
        {
          id: "cervical-vertebrae",
          name: "Cervical Vertebrae",

          notes: {
            anatomy: `
              <h2>Cervical Vertebrae</h2>

              <p>
                The cervical vertebrae are the seven vertebrae of the neck,
                designated C1 through C7.
              </p>

              <h3>Special Vertebrae</h3>
              <ul>
                <li><strong>C1 – Atlas:</strong> supports the skull.</li>
                <li><strong>C2 – Axis:</strong> contains the dens and permits rotation of the head.</li>
                <li><strong>C7:</strong> commonly has a prominent spinous process.</li>
              </ul>

              <p>
                Typical cervical vertebrae contain transverse foramina through
                which the vertebral vessels pass.
              </p>
            `,

            physiology: `
              <h2>Cervical Vertebrae Physiology</h2>

              <p>
                The cervical spine supports the head and permits extensive
                movement including flexion, extension, rotation, and lateral
                flexion.
              </p>
            `,

            biochemistry: `
              <h2>Cervical Vertebrae Biochemistry</h2>

              <p>
                Cervical vertebrae contain mineralized bone matrix and undergo
                continuous remodeling in response to mechanical loading.
              </p>
            `
          }
        },

        {
          id: "thoracic-vertebrae",
          name: "Thoracic Vertebrae",

          notes: {
            anatomy: `
              <h2>Thoracic Vertebrae</h2>

              <p>
                The twelve thoracic vertebrae, T1 through T12, form the
                posterior portion of the thoracic cage.
              </p>

              <p>
                They articulate with the ribs through costal facets and
                therefore participate in formation of the thoracic cage.
              </p>
            `,

            physiology: `
              <h2>Thoracic Vertebrae Physiology</h2>

              <p>
                Thoracic vertebrae provide structural support for the thorax
                and contribute to protection of the spinal cord.
              </p>

              <p>
                Their relationship with the ribs allows the vertebral column
                to participate indirectly in respiratory mechanics.
              </p>
            `,

            biochemistry: `
              <h2>Thoracic Vertebrae Biochemistry</h2>

              <p>
                Thoracic vertebrae contain cortical and trabecular bone with
                a collagenous matrix mineralized by calcium-phosphate crystals.
              </p>
            `
          }
        },

        {
          id: "lumbar-vertebrae",
          name: "Lumbar Vertebrae",

          notes: {
            anatomy: `
              <h2>Lumbar Vertebrae</h2>

              <p>
                The five lumbar vertebrae, L1 through L5, are the largest
                vertebrae of the freely movable spine.
              </p>

              <p>
                Their large vertebral bodies are adapted to carry substantial
                loads transmitted from the upper body.
              </p>
            `,

            physiology: `
              <h2>Lumbar Vertebrae Physiology</h2>

              <p>
                Lumbar vertebrae bear much of the weight of the upper body.
                They permit flexion and extension while limiting excessive
                rotation.
              </p>
            `,

            biochemistry: `
              <h2>Lumbar Vertebrae Biochemistry</h2>

              <p>
                Lumbar vertebrae contain substantial trabecular and cortical
                bone and undergo remodeling in response to weight-bearing
                forces.
              </p>
            `
          }
        },

        {
          id: "sacral-vertebrae",
          name: "Sacral Vertebrae",

          notes: {
            anatomy: `
              <h2>Sacral Vertebrae</h2>

              <p>
                Five sacral vertebrae fuse during development to form the
                triangular sacrum.
              </p>

              <p>
                The sacrum articulates with the hip bones at the sacroiliac
                joints and forms the posterior wall of the pelvis.
              </p>
            `,

            physiology: `
              <h2>Sacral Vertebrae Physiology</h2>

              <p>
                The sacrum transfers forces between the vertebral column and
                the pelvic girdle and contributes to weight transmission to
                the lower limbs.
              </p>
            `,

            biochemistry: `
              <h2>Sacral Vertebrae Biochemistry</h2>

              <p>
                The sacrum consists of fused mineralized vertebral tissue
                containing collagen and calcium-phosphate mineral.
              </p>
            `
          }
        },

        {
          id: "coccygeal-vertebrae",
          name: "Coccygeal Vertebrae",

          notes: {
            anatomy: `
              <h2>Coccygeal Vertebrae</h2>

              <p>
                The coccygeal vertebrae are small vertebral segments that
                usually fuse to form the coccyx.
              </p>

              <p>
                The coccyx is located at the inferior end of the vertebral
                column and provides attachment for several muscles and
                ligaments of the pelvic floor.
              </p>
            `,

            physiology: `
              <h2>Coccygeal Vertebrae Physiology</h2>

              <p>
                The coccyx contributes to pelvic-floor support and provides
                attachment sites for muscles and ligaments.
              </p>
            `,

            biochemistry: `
              <h2>Coccygeal Vertebrae Biochemistry</h2>

              <p>
                Coccygeal bone contains mineralized connective tissue and
                undergoes normal skeletal remodeling.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // RIB CAGE
    // ============================================================

    {
      id: "rib-cage",
      name: "Rib Cage",

      notes: {
        anatomy: `
          <h2>Rib Cage Anatomy</h2>

          <p>
            The rib cage forms the bony framework of the thorax. It consists
            of the ribs, thoracic vertebrae, sternum, and costal cartilages.
          </p>

          <h3>Components</h3>
          <ul>
            <li>12 pairs of ribs</li>
            <li>Sternum</li>
            <li>12 thoracic vertebrae</li>
            <li>Costal cartilages</li>
          </ul>

          <h3>Rib Classification</h3>
          <ul>
            <li><strong>True ribs:</strong> ribs 1–7.</li>
            <li><strong>False ribs:</strong> ribs 8–10.</li>
            <li><strong>Floating ribs:</strong> ribs 11–12.</li>
          </ul>
        `,

        physiology: `
          <h2>Rib Cage Physiology</h2>

          <h3>Protection</h3>
          <p>
            The rib cage protects the heart, lungs, major vessels, and other
            thoracic structures.
          </p>

          <h3>Respiration</h3>
          <p>
            Movement of the ribs changes thoracic volume during breathing.
            Intercostal muscles and the diaphragm work together with the
            thoracic cage to produce ventilation.
          </p>
        `,

        biochemistry: `
          <h2>Rib Cage Biochemistry</h2>

          <p>
            Ribs contain mineralized bone matrix while costal cartilage contains
            an extracellular matrix rich in type II collagen and proteoglycans.
          </p>
        `
      },

      parts: [
        {
          id: "ribs",
          name: "Ribs",

          notes: {
            anatomy: `
              <h2>Ribs Anatomy</h2>

              <p>
                Ribs are curved bones forming the lateral walls of the thoracic
                cage. There are twelve pairs.
              </p>

              <h3>Classification</h3>
              <ul>
                <li>Ribs 1–7: true ribs.</li>
                <li>Ribs 8–10: false ribs.</li>
                <li>Ribs 11–12: floating ribs.</li>
              </ul>
            `,

            physiology: `
              <h2>Ribs Physiology</h2>

              <p>
                The ribs protect thoracic organs and participate in respiratory
                movements by rotating and elevating during inspiration.
              </p>
            `,

            biochemistry: `
              <h2>Ribs Biochemistry</h2>

              <p>
                Ribs contain collagenous organic matrix reinforced by
                hydroxyapatite mineral.
              </p>
            `
          }
        },

        {
          id: "sternum",
          name: "Sternum",

          notes: {
            anatomy: `
              <h2>Sternum Anatomy</h2>

              <p>
                The sternum is a flat bone located in the anterior midline of
                the thorax.
              </p>

              <h3>Major Parts</h3>
              <ul>
                <li>Manubrium</li>
                <li>Body</li>
                <li>Xiphoid process</li>
              </ul>

              <p>
                The sternum articulates with the clavicles and with the costal
                cartilages of the ribs.
              </p>
            `,

            physiology: `
              <h2>Sternum Physiology</h2>

              <p>
                The sternum contributes to protection of thoracic organs and
                provides attachment sites for pectoral and respiratory muscles.
              </p>
            `,

            biochemistry: `
              <h2>Sternum Biochemistry</h2>

              <p>
                The sternum contains both cortical and trabecular bone and
                houses red bone marrow in adults.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // UPPER LIMBS
    // ============================================================

    {
      id: "upper-limbs",
      name: "Upper Limbs",

      notes: {
        anatomy: `
          <h2>Upper Limb Anatomy</h2>

          <p>
            The upper limbs include the pectoral girdles and the bones of the
            arms, forearms, wrists, and hands.
          </p>

          <h3>Major Components</h3>
          <ul>
            <li>Clavicle</li>
            <li>Scapula</li>
            <li>Humerus</li>
            <li>Radius</li>
            <li>Ulna</li>
            <li>Carpals</li>
            <li>Metacarpals</li>
            <li>Phalanges</li>
          </ul>
        `,

        physiology: `
          <h2>Upper Limb Physiology</h2>

          <p>
            The upper limbs provide extensive mobility and allow the hands to
            perform reaching, grasping, manipulation, and fine motor activities.
          </p>
        `,

        biochemistry: `
          <h2>Upper Limb Bone Biochemistry</h2>

          <p>
            Upper-limb bones contain mineralized collagen matrix and undergo
            continuous remodeling in response to mechanical loading.
          </p>
        `
      },

      parts: [
        {
          id: "humerus",
          name: "Humerus",

          notes: {
            anatomy: `
              <h2>Humerus Anatomy</h2>

              <p>
                The humerus is the long bone of the arm. It extends from the
                shoulder to the elbow.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Head</li>
                <li>Anatomical neck</li>
                <li>Surgical neck</li>
                <li>Greater tubercle</li>
                <li>Lesser tubercle</li>
                <li>Deltoid tuberosity</li>
                <li>Capitulum</li>
                <li>Trochlea</li>
                <li>Medial epicondyle</li>
                <li>Lateral epicondyle</li>
              </ul>
            `,

            physiology: `
              <h2>Humerus Physiology</h2>

              <p>
                The humerus acts as a lever for muscles controlling the shoulder
                and elbow. It transmits forces between the upper limb and the
                pectoral girdle.
              </p>
            `,

            biochemistry: `
              <h2>Humerus Biochemistry</h2>

              <p>
                The humerus consists of cortical bone surrounding a medullary
                cavity and contains trabecular bone at its expanded ends.
              </p>
            `
          }
        },

        {
          id: "ulna",
          name: "Ulna",

          notes: {
            anatomy: `
              <h2>Ulna Anatomy</h2>

              <p>
                The ulna is the medial bone of the forearm in anatomical
                position. It forms a major component of the elbow joint.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Olecranon</li>
                <li>Coronoid process</li>
                <li>Trochlear notch</li>
                <li>Radial notch</li>
                <li>Head</li>
                <li>Styloid process</li>
              </ul>
            `,

            physiology: `
              <h2>Ulna Physiology</h2>

              <p>
                The ulna provides stability to the forearm and forms the
                principal bony hinge with the humerus at the elbow.
              </p>
            `,

            biochemistry: `
              <h2>Ulna Biochemistry</h2>

              <p>
                The ulna consists of mineralized cortical and trabecular bone
                maintained through continuous remodeling.
              </p>
            `
          }
        },

        {
          id: "radius",
          name: "Radius",

          notes: {
            anatomy: `
              <h2>Radius Anatomy</h2>

              <p>
                The radius is the lateral bone of the forearm in anatomical
                position. It extends from the elbow to the wrist.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Head</li>
                <li>Neck</li>
                <li>Radial tuberosity</li>
                <li>Shaft</li>
                <li>Styloid process</li>
              </ul>

              <p>
                The radius participates in the proximal and distal radioulnar
                joints.
              </p>
            `,

            physiology: `
              <h2>Radius Physiology</h2>

              <p>
                The radius plays a major role in pronation and supination of
                the forearm. It also transmits substantial loads from the
                hand to the elbow.
              </p>
            `,

            biochemistry: `
              <h2>Radius Biochemistry</h2>

              <p>
                Radius bone contains cortical and trabecular tissue with a
                mineralized collagen matrix.
              </p>
            `
          }
        },

        {
          id: "carpals",
          name: "Carpals",

          notes: {
            anatomy: `
              <h2>Carpal Bones Anatomy</h2>

              <p>
                The wrist contains eight carpal bones arranged in proximal
                and distal rows.
              </p>

              <h3>Proximal Row</h3>
              <ul>
                <li>Scaphoid</li>
                <li>Lunate</li>
                <li>Triquetrum</li>
                <li>Pisiform</li>
              </ul>

              <h3>Distal Row</h3>
              <ul>
                <li>Trapezium</li>
                <li>Trapezoid</li>
                <li>Capitate</li>
                <li>Hamate</li>
              </ul>
            `,

            physiology: `
              <h2>Carpals Physiology</h2>

              <p>
                The carpal bones form a flexible mechanical complex that
                allows the wrist to perform flexion, extension, deviation,
                and complex combined movements.
              </p>
            `,

            biochemistry: `
              <h2>Carpals Biochemistry</h2>

              <p>
                Carpal bones contain trabecular and cortical bone organized
                to withstand the forces transmitted through the hand and wrist.
              </p>
            `
          }
        },

        {
          id: "metacarpals",
          name: "Metacarpals",

          notes: {
            anatomy: `
              <h2>Metacarpals Anatomy</h2>

              <p>
                The five metacarpals form the skeletal framework of the palm.
                They are numbered I through V from the thumb toward the little
                finger.
              </p>

              <p>
                Each metacarpal contains a base, shaft, and head.
              </p>
            `,

            physiology: `
              <h2>Metacarpals Physiology</h2>

              <p>
                Metacarpals transmit forces between the carpus and phalanges
                and contribute to grasping and manipulation.
              </p>
            `,

            biochemistry: `
              <h2>Metacarpals Biochemistry</h2>

              <p>
                Metacarpals contain mineralized bone matrix with cortical
                and trabecular components.
              </p>
            `
          }
        },

        {
          id: "phalanges-upper-limb",
          name: "Phalanges",

          notes: {
            anatomy: `
              <h2>Hand Phalanges Anatomy</h2>

              <p>
                The hand contains fourteen phalanges. The thumb has two,
                while each of the other four digits has three.
              </p>

              <ul>
                <li>Proximal phalanges</li>
                <li>Middle phalanges</li>
                <li>Distal phalanges</li>
              </ul>
            `,

            physiology: `
              <h2>Hand Phalanges Physiology</h2>

              <p>
                The phalanges provide the skeletal framework for finger and
                thumb movements, allowing precision grip, power grip, and
                fine manipulation.
              </p>
            `,

            biochemistry: `
              <h2>Hand Phalanges Biochemistry</h2>

              <p>
                Phalangeal bones contain mineralized collagen matrix and
                undergo remodeling in response to mechanical stress.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // LOWER LIMBS
    // ============================================================

    {
      id: "lower-limbs",
      name: "Lower Limbs",

      notes: {
        anatomy: `
          <h2>Lower Limb Anatomy</h2>

          <p>
            The lower limbs consist of the bones of the thigh, leg, ankle,
            and foot. They form a strong weight-bearing system adapted for
            standing and locomotion.
          </p>

          <h3>Major Bones</h3>
          <ul>
            <li>Femur</li>
            <li>Patella</li>
            <li>Tibia</li>
            <li>Fibula</li>
            <li>Tarsals</li>
            <li>Metatarsals</li>
            <li>Phalanges</li>
          </ul>
        `,

        physiology: `
          <h2>Lower Limb Physiology</h2>

          <p>
            The lower limbs support body weight, maintain posture, absorb
            mechanical forces, and generate the movements required for
            walking, running, jumping, and other forms of locomotion.
          </p>
        `,

        biochemistry: `
          <h2>Lower Limb Bone Biochemistry</h2>

          <p>
            Lower-limb bones undergo continuous remodeling in response to
            substantial mechanical loading. Their mineralized matrix provides
            resistance to compression while collagen provides tensile
            strength.
          </p>
        `
      },

      parts: [
        {
          id: "femur",
          name: "Femur",

          notes: {
            anatomy: `
              <h2>Femur Anatomy</h2>

              <p>
                The femur is the longest and strongest bone in the human body.
                It extends from the hip joint to the knee joint.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Head</li>
                <li>Neck</li>
                <li>Greater trochanter</li>
                <li>Lesser trochanter</li>
                <li>Linea aspera</li>
                <li>Medial condyle</li>
                <li>Lateral condyle</li>
              </ul>
            `,

            physiology: `
              <h2>Femur Physiology</h2>

              <p>
                The femur transmits body weight from the pelvis to the tibia
                and acts as a major lever for muscles involved in standing,
                walking, running, and jumping.
              </p>
            `,

            biochemistry: `
              <h2>Femur Biochemistry</h2>

              <p>
                The femur contains dense cortical bone in its shaft and
                substantial trabecular bone toward its ends. It undergoes
                continuous remodeling in response to mechanical stress.
              </p>
            `
          }
        },

        {
          id: "tibia",
          name: "Tibia",

          notes: {
            anatomy: `
              <h2>Tibia Anatomy</h2>

              <p>
                The tibia is the larger and stronger of the two bones of the
                leg. It is located medially in anatomical position.
              </p>

              <h3>Major Features</h3>
              <ul>
                <li>Medial and lateral condyles</li>
                <li>Tibial tuberosity</li>
                <li>Tibial shaft</li>
                <li>Medial malleolus</li>
              </ul>
            `,

            physiology: `
              <h2>Tibia Physiology</h2>

              <p>
                The tibia is the principal weight-bearing bone of the leg.
                It transmits forces from the femur to the ankle and foot.
              </p>
            `,

            biochemistry: `
              <h2>Tibia Biochemistry</h2>

              <p>
                Tibial bone contains dense cortical tissue and trabecular
                bone, with mineralization regulated by systemic and local
                mechanisms.
              </p>
            `
          }
        },

        {
          id: "fibula",
          name: "Fibula",

          notes: {
            anatomy: `
              <h2>Fibula Anatomy</h2>

              <p>
                The fibula is the slender lateral bone of the leg. It is
                considerably less involved in weight transmission than the
                tibia.
              </p>

              <p>
                Its distal end forms the lateral malleolus of the ankle.
              </p>
            `,

            physiology: `
              <h2>Fibula Physiology</h2>

              <p>
                The fibula provides attachment for numerous muscles and
                contributes to lateral stability of the ankle.
              </p>
            `,

            biochemistry: `
              <h2>Fibula Biochemistry</h2>

              <p>
                Fibular bone consists of mineralized collagen matrix and
                undergoes normal skeletal remodeling.
              </p>
            `
          }
        },

        {
          id: "tarsals",
          name: "Tarsals",

          notes: {
            anatomy: `
              <h2>Tarsal Bones Anatomy</h2>

              <p>
                The foot contains seven tarsal bones.
              </p>

              <ul>
                <li>Talus</li>
                <li>Calcaneus</li>
                <li>Navicular</li>
                <li>Medial cuneiform</li>
                <li>Intermediate cuneiform</li>
                <li>Lateral cuneiform</li>
                <li>Cuboid</li>
              </ul>
            `,

            physiology: `
              <h2>Tarsals Physiology</h2>

              <p>
                The tarsal bones provide stability, distribute loads, and
                contribute to the arches of the foot. They participate in
                controlled movements of the ankle and foot.
              </p>
            `,

            biochemistry: `
              <h2>Tarsals Biochemistry</h2>

              <p>
                Tarsal bones contain mineralized collagen matrix adapted to
                withstand repeated weight-bearing forces.
              </p>
            `
          }
        },

        {
          id: "metatarsals",
          name: "Metatarsals",

          notes: {
            anatomy: `
              <h2>Metatarsals Anatomy</h2>

              <p>
                The five metatarsals form the skeletal framework between the
                tarsals and toe phalanges.
              </p>

              <p>
                They are numbered I through V from the medial side of the
                foot toward the lateral side.
              </p>
            `,

            physiology: `
              <h2>Metatarsals Physiology</h2>

              <p>
                The metatarsals transmit body weight toward the toes and
                participate in propulsion during walking and running.
              </p>
            `,

            biochemistry: `
              <h2>Metatarsals Biochemistry</h2>

              <p>
                Metatarsals contain mineralized bone tissue that adapts to
                repetitive mechanical loading.
              </p>
            `
          }
        },

        {
          id: "phalanges-lower-limb",
          name: "Phalanges",

          notes: {
            anatomy: `
              <h2>Foot Phalanges Anatomy</h2>

              <p>
                The foot contains fourteen phalanges. The great toe has two
                phalanges, while each of the other toes has three.
              </p>
            `,

            physiology: `
              <h2>Foot Phalanges Physiology</h2>

              <p>
                The toe phalanges contribute to balance and propulsion during
                walking and running.
              </p>
            `,

            biochemistry: `
              <h2>Foot Phalanges Biochemistry</h2>

              <p>
                Phalangeal bones contain mineralized type I collagen matrix
                adapted to repetitive mechanical loading.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // PELVIS
    // ============================================================

    {
      id: "pelvis",
      name: "Pelvis",

      notes: {
        anatomy: `
          <h2>Pelvis Anatomy</h2>

          <p>
            The pelvis forms the connection between the vertebral column and
            the lower limbs. It consists of the paired hip bones, sacrum, and
            coccyx.
          </p>

          <h3>Hip Bone Components</h3>
          <ul>
            <li>Ilium</li>
            <li>Ischium</li>
            <li>Pubis</li>
          </ul>

          <p>
            The three components meet at the acetabulum, which articulates
            with the head of the femur.
          </p>

          <h3>Pelvic Divisions</h3>
          <ul>
            <li>Greater pelvis</li>
            <li>Lesser pelvis</li>
          </ul>
        `,

        physiology: `
          <h2>Pelvis Physiology</h2>

          <ul>
            <li>Transfers body weight to the lower limbs.</li>
            <li>Protects pelvic organs.</li>
            <li>Provides attachment for trunk and lower-limb muscles.</li>
            <li>Contributes to posture and locomotion.</li>
            <li>Provides the bony framework of the birth canal.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Pelvis Biochemistry</h2>

          <p>
            Pelvic bones contain a mixture of cortical and trabecular bone.
            Their mineral matrix contains calcium and phosphate while type I
            collagen provides tensile strength.
          </p>
        `
      },

      parts: [
        {
          id: "hip-bones",
          name: "Hip Bones",

          notes: {
            anatomy: `
              <h2>Hip Bones Anatomy</h2>

              <p>
                The paired hip bones form the lateral and anterior portions
                of the pelvic girdle.
              </p>

              <h3>Components</h3>
              <ul>
                <li>Ilium</li>
                <li>Ischium</li>
                <li>Pubis</li>
              </ul>

              <p>
                These three components fuse around the acetabulum.
              </p>
            `,

            physiology: `
              <h2>Hip Bones Physiology</h2>

              <p>
                The hip bones transfer forces between the axial skeleton and
                lower limbs and provide extensive attachment sites for muscles
                involved in locomotion and posture.
              </p>
            `,

            biochemistry: `
              <h2>Hip Bones Biochemistry</h2>

              <p>
                Hip bones contain mineralized collagen matrix and undergo
                continuous remodeling in response to mechanical forces.
              </p>
            `
          }
        },

        {
          id: "sacrum",
          name: "Sacrum",

          notes: {
            anatomy: `
              <h2>Sacrum Anatomy</h2>

              <p>
                The sacrum is a triangular bone formed by fusion of five
                sacral vertebrae.
              </p>

              <p>
                It lies between the two hip bones and forms the posterior
                portion of the pelvic ring.
              </p>
            `,

            physiology: `
              <h2>Sacrum Physiology</h2>

              <p>
                The sacrum transmits forces from the vertebral column to the
                pelvic girdle and lower limbs.
              </p>
            `,

            biochemistry: `
              <h2>Sacrum Biochemistry</h2>

              <p>
                The sacrum contains dense mineralized bone matrix and
                participates in systemic calcium and phosphate storage.
              </p>
            `
          }
        },

        {
          id: "coccyx",
          name: "Coccyx",

          notes: {
            anatomy: `
              <h2>Coccyx Anatomy</h2>

              <p>
                The coccyx is the terminal portion of the vertebral column.
                It is usually formed by four fused coccygeal vertebrae,
                although the number can vary.
              </p>
            `,

            physiology: `
              <h2>Coccyx Physiology</h2>

              <p>
                The coccyx provides attachment for pelvic-floor muscles and
                ligaments and contributes to support of the pelvic structures.
              </p>
            `,

            biochemistry: `
              <h2>Coccyx Biochemistry</h2>

              <p>
                The coccyx consists of mineralized vertebral bone tissue and
                undergoes normal skeletal remodeling.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // JOINTS
    // ============================================================

    {
      id: "joints",
      name: "Joints",

      notes: {
        anatomy: `
          <h2>Joint Anatomy</h2>

          <h3>Overview</h3>
          <p>
            A joint, or articulation, is the location where two or more
            skeletal elements meet. Joints provide stability while allowing
            varying degrees of movement.
          </p>

          <h3>Structural Classification</h3>
          <ul>
            <li>Fibrous joints</li>
            <li>Cartilaginous joints</li>
            <li>Synovial joints</li>
          </ul>

          <h3>Functional Classification</h3>
          <ul>
            <li>Synarthroses – essentially immovable joints.</li>
            <li>Amphiarthroses – slightly movable joints.</li>
            <li>Diarthroses – freely movable joints.</li>
          </ul>

          <h3>Synovial Joint Components</h3>
          <ul>
            <li>Articular cartilage</li>
            <li>Joint cavity</li>
            <li>Fibrous capsule</li>
            <li>Synovial membrane</li>
            <li>Synovial fluid</li>
            <li>Ligaments</li>
          </ul>
        `,

        physiology: `
          <h2>Joint Physiology</h2>

          <p>
            Joints balance mobility and stability. Synovial joints allow
            extensive movement while distributing mechanical loads and
            minimizing friction.
          </p>

          <h3>Joint Stability</h3>
          <p>
            Stability is provided by the shape of articulating surfaces,
            ligaments, joint capsules, muscles, tendons, and sensory feedback.
          </p>

          <h3>Joint Lubrication</h3>
          <p>
            Synovial fluid reduces friction between articular surfaces and
            contributes to nutrient transport within articular cartilage.
          </p>
        `,

        biochemistry: `
          <h2>Joint Biochemistry</h2>

          <p>
            Articular cartilage contains type II collagen, proteoglycans,
            glycosaminoglycans, and water. These components allow cartilage
            to withstand compression while providing a smooth articulating
            surface.
          </p>

          <p>
            Synovial fluid contains hyaluronic acid, lubricating proteins,
            electrolytes, and other molecules that contribute to lubrication
            and joint homeostasis.
          </p>
        `
      },

      parts: [
        {
          id: "fibrous-joints",
          name: "Fibrous Joints",

          notes: {
            anatomy: `
              <h2>Fibrous Joints Anatomy</h2>

              <p>
                Fibrous joints are joints in which bones are connected by
                dense fibrous connective tissue.
              </p>

              <h3>Examples</h3>
              <ul>
                <li>Sutures of the skull</li>
                <li>Syndesmoses</li>
                <li>Gomphoses between teeth and alveolar bone</li>
              </ul>
            `,

            physiology: `
              <h2>Fibrous Joints Physiology</h2>

              <p>
                Fibrous joints primarily provide stability and protection.
                Most allow little or no movement.
              </p>
            `,

            biochemistry: `
              <h2>Fibrous Joints Biochemistry</h2>

              <p>
                Their connective tissue is rich in type I collagen and other
                extracellular-matrix components that provide tensile strength.
              </p>
            `
          }
        },

        {
          id: "cartilaginous-joints",
          name: "Cartilaginous Joints",

          notes: {
            anatomy: `
              <h2>Cartilaginous Joints Anatomy</h2>

              <p>
                Cartilaginous joints connect bones through cartilage.
              </p>

              <h3>Types</h3>
              <ul>
                <li>Synchondroses</li>
                <li>Symphyses</li>
              </ul>

              <p>
                Examples include the pubic symphysis and intervertebral
                symphyses between vertebral bodies.
              </p>
            `,

            physiology: `
              <h2>Cartilaginous Joints Physiology</h2>

              <p>
                Cartilaginous joints provide strength and controlled limited
                movement while absorbing mechanical forces.
              </p>
            `,

            biochemistry: `
              <h2>Cartilaginous Joints Biochemistry</h2>

              <p>
                Cartilage contains collagen and proteoglycan-rich extracellular
                matrix. The composition varies according to the specific
                type of cartilage.
              </p>
            `
          }
        },

        {
          id: "synovial-joints",
          name: "Synovial Joints",

          notes: {
            anatomy: `
              <h2>Synovial Joints Anatomy</h2>

              <p>
                Synovial joints are freely movable joints characterized by
                a synovial cavity between articulating surfaces.
              </p>

              <h3>Major Types</h3>
              <ul>
                <li>Plane joints</li>
                <li>Hinge joints</li>
                <li>Pivot joints</li>
                <li>Condyloid joints</li>
                <li>Saddle joints</li>
                <li>Ball-and-socket joints</li>
              </ul>

              <h3>Examples</h3>
              <ul>
                <li>Shoulder joint</li>
                <li>Hip joint</li>
                <li>Elbow joint</li>
                <li>Knee joint</li>
                <li>Wrist joints</li>
                <li>Ankle joint</li>
              </ul>
            `,

            physiology: `
              <h2>Synovial Joint Physiology</h2>

              <p>
                Synovial joints permit substantial movement while distributing
                loads across articular surfaces.
              </p>

              <h3>Movements</h3>
              <ul>
                <li>Flexion</li>
                <li>Extension</li>
                <li>Abduction</li>
                <li>Adduction</li>
                <li>Rotation</li>
                <li>Circumduction</li>
                <li>Pronation</li>
                <li>Supination</li>
              </ul>
            `,

            biochemistry: `
              <h2>Synovial Joint Biochemistry</h2>

              <p>
                Articular cartilage contains type II collagen and proteoglycans.
                Synovial fluid contains hyaluronic acid and lubricating proteins.
              </p>

              <p>
                Chondrocytes maintain the extracellular matrix of articular
                cartilage, while synovial cells contribute to the composition
                and maintenance of synovial fluid.
              </p>
            `
          }
        }
      ]
    },

    // ============================================================
    // LIGAMENTS
    // ============================================================

    {
      id: "ligaments",
      name: "Ligaments",

      notes: {
        anatomy: `
          <h2>Ligament Anatomy</h2>

          <p>
            Ligaments are bands of dense connective tissue that connect bone
            to bone. They are associated primarily with joints and contribute
            to mechanical stability.
          </p>

          <h3>Major Functions</h3>
          <ul>
            <li>Stabilize joints.</li>
            <li>Guide normal joint movement.</li>
            <li>Limit excessive movement.</li>
            <li>Contribute to proprioception.</li>
          </ul>
        `,

        physiology: `
          <h2>Ligament Physiology</h2>

          <p>
            Ligaments resist excessive tensile forces and help maintain
            alignment between articulating bones.
          </p>

          <h3>Proprioception</h3>
          <p>
            Mechanoreceptors within ligaments contribute sensory information
            about joint position and movement.
          </p>

          <h3>Mechanical Properties</h3>
          <p>
            Ligaments demonstrate viscoelastic behavior. Their response to
            loading depends on the magnitude, duration, and rate of applied
            force.
          </p>
        `,

        biochemistry: `
          <h2>Ligament Biochemistry</h2>

          <p>
            Ligaments consist predominantly of type I collagen arranged in
            organized bundles. Smaller amounts of type III collagen, elastin,
            proteoglycans, glycosaminoglycans, and other extracellular-matrix
            components contribute to their structure.
          </p>

          <p>
            Ligament healing involves inflammation, cellular proliferation,
            extracellular-matrix synthesis, collagen remodeling, and gradual
            restoration of mechanical strength.
          </p>
        `
      },

      parts: [

        {
          id: "acl",
          name: "Anterior Cruciate Ligament (ACL)",

          notes: {
            anatomy: `
              <h2>Anterior Cruciate Ligament (ACL)</h2>

              <p>
                The ACL is located within the knee joint and extends from the
                posterior aspect of the lateral femoral condyle toward the
                anterior intercondylar region of the tibia.
              </p>

              <p>
                It is one of the major stabilizing ligaments of the knee.
              </p>
            `,

            physiology: `
              <h2>ACL Physiology</h2>

              <p>
                The ACL limits anterior translation of the tibia relative to
                the femur and contributes to rotational stability of the knee.
              </p>
            `,

            biochemistry: `
              <h2>ACL Biochemistry</h2>

              <p>
                The ACL is composed predominantly of type I collagen organized
                into dense bundles capable of resisting tensile loading.
              </p>
            `
          }
        },

        {
          id: "pcl",
          name: "Posterior Cruciate Ligament (PCL)",

          notes: {
            anatomy: `
              <h2>Posterior Cruciate Ligament (PCL)</h2>

              <p>
                The PCL extends from the anterior region of the medial femoral
                condyle toward the posterior intercondylar area of the tibia.
              </p>
            `,

            physiology: `
              <h2>PCL Physiology</h2>

              <p>
                The PCL primarily prevents excessive posterior translation
                of the tibia relative to the femur and contributes to rotational
                stability of the knee.
              </p>
            `,

            biochemistry: `
              <h2>PCL Biochemistry</h2>

              <p>
                The PCL contains dense bundles of type I collagen organized
                to resist tensile forces.
              </p>
            `
          }
        },

        {
          id: "mcl",
          name: "Medial Collateral Ligament (MCL)",

          notes: {
            anatomy: `
              <h2>Medial Collateral Ligament (MCL)</h2>

              <p>
                The MCL is located on the medial side of the knee. It extends
                from the medial femoral region toward the medial tibia.
              </p>
            `,

            physiology: `
              <h2>MCL Physiology</h2>

              <p>
                The MCL provides resistance to valgus stress and contributes
                to medial stability of the knee.
              </p>
            `,

            biochemistry: `
              <h2>MCL Biochemistry</h2>

              <p>
                The MCL consists predominantly of type I collagen fibers
                organized to withstand tensile loading.
              </p>
            `
          }
        },

        {
          id: "lcl",
          name: "Lateral Collateral Ligament (LCL)",

          notes: {
            anatomy: `
              <h2>Lateral Collateral Ligament (LCL)</h2>

              <p>
                The LCL is located on the lateral side of the knee and extends
                from the lateral femoral epicondyle to the fibular head.
              </p>
            `,

            physiology: `
              <h2>LCL Physiology</h2>

              <p>
                The LCL provides resistance to varus stress and contributes
                to lateral stability of the knee.
              </p>
            `,

            biochemistry: `
              <h2>LCL Biochemistry</h2>

              <p>
                The LCL is composed predominantly of type I collagen organized
                into dense connective-tissue bundles.
              </p>
            `
          }
        },

        {
          id: "atfl",
          name: "Anterior Talofibular Ligament (ATFL)",

          notes: {
            anatomy: `
              <h2>Anterior Talofibular Ligament (ATFL)</h2>

              <p>
                The ATFL is one of the major lateral ligaments of the ankle.
                It connects the distal fibula with the talus.
              </p>
            `,

            physiology: `
              <h2>ATFL Physiology</h2>

              <p>
                The ATFL contributes to lateral ankle stability and helps
                resist excessive anterior displacement of the talus and
                inversion-related stress.
              </p>
            `,

            biochemistry: `
              <h2>ATFL Biochemistry</h2>

              <p>
                The ATFL is dense connective tissue composed predominantly
                of type I collagen.
              </p>
            `
          }
        },

        {
          id: "cfl",
          name: "Calcaneofibular Ligament (CFL)",

          notes: {
            anatomy: `
              <h2>Calcaneofibular Ligament (CFL)</h2>

              <p>
                The CFL extends from the lateral malleolus of the fibula
                to the calcaneus.
              </p>
            `,

            physiology: `
              <h2>CFL Physiology</h2>

              <p>
                The CFL contributes to lateral ankle stability and resists
                excessive inversion of the foot.
              </p>
            `,

            biochemistry: `
              <h2>CFL Biochemistry</h2>

              <p>
                The CFL consists primarily of densely organized type I
                collagen fibers.
              </p>
            `
          }
        },

        {
          id: "ptfl",
          name: "Posterior Talofibular Ligament (PTFL)",

          notes: {
            anatomy: `
              <h2>Posterior Talofibular Ligament (PTFL)</h2>

              <p>
                The PTFL is the posterior component of the lateral ligament
                complex of the ankle. It extends from the fibula toward the
                posterior aspect of the talus.
              </p>
            `,

            physiology: `
              <h2>PTFL Physiology</h2>

              <p>
                The PTFL contributes to stabilization of the ankle,
                particularly when the ankle is in dorsiflexion.
              </p>
            `,

            biochemistry: `
              <h2>PTFL Biochemistry</h2>

              <p>
                The PTFL consists predominantly of type I collagen organized
                into strong connective-tissue bundles.
              </p>
            `
          }
        }

      ]
    }
  ]
};