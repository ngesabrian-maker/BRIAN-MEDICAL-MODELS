export const clinicalMethodsMusculoskeletal = {

  id: "clinicalMethodsMusculoskeletal",

  name: "🩺 Clinical Methods",

  modelPath: "models/musculoskeletal/",

  modelFile: "clinical_methods.glb",

  parts: [

    // ============================================================
    // 1. INTRODUCTION
    // ============================================================

    {
      id: "msk-clinical-overview",
      name: "Introduction to Musculoskeletal Assessment",

      notes: {
        anatomy: `

          <h2>Musculoskeletal Clinical Assessment</h2>

          <p>
            Musculoskeletal assessment is a systematic process of obtaining a
            history and performing physical examination of bones, joints,
            muscles, tendons, ligaments, peripheral nerves and related soft
            tissues. The objective is to identify the anatomical structure
            involved, determine the nature of the pathology, assess severity
            and functional impairment, and establish an appropriate differential
            diagnosis.
          </p>

          <h3>Major Components</h3>

          <ol>
            <li>History</li>
            <li>General examination</li>
            <li>Gait and functional assessment</li>
            <li>Regional musculoskeletal examination</li>
            <li>Joint examination</li>
            <li>Muscle examination</li>
            <li>Neurological assessment where relevant</li>
            <li>Neurovascular assessment</li>
            <li>Special tests</li>
            <li>Functional assessment</li>
            <li>Laboratory investigations</li>
            <li>Imaging</li>
            <li>Definitive diagnostic confirmation</li>
          </ol>

          <h3>General Examination Sequence</h3>

          <p>
            A regional musculoskeletal examination generally follows:
          </p>

          <p>
            <strong>
              Look → Feel → Move → Function → Special tests → Neurovascular
              assessment → Compare with opposite side → Investigate
            </strong>
          </p>

          <h3>Important Principle</h3>

          <p>
            Always compare the affected side with the unaffected side where
            appropriate. Examination should proceed from observation to
            palpation and movement, avoiding unnecessary painful manoeuvres.
          </p>

        `
      }
    },


    // ============================================================
    // 2. MUSCULOSKELETAL HISTORY
    // ============================================================

    {
      id: "msk-history",
      name: "Musculoskeletal History",

      notes: {
        anatomy: `

          <h2>Musculoskeletal History</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Confirm patient identity.</li>
            <li>Establish the chief complaint.</li>
            <li>Determine the anatomical site involved.</li>
            <li>Determine onset.</li>
            <li>Determine duration.</li>
            <li>Determine progression.</li>
            <li>Characterize pain.</li>
            <li>Ask about swelling.</li>
            <li>Ask about stiffness.</li>
            <li>Ask about weakness.</li>
            <li>Ask about reduced range of movement.</li>
            <li>Ask about functional limitation.</li>
            <li>Ask about trauma.</li>
            <li>Ask about systemic symptoms.</li>
            <li>Ask about previous similar episodes.</li>
            <li>Review medications and previous treatment.</li>
          </ol>

          <h3>Important Symptoms</h3>

          <ul>
            <li>Pain</li>
            <li>Joint swelling</li>
            <li>Joint stiffness</li>
            <li>Muscle weakness</li>
            <li>Muscle wasting</li>
            <li>Joint instability</li>
            <li>Deformity</li>
            <li>Reduced mobility</li>
            <li>Numbness</li>
            <li>Tingling</li>
            <li>Gait disturbance</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 3. PAIN
    // ============================================================

    {
      id: "msk-pain",
      name: "Musculoskeletal Pain",

      notes: {
        anatomy: `

          <h2>Assessment of Musculoskeletal Pain</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ask the patient to identify the exact site.</li>
            <li>Determine whether pain is localized or diffuse.</li>
            <li>Determine onset.</li>
            <li>Determine duration.</li>
            <li>Determine progression.</li>
            <li>Determine character.</li>
            <li>Assess severity.</li>
            <li>Determine radiation.</li>
            <li>Identify aggravating factors.</li>
            <li>Identify relieving factors.</li>
            <li>Ask whether movement worsens the pain.</li>
            <li>Ask whether rest relieves the pain.</li>
            <li>Ask about night pain.</li>
            <li>Ask about morning stiffness.</li>
            <li>Ask about associated swelling or weakness.</li>
          </ol>

          <h3>Character</h3>

          <ul>
            <li>Aching</li>
            <li>Sharp</li>
            <li>Burning</li>
            <li>Stabbing</li>
            <li>Throbbing</li>
            <li>Mechanical pain</li>
            <li>Neuropathic pain</li>
          </ul>

          <h3>Clinical Interpretation</h3>

          <p>
            Pain related predominantly to movement may suggest mechanical
            pathology. Pain occurring at rest or at night may require assessment
            for inflammatory, infective, neoplastic or other causes.
          </p>

        `
      }
    },


    // ============================================================
    // 4. JOINT SYMPTOMS
    // ============================================================

    {
      id: "msk-joint-symptoms",
      name: "Joint Symptoms",

      notes: {
        anatomy: `

          <h2>Assessment of Joint Symptoms</h2>

          <h3>Joint Swelling</h3>

          <ol>
            <li>Determine onset.</li>
            <li>Determine whether swelling is acute or chronic.</li>
            <li>Determine whether it is painful.</li>
            <li>Ask about redness or warmth.</li>
            <li>Ask about trauma.</li>
            <li>Ask about fever.</li>
            <li>Ask whether other joints are affected.</li>
          </ol>

          <h3>Joint Stiffness</h3>

          <ol>
            <li>Determine duration of stiffness.</li>
            <li>Ask about morning stiffness.</li>
            <li>Determine how long morning stiffness lasts.</li>
            <li>Ask whether stiffness improves with activity.</li>
            <li>Ask whether stiffness worsens with prolonged use.</li>
          </ol>

          <h3>Joint Instability</h3>

          <ol>
            <li>Ask whether the joint gives way.</li>
            <li>Ask whether there has been recurrent dislocation.</li>
            <li>Ask about previous ligament injury.</li>
            <li>Ask about locking or catching.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 5. TRAUMA HISTORY
    // ============================================================

    {
      id: "msk-trauma-history",
      name: "Trauma and Injury History",

      notes: {
        anatomy: `

          <h2>History of Musculoskeletal Trauma</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Determine the exact mechanism of injury.</li>
            <li>Determine the direction and force of trauma.</li>
            <li>Determine the position of the limb during injury.</li>
            <li>Determine whether there was immediate pain.</li>
            <li>Determine whether swelling developed immediately or later.</li>
            <li>Ask whether a deformity was noticed.</li>
            <li>Ask whether the patient could continue using the limb.</li>
            <li>Ask about loss of consciousness where relevant.</li>
            <li>Assess for associated injuries.</li>
            <li>Ask about previous injuries to the same area.</li>
            <li>Ask about treatment already provided.</li>
          </ol>

          <h3>Important Trauma Questions</h3>

          <ul>
            <li>Was there a fall?</li>
            <li>Was there direct impact?</li>
            <li>Was there twisting?</li>
            <li>Was there forced hyperextension or hyperflexion?</li>
            <li>Was there an open wound?</li>
            <li>Was there immediate functional loss?</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Suspected fracture, dislocation or significant soft-tissue injury
            requires appropriate imaging and, where indicated, further
            specialist assessment.
          </p>

        `
      }
    },


    // ============================================================
    // 6. GENERAL EXAMINATION
    // ============================================================

    {
      id: "msk-general-examination",
      name: "General Examination",

      notes: {
        anatomy: `

          <h2>General Musculoskeletal Examination</h2>

          <h3>Preparation</h3>

          <ol>
            <li>Wash or sanitize hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain.</li>
            <li>Expose the relevant anatomical regions.</li>
            <li>Ensure privacy and dignity.</li>
          </ol>

          <h3>General Inspection</h3>

          <ul>
            <li>General appearance</li>
            <li>Nutritional status</li>
            <li>Body habitus</li>
            <li>Fever</li>
            <li>Skin changes</li>
            <li>Joint deformities</li>
            <li>Muscle wasting</li>
            <li>Abnormal posture</li>
            <li>Gait abnormalities</li>
          </ul>

          <h3>Systemic Clues</h3>

          <ul>
            <li>Rash</li>
            <li>Psoriatic skin lesions</li>
            <li>Eye inflammation</li>
            <li>Oral ulcers</li>
            <li>Lymphadenopathy</li>
            <li>Peripheral oedema</li>
            <li>Signs of chronic disease</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 7. GAIT
    // ============================================================

    {
      id: "msk-gait",
      name: "Gait and Functional Assessment",

      notes: {
        anatomy: `

          <h2>Gait Examination</h2>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Ask the patient to stand safely.</li>
            <li>Observe posture.</li>
            <li>Ask the patient to walk normally.</li>
            <li>Observe from the front.</li>
            <li>Observe from behind.</li>
            <li>Observe from the side.</li>
            <li>Assess stride length.</li>
            <li>Assess symmetry.</li>
            <li>Assess foot placement.</li>
            <li>Assess arm swing.</li>
            <li>Assess balance.</li>
            <li>Assess for limping.</li>
            <li>Ask the patient to turn.</li>
            <li>Assess ability to walk on heels and toes where appropriate.</li>
          </ol>

          <h3>Abnormal Patterns</h3>

          <ul>
            <li>Antalgic gait</li>
            <li>Trendelenburg gait</li>
            <li>High-stepping gait</li>
            <li>Spastic gait</li>
            <li>Ataxic gait</li>
            <li>Short-stepped gait</li>
          </ul>

          <h3>Functional Assessment</h3>

          <ul>
            <li>Standing from a chair</li>
            <li>Sitting down</li>
            <li>Climbing stairs</li>
            <li>Squatting</li>
            <li>Walking</li>
            <li>Reaching</li>
            <li>Grip and hand function</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 8. REGIONAL EXAMINATION PRINCIPLES
    // ============================================================

    {
      id: "msk-regional-examination",
      name: "Regional Musculoskeletal Examination",

      notes: {
        anatomy: `

          <h2>Regional Musculoskeletal Examination</h2>

          <h3>Universal Sequence</h3>

          <ol>
            <li>Look.</li>
            <li>Feel.</li>
            <li>Move.</li>
            <li>Assess function.</li>
            <li>Perform special tests.</li>
            <li>Assess neurovascular status.</li>
            <li>Compare with the opposite side.</li>
          </ol>

          <h3>LOOK</h3>

          <ul>
            <li>Swelling</li>
            <li>Redness</li>
            <li>Deformity</li>
            <li>Scars</li>
            <li>Muscle wasting</li>
            <li>Skin changes</li>
            <li>Abnormal posture</li>
          </ul>

          <h3>FEEL</h3>

          <ul>
            <li>Temperature</li>
            <li>Tenderness</li>
            <li>Swelling</li>
            <li>Joint-line tenderness</li>
            <li>Muscle tenderness</li>
            <li>Crepitus</li>
            <li>Masses</li>
          </ul>

          <h3>MOVE</h3>

          <ol>
            <li>Assess active movement first.</li>
            <li>Assess passive movement.</li>
            <li>Compare range of motion with the opposite side.</li>
            <li>Determine whether movement causes pain.</li>
            <li>Identify mechanical restriction.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 9. SHOULDER
    // ============================================================

    {
      id: "msk-shoulder",
      name: "Shoulder Examination",

      notes: {
        anatomy: `

          <h2>Shoulder Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Shoulder symmetry</li>
            <li>Muscle wasting</li>
            <li>Swelling</li>
            <li>Deformity</li>
            <li>Scars</li>
          </ul>

          <h3>Palpation</h3>

          <ol>
            <li>Palpate the sternoclavicular joint.</li>
            <li>Palpate the clavicle.</li>
            <li>Palpate the acromioclavicular joint.</li>
            <li>Palpate the acromion.</li>
            <li>Palpate the anterior and posterior joint line.</li>
            <li>Assess tenderness.</li>
          </ol>

          <h3>Movement</h3>

          <ol>
            <li>Flexion.</li>
            <li>Extension.</li>
            <li>Abduction.</li>
            <li>Adduction.</li>
            <li>External rotation.</li>
            <li>Internal rotation.</li>
          </ol>

          <h3>Special Tests</h3>

          <ul>
            <li>Neer impingement test</li>
            <li>Hawkins-Kennedy test</li>
            <li>Jobe/empty-can test</li>
            <li>External rotation resistance test</li>
            <li>Apprehension test</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Suspected rotator cuff pathology, instability or significant
            structural disease may require ultrasound, MRI or radiography
            depending on the clinical question.
          </p>

        `
      }
    },


    // ============================================================
    // 10. ELBOW
    // ============================================================

    {
      id: "msk-elbow",
      name: "Elbow Examination",

      notes: {
        anatomy: `

          <h2>Elbow Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Swelling</li>
            <li>Deformity</li>
            <li>Skin changes</li>
            <li>Muscle wasting</li>
          </ul>

          <h3>Palpation</h3>

          <ol>
            <li>Palpate the medial epicondyle.</li>
            <li>Palpate the lateral epicondyle.</li>
            <li>Palpate the olecranon.</li>
            <li>Palpate the joint line.</li>
            <li>Assess temperature.</li>
            <li>Assess tenderness.</li>
          </ol>

          <h3>Movement</h3>

          <ul>
            <li>Flexion</li>
            <li>Extension</li>
            <li>Pronation</li>
            <li>Supination</li>
          </ul>

          <h3>Special Tests</h3>

          <ul>
            <li>Cozen test</li>
            <li>Mill test</li>
            <li>Valgus stress test</li>
            <li>Varus stress test</li>
          </ul>

          <h3>Neurovascular Assessment</h3>

          <p>
            Assess distal sensation, motor function and circulation, especially
            after trauma.
          </p>

        `
      }
    },


    // ============================================================
    // 11. WRIST AND HAND
    // ============================================================

    {
      id: "msk-wrist-hand",
      name: "Wrist and Hand Examination",

      notes: {
        anatomy: `

          <h2>Wrist and Hand Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Swelling</li>
            <li>Deformity</li>
            <li>Muscle wasting</li>
            <li>Joint enlargement</li>
            <li>Skin changes</li>
            <li>Nail abnormalities</li>
          </ul>

          <h3>Palpation</h3>

          <ol>
            <li>Palpate the wrist joint.</li>
            <li>Palpate the anatomical snuffbox.</li>
            <li>Palpate the metacarpophalangeal joints.</li>
            <li>Palpate the proximal interphalangeal joints.</li>
            <li>Palpate the distal interphalangeal joints.</li>
            <li>Assess tenderness and swelling.</li>
          </ol>

          <h3>Movement</h3>

          <ul>
            <li>Wrist flexion</li>
            <li>Wrist extension</li>
            <li>Radial deviation</li>
            <li>Ulnar deviation</li>
            <li>Finger flexion</li>
            <li>Finger extension</li>
            <li>Thumb opposition</li>
          </ul>

          <h3>Special Tests</h3>

          <ul>
            <li>Phalen test</li>
            <li>Tinel test</li>
            <li>Finkelstein test</li>
          </ul>

          <h3>Functional Assessment</h3>

          <ol>
            <li>Assess grip.</li>
            <li>Assess pinch.</li>
            <li>Assess fine finger movements.</li>
            <li>Assess ability to make a fist.</li>
            <li>Assess thumb opposition.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 12. HIP
    // ============================================================

    {
      id: "msk-hip",
      name: "Hip Examination",

      notes: {
        anatomy: `

          <h2>Hip Examination</h2>

          <h3>Inspection</h3>

          <ol>
            <li>Observe gait.</li>
            <li>Assess pelvic symmetry.</li>
            <li>Look for muscle wasting.</li>
            <li>Look for deformity.</li>
            <li>Assess limb length where indicated.</li>
          </ol>

          <h3>Palpation</h3>

          <ul>
            <li>Greater trochanter</li>
            <li>Anterior hip region</li>
            <li>Gluteal region</li>
          </ul>

          <h3>Movement</h3>

          <ul>
            <li>Flexion</li>
            <li>Extension</li>
            <li>Abduction</li>
            <li>Adduction</li>
            <li>Internal rotation</li>
            <li>External rotation</li>
          </ul>

          <h3>Special Test</h3>

          <p>
            The FABER test assesses hip range of motion and may reproduce pain
            associated with hip or sacroiliac pathology.
          </p>

          <h3>Confirmation</h3>

          <p>
            Suspected structural hip disease may require radiography as an
            initial investigation, with ultrasound or MRI selected according to
            the clinical question.
          </p>

        `
      }
    },


    // ============================================================
    // 13. KNEE
    // ============================================================

    {
      id: "msk-knee",
      name: "Knee Examination",

      notes: {
        anatomy: `

          <h2>Knee Examination</h2>

          <h3>Inspection</h3>

          <ol>
            <li>Observe the patient walking.</li>
            <li>Inspect both knees.</li>
            <li>Look for swelling.</li>
            <li>Look for deformity.</li>
            <li>Look for muscle wasting.</li>
            <li>Look for scars.</li>
            <li>Assess alignment.</li>
          </ol>

          <h3>Palpation</h3>

          <ol>
            <li>Assess temperature.</li>
            <li>Palpate the patella.</li>
            <li>Palpate the joint lines.</li>
            <li>Palpate the tibial tuberosity.</li>
            <li>Palpate the collateral ligaments.</li>
            <li>Assess tenderness.</li>
          </ol>

          <h3>Effusion</h3>

          <ol>
            <li>Assess for a fluid wave.</li>
            <li>Perform patellar tap when appropriate.</li>
          </ol>

          <h3>Movement</h3>

          <ul>
            <li>Flexion</li>
            <li>Extension</li>
          </ul>

          <h3>Ligament Tests</h3>

          <ul>
            <li>Anterior drawer test</li>
            <li>Posterior drawer test</li>
            <li>Lachman test</li>
            <li>Valgus stress test</li>
            <li>Varus stress test</li>
          </ul>

          <h3>Meniscal Tests</h3>

          <ul>
            <li>McMurray test</li>
            <li>Thessaly test where appropriate</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Radiography may identify fractures and degenerative changes.
            Ultrasound may assess selected soft-tissue abnormalities, while MRI
            provides detailed assessment of menisci, ligaments and other
            internal structures.
          </p>

        `
      }
    },


    // ============================================================
    // 14. ANKLE AND FOOT
    // ============================================================

    {
      id: "msk-ankle-foot",
      name: "Ankle and Foot Examination",

      notes: {
        anatomy: `

          <h2>Ankle and Foot Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Swelling</li>
            <li>Bruising</li>
            <li>Deformity</li>
            <li>Skin changes</li>
            <li>Foot alignment</li>
            <li>Muscle wasting</li>
          </ul>

          <h3>Palpation</h3>

          <ol>
            <li>Palpate the medial malleolus.</li>
            <li>Palpate the lateral malleolus.</li>
            <li>Palpate the ankle joint.</li>
            <li>Palpate the Achilles tendon.</li>
            <li>Palpate the base of the fifth metatarsal.</li>
            <li>Assess areas of tenderness.</li>
          </ol>

          <h3>Movement</h3>

          <ul>
            <li>Dorsiflexion</li>
            <li>Plantarflexion</li>
            <li>Inversion</li>
            <li>Eversion</li>
          </ul>

          <h3>Special Tests</h3>

          <ul>
            <li>Anterior drawer test</li>
            <li>Talar tilt test</li>
            <li>Thompson test for Achilles tendon integrity</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Following significant trauma, radiographs are selected according to
            clinical criteria. Ultrasound or MRI may be required for selected
            tendon, ligament or soft-tissue injuries.
          </p>

        `
      }
    },


    // ============================================================
    // 15. SPINE
    // ============================================================

    {
      id: "msk-spine",
      name: "Spinal Examination",

      notes: {
        anatomy: `

          <h2>Spinal Examination</h2>

          <h3>Inspection</h3>

          <ol>
            <li>Observe posture.</li>
            <li>Inspect spinal alignment.</li>
            <li>Look for scoliosis.</li>
            <li>Look for kyphosis.</li>
            <li>Look for lordosis.</li>
            <li>Observe gait.</li>
          </ol>

          <h3>Palpation</h3>

          <ol>
            <li>Palpate the spinous processes.</li>
            <li>Assess paraspinal muscles.</li>
            <li>Assess for tenderness.</li>
            <li>Assess for muscle spasm.</li>
          </ol>

          <h3>Movement</h3>

          <ul>
            <li>Flexion</li>
            <li>Extension</li>
            <li>Lateral flexion</li>
            <li>Rotation</li>
          </ul>

          <h3>Neurological Assessment</h3>

          <ol>
            <li>Assess motor power.</li>
            <li>Assess sensation.</li>
            <li>Assess reflexes.</li>
            <li>Assess gait.</li>
            <li>Assess sphincter symptoms when clinically indicated.</li>
          </ol>

          <h3>Special Test</h3>

          <p>
            Straight-leg raising may be used when assessing suspected
            lumbosacral nerve-root irritation.
          </p>

          <h3>Red Flags</h3>

          <ul>
            <li>Progressive neurological deficit</li>
            <li>Saddle sensory disturbance</li>
            <li>New bladder dysfunction</li>
            <li>New bowel dysfunction</li>
            <li>Severe trauma</li>
            <li>Fever</li>
            <li>Unexplained weight loss</li>
            <li>History suggesting malignancy</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 16. MUSCLE EXAMINATION
    // ============================================================

    {
      id: "msk-muscle",
      name: "Muscle Examination",

      notes: {
        anatomy: `

          <h2>Muscle Examination</h2>

          <h3>Inspection</h3>

          <ul>
            <li>Muscle bulk</li>
            <li>Muscle wasting</li>
            <li>Hypertrophy</li>
            <li>Fasciculations</li>
            <li>Abnormal movements</li>
          </ul>

          <h3>Palpation</h3>

          <ul>
            <li>Muscle tenderness</li>
            <li>Muscle consistency</li>
            <li>Abnormal masses</li>
          </ul>

          <h3>Power Testing</h3>

          <p>
            Test major muscle groups systematically against resistance and grade
            strength using the Medical Research Council scale.
          </p>

          <h3>MRC Scale</h3>

          <ul>
            <li><strong>0:</strong> No visible or palpable contraction</li>
            <li><strong>1:</strong> Flicker of contraction</li>
            <li><strong>2:</strong> Movement with gravity eliminated</li>
            <li><strong>3:</strong> Movement against gravity</li>
            <li><strong>4:</strong> Movement against resistance but weaker than normal</li>
            <li><strong>5:</strong> Normal power</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Persistent or unexplained weakness may require neurological
            assessment, creatine kinase testing, electromyography,
            nerve-conduction studies, imaging or other investigations depending
            on the suspected cause.
          </p>

        `
      }
    },


    // ============================================================
    // 17. NEUROVASCULAR
    // ============================================================

    {
      id: "msk-neurovascular",
      name: "Neurovascular Assessment",

      notes: {
        anatomy: `

          <h2>Neurovascular Examination</h2>

          <p>
            Neurovascular assessment is particularly important after trauma,
            fractures, dislocations, casts and suspected compartment syndrome.
          </p>

          <h3>STEP-BY-STEP</h3>

          <ol>
            <li>Assess distal pulses.</li>
            <li>Assess capillary refill.</li>
            <li>Assess skin colour.</li>
            <li>Assess skin temperature.</li>
            <li>Assess distal sensation.</li>
            <li>Assess motor function.</li>
            <li>Compare with the opposite limb.</li>
          </ol>

          <h3>Danger Signs</h3>

          <ul>
            <li>Absent or markedly reduced pulse</li>
            <li>Delayed capillary refill</li>
            <li>Pallor</li>
            <li>Cyanosis</li>
            <li>Cold limb</li>
            <li>New sensory loss</li>
            <li>New motor weakness</li>
            <li>Severe pain out of proportion</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Suspected vascular compromise may require Doppler assessment,
            vascular imaging or urgent specialist intervention depending on
            severity.
          </p>

        `
      }
    },


    // ============================================================
    // 18. FRACTURE EXAMINATION
    // ============================================================

    {
      id: "msk-fracture",
      name: "Fracture Assessment",

      notes: {
        anatomy: `

          <h2>Clinical Assessment of Suspected Fracture</h2>

          <h3>Primary Assessment</h3>

          <ol>
            <li>Assess general stability.</li>
            <li>Control significant bleeding.</li>
            <li>Assess the injured limb.</li>
            <li>Assess neurovascular status.</li>
            <li>Look for deformity.</li>
            <li>Assess swelling.</li>
            <li>Assess tenderness.</li>
            <li>Assess abnormal movement only when clinically necessary.</li>
          </ol>

          <h3>Important Findings</h3>

          <ul>
            <li>Pain</li>
            <li>Swelling</li>
            <li>Deformity</li>
            <li>Loss of function</li>
            <li>Shortening</li>
            <li>Abnormal rotation</li>
            <li>Open wound</li>
            <li>Crepitus</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Plain radiographs are commonly used to confirm fractures. Additional
            CT or MRI may be required for complex fractures or injuries that are
            inadequately characterized by plain radiography.
          </p>

          <h3>Important Principle</h3>

          <p>
            Neurovascular status should be documented before and after
            manipulation, reduction or immobilization.
          </p>

        `
      }
    },


    // ============================================================
    // 19. DISLOCATION
    // ============================================================

    {
      id: "msk-dislocation",
      name: "Dislocation Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Joint Dislocation</h2>

          <h3>Clinical Assessment</h3>

          <ol>
            <li>Identify the affected joint.</li>
            <li>Determine the mechanism of injury.</li>
            <li>Inspect for deformity.</li>
            <li>Assess swelling.</li>
            <li>Assess pain.</li>
            <li>Assess distal neurovascular status.</li>
            <li>Assess associated injuries.</li>
          </ol>

          <h3>Confirmation</h3>

          <p>
            Radiographs are generally used to confirm the position of the joint
            and identify associated fractures. Post-reduction imaging may be
            required to document satisfactory alignment.
          </p>

          <h3>Important Principle</h3>

          <p>
            Do not repeatedly manipulate a suspected dislocation. Maintain
            appropriate immobilization and arrange urgent assessment when
            reduction is required.
          </p>

        `
      }
    },


    // ============================================================
    // 20. INFLAMMATORY ARTHRITIS
    // ============================================================

    {
      id: "msk-inflammatory-arthritis",
      name: "Inflammatory Arthritis Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Inflammatory Arthritis</h2>

          <h3>History</h3>

          <ol>
            <li>Determine duration of symptoms.</li>
            <li>Ask about morning stiffness.</li>
            <li>Determine the duration of morning stiffness.</li>
            <li>Identify the number of joints involved.</li>
            <li>Determine whether involvement is symmetrical.</li>
            <li>Ask about joint swelling.</li>
            <li>Ask about systemic symptoms.</li>
            <li>Ask about skin rashes.</li>
            <li>Ask about eye symptoms.</li>
            <li>Ask about bowel symptoms.</li>
            <li>Ask about family history.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Joint swelling</li>
            <li>Warmth</li>
            <li>Tenderness</li>
            <li>Restricted movement</li>
            <li>Deformity</li>
            <li>Extra-articular manifestations</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Investigation may include inflammatory markers, full blood count,
            relevant autoantibodies, joint aspiration where indicated, and
            appropriate imaging.
          </p>

        `
      }
    },


    // ============================================================
    // 21. SEPTIC ARTHRITIS
    // ============================================================

    {
      id: "msk-septic-arthritis",
      name: "Septic Arthritis",

      notes: {
        anatomy: `

          <h2>Assessment of Suspected Septic Arthritis</h2>

          <p>
            Septic arthritis is a potentially destructive joint infection and
            requires urgent assessment.
          </p>

          <h3>History</h3>

          <ol>
            <li>Determine onset of joint pain.</li>
            <li>Ask about fever.</li>
            <li>Ask about chills or systemic illness.</li>
            <li>Ask about recent infection.</li>
            <li>Ask about recent surgery or joint procedure.</li>
            <li>Ask about trauma.</li>
            <li>Ask about prosthetic joints.</li>
            <li>Assess risk factors for infection.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Joint swelling</li>
            <li>Warmth</li>
            <li>Severe tenderness</li>
            <li>Marked restriction of movement</li>
            <li>Fever</li>
            <li>Systemic toxicity</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Definitive assessment commonly requires aspiration of synovial
            fluid for cell count, Gram stain, culture and other appropriate
            analyses. Blood tests and blood cultures may also be required.
          </p>

        `
      }
    },


    // ============================================================
    // 22. GOUT
    // ============================================================

    {
      id: "msk-gout",
      name: "Gout Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Gout</h2>

          <h3>History</h3>

          <ol>
            <li>Determine whether onset was sudden.</li>
            <li>Identify the affected joint.</li>
            <li>Ask about previous attacks.</li>
            <li>Ask about dietary and alcohol-related triggers.</li>
            <li>Review medications.</li>
            <li>Ask about renal disease.</li>
            <li>Ask about family history.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Acute joint swelling</li>
            <li>Redness</li>
            <li>Warmth</li>
            <li>Severe tenderness</li>
            <li>Tophi in chronic disease</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            When clinically appropriate, synovial fluid analysis demonstrating
            monosodium urate crystals provides strong diagnostic confirmation.
            Serum urate may support assessment but does not by itself establish
            an acute gout diagnosis.
          </p>

        `
      }
    },


    // ============================================================
    // 23. OSTEOARTHRITIS
    // ============================================================

    {
      id: "msk-osteoarthritis",
      name: "Osteoarthritis Assessment",

      notes: {
        anatomy: `

          <h2>Assessment of Osteoarthritis</h2>

          <h3>History</h3>

          <ol>
            <li>Determine duration.</li>
            <li>Assess mechanical pain.</li>
            <li>Ask about activity-related symptoms.</li>
            <li>Ask about stiffness.</li>
            <li>Ask about functional limitation.</li>
            <li>Ask about previous injury.</li>
          </ol>

          <h3>Examination</h3>

          <ul>
            <li>Joint-line tenderness</li>
            <li>Crepitus</li>
            <li>Reduced range of movement</li>
            <li>Bony enlargement</li>
            <li>Deformity</li>
            <li>Muscle wasting</li>
          </ul>

          <h3>Confirmation</h3>

          <p>
            Osteoarthritis is primarily a clinical diagnosis. Radiographs may
            demonstrate characteristic structural changes when imaging is
            clinically required.
          </p>

        `
      }
    },


    // ============================================================
    // 24. INVESTIGATIONS
    // ============================================================

    {
      id: "msk-investigations",
      name: "Musculoskeletal Investigations",

      notes: {
        anatomy: `

          <h2>Musculoskeletal Investigations</h2>

          <h3>Blood Tests</h3>

          <ul>
            <li>Full blood count</li>
            <li>ESR</li>
            <li>CRP</li>
            <li>Uric acid</li>
            <li>Renal function</li>
            <li>Liver function</li>
            <li>Creatine kinase</li>
            <li>Rheumatoid factor where indicated</li>
            <li>Anti-CCP antibodies where indicated</li>
            <li>ANA and other autoimmune tests where clinically indicated</li>
          </ul>

          <h3>Imaging</h3>

          <ul>
            <li>Plain radiography</li>
            <li>Ultrasound</li>
            <li>CT</li>
            <li>MRI</li>
            <li>Bone scintigraphy in selected circumstances</li>
          </ul>

          <h3>Joint Fluid Analysis</h3>

          <ul>
            <li>Appearance</li>
            <li>Cell count</li>
            <li>Differential cell count</li>
            <li>Gram stain</li>
            <li>Culture</li>
            <li>Crystal analysis</li>
          </ul>

          <h3>Other Investigations</h3>

          <ul>
            <li>Nerve conduction studies</li>
            <li>Electromyography</li>
            <li>Bone density assessment</li>
            <li>Muscle biopsy in selected cases</li>
            <li>Bone biopsy in selected cases</li>
          </ul>

        `
      }
    },


    // ============================================================
    // 25. IMAGING CONFIRMATION
    // ============================================================

    {
      id: "msk-imaging",
      name: "Imaging and Confirmation",

      notes: {
        anatomy: `

          <h2>Musculoskeletal Diagnostic Confirmation</h2>

          <h3>Plain Radiography</h3>

          <p>
            Useful for fractures, dislocations, alignment abnormalities,
            osteoarthritis and many bony lesions.
          </p>

          <h3>Ultrasound</h3>

          <p>
            Useful for selected tendon, muscle and superficial soft-tissue
            abnormalities and for detecting joint effusions.
          </p>

          <h3>CT</h3>

          <p>
            Provides detailed assessment of bone and complex fractures and can
            assist in evaluation of selected masses and other structural
            abnormalities.
          </p>

          <h3>MRI</h3>

          <p>
            Provides detailed assessment of soft tissues, cartilage, ligaments,
            tendons, bone marrow and internal joint structures.
          </p>

          <h3>Diagnostic Principle</h3>

          <p>
            Select imaging according to the clinical question. Imaging findings
            must be correlated with history and physical examination because
            structural abnormalities may occur without corresponding symptoms.
          </p>

        `
      }
    },


    // ============================================================
    // 26. COMPLETE LIMB EXAMINATION
    // ============================================================

    {
      id: "msk-limb-osce",
      name: "Complete Limb Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Musculoskeletal Limb Examination — OSCE</h2>

          <h3>Opening</h3>

          <ol>
            <li>Wash hands.</li>
            <li>Introduce yourself.</li>
            <li>Confirm patient identity.</li>
            <li>Explain the examination.</li>
            <li>Obtain consent.</li>
            <li>Ask about pain.</li>
            <li>Expose the limb appropriately.</li>
          </ol>

          <h3>General Inspection</h3>

          <ol>
            <li>Observe the patient at rest.</li>
            <li>Observe posture.</li>
            <li>Observe gait where relevant.</li>
            <li>Compare both limbs.</li>
          </ol>

          <h3>Look</h3>

          <ol>
            <li>Look for swelling.</li>
            <li>Look for deformity.</li>
            <li>Look for scars.</li>
            <li>Look for muscle wasting.</li>
            <li>Look for skin changes.</li>
            <li>Assess alignment.</li>
          </ol>

          <h3>Feel</h3>

          <ol>
            <li>Assess temperature.</li>
            <li>Palpate relevant anatomical landmarks.</li>
            <li>Assess tenderness.</li>
            <li>Assess swelling.</li>
            <li>Assess joint-line tenderness.</li>
            <li>Assess for crepitus.</li>
          </ol>

          <h3>Move</h3>

          <ol>
            <li>Assess active range of movement.</li>
            <li>Assess passive range of movement.</li>
            <li>Compare both sides.</li>
            <li>Assess pain during movement.</li>
          </ol>

          <h3>Function</h3>

          <ol>
            <li>Assess walking.</li>
            <li>Assess weight bearing.</li>
            <li>Assess relevant functional movements.</li>
          </ol>

          <h3>Special Tests</h3>

          <p>
            Perform special tests based on the suspected anatomical structure
            and differential diagnosis rather than performing every test
            routinely.
          </p>

          <h3>Neurovascular Assessment</h3>

          <ol>
            <li>Assess pulses.</li>
            <li>Assess capillary refill.</li>
            <li>Assess sensation.</li>
            <li>Assess motor function.</li>
          </ol>

          <h3>Completion</h3>

          <ol>
            <li>Thank the patient.</li>
            <li>Allow the patient to dress.</li>
            <li>Ensure comfort.</li>
            <li>Wash hands.</li>
            <li>Summarize findings.</li>
            <li>State the likely differential diagnoses.</li>
            <li>Recommend appropriate investigations.</li>
          </ol>

        `
      }
    },


    // ============================================================
    // 27. COMPLETE JOINT EXAMINATION
    // ============================================================

    {
      id: "msk-joint-osce",
      name: "Complete Joint Examination — OSCE",

      notes: {
        anatomy: `

          <h2>Complete Joint Examination</h2>

          <h3>Sequence</h3>

          <ol>
            <li>General inspection.</li>
            <li>Inspect the joint.</li>
            <li>Compare with the opposite joint.</li>
            <li>Palpate systematically.</li>
            <li>Assess temperature.</li>
            <li>Assess tenderness.</li>
            <li>Assess swelling.</li>
            <li>Assess active movement.</li>
            <li>Assess passive movement.</li>
            <li>Assess joint stability.</li>
            <li>Perform relevant special tests.</li>
            <li>Assess distal neurovascular function.</li>
            <li>Assess functional ability.</li>
          </ol>

          <h3>Interpretation</h3>

          <p>
            Determine whether the pathology is primarily articular,
            peri-articular, muscular, neurological or vascular.
          </p>

          <h3>Confirmation</h3>

          <p>
            Use targeted investigations based on the clinical findings. These
            may include radiography, ultrasound, MRI, laboratory testing,
            aspiration or electrophysiological studies.
          </p>

        `
      }
    },


    // ============================================================
    // 28. DIAGNOSTIC APPROACH
    // ============================================================

    {
      id: "msk-diagnostic-approach",
      name: "Clinical Diagnostic Approach",

      notes: {
        anatomy: `

          <h2>Musculoskeletal Diagnostic Approach</h2>

          <h3>STEP 1 — Localize</h3>

          <p>
            Identify whether the symptoms arise from bone, joint, muscle,
            tendon, ligament, nerve or surrounding soft tissue.
          </p>

          <h3>STEP 2 — Determine the Pattern</h3>

          <ul>
            <li>Acute or chronic</li>
            <li>Traumatic or atraumatic</li>
            <li>Inflammatory or mechanical</li>
            <li>Localized or generalized</li>
            <li>Monoarticular or polyarticular</li>
          </ul>

          <h3>STEP 3 — Examine</h3>

          <p>
            Perform a focused regional examination using Look, Feel, Move,
            Function, Special Tests and Neurovascular assessment.
          </p>

          <h3>STEP 4 — Develop Differential Diagnoses</h3>

          <p>
            Use the clinical pattern and examination findings to develop a
            prioritized differential diagnosis.
          </p>

          <h3>STEP 5 — Select Confirmation Method</h3>

          <ul>
            <li>Blood investigations</li>
            <li>Radiography</li>
            <li>Ultrasound</li>
            <li>CT</li>
            <li>MRI</li>
            <li>Joint aspiration</li>
            <li>Electrophysiological studies</li>
            <li>Biopsy when indicated</li>
          </ul>

          <h3>STEP 6 — Reassess</h3>

          <p>
            Integrate investigation results with the original clinical findings.
            If the results do not explain the patient's presentation, reconsider
            the differential diagnosis and perform further targeted assessment.
          </p>

        `
      }
    }

  ]
};