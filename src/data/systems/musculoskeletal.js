export const musculoskeletalSystem = {
  id: "musculoskeletal",
  name: "Musculoskeletal System",

  organs: [
    {
      id: "bones",
      name: "Bones",
      modelPath: "models/skeletal/bones/",
      modelFile: "bones.glb",

      notes: {
        anatomy: `
          <h2>Bone Anatomy</h2>

          <h3>Overview</h3>
          <p>
            Bones are rigid connective-tissue organs that form the skeletal framework of the body.
            The adult human skeleton normally contains approximately 206 named bones. Bones provide
            structural support, protect internal organs, act as levers for movement, store minerals,
            and contain bone marrow responsible for blood-cell formation.
          </p>

          <h3>Divisions of the Skeleton</h3>
          <ul>
            <li><strong>Axial skeleton:</strong> skull, vertebral column, ribs, sternum and associated structures.</li>
            <li><strong>Appendicular skeleton:</strong> pectoral girdles, pelvic girdle and bones of the upper and lower limbs.</li>
          </ul>

          <h3>Classification of Bones</h3>
          <ul>
            <li><strong>Long bones:</strong> femur, tibia, humerus and radius.</li>
            <li><strong>Short bones:</strong> carpal and tarsal bones.</li>
            <li><strong>Flat bones:</strong> sternum, ribs, scapula and many skull bones.</li>
            <li><strong>Irregular bones:</strong> vertebrae and several facial bones.</li>
            <li><strong>Sesamoid bones:</strong> bones developing within tendons, such as the patella.</li>
          </ul>

          <h3>Parts of a Long Bone</h3>
          <ul>
            <li><strong>Diaphysis:</strong> shaft of the bone.</li>
            <li><strong>Epiphyses:</strong> expanded ends of the bone.</li>
            <li><strong>Metaphysis:</strong> region between diaphysis and epiphysis.</li>
            <li><strong>Epiphyseal plate:</strong> growth plate responsible for longitudinal growth during childhood.</li>
            <li><strong>Medullary cavity:</strong> internal cavity containing bone marrow.</li>
            <li><strong>Periosteum:</strong> fibrous membrane covering the external bone surface except at articular surfaces.</li>
            <li><strong>Endosteum:</strong> membrane lining internal bone surfaces.</li>
          </ul>

          <h3>Compact and Cancellous Bone</h3>
          <p>
            Compact bone forms the dense outer portion of most bones. It is organized into structural
            units called osteons or Haversian systems. Cancellous bone, also called trabecular or
            spongy bone, contains interconnected trabeculae and spaces that frequently contain bone marrow.
          </p>

          <h3>Bone Cells</h3>
          <ul>
            <li><strong>Osteoblasts:</strong> synthesize new bone matrix.</li>
            <li><strong>Osteocytes:</strong> mature bone cells located within lacunae.</li>
            <li><strong>Osteoclasts:</strong> multinucleated cells responsible for bone resorption.</li>
            <li><strong>Osteoprogenitor cells:</strong> precursor cells capable of differentiating into osteoblasts.</li>
          </ul>

          <h3>Bone Marrow</h3>
          <ul>
            <li><strong>Red marrow:</strong> site of active hematopoiesis.</li>
            <li><strong>Yellow marrow:</strong> predominantly adipose tissue and serves as an energy store.</li>
          </ul>

          <h3>Blood Supply</h3>
          <p>
            Bone receives blood through nutrient arteries, periosteal vessels, metaphyseal vessels and
            epiphyseal vessels. The vascular supply is particularly important for growth, remodeling and
            fracture healing.
          </p>

          <h3>Innervation</h3>
          <p>
            The periosteum is richly innervated and is an important source of pain during bone injury.
            The internal bone tissue itself has comparatively limited sensory innervation.
          </p>
        `,

        physiology: `
          <h2>Bone Physiology</h2>

          <h3>Mechanical Support</h3>
          <p>
            Bones provide the structural framework that maintains body shape and supports soft tissues.
          </p>

          <h3>Protection</h3>
          <p>
            Bones protect vital organs. The skull protects the brain, the vertebral column protects the
            spinal cord, and the thoracic cage protects the heart and lungs.
          </p>

          <h3>Movement</h3>
          <p>
            Bones function as levers. Skeletal muscles generate force and transmit that force through
            tendons to bones, producing movement around joints.
          </p>

          <h3>Mineral Homeostasis</h3>
          <p>
            Bone serves as the largest reservoir of calcium and phosphate in the body. Bone remodeling
            allows minerals to be deposited into or released from the skeletal matrix according to
            physiological requirements.
          </p>

          <h3>Hematopoiesis</h3>
          <p>
            Red bone marrow contains hematopoietic stem cells that produce erythrocytes, leukocytes and
            platelets.
          </p>

          <h3>Bone Remodeling</h3>
          <p>
            Bone is continuously remodeled through coordinated osteoclastic resorption and osteoblastic
            formation. Remodeling allows bones to adapt to mechanical stress and maintain mineral balance.
          </p>

          <h3>Mechanotransduction</h3>
          <p>
            Osteocytes detect mechanical loading and contribute to signaling pathways that regulate bone
            formation and resorption. Mechanical loading generally promotes maintenance of skeletal strength.
          </p>

          <h3>Growth</h3>
          <p>
            Longitudinal bone growth occurs at the epiphyseal growth plates through endochondral ossification.
            Growth continues until the growth plates close after puberty.
          </p>
        `,

        biochemistry: `
          <h2>Bone Biochemistry</h2>

          <h3>Organic Matrix</h3>
          <p>
            Approximately one-third of the dry mass of bone is organic material. Type I collagen is the
            dominant structural protein and provides tensile strength.
          </p>

          <h3>Inorganic Matrix</h3>
          <p>
            The inorganic component consists predominantly of calcium phosphate crystals associated with
            hydroxyapatite. These minerals provide hardness and resistance to compression.
          </p>

          <h3>Collagen</h3>
          <p>
            Type I collagen is synthesized as procollagen and undergoes post-translational modification
            before becoming mature collagen fibers. Vitamin C is required for hydroxylation reactions
            involved in collagen synthesis.
          </p>

          <h3>Calcium and Phosphate</h3>
          <p>
            Calcium and phosphate are essential components of mineralized bone. Their concentrations are
            regulated through interactions involving bone, kidneys, intestine and endocrine hormones.
          </p>

          <h3>Important Hormonal Regulators</h3>
          <ul>
            <li><strong>Parathyroid hormone:</strong> increases serum calcium and promotes bone resorption indirectly.</li>
            <li><strong>Vitamin D:</strong> increases intestinal calcium and phosphate absorption and supports mineralization.</li>
            <li><strong>Calcitonin:</strong> inhibits osteoclast activity and can reduce bone resorption.</li>
            <li><strong>Growth hormone:</strong> promotes skeletal growth partly through IGF-1.</li>
            <li><strong>Sex hormones:</strong> contribute to growth and eventual epiphyseal closure and influence bone density.</li>
          </ul>
        `,

        pathology: `
          <h2>Bone Pathology</h2>

          <h3>Fractures</h3>
          <p>
            A fracture is a disruption of bone continuity. Fractures may be classified according to
            location, pattern, displacement, communication with the external environment and mechanism.
          </p>

          <ul>
            <li><strong>Closed fracture:</strong> skin remains intact.</li>
            <li><strong>Open fracture:</strong> fracture communicates with the external environment.</li>
            <li><strong>Transverse fracture:</strong> fracture line is approximately perpendicular to the bone axis.</li>
            <li><strong>Oblique fracture:</strong> diagonal fracture line.</li>
            <li><strong>Spiral fracture:</strong> associated with rotational forces.</li>
            <li><strong>Comminuted fracture:</strong> bone is broken into multiple fragments.</li>
            <li><strong>Greenstick fracture:</strong> incomplete fracture commonly occurring in children.</li>
          </ul>

          <h3>Fracture Healing</h3>
          <ol>
            <li>Hematoma formation.</li>
            <li>Inflammatory response.</li>
            <li>Formation of soft callus.</li>
            <li>Formation of hard bony callus.</li>
            <li>Remodeling of the newly formed bone.</li>
          </ol>

          <h3>Osteoporosis</h3>
          <p>
            Osteoporosis is characterized by reduced bone strength and increased fracture risk. It results
            from abnormalities in bone mass, microarchitecture or both.
          </p>

          <h3>Osteomalacia and Rickets</h3>
          <p>
            Defective mineralization of bone matrix in adults produces osteomalacia, while defective
            mineralization of the growing skeleton produces rickets. Vitamin D deficiency is an important cause.
          </p>

          <h3>Osteomyelitis</h3>
          <p>
            Osteomyelitis is infection of bone. Staphylococcus aureus is an important causative organism.
            Infection may occur through hematogenous spread, direct inoculation or extension from adjacent tissue.
          </p>

          <h3>Bone Tumors</h3>
          <ul>
            <li><strong>Osteosarcoma:</strong> malignant tumor producing osteoid.</li>
            <li><strong>Chondrosarcoma:</strong> malignant cartilage-producing tumor.</li>
            <li><strong>Ewing sarcoma:</strong> malignant small round cell tumor affecting bone, particularly in younger patients.</li>
            <li><strong>Metastases:</strong> common cause of malignant bone lesions in adults.</li>
          </ul>
        `,

        microbiology: `
          <h2>Bone Microbiology</h2>

          <h3>Osteomyelitis</h3>
          <p>
            Bone infection may be caused by bacteria, mycobacteria or fungi. Staphylococcus aureus is one
            of the most important bacterial causes.
          </p>

          <h3>Common Organisms</h3>
          <ul>
            <li><strong>Staphylococcus aureus:</strong> common cause of acute and chronic osteomyelitis.</li>
            <li><strong>Streptococci:</strong> may cause bone and joint infections.</li>
            <li><strong>Gram-negative bacilli:</strong> may occur particularly in certain healthcare-associated,
            traumatic or immunocompromised settings.</li>
            <li><strong>Salmonella species:</strong> particularly associated with osteomyelitis in individuals with sickle cell disease.</li>
            <li><strong>Mycobacterium tuberculosis:</strong> can cause chronic osteomyelitis and spinal tuberculosis.</li>
          </ul>

          <h3>Spinal Tuberculosis</h3>
          <p>
            Tuberculosis of the vertebral column, also called Pott disease, can cause vertebral destruction,
            deformity, paravertebral abscesses and neurological compromise.
          </p>
        `,

        immunology: `
          <h2>Bone Immunology</h2>

          <p>
            Bone and the immune system interact through signaling pathways involving osteoblasts,
            osteoclasts, lymphocytes, cytokines and other mediators. This field is often referred to
            as osteoimmunology.
          </p>

          <h3>Inflammation</h3>
          <p>
            Cytokines including TNF, IL-1 and IL-6 can increase osteoclast activity and promote bone
            resorption during chronic inflammatory disease.
          </p>

          <h3>Immune Cells and Bone</h3>
          <p>
            Immune cells influence osteoclast differentiation through signaling pathways involving
            RANK, RANKL and osteoprotegerin.
          </p>
        `,

        pharmacology: `
          <h2>Bone Pharmacology</h2>

          <h3>Bisphosphonates</h3>
          <p>
            Bisphosphonates inhibit osteoclast-mediated bone resorption and are widely used in the treatment
            of osteoporosis and selected disorders of excessive bone turnover.
          </p>

          <h3>Denosumab</h3>
          <p>
            Denosumab is a monoclonal antibody against RANKL and reduces osteoclast formation and activity.
          </p>

          <h3>Calcium and Vitamin D</h3>
          <p>
            Calcium and vitamin D supplementation may be used to correct deficiency and support skeletal
            health when clinically indicated.
          </p>

          <h3>Teriparatide</h3>
          <p>
            Teriparatide is a recombinant form of parathyroid hormone used in selected patients with severe
            osteoporosis. Intermittent administration stimulates bone formation.
          </p>
        `,

        clinical: `
          <h2>Clinical Bone Correlations</h2>

          <h3>Fracture</h3>
          <p>
            Fractures may cause pain, swelling, deformity, loss of function and neurovascular compromise.
          </p>

          <h3>Compartment Syndrome</h3>
          <p>
            Increased pressure within a closed fascial compartment can compromise tissue perfusion and
            cause muscle and nerve ischemia. It is an orthopedic emergency.
          </p>

          <h3>Osteoporosis</h3>
          <p>
            Common fracture sites include the vertebral bodies, hip and distal radius.
          </p>

          <h3>Clinical Examination</h3>
          <p>
            Assessment of the musculoskeletal system includes inspection, palpation, range of motion,
            muscle strength, gait assessment and evaluation for deformity, swelling and tenderness.
          </p>
        `,

        embryology: `
          <h2>Bone Embryology</h2>

          <h3>Developmental Origins</h3>
          <p>
            Most skeletal structures develop from mesoderm-derived tissues. Craniofacial structures also
            receive major contributions from neural crest cells.
          </p>

          <h3>Intramembranous Ossification</h3>
          <p>
            Intramembranous ossification forms bone directly from mesenchymal tissue. It contributes to
            formation of many flat bones of the skull and parts of the clavicle.
          </p>

          <h3>Endochondral Ossification</h3>
          <p>
            Endochondral ossification replaces a cartilage model with bone and is the principal mechanism
            responsible for formation and longitudinal growth of long bones.
          </p>
        `,

        histology: `
          <h2>Bone Histology</h2>

          <h3>Compact Bone</h3>
          <p>
            Compact bone is organized into osteons containing concentric lamellae around a central
            Haversian canal containing blood vessels and nerves.
          </p>

          <h3>Trabecular Bone</h3>
          <p>
            Trabecular bone consists of branching plates and rods called trabeculae. The spaces between
            trabeculae contain bone marrow and blood vessels.
          </p>

          <h3>Bone Matrix</h3>
          <p>
            Bone matrix consists of an organic component, mainly type I collagen, and an inorganic
            mineral component containing calcium phosphate.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Bone Facts</h2>
          <ul>
            <li>The adult skeleton normally contains approximately 206 bones.</li>
            <li>Bone provides support, protection, movement, mineral storage and hematopoietic support.</li>
            <li>Osteoblasts form bone.</li>
            <li>Osteoclasts resorb bone.</li>
            <li>Osteocytes are mature bone cells.</li>
            <li>Type I collagen is the major organic component of bone matrix.</li>
            <li>Hydroxyapatite provides much of the hardness of bone.</li>
            <li>Red marrow is responsible for hematopoiesis.</li>
            <li>Endochondral ossification forms most long bones.</li>
            <li>Intramembranous ossification forms many flat bones.</li>
            <li>Vitamin D is important for calcium and phosphate absorption and skeletal mineralization.</li>
            <li>Osteoporosis increases fracture risk because of reduced bone strength.</li>
            <li>Staphylococcus aureus is an important cause of osteomyelitis.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "skull",
          name: "Skull",
          modelPath: "models/skeletal/skull/",
          modelFile: "skull.glb",

          notes: {
            anatomy: `
              <h2>Skull Anatomy</h2>
              <p>
                The skull forms the bony framework of the head. It protects the brain, supports the face,
                houses sensory organs and provides attachment sites for muscles.
              </p>

              <h3>Major Divisions</h3>
              <ul>
                <li><strong>Neurocranium:</strong> surrounds and protects the brain.</li>
                <li><strong>Viscerocranium:</strong> forms the facial skeleton.</li>
              </ul>

              <h3>Important Bones</h3>
              <ul>
                <li>Frontal bone</li>
                <li>Parietal bones</li>
                <li>Temporal bones</li>
                <li>Occipital bone</li>
                <li>Sphenoid bone</li>
                <li>Ethmoid bone</li>
                <li>Maxillae</li>
                <li>Mandible</li>
                <li>Zygomatic bones</li>
                <li>Nasal bones</li>
              </ul>

              <h3>Foramen Magnum</h3>
              <p>
                The foramen magnum is the large opening in the occipital bone through which the medulla
                transitions into the spinal cord.
              </p>
            `,

            physiology: `
              <h2>Skull Physiology</h2>
              <p>
                The skull protects the brain and houses the organs responsible for vision, hearing,
                equilibrium and olfaction. It also provides attachment points for muscles involved in
                facial expression, mastication and head movement.
              </p>
            `,

            clinical: `
              <h2>Clinical Skull Correlations</h2>
              <ul>
                <li>Skull fractures may cause intracranial hemorrhage.</li>
                <li>Basilar skull fractures may produce CSF leakage.</li>
                <li>Temporal bone fractures can damage structures involved in hearing and balance.</li>
                <li>Mandibular fractures may impair mastication and occlusion.</li>
              </ul>
            `
          }
        },

        {
          id: "vertebral-column",
          name: "Vertebral Column",
          modelPath: "models/skeletal/vertebral-column/",
          modelFile: "vertebral_column.glb",

          notes: {
            anatomy: `
              <h2>Vertebral Column Anatomy</h2>

              <p>
                The vertebral column forms the central axis of the skeleton. It supports the trunk,
                protects the spinal cord and permits controlled movement of the neck and trunk.
              </p>

              <h3>Regions</h3>
              <ul>
                <li><strong>Cervical:</strong> 7 vertebrae.</li>
                <li><strong>Thoracic:</strong> 12 vertebrae.</li>
                <li><strong>Lumbar:</strong> 5 vertebrae.</li>
                <li><strong>Sacral:</strong> 5 fused vertebrae forming the sacrum.</li>
                <li><strong>Coccygeal:</strong> usually 3–5 fused vertebrae forming the coccyx.</li>
              </ul>

              <h3>Typical Vertebra</h3>
              <ul>
                <li>Vertebral body</li>
                <li>Vertebral arch</li>
                <li>Pedicles</li>
                <li>Laminae</li>
                <li>Spinous process</li>
                <li>Transverse processes</li>
                <li>Superior and inferior articular processes</li>
                <li>Vertebral foramen</li>
              </ul>

              <h3>Physiological Curvatures</h3>
              <p>
                The vertebral column normally has cervical and lumbar lordosis and thoracic and sacral
                kyphosis.
              </p>
            `,

            physiology: `
              <h2>Vertebral Column Physiology</h2>
              <p>
                The vertebral column supports body weight, permits movement and protects the spinal cord.
                Intervertebral discs distribute loads and provide flexibility between adjacent vertebrae.
              </p>
            `,

            pathology: `
              <h2>Vertebral Column Pathology</h2>
              <ul>
                <li><strong>Scoliosis:</strong> abnormal lateral curvature of the spine.</li>
                <li><strong>Kyphosis:</strong> excessive posterior curvature.</li>
                <li><strong>Lordosis:</strong> excessive anterior curvature.</li>
                <li><strong>Disc herniation:</strong> displacement of intervertebral disc material that may compress nerve roots.</li>
                <li><strong>Spinal stenosis:</strong> narrowing of the spinal canal or neural foramina.</li>
                <li><strong>Vertebral fracture:</strong> may occur following trauma or osteoporosis.</li>
              </ul>
            `,

            clinical: `
              <h2>Clinical Vertebral Correlations</h2>
              <p>
                Compression of spinal nerve roots can produce radicular pain, sensory disturbances,
                weakness and altered reflexes. Severe spinal canal compression may compromise the spinal
                cord or cauda equina.
              </p>
            `
          }
        },

        {
          id: "upper-limb-bones",
          name: "Upper Limb Bones",
          modelPath: "models/skeletal/upper-limb/",
          modelFile: "upper_limb_bones.glb",

          notes: {
            anatomy: `
              <h2>Upper Limb Skeleton</h2>

              <p>
                The upper limb is specialized for mobility, manipulation and precise motor control.
              </p>

              <h3>Pectoral Girdle</h3>
              <ul>
                <li>Clavicle</li>
                <li>Scapula</li>
              </ul>

              <h3>Arm</h3>
              <p>
                The humerus is the principal bone of the arm.
              </p>

              <h3>Forearm</h3>
              <ul>
                <li>Radius</li>
                <li>Ulna</li>
              </ul>

              <h3>Hand</h3>
              <ul>
                <li>8 carpal bones</li>
                <li>5 metacarpals</li>
                <li>14 phalanges</li>
              </ul>
            `,

            physiology: `
              <h2>Upper Limb Function</h2>
              <p>
                The upper limb provides a wide range of movement required for reaching, grasping,
                manipulation, communication and skilled motor activity.
              </p>
            `,

            clinical: `
              <h2>Clinical Correlations</h2>
              <ul>
                <li>Clavicular fractures are common after falls onto the shoulder.</li>
                <li>Humeral shaft fractures may injure the radial nerve.</li>
                <li>Supracondylar humeral fractures can threaten the brachial artery and median nerve.</li>
                <li>Scaphoid fractures may compromise blood supply to the proximal fragment.</li>
              </ul>
            `
          }
        },

        {
          id: "lower-limb-bones",
          name: "Lower Limb Bones",
          modelPath: "models/skeletal/lower-limb/",
          modelFile: "lower_limb_bones.glb",

          notes: {
            anatomy: `
              <h2>Lower Limb Skeleton</h2>

              <p>
                The lower limb is specialized for weight bearing, locomotion, balance and propulsion.
              </p>

              <h3>Pelvic Girdle</h3>
              <p>
                Each hip bone consists developmentally of the ilium, ischium and pubis.
              </p>

              <h3>Thigh</h3>
              <p>
                The femur is the longest and strongest bone in the human body.
              </p>

              <h3>Leg</h3>
              <ul>
                <li>Tibia</li>
                <li>Fibula</li>
              </ul>

              <h3>Foot</h3>
              <ul>
                <li>7 tarsal bones</li>
                <li>5 metatarsals</li>
                <li>14 phalanges</li>
              </ul>

              <h3>Patella</h3>
              <p>
                The patella is the largest sesamoid bone and is embedded within the quadriceps tendon.
              </p>
            `,

            physiology: `
              <h2>Lower Limb Function</h2>
              <p>
                The lower limb supports body weight and generates the forces required for standing,
                walking, running and jumping.
              </p>
            `,

            clinical: `
              <h2>Clinical Correlations</h2>
              <ul>
                <li>Femoral neck fractures may compromise blood supply to the femoral head.</li>
                <li>Tibial fractures are common because much of the tibia is subcutaneous.</li>
                <li>Meniscal and ligament injuries are common around the knee.</li>
                <li>Achilles tendon injuries impair plantarflexion and push-off.</li>
              </ul>
            `
          }
        }
      ]
    },

    {
      id: "joints",
      name: "Joints",
      modelPath: "models/skeletal/joints/",
      modelFile: "joints.glb",

      notes: {
        anatomy: `
          <h2>Joint Anatomy</h2>

          <p>
            Joints are anatomical connections between two or more bones or between bone and cartilage.
            They provide varying degrees of stability and movement.
          </p>

          <h3>Structural Classification</h3>
          <ul>
            <li><strong>Fibrous joints:</strong> bones connected by dense connective tissue.</li>
            <li><strong>Cartilaginous joints:</strong> bones connected by cartilage.</li>
            <li><strong>Synovial joints:</strong> joints containing a fluid-filled joint cavity.</li>
          </ul>

          <h3>Synovial Joint Components</h3>
          <ul>
            <li>Articular cartilage</li>
            <li>Joint cavity</li>
            <li>Synovial membrane</li>
            <li>Fibrous capsule</li>
            <li>Synovial fluid</li>
            <li>Ligaments</li>
            <li>Associated tendons and bursae</li>
          </ul>

          <h3>Types of Synovial Joints</h3>
          <ul>
            <li>Plane</li>
            <li>Hinge</li>
            <li>Pivot</li>
            <li>Condyloid</li>
            <li>Saddle</li>
            <li>Ball-and-socket</li>
          </ul>
        `,

        physiology: `
          <h2>Joint Physiology</h2>

          <p>
            Joints permit movement while maintaining mechanical stability. Synovial fluid reduces friction
            and contributes to nutrition of articular cartilage.
          </p>

          <h3>Joint Movement</h3>
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

        pathology: `
          <h2>Joint Pathology</h2>

          <h3>Osteoarthritis</h3>
          <p>
            Osteoarthritis is characterized by progressive degeneration of articular cartilage and
            associated changes in subchondral bone.
          </p>

          <h3>Rheumatoid Arthritis</h3>
          <p>
            Rheumatoid arthritis is a systemic autoimmune inflammatory disease that primarily affects
            synovial joints and can cause progressive joint destruction.
          </p>

          <h3>Gout</h3>
          <p>
            Gout results from deposition of monosodium urate crystals in joints and surrounding tissues.
          </p>

          <h3>Septic Arthritis</h3>
          <p>
            Septic arthritis is infection of a joint and can rapidly destroy articular cartilage.
            Staphylococcus aureus is an important cause.
          </p>

          <h3>Dislocation</h3>
          <p>
            A dislocation occurs when the articular surfaces of a joint lose their normal relationship.
          </p>

          <h3>Sprain</h3>
          <p>
            A sprain is an injury to a ligament, ranging from microscopic damage to complete rupture.
          </p>
        `,

        clinical: `
          <h2>Clinical Joint Examination</h2>

          <ul>
            <li>Inspection for swelling and deformity.</li>
            <li>Palpation for tenderness and warmth.</li>
            <li>Assessment of active and passive range of motion.</li>
            <li>Assessment of stability.</li>
            <li>Evaluation of gait when lower-limb joints are involved.</li>
          </ul>
        `,

        keyFacts: `
          <h2>High-Yield Joint Facts</h2>
          <ul>
            <li>Synovial joints are the most freely movable joints.</li>
            <li>Articular cartilage reduces friction and distributes load.</li>
            <li>Synovial fluid lubricates and nourishes articular cartilage.</li>
            <li>Ligaments primarily stabilize joints.</li>
            <li>Osteoarthritis is primarily a degenerative joint disorder.</li>
            <li>Rheumatoid arthritis is an autoimmune inflammatory disease.</li>
            <li>Gout is caused by monosodium urate crystal deposition.</li>
          </ul>
        `
      }
    },

    {
      id: "skeletal-muscles",
      name: "Skeletal Muscles",
      modelPath: "models/skeletal/muscles/",
      modelFile: "muscle.glb",

      notes: {
        anatomy: `
          <h2>Skeletal Muscle Anatomy</h2>

          <h3>Overview</h3>
          <p>
            Skeletal muscle is striated voluntary muscle attached primarily to the skeleton through
            tendons or aponeuroses. It generates force for movement, posture, joint stabilization and
            heat production.
          </p>

          <h3>Organization</h3>
          <ol>
            <li>Whole muscle</li>
            <li>Muscle fascicles</li>
            <li>Muscle fibers</li>
            <li>Myofibrils</li>
            <li>Sarcomeres</li>
            <li>Myofilaments</li>
          </ol>

          <h3>Connective Tissue Coverings</h3>
          <ul>
            <li><strong>Epimysium:</strong> surrounds the entire muscle.</li>
            <li><strong>Perimysium:</strong> surrounds muscle fascicles.</li>
            <li><strong>Endomysium:</strong> surrounds individual muscle fibers.</li>
          </ul>

          <h3>Sarcomere</h3>
          <p>
            The sarcomere is the functional contractile unit of skeletal muscle. It contains thick
            myosin filaments and thin actin filaments arranged in an organized pattern.
          </p>

          <h3>Major Muscle Groups</h3>
          <ul>
            <li>Facial muscles</li>
            <li>Muscles of mastication</li>
            <li>Neck muscles</li>
            <li>Thoracic muscles</li>
            <li>Abdominal muscles</li>
            <li>Back muscles</li>
            <li>Upper limb muscles</li>
            <li>Lower limb muscles</li>
          </ul>
        `,

        physiology: `
          <h2>Skeletal Muscle Physiology</h2>

          <h3>Neuromuscular Junction</h3>
          <p>
            Motor neurons communicate with skeletal muscle fibers at specialized neuromuscular junctions.
            Acetylcholine released from the motor nerve terminal binds nicotinic acetylcholine receptors
            on the muscle membrane.
          </p>

          <h3>Excitation-Contraction Coupling</h3>
          <ol>
            <li>Action potential arrives at the motor nerve terminal.</li>
            <li>Acetylcholine is released.</li>
            <li>Acetylcholine activates receptors on the muscle fiber.</li>
            <li>An action potential spreads along the sarcolemma.</li>
            <li>The action potential enters the T-tubules.</li>
            <li>Sarcoplasmic reticulum releases calcium.</li>
            <li>Calcium binds troponin C.</li>
            <li>Tropomyosin moves away from actin's binding sites.</li>
            <li>Myosin interacts with actin.</li>
            <li>ATP-dependent cross-bridge cycling produces contraction.</li>
          </ol>

          <h3>Sliding Filament Theory</h3>
          <p>
            Muscle contraction occurs because actin filaments slide relative to myosin filaments.
            The individual filaments do not substantially shorten; instead, sarcomere length decreases.
          </p>

          <h3>Muscle Tone</h3>
          <p>
            Muscle tone refers to the baseline level of muscle activity that contributes to posture and
            joint stability.
          </p>

          <h3>Motor Units</h3>
          <p>
            A motor unit consists of one motor neuron and all the skeletal muscle fibers it innervates.
            Small motor units permit fine movements, while large motor units generate greater force.
          </p>

          <h3>Types of Contraction</h3>
          <ul>
            <li><strong>Isometric:</strong> tension develops without appreciable change in muscle length.</li>
            <li><strong>Concentric:</strong> muscle shortens while producing force.</li>
            <li><strong>Eccentric:</strong> muscle lengthens while producing force.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Skeletal Muscle Biochemistry</h2>

          <h3>ATP</h3>
          <p>
            ATP is required for cross-bridge cycling, calcium reuptake and maintenance of cellular
            ion gradients.
          </p>

          <h3>ATP Sources</h3>
          <ol>
            <li>Stored ATP</li>
            <li>Phosphocreatine</li>
            <li>Anaerobic glycolysis</li>
            <li>Oxidative phosphorylation</li>
          </ol>

          <h3>Creatine Phosphate</h3>
          <p>
            Phosphocreatine provides a rapidly available phosphate group for regeneration of ATP during
            short periods of intense muscular activity.
          </p>

          <h3>Oxidative Metabolism</h3>
          <p>
            Aerobic skeletal muscle uses carbohydrates and fatty acids as major substrates for ATP
            production. Mitochondrial oxidative phosphorylation becomes particularly important during
            prolonged activity.
          </p>

          <h3>Myoglobin</h3>
          <p>
            Myoglobin is an oxygen-binding protein within muscle fibers that facilitates intracellular
            oxygen storage and transport.
          </p>

          <h3>Lactate</h3>
          <p>
            During high-intensity activity when glycolytic flux exceeds oxidative capacity, pyruvate
            can be converted to lactate. Lactate can subsequently be transported and metabolized by
            other tissues.
          </p>
        `,

        pathology: `
          <h2>Skeletal Muscle Pathology</h2>

          <h3>Muscle Strain</h3>
          <p>
            A muscle strain involves overstretching or tearing of muscle fibers or their associated
            musculotendinous structures.
          </p>

          <h3>Rhabdomyolysis</h3>
          <p>
            Rhabdomyolysis is breakdown of skeletal muscle with release of intracellular components,
            including creatine kinase and myoglobin, into the circulation. Severe cases may cause acute
            kidney injury and electrolyte abnormalities.
          </p>

          <h3>Muscular Dystrophies</h3>
          <p>
            Muscular dystrophies are inherited disorders characterized by progressive muscle degeneration
            and weakness. Duchenne muscular dystrophy is associated with dystrophin deficiency.
          </p>

          <h3>Myasthenia Gravis</h3>
          <p>
            Myasthenia gravis is an autoimmune disorder affecting neuromuscular transmission, commonly
            involving antibodies against postsynaptic acetylcholine receptors or related proteins.
          </p>

          <h3>Inflammatory Myopathies</h3>
          <p>
            Disorders such as polymyositis and dermatomyositis cause inflammatory muscle injury and
            predominantly proximal muscle weakness.
          </p>

          <h3>Compartment Syndrome</h3>
          <p>
            Increased pressure within a fascial compartment can reduce muscle perfusion and cause
            ischemic necrosis if not treated promptly.
          </p>
        `,

        microbiology: `
          <h2>Skeletal Muscle Microbiology</h2>

          <h3>Infectious Myositis</h3>
          <p>
            Skeletal muscle may be affected by bacterial, viral, parasitic and fungal infections.
          </p>

          <ul>
            <li><strong>Staphylococcus aureus:</strong> can cause pyomyositis and muscle abscesses.</li>
            <li><strong>Streptococcus species:</strong> may cause severe soft-tissue infections.</li>
            <li><strong>Clostridium species:</strong> can cause myonecrosis and gas gangrene.</li>
            <li><strong>Influenza viruses:</strong> may occasionally cause viral myositis.</li>
          </ul>

          <h3>Tetanus</h3>
          <p>
            Clostridium tetani produces tetanospasmin, a neurotoxin that interferes with inhibitory
            neurotransmission and causes muscle rigidity and spasms.
          </p>
        `,

        parasitology: `
          <h2>Skeletal Muscle Parasitology</h2>

          <h3>Trichinellosis</h3>
          <p>
            Trichinella species can infect skeletal muscle after ingestion of undercooked meat containing
            encysted larvae. Clinical manifestations may include fever, myalgia and periorbital edema.
          </p>

          <h3>Cysticercosis</h3>
          <p>
            Taenia solium larvae may lodge in skeletal muscle and form cystic lesions. Muscular
            cysticercosis can be asymptomatic or produce localized pain and swelling.
          </p>
        `,

        immunology: `
          <h2>Skeletal Muscle Immunology</h2>

          <p>
            Skeletal muscle interacts with the immune system during injury, repair and infection.
            Inflammatory cells participate in removal of damaged tissue and activation of regenerative
            pathways.
          </p>

          <h3>Muscle Injury</h3>
          <p>
            Following muscle injury, inflammatory cells remove damaged tissue while satellite cells
            contribute to regeneration.
          </p>

          <h3>Autoimmune Muscle Disease</h3>
          <p>
            Autoimmune mechanisms can produce inflammatory myopathies and disorders of neuromuscular
            transmission such as myasthenia gravis.
          </p>
        `,

        pharmacology: `
          <h2>Skeletal Muscle Pharmacology</h2>

          <h3>Neuromuscular Blocking Drugs</h3>
          <ul>
            <li><strong>Succinylcholine:</strong> depolarizing neuromuscular blocker.</li>
            <li><strong>Rocuronium:</strong> non-depolarizing neuromuscular blocker.</li>
            <li><strong>Vecuronium:</strong> non-depolarizing neuromuscular blocker.</li>
          </ul>

          <h3>Muscle Relaxants</h3>
          <p>
            Centrally acting muscle relaxants are used in selected conditions involving muscle spasm
            or increased muscle tone.
          </p>

          <h3>Anticholinesterases</h3>
          <p>
            Drugs such as pyridostigmine increase acetylcholine availability at the neuromuscular
            junction and are important in the treatment of myasthenia gravis.
          </p>

          <h3>Botulinum Toxin</h3>
          <p>
            Botulinum toxin inhibits acetylcholine release from presynaptic nerve terminals and produces
            temporary reduction of muscle activity.
          </p>
        `,

        clinical: `
          <h2>Clinical Muscle Correlations</h2>

          <h3>Muscle Weakness</h3>
          <p>
            Muscle weakness may result from disorders of the central nervous system, peripheral nerves,
            neuromuscular junction or muscle itself.
          </p>

          <h3>Upper Motor Neuron Disease</h3>
          <p>
            Lesions of descending motor pathways may cause increased tone, hyperreflexia and weakness.
          </p>

          <h3>Lower Motor Neuron Disease</h3>
          <p>
            Lesions affecting motor neurons or peripheral motor nerves may cause weakness, hypotonia,
            hyporeflexia, fasciculations and muscle wasting.
          </p>

          <h3>Myopathy</h3>
          <p>
            Primary muscle disorders commonly produce proximal weakness, although the pattern varies
            according to the underlying disease.
          </p>

          <h3>Neuromuscular Junction Disease</h3>
          <p>
            Disorders of neuromuscular transmission commonly produce fatigable weakness.
          </p>
        `,

        embryology: `
          <h2>Skeletal Muscle Embryology</h2>

          <p>
            Most skeletal muscle develops from mesoderm. Paraxial mesoderm forms somites, which
            differentiate into structures contributing to the axial musculature and body wall.
          </p>

          <h3>Myogenesis</h3>
          <p>
            Muscle development involves differentiation of precursor cells into myoblasts. Myoblasts
            fuse to form multinucleated muscle fibers, which subsequently mature and organize their
            contractile apparatus.
          </p>

          <h3>Satellite Cells</h3>
          <p>
            Satellite cells are muscle stem/progenitor cells that remain associated with skeletal
            muscle fibers and contribute to repair and regeneration.
          </p>
        `,

        histology: `
          <h2>Skeletal Muscle Histology</h2>

          <h3>Muscle Fiber</h3>
          <p>
            Skeletal muscle fibers are long, cylindrical, multinucleated cells with nuclei located
            predominantly at the periphery.
          </p>

          <h3>Striations</h3>
          <p>
            Skeletal muscle has a characteristic striated appearance caused by the organized arrangement
            of actin and myosin filaments within sarcomeres.
          </p>

          <h3>Sarcomere</h3>
          <p>
            The sarcomere extends between two Z discs and contains the A band, I band and central
            H zone associated with the arrangement of thick and thin filaments.
          </p>

          <h3>Muscle Fiber Types</h3>
          <ul>
            <li><strong>Type I:</strong> slow oxidative fibers with high endurance.</li>
            <li><strong>Type II:</strong> faster fibers with greater capacity for rapid force generation.</li>
          </ul>
        `,

        keyFacts: `
          <h2>High-Yield Skeletal Muscle Facts</h2>
          <ul>
            <li>Skeletal muscle is striated and generally under voluntary control.</li>
            <li>The sarcomere is the basic contractile unit.</li>
            <li>Actin forms the principal thin filament.</li>
            <li>Myosin forms the principal thick filament.</li>
            <li>Calcium binds troponin C during contraction.</li>
            <li>ATP is required for cross-bridge cycling and calcium reuptake.</li>
            <li>Acetylcholine is the neurotransmitter at the neuromuscular junction.</li>
            <li>Creatine phosphate provides a rapid mechanism for ATP regeneration.</li>
            <li>Myoglobin binds oxygen within muscle.</li>
            <li>Rhabdomyolysis can cause acute kidney injury.</li>
            <li>Duchenne muscular dystrophy is associated with dystrophin deficiency.</li>
            <li>Myasthenia gravis commonly involves autoimmune impairment of neuromuscular transmission.</li>
            <li>Clostridium tetani causes tetanus through production of tetanospasmin.</li>
          </ul>
        `
      }
    },

    {
      id: "tendons",
      name: "Tendons",
      modelPath: "models/skeletal/tendons/",
      modelFile: "tendons.glb",

      notes: {
        anatomy: `
          <h2>Tendon Anatomy</h2>
          <p>
            Tendons are dense connective-tissue structures that connect skeletal muscle to bone.
            They transmit muscle-generated force to the skeleton and contribute to joint stability.
          </p>

          <h3>Composition</h3>
          <p>
            Tendons consist predominantly of densely packed type I collagen fibers arranged in parallel
            bundles. Tenocytes are the principal resident cells.
          </p>
        `,

        physiology: `
          <h2>Tendon Physiology</h2>
          <p>
            Tendons transmit tensile forces generated by skeletal muscles to bones. Their elastic
            properties allow temporary storage and release of mechanical energy during locomotion.
          </p>
        `,

        pathology: `
          <h2>Tendon Pathology</h2>
          <ul>
            <li><strong>Tendinopathy:</strong> chronic tendon pain and structural degeneration.</li>
            <li><strong>Tendon rupture:</strong> partial or complete disruption of tendon fibers.</li>
            <li><strong>Tenosynovitis:</strong> inflammation involving a tendon sheath.</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Tendon Correlations</h2>
          <p>
            Achilles tendon rupture can cause sudden posterior ankle pain and difficulty with
            plantarflexion. Tendon injuries are assessed using inspection, palpation and functional
            testing.
          </p>
        `,

        histology: `
          <h2>Tendon Histology</h2>
          <p>
            Tendons contain parallel collagen bundles with elongated tenocyte nuclei arranged between
            collagen fibers. The highly organized collagen arrangement provides high tensile strength.
          </p>
        `
      }
    },

    {
      id: "ligaments",
      name: "Ligaments",
      modelPath: "models/skeletal/ligaments/",
      modelFile: "ligaments.glb",

      notes: {
        anatomy: `
          <h2>Ligament Anatomy</h2>
          <p>
            Ligaments are bands of dense connective tissue that connect bone to bone. They are important
            stabilizers of joints and help guide normal joint movement.
          </p>
        `,

        physiology: `
          <h2>Ligament Physiology</h2>
          <p>
            Ligaments resist excessive joint movement and contribute to mechanical stability.
            Mechanoreceptors within ligaments also provide proprioceptive information.
          </p>
        `,

        pathology: `
          <h2>Ligament Pathology</h2>
          <h3>Sprain</h3>
          <p>
            A sprain is an injury to a ligament caused by excessive stretching or tearing.
          </p>

          <ul>
            <li><strong>Grade I:</strong> mild stretching with microscopic injury.</li>
            <li><strong>Grade II:</strong> partial ligament tear.</li>
            <li><strong>Grade III:</strong> complete ligament rupture.</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Ligament Correlations</h2>
          <p>
            Ligament injuries can produce pain, swelling, joint instability and impaired function.
            The knee, ankle and shoulder are common sites of clinically important ligament injuries.
          </p>
        `,

        histology: `
          <h2>Ligament Histology</h2>
          <p>
            Ligaments consist primarily of dense connective tissue containing type I collagen,
            fibroblasts and varying amounts of elastic fibers depending on the specific ligament.
          </p>
        `
      }
    },

    {
      id: "cartilage",
      name: "Cartilage",
      modelPath: "models/skeletal/cartilage/",
      modelFile: "cartilage.glb",

      notes: {
        anatomy: `
          <h2>Cartilage Anatomy</h2>

          <p>
            Cartilage is a specialized connective tissue containing cells called chondrocytes embedded
            within an extracellular matrix. It provides structural support, flexibility and low-friction
            surfaces at joints.
          </p>

          <h3>Types of Cartilage</h3>
          <ul>
            <li><strong>Hyaline cartilage:</strong> articular cartilage, tracheal cartilage, costal cartilage and growth plates.</li>
            <li><strong>Elastic cartilage:</strong> external ear and epiglottis.</li>
            <li><strong>Fibrocartilage:</strong> intervertebral discs, pubic symphysis and menisci.</li>
          </ul>
        `,

        physiology: `
          <h2>Cartilage Physiology</h2>
          <p>
            Articular cartilage distributes mechanical loads and provides a smooth low-friction surface
            for joint movement.
          </p>

          <p>
            Because mature articular cartilage is avascular, its ability to repair following significant
            injury is limited.
          </p>
        `,

        biochemistry: `
          <h2>Cartilage Biochemistry</h2>
          <p>
            Cartilage matrix contains type II collagen and proteoglycans. Proteoglycans attract water,
            contributing to cartilage resistance to compression.
          </p>
        `,

        pathology: `
          <h2>Cartilage Pathology</h2>
          <ul>
            <li>Articular cartilage degeneration occurs in osteoarthritis.</li>
            <li>Meniscal tears commonly occur following twisting injuries of the knee.</li>
            <li>Cartilage injury can cause pain, stiffness and impaired joint function.</li>
          </ul>
        `,

        histology: `
          <h2>Cartilage Histology</h2>
          <p>
            Chondrocytes occupy spaces called lacunae within an extracellular matrix rich in collagen
            and proteoglycans. Most cartilage lacks direct blood vessels.
          </p>
        `
      }
    }
  ]
};