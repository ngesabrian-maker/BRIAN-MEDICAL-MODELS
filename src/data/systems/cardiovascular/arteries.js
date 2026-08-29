export const arteries =  {
      id: "blood-vessels",
      name: "Blood Vessels",
      modelPath: "models/blood-vessels/",
      modelFile: "blood-vessels.glb",

      notes: {

        anatomy: `
          <h2>Blood Vessel Anatomy</h2>

          <h3>Overview</h3>
          <p>
            Blood vessels are tubular structures that transport blood throughout the body. They form
            a continuous vascular network connecting the heart with tissues and returning blood to
            the heart.
          </p>

          <h3>Major Types</h3>
          <ul>
            <li><strong>Arteries</strong> – carry blood away from the heart.</li>
            <li><strong>Arterioles</strong> – small arteries that regulate blood flow into capillary beds.</li>
            <li><strong>Capillaries</strong> – microscopic vessels where most exchange occurs.</li>
            <li><strong>Venules</strong> – collect blood from capillary beds.</li>
            <li><strong>Veins</strong> – return blood toward the heart.</li>
          </ul>

          <h3>Layers of Blood Vessel Walls</h3>
          <ol>
            <li><strong>Tunica intima</strong> – inner endothelial layer and associated connective tissue.</li>
            <li><strong>Tunica media</strong> – smooth muscle and elastic tissue.</li>
            <li><strong>Tunica adventitia</strong> – outer connective-tissue layer.</li>
          </ol>

          <h3>Arteries</h3>
          <p>
            Arteries generally have thick walls capable of withstanding relatively high intravascular
            pressure.
          </p>

          <h3>Veins</h3>
          <p>
            Veins generally have thinner walls and larger lumens than comparable arteries. Many
            medium-sized veins contain valves that reduce retrograde blood flow.
          </p>

          <h3>Capillaries</h3>
          <p>
            Capillaries have extremely thin walls, generally consisting of endothelial cells and
            their basement membrane, allowing efficient exchange between blood and tissues.
          </p>
        `,

        physiology: `
          <h2>Blood Vessel Physiology</h2>

          <h3>Blood Flow</h3>
          <p>
            Blood flows down pressure gradients. The cardiovascular system maintains pressure
            differences between the arterial and venous compartments.
          </p>

          <h3>Vascular Resistance</h3>
          <p>
            Arterioles are major resistance vessels. Changes in arteriolar diameter strongly influence
            systemic vascular resistance and tissue perfusion.
          </p>

          <h3>Vasoconstriction</h3>
          <p>
            Vasoconstriction decreases vessel diameter and generally increases vascular resistance.
          </p>

          <h3>Vasodilation</h3>
          <p>
            Vasodilation increases vessel diameter and generally decreases vascular resistance.
          </p>

          <h3>Blood Pressure</h3>
          <p>
            Arterial blood pressure is influenced by cardiac output, systemic vascular resistance,
            blood volume and arterial compliance.
          </p>

          <p>
            <strong>Mean arterial pressure is approximately related to cardiac output × systemic
            vascular resistance.</strong>
          </p>

          <h3>Venous Return</h3>
          <p>
            Venous return is assisted by skeletal muscle contraction, respiratory movements, venous
            valves and sympathetic venoconstriction.
          </p>

          <h3>Capillary Exchange</h3>
          <p>
            Exchange of gases, nutrients, metabolic products and fluid occurs between capillary blood
            and surrounding tissues.
          </p>

          <h3>Endothelial Regulation</h3>
          <p>
            Endothelial cells participate actively in regulation of vascular tone, coagulation,
            inflammation, permeability and vascular remodeling.
          </p>
        `,

        biochemistry: `
          <h2>Blood Vessel Biochemistry</h2>

          <h3>Nitric Oxide</h3>
          <p>
            Endothelial nitric oxide synthase produces nitric oxide from L-arginine. Nitric oxide
            diffuses into vascular smooth muscle and promotes relaxation through the cyclic GMP pathway.
          </p>

          <h3>Endothelin</h3>
          <p>
            Endothelin is a potent vasoconstrictor peptide produced by endothelial cells.
          </p>

          <h3>Angiotensin II</h3>
          <p>
            Angiotensin II is a potent vasoconstrictor and contributes to blood pressure regulation
            and aldosterone secretion.
          </p>

          <h3>Prostacyclin</h3>
          <p>
            Prostacyclin produced by endothelial cells promotes vasodilation and inhibits platelet
            aggregation.
          </p>

          <h3>Coagulation</h3>
          <p>
            The vascular endothelium participates in maintaining the balance between procoagulant
            and anticoagulant mechanisms.
          </p>
        `,

        pathology: `
          <h2>Blood Vessel Pathology</h2>

          <h3>Atherosclerosis</h3>
          <p>
            Atherosclerosis is a chronic disease of large and medium-sized arteries characterized by
            lipid accumulation, inflammation, fibrous tissue formation and plaque development within
            the arterial wall.
          </p>

          <h3>Hypertension</h3>
          <p>
            Persistent elevation of arterial pressure increases mechanical stress on blood vessel
            walls and contributes to cardiovascular, renal and cerebrovascular disease.
          </p>

          <h3>Aneurysm</h3>
          <p>
            An aneurysm is an abnormal localized dilation of a blood vessel or cardiac chamber.
            Aneurysms may enlarge, thrombose or rupture depending on their location and characteristics.
          </p>

          <h3>Deep Vein Thrombosis</h3>
          <p>
            Deep vein thrombosis involves formation of a thrombus within a deep vein, commonly in
            the lower extremities. A thrombus may embolize to the pulmonary circulation.
          </p>

          <h3>Peripheral Arterial Disease</h3>
          <p>
            Peripheral arterial disease commonly results from atherosclerotic narrowing of arteries
            supplying the limbs and can produce exertional limb pain and impaired tissue perfusion.
          </p>

          <h3>Varicose Veins</h3>
          <p>
            Varicose veins are dilated, tortuous superficial veins commonly associated with chronic
            venous hypertension and valve dysfunction.
          </p>
        `,

        microbiology: `
          <h2>Blood Vessel Microbiology</h2>

          <h3>Vascular Infection</h3>
          <p>
            Microorganisms can infect vascular structures directly or produce vascular complications
            through bloodstream infection and inflammation.
          </p>

          <h3>Septic Emboli</h3>
          <p>
            Infective endocarditis may produce infected emboli that travel through the arterial
            circulation and cause vascular occlusion and tissue infection.
          </p>

          <h3>Infectious Aortitis</h3>
          <p>
            Certain bacterial infections can cause inflammation and destruction of the aortic wall,
            potentially resulting in aneurysm formation or rupture.
          </p>
        `,

        immunology: `
          <h2>Blood Vessel Immunology</h2>

          <p>
            The vascular endothelium actively participates in immune regulation and inflammation.
            Cytokines and inflammatory mediators can alter endothelial permeability, leukocyte
            adhesion and vascular tone.
          </p>

          <h3>Endothelial Activation</h3>
          <p>
            During inflammation, endothelial cells increase expression of adhesion molecules that
            facilitate recruitment of leukocytes into tissues.
          </p>

          <h3>Vasculitis</h3>
          <p>
            Vasculitis refers to inflammation of blood vessel walls. It may involve vessels of
            different sizes and can produce ischemia, thrombosis, hemorrhage or aneurysmal changes.
          </p>
        `,

        pharmacology: `
          <h2>Blood Vessel Pharmacology</h2>

          <h3>Vasodilators</h3>
          <ul>
            <li>Nitrates</li>
            <li>Calcium-channel blockers</li>
            <li>Hydralazine</li>
            <li>Selected ACE inhibitors and ARBs through effects on vascular signaling</li>
          </ul>

          <h3>Vasoconstrictors</h3>
          <p>
            Certain drugs stimulate vascular smooth muscle contraction and are used in selected
            clinical situations to increase vascular tone and blood pressure.
          </p>

          <h3>Antiplatelet Drugs</h3>
          <p>
            Antiplatelet agents reduce platelet activation and aggregation and are important in
            prevention and treatment of arterial thrombotic disease.
          </p>

          <h3>Anticoagulants</h3>
          <p>
            Anticoagulants interfere with coagulation pathways and reduce formation or extension
            of thrombi.
          </p>
        `,

        clinical: `
          <h2>Clinical Blood Vessel Correlations</h2>

          <h3>Blood Pressure Measurement</h3>
          <p>
            Blood pressure is commonly measured non-invasively using a cuff around the upper arm.
            Systolic pressure corresponds approximately to peak arterial pressure during ventricular
            systole, while diastolic pressure reflects arterial pressure during ventricular diastole.
          </p>

          <h3>Pulse</h3>
          <p>
            Arterial pulse reflects pressure waves generated by ventricular contraction and transmitted
            through the arterial tree.
          </p>

          <h3>Peripheral Perfusion</h3>
          <p>
            Peripheral perfusion can be assessed clinically through skin temperature, capillary
            refill, peripheral pulses, colour and other findings.
          </p>

          <h3>Thromboembolism</h3>
          <p>
            A thrombus may obstruct blood flow locally or embolize to another vascular bed. Venous
            thromboembolism can result in pulmonary embolism, while arterial emboli can cause ischemia
            of organs or limbs.
          </p>
        `,

        histology: `
          <h2>Blood Vessel Histology</h2>

          <h3>Endothelium</h3>
          <p>
            The endothelium is a specialized simple squamous epithelium lining the interior of blood
            vessels. It regulates permeability, vascular tone, inflammation and haemostasis.
          </p>

          <h3>Tunica Intima</h3>
          <p>
            The tunica intima contains the endothelial lining and underlying connective tissue.
          </p>

          <h3>Tunica Media</h3>
          <p>
            The tunica media contains vascular smooth muscle and elastic components and is particularly
            prominent in arteries.
          </p>

          <h3>Tunica Adventitia</h3>
          <p>
            The adventitia is composed predominantly of connective tissue and provides structural
            support and anchoring.
          </p>

          <h3>Capillary Types</h3>
          <ul>
            <li><strong>Continuous capillaries</strong> – relatively uninterrupted endothelial lining.</li>
            <li><strong>Fenestrated capillaries</strong> – contain specialized pores and are common in tissues requiring increased exchange.</li>
            <li><strong>Sinusoidal capillaries</strong> – have larger openings and greater permeability.</li>
          </ul>
        `,

        embryology: `
          <h2>Blood Vessel Embryology</h2>

          <p>
            Blood vessels develop primarily from mesoderm through processes involving vasculogenesis
            and angiogenesis.
          </p>

          <h3>Vasculogenesis</h3>
          <p>
            New vascular structures arise from endothelial precursor cells during early development.
          </p>

          <h3>Angiogenesis</h3>
          <p>
            New vessels develop from pre-existing vessels through endothelial sprouting and remodeling.
          </p>

          <h3>Fetal Circulation</h3>
          <p>
            The fetal circulation is adapted to exchange gases and nutrients through the placenta
            rather than the fetal lungs.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Blood Vessel Facts</h2>

          <ul>
            <li>Arteries carry blood away from the heart.</li>
            <li>Veins return blood toward the heart.</li>
            <li>Capillaries are the principal sites of exchange.</li>
            <li>Arterioles are major resistance vessels.</li>
            <li>Veins act as important capacitance vessels.</li>
            <li>The endothelium regulates vascular tone and permeability.</li>
            <li>Nitric oxide promotes vasodilation.</li>
            <li>Endothelin promotes vasoconstriction.</li>
            <li>Atherosclerosis primarily affects large and medium-sized arteries.</li>
            <li>Deep vein thrombosis can lead to pulmonary embolism.</li>
            <li>Systemic vascular resistance is strongly influenced by arteriolar diameter.</li>
          </ul>
        `
      },

      // ============================================================
      // BLOOD VESSEL PARTS
      // ============================================================

      parts: [

        {
          id: "arteries",
          name: "Arteries",
          modelPath: "models/blood-vessels/",
          modelFile: "artery.glb",

          notes: {
            anatomy: `
              <h2>Arteries</h2>
              <p>
                Arteries are blood vessels that carry blood away from the heart. Most systemic
                arteries carry oxygenated blood, while the pulmonary arteries carry deoxygenated blood.
              </p>

              <h3>Types</h3>
              <ul>
                <li>Elastic arteries</li>
                <li>Muscular arteries</li>
                <li>Arterioles</li>
              </ul>

              <h3>Examples</h3>
              <ul>
                <li>Aorta</li>
                <li>Carotid arteries</li>
                <li>Subclavian arteries</li>
                <li>Coronary arteries</li>
                <li>Renal arteries</li>
                <li>Femoral arteries</li>
              </ul>
            `,

            physiology: `
              <p>
                Elastic arteries buffer the pulsatile output of the heart, while muscular arteries
                distribute blood to organs. Arterioles regulate local resistance and tissue perfusion.
              </p>
            `,

            pathology: `
              <ul>
                <li>Atherosclerosis</li>
                <li>Aneurysm</li>
                <li>Arterial thrombosis</li>
                <li>Peripheral arterial disease</li>
                <li>Vasculitis</li>
              </ul>
            `
          }
        },

        {
          id: "veins",
          name: "Veins",
          modelPath: "models/blood-vessels/",
          modelFile: "vein.glb",

          notes: {
            anatomy: `
              <h2>Veins</h2>
              <p>
                Veins return blood toward the heart. Most systemic veins carry deoxygenated blood,
                while pulmonary veins carry oxygenated blood.
              </p>

              <h3>Examples</h3>
              <ul>
                <li>Superior vena cava</li>
                <li>Inferior vena cava</li>
                <li>Jugular veins</li>
                <li>Subclavian veins</li>
                <li>Femoral veins</li>
                <li>Pulmonary veins</li>
              </ul>
            `,

            physiology: `
              <p>
                Veins operate under relatively low pressure and serve as major blood reservoirs.
                Venous return is assisted by skeletal muscle contraction, respiratory movements and
                venous valves.
              </p>
            `,

            pathology: `
              <ul>
                <li>Deep vein thrombosis</li>
                <li>Varicose veins</li>
                <li>Chronic venous insufficiency</li>
                <li>Venous ulcers</li>
              </ul>
            `
          }
        },

        {
          id: "capillaries",
          name: "Capillaries",
          modelPath: "models/blood-vessels/",
          modelFile: "capillary.glb",

          notes: {
            anatomy: `
              <h2>Capillaries</h2>

              <p>
                Capillaries are microscopic blood vessels that connect arterioles and venules and
                provide the principal interface between circulating blood and tissues.
              </p>

              <h3>Structure</h3>
              <p>
                Their walls are extremely thin, generally consisting of a single layer of endothelial
                cells supported by a basement membrane.
              </p>

              <h3>Types</h3>
              <ul>
                <li>Continuous</li>
                <li>Fenestrated</li>
                <li>Sinusoidal</li>
              </ul>
            `,

            physiology: `
              <h2>Capillary Physiology</h2>

              <p>
                Capillaries permit exchange of oxygen, carbon dioxide, nutrients, hormones, metabolic
                products and fluid between blood and tissues.
              </p>

              <p>
                Exchange occurs through diffusion, filtration, reabsorption and other transport
                mechanisms depending on the substance and tissue.
              </p>
            `,

            pathology: `
              <h2>Capillary Pathology</h2>

              <p>
                Abnormal capillary permeability contributes to tissue edema, inflammation and
                microvascular injury. Capillary damage is particularly important in diabetes,
                sepsis and systemic inflammatory states.
              </p>
            `
          }
        },

        {
          id: "aorta",
          name: "Aorta",
          modelPath: "models/blood-vessels/",
          modelFile: "aorta.glb",

          notes: {
            anatomy: `
              <h2>Aorta</h2>

              <p>
                The aorta is the largest artery in the body and carries oxygenated blood from the
                left ventricle to the systemic circulation.
              </p>

              <h3>Major Sections</h3>
              <ul>
                <li>Ascending aorta</li>
                <li>Aortic arch</li>
                <li>Descending thoracic aorta</li>
                <li>Abdominal aorta</li>
              </ul>

              <h3>Major Branches of the Aortic Arch</h3>
              <ul>
                <li>Brachiocephalic trunk</li>
                <li>Left common carotid artery</li>
                <li>Left subclavian artery</li>
              </ul>
            `,

            physiology: `
              <p>
                The elastic properties of the aorta allow it to expand during ventricular systole
                and recoil during diastole, helping maintain continuous arterial blood flow.
              </p>
            `,

            pathology: `
              <ul>
                <li>Aortic aneurysm</li>
                <li>Aortic dissection</li>
                <li>Atherosclerosis</li>
                <li>Aortic rupture</li>
                <li>Aortitis</li>
              </ul>
            `
          }
        },

        {
          id: "pulmonary-vessels",
          name: "Pulmonary Vessels",
          modelPath: "models/blood-vessels/",
          modelFile: "pulmonary_vessels.glb",

          notes: {
            anatomy: `
              <h2>Pulmonary Vessels</h2>

              <p>
                The pulmonary circulation transports blood between the right ventricle and lungs.
              </p>

              <ul>
                <li>Pulmonary trunk</li>
                <li>Right pulmonary artery</li>
                <li>Left pulmonary artery</li>
                <li>Pulmonary arterioles</li>
                <li>Pulmonary capillaries</li>
                <li>Pulmonary veins</li>
              </ul>
            `,

            physiology: `
              <p>
                Deoxygenated blood leaves the right ventricle through the pulmonary trunk and reaches
                pulmonary capillaries surrounding the alveoli. Oxygenated blood then returns to the
                left atrium through the pulmonary veins.
              </p>
            `,

            clinical: `
              <h2>Clinical Correlations</h2>

              <ul>
                <li>Pulmonary embolism can obstruct pulmonary arterial blood flow.</li>
                <li>Pulmonary hypertension increases pulmonary vascular resistance.</li>
                <li>Pulmonary edema can impair gas exchange.</li>
              </ul>
            `
          }
        }
      ]
    }