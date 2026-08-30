export const arteries = {
  id: "arteries",
  name: "Arteries",
  modelPath: "models/arteries/",
  modelFile: "arterial-system.glb",

  notes: {

    anatomy: `
      <h2>Arteries: Comprehensive Anatomy</h2>

      <h3>Introduction</h3>

      <p>
        Arteries are blood vessels that transport blood <strong>away from the heart</strong>.
        They form the high-pressure component of the cardiovascular system and distribute
        blood from the ventricles to the tissues of the body.
      </p>

      <p>
        In the systemic circulation, arteries generally transport oxygenated blood from the
        left ventricle to the tissues. The major exception is the pulmonary arterial system,
        which transports deoxygenated blood from the right ventricle to the lungs.
      </p>

      <p>
        Arteries progressively decrease in diameter as they branch from large elastic arteries
        into muscular arteries, small arteries and arterioles. Eventually, arterioles give rise
        to capillary networks, although capillaries are not classified as arteries.
      </p>

      <figure>
        <img
          src="images/cardiovascular/arterial_tree.jpg"
          alt="Diagram of the systemic arterial tree"
          loading="lazy"
        />
        <figcaption>
          Figure 1. Major arterial tree of the human body.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Standring, S. (Ed.). (2021). <em>Gray's anatomy: The anatomical basis of clinical practice</em>
        (42nd ed.). Elsevier.
      </p>

      <h3>Principal Functions of Arteries</h3>

      <ul>
        <li>Transport blood away from the heart.</li>
        <li>Distribute blood to organs and tissues.</li>
        <li>Maintain arterial pressure.</li>
        <li>Buffer the pulsatile output of the ventricles.</li>
        <li>Regulate regional tissue perfusion through changes in vascular diameter.</li>
        <li>Participate in thermoregulation.</li>
        <li>Provide routes for collateral circulation.</li>
        <li>Participate in inflammatory, endocrine and metabolic signaling.</li>
      </ul>

      <h3>Classification of Arteries</h3>

      <h4>1. Elastic Arteries</h4>

      <p>
        Elastic arteries are the largest arteries and contain a high proportion of elastic
        tissue within their tunica media. They receive blood directly from the ventricles
        and accommodate large changes in pressure during the cardiac cycle.
      </p>

      <p>Major examples include:</p>

      <ul>
        <li>Aorta</li>
        <li>Pulmonary trunk</li>
        <li>Brachiocephalic trunk</li>
        <li>Major proximal branches of the aorta</li>
      </ul>

      <h4>2. Muscular Arteries</h4>

      <p>
        Muscular arteries contain a relatively prominent smooth-muscle component in their
        tunica media. They distribute blood to specific organs and regions of the body.
      </p>

      <p>Examples include:</p>

      <ul>
        <li>Radial artery</li>
        <li>Ulnar artery</li>
        <li>Brachial artery</li>
        <li>Femoral artery</li>
        <li>Splenic artery</li>
        <li>Renal artery</li>
        <li>Coronary arteries</li>
        <li>Common carotid arteries</li>
      </ul>

      <h4>3. Small Arteries and Arterioles</h4>

      <p>
        Arterioles are small resistance vessels that make major contributions to the regulation
        of systemic vascular resistance and tissue blood flow.
      </p>

      <h3>General Structure of an Arterial Wall</h3>

      <p>
        A typical artery consists of three principal layers:
      </p>

      <ol>
        <li><strong>Tunica intima</strong></li>
        <li><strong>Tunica media</strong></li>
        <li><strong>Tunica adventitia</strong></li>
      </ol>

      <figure>
        <img
          src="images/cardiovascular/arterial_wall_layers.jpg"
          alt="Layers of an arterial wall"
          loading="lazy"
        />
        <figcaption>
          Figure 2. Histological organization of an arterial wall.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Mescher, A. L. (2021). <em>Junqueira's basic histology: Text and atlas</em> (16th ed.).
        McGraw Hill.
      </p>

      <h4>Tunica Intima</h4>

      <p>
        The tunica intima is the innermost layer of the artery. It is lined by a single layer
        of endothelial cells resting on a basement membrane. Larger arteries may contain
        additional subendothelial connective tissue.
      </p>

      <h4>Internal Elastic Lamina</h4>

      <p>
        In many muscular arteries, the internal elastic lamina separates the tunica intima
        from the tunica media. It consists predominantly of elastic tissue.
      </p>

      <h4>Tunica Media</h4>

      <p>
        The tunica media contains concentric layers of vascular smooth muscle together with
        elastic fibers and connective tissue. It is particularly prominent in muscular
        arteries.
      </p>

      <h4>External Elastic Lamina</h4>

      <p>
        Larger muscular arteries may possess an external elastic lamina separating the tunica
        media from the tunica adventitia.
      </p>

      <h4>Tunica Adventitia</h4>

      <p>
        The tunica adventitia is the outer connective-tissue layer. It provides mechanical
        support and anchors the artery to surrounding tissues.
      </p>

      <h3>Arterial Branching</h3>

      <p>
        Arteries commonly branch into progressively smaller vessels. Branching patterns vary
        considerably between individuals and may provide alternative routes for blood flow.
      </p>

      <h3>Anastomoses</h3>

      <p>
        An arterial anastomosis is a connection between arteries. Anastomoses can provide
        alternative pathways for blood flow when one arterial route becomes narrowed or
        obstructed.
      </p>

      <p>
        Important arterial anastomotic networks occur around joints, in the brain, around
        the scapula, in the hand, and in the abdomen.
      </p>

      <h3>End Arteries</h3>

      <p>
        An end artery is an artery whose territory has little or no effective collateral
        arterial supply. Occlusion of an end artery can therefore result in significant
        ischemia and tissue infarction.
      </p>

      <p>
        Examples of clinically important end-arterial territories include portions of the
        retinal circulation and certain branches supplying the brain and kidneys.
      </p>

      <h3>Arterial Pulse Points</h3>

      <p>
        Because arterial pressure waves can be transmitted through the arterial tree, several
        superficial arteries can be palpated clinically.
      </p>

      <ul>
        <li>Temporal artery</li>
        <li>Carotid artery</li>
        <li>Brachial artery</li>
        <li>Radial artery</li>
        <li>Femoral artery</li>
        <li>Popliteal artery</li>
        <li>Posterior tibial artery</li>
        <li>Dorsalis pedis artery</li>
      </ul>

      <figure>
        <img
          src="images/cardiovascular/arterial_pulse_points.jpg"
          alt="Major arterial pulse points"
          loading="lazy"
        />
        <figcaption>
          Figure 3. Major clinically palpable arterial pulse points.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
        <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    physiology: `
      <h2>Arterial Physiology</h2>

      <h3>Overview</h3>

      <p>
        Arteries are dynamic physiological structures rather than simple passive tubes.
        They transport blood, maintain pressure, buffer cardiac pulsatility and regulate
        tissue perfusion.
      </p>

      <h3>Arterial Blood Flow</h3>

      <p>
        Blood moves through arteries because of pressure gradients generated primarily by
        ventricular contraction. Blood flows from regions of higher pressure toward regions
        of lower pressure.
      </p>

      <p>
        The left ventricle generates systemic arterial pressure, whereas the right ventricle
        generates pulmonary arterial pressure.
      </p>

      <h3>Systolic Pressure</h3>

      <p>
        Systolic blood pressure represents the maximum arterial pressure reached during
        ventricular systole.
      </p>

      <h3>Diastolic Pressure</h3>

      <p>
        Diastolic blood pressure represents the arterial pressure during ventricular
        relaxation and filling.
      </p>

      <h3>Pulse Pressure</h3>

      <p>
        Pulse pressure is the difference between systolic and diastolic arterial pressure.
      </p>

      <p>
        <strong>Pulse pressure = systolic blood pressure − diastolic blood pressure</strong>
      </p>

      <h3>Mean Arterial Pressure</h3>

      <p>
        Mean arterial pressure represents the average effective pressure driving systemic
        blood flow during a cardiac cycle.
      </p>

      <p>
        At normal resting heart rates, a commonly used approximation is:
      </p>

      <p>
        <strong>MAP ≈ DBP + 1/3(SBP − DBP)</strong>
      </p>

      <h3>Arterial Compliance</h3>

      <p>
        Arterial compliance describes the ability of an artery to expand in response to
        an increase in intravascular pressure.
      </p>

      <p>
        Large elastic arteries such as the aorta have high compliance relative to smaller
        muscular arteries.
      </p>

      <h3>Windkessel Effect</h3>

      <p>
        During ventricular systole, the aorta expands and stores part of the energy generated
        by ventricular contraction. During diastole, elastic recoil of the arterial wall
        helps maintain forward blood flow.
      </p>

      <figure>
        <img
          src="images/cardiovascular/aortic_windkessel_effect.jpg"
          alt="Windkessel effect of the aorta"
          loading="lazy"
        />
        <figcaption>
          Figure 4. Elastic buffering and the Windkessel effect of the aorta.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Hall, J. E. (2021). <em>Guyton and Hall textbook of medical physiology</em> (14th ed.).
        Elsevier.
      </p>

      <h3>Vascular Resistance</h3>

      <p>
        Resistance to blood flow is strongly influenced by vessel radius. According to the
        principles described by Poiseuille's law, small changes in vessel radius can produce
        large changes in resistance.
      </p>

      <p>
        Arterioles are therefore particularly important in controlling systemic vascular
        resistance.
      </p>

      <h3>Vasoconstriction</h3>

      <p>
        Vasoconstriction occurs when vascular smooth muscle contracts, reducing arterial
        diameter. It generally increases vascular resistance and can increase arterial
        pressure.
      </p>

      <h3>Vasodilation</h3>

      <p>
        Vasodilation occurs when vascular smooth muscle relaxes, increasing vessel diameter.
        It generally decreases vascular resistance and can increase tissue blood flow.
      </p>

      <h3>Autoregulation</h3>

      <p>
        Many organs can maintain relatively stable blood flow despite changes in perfusion
        pressure. This phenomenon is called autoregulation.
      </p>

      <h3>Myogenic Regulation</h3>

      <p>
        Vascular smooth muscle can respond directly to changes in transmural pressure.
        Increased stretch may cause contraction, helping stabilize tissue blood flow.
      </p>

      <h3>Metabolic Regulation</h3>

      <p>
        Increased tissue metabolic activity can promote local vasodilation. Important
        metabolic signals include increased carbon dioxide, hydrogen ions, potassium,
        adenosine and reduced oxygen availability.
      </p>

      <h3>Neural Regulation</h3>

      <p>
        Sympathetic nervous activity can produce arterial and arteriolar vasoconstriction
        through alpha-adrenergic receptors.
      </p>

      <h3>Endothelial Regulation</h3>

      <p>
        Endothelial cells regulate arterial diameter through substances such as nitric oxide,
        prostacyclin and endothelin.
      </p>

      <h3>Arterial Baroreceptors</h3>

      <p>
        Important arterial baroreceptors are located in the carotid sinus and aortic arch.
        They detect changes in arterial wall stretch and participate in rapid regulation
        of blood pressure.
      </p>

      <figure>
        <img
          src="images/cardiovascular/baroreceptor_reflex.jpg"
          alt="Arterial baroreceptor reflex"
          loading="lazy"
        />
        <figcaption>
          Figure 5. Arterial baroreceptor reflex involved in short-term blood-pressure regulation.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Hall, J. E. (2021). <em>Guyton and Hall textbook of medical physiology</em> (14th ed.).
        Elsevier.
      </p>

      <h3>Arterial Aging</h3>

      <p>
        With aging, arteries may become stiffer due to structural changes involving collagen,
        elastin, calcification and vascular remodeling. Increased arterial stiffness can
        contribute to increased pulse pressure and cardiovascular risk.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    biochemistry: `
      <h2>Arterial Biochemistry</h2>

      <h3>Endothelial Nitric Oxide</h3>

      <p>
        Nitric oxide is an important endogenous vasodilator synthesized by endothelial
        nitric oxide synthase from L-arginine.
      </p>

      <p>
        Nitric oxide diffuses into vascular smooth muscle and activates soluble guanylyl
        cyclase, increasing cyclic GMP and promoting smooth-muscle relaxation.
      </p>

      <h3>Endothelin</h3>

      <p>
        Endothelins are potent vasoconstrictor peptides produced by endothelial cells.
        Endothelin-1 is particularly important in vascular regulation.
      </p>

      <h3>Prostacyclin</h3>

      <p>
        Prostacyclin is produced by endothelial cells and contributes to vasodilation while
        inhibiting platelet aggregation.
      </p>

      <h3>Angiotensin II</h3>

      <p>
        Angiotensin II is a major component of the renin-angiotensin-aldosterone system.
        It produces vasoconstriction and promotes aldosterone secretion.
      </p>

      <h3>Renin-Angiotensin-Aldosterone System</h3>

      <p>
        Reduced renal perfusion, sympathetic stimulation and reduced sodium delivery to the
        macula densa can stimulate renin release.
      </p>

      <p>
        Renin converts angiotensinogen to angiotensin I. Angiotensin-converting enzyme then
        converts angiotensin I to angiotensin II.
      </p>

      <figure>
        <img
          src="images/cardiovascular/renin_angiotensin_aldosterone_system.jpg"
          alt="Renin angiotensin aldosterone system"
          loading="lazy"
        />
        <figcaption>
          Figure 6. Renin-angiotensin-aldosterone system and regulation of arterial pressure.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Hall, J. E. (2021). <em>Guyton and Hall textbook of medical physiology</em> (14th ed.).
        Elsevier.
      </p>

      <h3>Oxidative Stress</h3>

      <p>
        Reactive oxygen species can impair endothelial function by reducing nitric oxide
        bioavailability and promoting oxidative modification of lipoproteins.
      </p>

      <h3>LDL Cholesterol</h3>

      <p>
        Low-density lipoprotein is an important contributor to atherosclerotic plaque
        formation. LDL particles can enter the arterial intima and undergo modification,
        contributing to inflammatory processes within the arterial wall.
      </p>

      <h3>HDL</h3>

      <p>
        High-density lipoprotein participates in reverse cholesterol transport and has
        multiple effects associated with vascular homeostasis.
      </p>

      <h3>Inflammatory Mediators</h3>

      <p>
        Cytokines, chemokines and other inflammatory mediators contribute to endothelial
        activation and arterial wall inflammation during vascular disease.
      </p>

      <h3>Thrombosis and Arterial Biochemistry</h3>

      <p>
        Damage or disruption of the arterial endothelium can expose thrombogenic components
        of the vessel wall and promote platelet adhesion, activation and aggregation.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    pathology: `
      <h2>Arterial Pathology</h2>

      <h3>Atherosclerosis</h3>

      <p>
        Atherosclerosis is a chronic inflammatory disease affecting the intima of large
        and medium-sized arteries. It involves lipid accumulation, inflammatory cell
        recruitment, smooth-muscle responses and formation of fibrous plaques.
      </p>

      <figure>
        <img
          src="images/cardiovascular/Atherosclerosis_diagram.png"
          alt="Diagram illustrating atherosclerosis"
          loading="lazy"
        />
        <figcaption>
          Figure 7. Development of an atherosclerotic arterial plaque.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Kumar, V., Abbas, A. K., &amp; Aster, J. C. (2020).
        <em>Robbins and Cotran pathologic basis of disease</em> (10th ed.). Elsevier.
      </p>

      <h3>Stages of Atherosclerosis</h3>

      <ol>
        <li>Endothelial dysfunction</li>
        <li>Lipoprotein entry into the arterial intima</li>
        <li>Lipoprotein modification</li>
        <li>Monocyte recruitment</li>
        <li>Macrophage formation</li>
        <li>Foam-cell accumulation</li>
        <li>Fatty streak formation</li>
        <li>Smooth-muscle migration and proliferation</li>
        <li>Extracellular matrix deposition</li>
        <li>Fibrous plaque formation</li>
        <li>Plaque progression or rupture</li>
      </ol>

      <h3>Arterial Thrombosis</h3>

      <p>
        Arterial thrombosis commonly develops at sites of endothelial injury or disruption,
        particularly over atherosclerotic plaques. Platelet activation is an important
        component of arterial thrombus formation.
      </p>

      <h3>Arterial Embolism</h3>

      <p>
        An arterial embolus is material carried through the arterial circulation that becomes
        lodged in a vessel and obstructs blood flow. Emboli may consist of thrombus, among
        other materials.
      </p>

      <h3>Aneurysm</h3>

      <p>
        An aneurysm is an abnormal localized dilation of an artery caused by weakening of
        the arterial wall.
      </p>

      <h3>Aortic Aneurysm</h3>

      <p>
        Aortic aneurysms may occur in the thoracic or abdominal aorta. Large aneurysms can
        produce complications including rupture, thrombosis, embolization and compression
        of adjacent structures.
      </p>

      <h3>Aortic Dissection</h3>

      <p>
        Aortic dissection occurs when a tear in the aortic intima permits blood to enter
        the media and separate layers of the arterial wall.
      </p>

      <h3>Peripheral Arterial Disease</h3>

      <p>
        Peripheral arterial disease commonly results from atherosclerotic narrowing of
        arteries supplying the lower extremities.
      </p>

      <h3>Acute Limb Ischemia</h3>

      <p>
        Acute limb ischemia is a sudden reduction in arterial perfusion that threatens
        tissue viability.
      </p>

      <h3>Arterial Occlusion</h3>

      <p>
        Occlusion may result from thrombosis, embolism, severe atherosclerotic disease,
        trauma or other vascular pathology.
      </p>

      <h3>Arterial Stenosis</h3>

      <p>
        Arterial stenosis refers to narrowing of an arterial lumen. Significant stenosis
        can reduce distal perfusion and cause ischemic symptoms.
      </p>

      <h3>Vasculitis</h3>

      <p>
        Vasculitis is inflammation of the blood-vessel wall. Different forms of vasculitis
        preferentially affect different arterial sizes and anatomical territories.
      </p>

      <h3>Arterial Calcification</h3>

      <p>
        Calcification may occur within arterial walls and can contribute to arterial
        stiffness and reduced vascular compliance.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    clinical: `
      <h2>Clinical Arterial Medicine</h2>

      <h3>Arterial Pulse</h3>

      <p>
        The arterial pulse is the palpable pressure wave generated by ventricular ejection.
        Pulse examination provides information about heart rate, rhythm and arterial
        perfusion.
      </p>

      <h3>Pulse Characteristics</h3>

      <ul>
        <li>Rate</li>
        <li>Rhythm</li>
        <li>Volume</li>
        <li>Character</li>
        <li>Symmetry</li>
        <li>Contour</li>
      </ul>

      <h3>Blood Pressure</h3>

      <p>
        Blood pressure is commonly measured using a sphygmomanometer or automated oscillometric
        device. The brachial artery is commonly used for non-invasive measurement.
      </p>

      <h3>Blood Pressure and Arterial Disease</h3>

      <p>
        Persistent elevation of arterial pressure increases mechanical stress on arterial
        walls and contributes to vascular remodeling and cardiovascular complications.
      </p>

      <h3>Carotid Artery Examination</h3>

      <p>
        The carotid pulse can be assessed clinically, although excessive pressure should be
        avoided because stimulation of the carotid sinus may influence heart rate and blood
        pressure.
      </p>

      <h3>Radial Artery</h3>

      <p>
        The radial artery is one of the most commonly palpated arteries. It is also used for
        arterial blood sampling and can be used as a vascular access site for certain
        procedures.
      </p>

      <h3>Arterial Blood Gas Sampling</h3>

      <p>
        Arterial blood gas analysis commonly uses arterial blood, frequently obtained from
        the radial artery. It provides information about oxygenation, carbon dioxide
        elimination and acid-base status.
      </p>

      <h3>Arterial Catheterization</h3>

      <p>
        An arterial catheter can provide continuous blood-pressure monitoring and permit
        repeated arterial blood sampling in selected critically ill patients.
      </p>

      <h3>Coronary Artery Disease</h3>

      <p>
        Coronary artery disease usually results from atherosclerotic narrowing of the
        coronary arteries. Reduced coronary blood flow can produce myocardial ischemia.
      </p>

      <figure>
        <img
          src="images/cardiovascular/Coronary_arteries.svg.webp"
          alt="Coronary arteries of the heart"
          loading="lazy"
        />
        <figcaption>
          Figure 8. Major coronary arteries.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
        <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
      </p>

      <h3>Myocardial Infarction</h3>

      <p>
        Myocardial infarction usually results from acute coronary arterial occlusion
        following disruption of an atherosclerotic plaque and formation of an obstructing
        thrombus.
      </p>

      <figure>
        <img
          src="images/cardiovascular/Myocardial_infarction.svg.webp"
          alt="Myocardial infarction illustration"
          loading="lazy"
        />
        <figcaption>
          Figure 9. Arterial occlusion associated with myocardial infarction.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Kumar, V., Abbas, A. K., &amp; Aster, J. C. (2020).
        <em>Robbins and Cotran pathologic basis of disease</em> (10th ed.). Elsevier.
      </p>

      <h3>Stroke</h3>

      <p>
        Ischemic stroke can occur when an artery supplying the brain becomes occluded,
        resulting in inadequate cerebral perfusion and tissue injury.
      </p>

      <h3>Transient Ischemic Attack</h3>

      <p>
        A transient ischemic attack is a transient episode of neurological dysfunction
        caused by focal cerebral, spinal or retinal ischemia without acute infarction.
      </p>

      <h3>Peripheral Arterial Disease</h3>

      <p>
        Patients with peripheral arterial disease may experience intermittent claudication,
        reduced peripheral pulses, cool extremities, skin changes and, in advanced disease,
        rest pain or tissue loss.
      </p>

      <h3>Critical Limb Ischemia</h3>

      <p>
        Severe chronic arterial insufficiency may produce ischemic rest pain, non-healing
        wounds and gangrene.
      </p>

      <h3>Arterial Examination</h3>

      <p>
        Clinical assessment of arterial circulation may include inspection, palpation of
        pulses, blood-pressure measurement, assessment of skin temperature and colour,
        capillary refill and vascular imaging when indicated.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    pharmacology: `
      <h2>Pharmacology of Arterial Disease</h2>

      <h3>Antiplatelet Drugs</h3>

      <p>
        Antiplatelet drugs reduce platelet activation or aggregation and are particularly
        important in the prevention and management of arterial thrombotic disease.
      </p>

      <ul>
        <li>Aspirin</li>
        <li>Clopidogrel</li>
        <li>Prasugrel</li>
        <li>Ticagrelor</li>
      </ul>

      <h3>Statins</h3>

      <p>
        Statins inhibit HMG-CoA reductase and reduce hepatic cholesterol synthesis. They
        lower LDL cholesterol and are central to the prevention of atherosclerotic
        cardiovascular disease.
      </p>

      <h3>ACE Inhibitors</h3>

      <p>
        ACE inhibitors reduce formation of angiotensin II and can reduce vasoconstriction
        and aldosterone-mediated effects.
      </p>

      <p>Examples include:</p>

      <ul>
        <li>Enalapril</li>
        <li>Lisinopril</li>
        <li>Ramipril</li>
        <li>Perindopril</li>
      </ul>

      <h3>Angiotensin II Receptor Blockers</h3>

      <p>
        ARBs block the effects of angiotensin II at the angiotensin II receptor.
      </p>

      <ul>
        <li>Losartan</li>
        <li>Valsartan</li>
        <li>Telmisartan</li>
        <li>Candesartan</li>
      </ul>

      <h3>Calcium-Channel Blockers</h3>

      <p>
        Calcium-channel blockers can reduce vascular smooth-muscle contraction and are
        commonly used in hypertension and selected vascular disorders.
      </p>

      <ul>
        <li>Amlodipine</li>
        <li>Nifedipine</li>
        <li>Felodipine</li>
        <li>Diltiazem</li>
        <li>Verapamil</li>
      </ul>

      <h3>Nitrates</h3>

      <p>
        Organic nitrates increase nitric oxide signaling and promote vascular smooth-muscle
        relaxation. They are particularly important in the management of angina.
      </p>

      <ul>
        <li>Nitroglycerin</li>
        <li>Isosorbide dinitrate</li>
        <li>Isosorbide mononitrate</li>
      </ul>

      <h3>Beta-Adrenergic Blockers</h3>

      <p>
        Beta blockers reduce sympathetic effects on the cardiovascular system and may reduce
        myocardial oxygen demand and blood pressure in appropriate patients.
      </p>

      <h3>Anticoagulants</h3>

      <p>
        Anticoagulants interfere with coagulation pathways. Their indications differ from
        those of antiplatelet agents, although both classes may be used in selected
        thrombotic conditions.
      </p>

      <h3>Thrombolytic Therapy</h3>

      <p>
        Fibrinolytic drugs promote breakdown of fibrin within thrombi. Their use is restricted
        to carefully selected clinical situations because of the risk of serious bleeding.
      </p>

      <h3>Peripheral Arterial Disease Pharmacology</h3>

      <p>
        Management may include antiplatelet therapy, lipid-lowering therapy, blood-pressure
        control, diabetes management and selected drugs for symptom improvement, together
        with exercise therapy and risk-factor modification.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    microbiology: `
      <h2>Microbiology of Arterial Disease</h2>

      <h3>Overview</h3>

      <p>
        Primary infection of arteries is uncommon compared with non-infectious arterial
        diseases such as atherosclerosis. However, microorganisms can infect arterial walls,
        particularly in the setting of bacteremia, endocarditis, vascular injury or
        immunosuppression.
      </p>

      <h3>Infectious Aortitis</h3>

      <p>
        Infectious inflammation of the aorta can result from bloodstream infection or
        extension of infection from surrounding structures.
      </p>

      <h3>Mycotic Aneurysm</h3>

      <p>
        A mycotic aneurysm is an arterial aneurysm associated with infection. Despite its
        name, the term does not necessarily imply fungal infection.
      </p>

      <h3>Septic Emboli</h3>

      <p>
        Infective endocarditis can produce infected embolic material that travels through
        the arterial circulation and may obstruct or infect distal arterial territories.
      </p>

      <h3>Syphilitic Aortitis</h3>

      <p>
        Untreated tertiary syphilis can produce chronic inflammation involving the aorta,
        particularly the thoracic aorta, and may result in aortic dilation and aneurysm.
      </p>

      <h3>Infectious Arterial Complications</h3>

      <ul>
        <li>Arterial wall destruction</li>
        <li>Aneurysm formation</li>
        <li>Thrombosis</li>
        <li>Embolization</li>
        <li>Rupture</li>
        <li>Distal tissue ischemia</li>
      </ul>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    immunology: `
      <h2>Immunology of Arteries</h2>

      <h3>Endothelial Immune Function</h3>

      <p>
        The arterial endothelium participates actively in inflammatory and immune responses.
        Endothelial cells can respond to cytokines and other inflammatory signals by altering
        adhesion molecule expression and interactions with circulating leukocytes.
      </p>

      <h3>Leukocyte Adhesion</h3>

      <p>
        During inflammation, endothelial cells can increase expression of adhesion molecules
        that facilitate leukocyte attachment and migration into the arterial wall.
      </p>

      <h3>Atherosclerosis as an Inflammatory Disease</h3>

      <p>
        Atherosclerosis involves both lipid accumulation and chronic inflammation. Monocytes
        enter the arterial intima, differentiate into macrophages and participate in plaque
        development.
      </p>

      <h3>Macrophages</h3>

      <p>
        Macrophages can ingest modified lipoproteins and become foam cells. They also produce
        inflammatory mediators and enzymes that may contribute to plaque instability.
      </p>

      <h3>T Lymphocytes</h3>

      <p>
        T lymphocytes participate in the immune response within atherosclerotic plaques and
        can influence inflammatory activity and plaque stability.
      </p>

      <h3>Vasculitis</h3>

      <p>
        Immune-mediated inflammation of arterial walls can produce stenosis, thrombosis,
        aneurysm formation or tissue ischemia.
      </p>

      <h3>Giant Cell Arteritis</h3>

      <p>
        Giant cell arteritis is a large-vessel vasculitis that commonly affects branches of
        the external carotid artery and may cause headache, visual symptoms and systemic
        inflammatory manifestations.
      </p>

      <h3>Takayasu Arteritis</h3>

      <p>
        Takayasu arteritis is a large-vessel vasculitis that primarily affects the aorta
        and its major branches.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    histology: `
      <h2>Arterial Histology</h2>

      <h3>Endothelium</h3>

      <p>
        The endothelial lining consists of simple squamous cells forming the luminal surface
        of the artery. Endothelial cells regulate permeability, coagulation, inflammation
        and vascular tone.
      </p>

      <h3>Elastic Arteries</h3>

      <p>
        Elastic arteries contain numerous fenestrated elastic lamellae within the tunica
        media. This arrangement allows the vessel to expand during systole and recoil
        during diastole.
      </p>

      <h3>Muscular Arteries</h3>

      <p>
        Muscular arteries contain numerous layers of smooth muscle in the tunica media.
        They are specialized for distribution and regulation of regional blood flow.
      </p>

      <h3>Small Arteries</h3>

      <p>
        As arterial diameter decreases, the number of smooth-muscle layers also decreases.
      </p>

      <h3>Arterioles</h3>

      <p>
        Arterioles typically contain one or several layers of smooth muscle and are major
        sites of regulation of vascular resistance.
      </p>

      <figure>
        <img
          src="images/cardiovascular/artery_histology.jpg"
          alt="Histological appearance of an artery"
          loading="lazy"
        />
        <figcaption>
          Figure 10. Histological appearance of an artery showing the principal arterial wall layers.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Mescher, A. L. (2021). <em>Junqueira's basic histology: Text and atlas</em> (16th ed.).
        McGraw Hill.
      </p>

      <h3>Artery Versus Arteriole</h3>

      <p>
        Large arteries have multiple layers of smooth muscle and elastic tissue, whereas
        arterioles have fewer smooth-muscle layers and exert a disproportionately important
        influence on vascular resistance.
      </p>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    embryology: `
      <h2>Embryology of the Arterial System</h2>

      <h3>Development of Blood Vessels</h3>

      <p>
        The cardiovascular system develops early during embryogenesis because the rapidly
        growing embryo requires an efficient system for oxygen and nutrient transport.
      </p>

      <h3>Vasculogenesis</h3>

      <p>
        Vasculogenesis involves the formation of new blood vessels from endothelial precursor
        cells.
      </p>

      <h3>Angiogenesis</h3>

      <p>
        Angiogenesis involves formation of new vessels from pre-existing vascular structures.
      </p>

      <h3>Aortic Arch Arteries</h3>

      <p>
        The embryonic pharyngeal arch arteries undergo extensive remodeling to form major
        components of the adult arterial system.
      </p>

      <figure>
        <img
          src="images/cardiovascular/aortic_arch_embryology.jpg"
          alt="Embryological development of the aortic arch arteries"
          loading="lazy"
        />
        <figcaption>
          Figure 11. Developmental remodeling of the embryonic aortic arch arteries.
        </figcaption>
      </figure>

      <p class="reference">
        <strong>Reference:</strong>
        Moore, K. L., Persaud, T. V. N., &amp; Torchia, M. G. (2020).
        <em>The developing human: Clinically oriented embryology</em> (11th ed.).
        Elsevier.
      </p>

      <h3>Umbilical Arteries</h3>

      <p>
        The fetal umbilical arteries transport deoxygenated blood from the fetus toward
        the placenta.
      </p>

      <h3>Pulmonary Arteries</h3>

      <p>
        Development of the pulmonary arterial system is closely associated with remodeling
        of the embryonic outflow tract and aortic arch structures.
      </p>

      <h3>Congenital Arterial Abnormalities</h3>

      <ul>
        <li>Coarctation of the aorta</li>
        <li>Patent ductus arteriosus</li>
        <li>Interrupted aortic arch</li>
        <li>Aberrant subclavian artery</li>
        <li>Persistent arterial duct</li>
        <li>Congenital pulmonary arterial abnormalities</li>
      </ul>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `,


    keyFacts: `
      <h2>High-Yield Arterial Facts</h2>

      <ul>
        <li>Arteries carry blood away from the heart.</li>

        <li>
          The aorta is the largest artery in the systemic circulation.
        </li>

        <li>
          The pulmonary arteries carry deoxygenated blood from the right ventricle
          toward the lungs.
        </li>

        <li>
          Elastic arteries contain abundant elastic tissue and buffer pulsatile cardiac output.
        </li>

        <li>
          Muscular arteries distribute blood to specific organs and regions.
        </li>

        <li>
          Arterioles are major resistance vessels.
        </li>

        <li>
          The arterial wall consists primarily of tunica intima, tunica media and tunica adventitia.
        </li>

        <li>
          The tunica media is particularly prominent in arteries.
        </li>

        <li>
          The aorta demonstrates the Windkessel effect.
        </li>

        <li>
          The carotid sinus contains important arterial baroreceptors.
        </li>

        <li>
          The aortic arch also contains important arterial baroreceptors.
        </li>

        <li>
          The radial artery is commonly used for arterial pulse examination.
        </li>

        <li>
          The radial artery is commonly used for arterial blood-gas sampling.
        </li>

        <li>
          Atherosclerosis predominantly affects large and medium-sized arteries.
        </li>

        <li>
          Arterial thrombosis is strongly associated with platelet activation.
        </li>

        <li>
          Aneurysms represent abnormal arterial dilation associated with weakening
          of the arterial wall.
        </li>

        <li>
          Aortic dissection involves separation of layers of the aortic wall by blood
          entering through an intimal tear.
        </li>

        <li>
          Coronary artery obstruction can cause myocardial ischemia and infarction.
        </li>

        <li>
          Cerebral arterial occlusion can cause ischemic stroke.
        </li>

        <li>
          Peripheral arterial disease commonly results from atherosclerotic arterial narrowing.
        </li>
      </ul>

      <p style="font-size: 10px; text-align: center; margin-top: 30px;">
        Compiled by Brian Ngesa
      </p>
    `
  },


  // ============================================================
  // INDIVIDUAL ARTERIAL STRUCTURES
  // ============================================================

  parts: [

    // ============================================================
    // AORTA
    // ============================================================

    {
      id: "aorta",
      name: "Aorta",
      modelPath: "models/arteries/",
      modelFile: "aorta.glb",

      notes: {

        anatomy: `
          <h2>Aorta</h2>

          <p>
            The aorta is the largest artery in the human body. It begins at the left
            ventricle and distributes oxygenated blood to the systemic circulation.
          </p>

          <figure>
            <img
              src="images/cardiovascular/aorta_anatomy.jpg"
              alt="Anatomy of the aorta"
              loading="lazy"
            />
            <figcaption>
              Figure 12. Major anatomical divisions and branches of the aorta.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Standring, S. (Ed.). (2021). <em>Gray's anatomy: The anatomical basis of clinical practice</em>
            (42nd ed.). Elsevier.
          </p>

          <h3>Major Divisions</h3>

          <ol>
            <li>Ascending aorta</li>
            <li>Aortic arch</li>
            <li>Descending thoracic aorta</li>
            <li>Abdominal aorta</li>
          </ol>

          <h3>Ascending Aorta</h3>

          <p>
            The ascending aorta begins at the aortic valve and extends superiorly from
            the left ventricle.
          </p>

          <p>
            The right and left coronary arteries arise from the proximal ascending aorta.
          </p>

          <h3>Aortic Arch</h3>

          <p>
            The aortic arch curves posteriorly and to the left before continuing as the
            descending thoracic aorta.
          </p>

          <h3>Major Branches of the Aortic Arch</h3>

          <ol>
            <li>Brachiocephalic trunk</li>
            <li>Left common carotid artery</li>
            <li>Left subclavian artery</li>
          </ol>

          <h3>Descending Thoracic Aorta</h3>

          <p>
            The descending thoracic aorta passes through the posterior mediastinum and
            gives branches to the thoracic wall and thoracic viscera.
          </p>

          <h3>Abdominal Aorta</h3>

          <p>
            The abdominal aorta begins after passing through the aortic hiatus of the
            diaphragm and terminates by dividing into the common iliac arteries.
          </p>

          <h3>Important Abdominal Branches</h3>

          <ul>
            <li>Coeliac trunk</li>
            <li>Superior mesenteric artery</li>
            <li>Inferior mesenteric artery</li>
            <li>Renal arteries</li>
            <li>Gonadal arteries</li>
            <li>Lumbar arteries</li>
            <li>Common iliac arteries</li>
          </ul>
        `,

        physiology: `
          <h2>Aortic Physiology</h2>

          <p>
            The aorta receives high-pressure blood directly from the left ventricle.
            Its elastic wall expands during systole and recoils during diastole.
          </p>

          <h3>Windkessel Function</h3>

          <p>
            The elastic properties of the aorta transform intermittent ventricular
            ejection into a more continuous arterial flow.
          </p>

          <h3>Aortic Compliance</h3>

          <p>
            Reduced aortic compliance increases arterial stiffness and may contribute
            to increased systolic pressure and pulse pressure.
          </p>
        `,

        pathology: `
          <h2>Aortic Pathology</h2>

          <ul>
            <li>Aortic aneurysm</li>
            <li>Aortic dissection</li>
            <li>Aortic rupture</li>
            <li>Atherosclerosis</li>
            <li>Aortitis</li>
            <li>Coarctation of the aorta</li>
            <li>Traumatic aortic injury</li>
          </ul>

          <h3>Aortic Dissection</h3>

          <p>
            Aortic dissection occurs when blood enters the wall through an intimal tear
            and separates the layers of the media.
          </p>
        `,

        clinical: `
          <h2>Clinical Importance of the Aorta</h2>

          <p>
            Aortic disease can compromise blood supply to multiple organs because the
            aorta supplies the major systemic arterial branches.
          </p>

          <h3>Clinical Investigations</h3>

          <ul>
            <li>Blood-pressure measurement</li>
            <li>Echocardiography</li>
            <li>CT angiography</li>
            <li>Magnetic resonance angiography</li>
            <li>Conventional angiography</li>
          </ul>
        `,

        pharmacology: `
          <h2>Pharmacology in Aortic Disease</h2>

          <p>
            Pharmacological treatment depends on the underlying condition. Blood-pressure
            reduction is particularly important in many patients with aortic disease.
          </p>

          <ul>
            <li>Beta blockers</li>
            <li>ACE inhibitors</li>
            <li>Angiotensin receptor blockers</li>
            <li>Other antihypertensive agents</li>
            <li>Statins when atherosclerotic disease is present</li>
          </ul>
        `
      }
    },


    // ============================================================
    // CORONARY ARTERIES
    // ============================================================

    {
      id: "coronary-arteries",
      name: "Coronary Arteries",
      modelPath: "models/arteries/",
      modelFile: "coronary-arteries.glb",

      notes: {

        anatomy: `
          <h2>Coronary Arteries</h2>

          <p>
            The coronary arteries supply oxygenated blood to the myocardium. The principal
            coronary arteries are the right coronary artery and left coronary artery.
          </p>

          <figure>
            <img
              src="images/cardiovascular/Coronary_arteries.svg.webp"
              alt="Major coronary arteries"
              loading="lazy"
            />
            <figcaption>
              Figure 13. Major coronary arteries and their branches.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
            <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
          </p>

          <h3>Right Coronary Artery</h3>

          <p>
            The right coronary artery arises from the right aortic sinus and travels
            within the coronary sulcus.
          </p>

          <p>Important branches may include:</p>

          <ul>
            <li>Sinoatrial nodal branch</li>
            <li>Right marginal artery</li>
            <li>Atrioventricular nodal branch</li>
            <li>Posterior interventricular artery in right-dominant circulation</li>
          </ul>

          <h3>Left Coronary Artery</h3>

          <p>
            The left coronary artery arises from the left aortic sinus and rapidly divides
            into major branches.
          </p>

          <ul>
            <li>Anterior interventricular artery (left anterior descending artery)</li>
            <li>Circumflex artery</li>
          </ul>

          <h3>Coronary Dominance</h3>

          <p>
            Coronary dominance refers to which coronary artery gives rise to the posterior
            interventricular artery.
          </p>

          <h3>Coronary Anastomoses</h3>

          <p>
            Small arterial anastomoses exist between coronary branches, although they may
            not provide sufficient flow during sudden coronary occlusion.
          </p>
        `,

        physiology: `
          <h2>Coronary Artery Physiology</h2>

          <p>
            Coronary blood flow supplies the metabolic requirements of the myocardium.
            Coronary perfusion is influenced by arterial pressure, vascular resistance,
            myocardial metabolism and the duration of diastole.
          </p>

          <h3>Left Coronary Perfusion</h3>

          <p>
            Much of left ventricular coronary perfusion occurs during diastole because
            myocardial contraction compresses intramyocardial vessels during systole.
          </p>

          <h3>Metabolic Regulation</h3>

          <p>
            Increased myocardial oxygen demand produces local vasodilator mechanisms
            that increase coronary blood flow.
          </p>
        `,

        pathology: `
          <h2>Coronary Artery Pathology</h2>

          <ul>
            <li>Coronary atherosclerosis</li>
            <li>Coronary artery thrombosis</li>
            <li>Coronary artery spasm</li>
            <li>Coronary artery dissection</li>
            <li>Coronary artery aneurysm</li>
            <li>Congenital coronary anomalies</li>
          </ul>

          <h3>Coronary Artery Disease</h3>

          <p>
            Atherosclerotic narrowing of coronary arteries can reduce myocardial oxygen
            delivery and produce ischemia.
          </p>
        `,

        clinical: `
          <h2>Clinical Coronary Artery Disease</h2>

          <h3>Angina</h3>

          <p>
            Myocardial ischemia can produce chest discomfort or other ischemic symptoms.
          </p>

          <h3>Myocardial Infarction</h3>

          <p>
            Acute coronary artery occlusion can cause myocardial necrosis.
          </p>

          <figure>
            <img
              src="images/cardiovascular/Myocardial_infarction.svg.webp"
              alt="Myocardial infarction"
              loading="lazy"
            />
            <figcaption>
              Figure 14. Arterial occlusion and myocardial infarction.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Kumar, V., Abbas, A. K., &amp; Aster, J. C. (2020).
            <em>Robbins and Cotran pathologic basis of disease</em> (10th ed.). Elsevier.
          </p>

          <h3>Coronary Angiography</h3>

          <p>
            Coronary angiography allows visualization of coronary arterial anatomy and
            stenotic lesions.
          </p>

          <h3>Revascularization</h3>

          <p>
            Selected patients may undergo percutaneous coronary intervention or coronary
            artery bypass grafting.
          </p>
        `,

        pharmacology: `
          <h2>Pharmacology of Coronary Artery Disease</h2>

          <ul>
            <li>Aspirin</li>
            <li>Other antiplatelet agents</li>
            <li>Statins</li>
            <li>Nitrates</li>
            <li>Beta blockers</li>
            <li>Calcium-channel blockers</li>
            <li>ACE inhibitors or ARBs when indicated</li>
          </ul>
        `
      }
    },


    // ============================================================
    // CAROTID ARTERIES
    // ============================================================

    {
      id: "carotid-arteries",
      name: "Carotid Arteries",
      modelPath: "models/arteries/",
      modelFile: "carotid-arteries.glb",

      notes: {

        anatomy: `
          <h2>Carotid Arteries</h2>

          <p>
            The carotid arteries provide major arterial blood supply to the head and neck.
          </p>

          <h3>Common Carotid Arteries</h3>

          <p>
            The right common carotid artery arises from the brachiocephalic trunk, whereas
            the left common carotid artery arises directly from the aortic arch.
          </p>

          <h3>Carotid Bifurcation</h3>

          <p>
            Each common carotid artery divides into an internal carotid artery and an
            external carotid artery.
          </p>

          <h3>Internal Carotid Artery</h3>

          <p>
            The internal carotid artery supplies major portions of the brain and orbit.
          </p>

          <h3>External Carotid Artery</h3>

          <p>
            The external carotid artery supplies many structures of the face, scalp and neck.
          </p>

          <figure>
            <img
              src="images/cardiovascular/carotid_arteries.jpg"
              alt="Carotid arterial anatomy"
              loading="lazy"
            />
            <figcaption>
              Figure 15. Common, internal and external carotid arteries.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
            <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
          </p>
        `,

        physiology: `
          <h2>Carotid Artery Physiology</h2>

          <p>
            The carotid circulation provides high-flow arterial perfusion to the brain.
            Cerebral blood flow is tightly regulated because neuronal tissue has a high
            metabolic requirement for oxygen and glucose.
          </p>

          <h3>Carotid Sinus</h3>

          <p>
            The carotid sinus contains baroreceptors involved in short-term regulation
            of systemic arterial pressure.
          </p>

          <h3>Carotid Body</h3>

          <p>
            The carotid body contains peripheral chemoreceptors that respond primarily
            to changes in arterial oxygen, carbon dioxide and hydrogen-ion concentration.
          </p>
        `,

        pathology: `
          <h2>Carotid Artery Pathology</h2>

          <ul>
            <li>Carotid atherosclerosis</li>
            <li>Carotid stenosis</li>
            <li>Carotid artery dissection</li>
            <li>Carotid aneurysm</li>
            <li>Thrombosis</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Importance</h2>

          <p>
            Carotid artery disease is clinically important because embolization or
            significant reduction in carotid blood flow can cause cerebral ischemia.
          </p>

          <h3>Carotid Bruit</h3>

          <p>
            Turbulent flow across a stenotic arterial segment may produce an audible bruit.
          </p>

          <h3>Carotid Stenosis</h3>

          <p>
            Significant carotid stenosis may increase the risk of ischemic stroke.
          </p>
        `
      }
    },


    // ============================================================
    // UPPER LIMB ARTERIES
    // ============================================================

    {
      id: "upper-limb-arteries",
      name: "Upper Limb Arteries",
      modelPath: "models/arteries/",
      modelFile: "upper-limb-arteries.glb",

      notes: {

        anatomy: `
          <h2>Upper Limb Arteries</h2>

          <p>
            The upper limb receives arterial blood through a continuous arterial pathway
            extending from the subclavian artery to the arteries of the hand.
          </p>

          <h3>Main Arterial Sequence</h3>

          <p>
            Subclavian artery → axillary artery → brachial artery → radial and ulnar arteries
            → arteries of the hand.
          </p>

          <h3>Subclavian Artery</h3>

          <p>
            The subclavian arteries supply the upper limbs and give important branches to
            the neck and thoracic wall.
          </p>

          <h3>Axillary Artery</h3>

          <p>
            The axillary artery is the continuation of the subclavian artery beyond the
            lateral border of the first rib and becomes the brachial artery near the
            inferior border of teres major.
          </p>

          <h3>Brachial Artery</h3>

          <p>
            The brachial artery is the principal artery of the arm. It eventually divides
            into the radial and ulnar arteries near the elbow.
          </p>

          <h3>Radial Artery</h3>

          <p>
            The radial artery runs along the lateral aspect of the forearm and contributes
            to the arterial supply of the hand.
          </p>

          <h3>Ulnar Artery</h3>

          <p>
            The ulnar artery runs along the medial aspect of the forearm and contributes
            substantially to the superficial palmar arterial circulation.
          </p>

          <h3>Palmar Arches</h3>

          <p>
            The radial and ulnar arteries contribute to superficial and deep palmar arches,
            providing extensive arterial anastomoses within the hand.
          </p>

          <figure>
            <img
              src="images/cardiovascular/upper_limb_arteries.jpg"
              alt="Arterial supply of the upper limb"
              loading="lazy"
            />
            <figcaption>
              Figure 16. Major arteries of the upper limb.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
            <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
          </p>
        `,

        physiology: `
          <h2>Upper Limb Arterial Physiology</h2>

          <p>
            Upper limb arteries provide blood flow required for skeletal muscle activity,
            thermoregulation, tissue maintenance and hand function.
          </p>

          <p>
            During exercise, local metabolic mechanisms increase blood flow to active
            muscles through arterial and arteriolar dilation.
          </p>
        `,

        pathology: `
          <h2>Upper Limb Arterial Pathology</h2>

          <ul>
            <li>Peripheral arterial disease</li>
            <li>Acute arterial occlusion</li>
            <li>Arterial thrombosis</li>
            <li>Embolism</li>
            <li>Arterial aneurysm</li>
            <li>Traumatic arterial injury</li>
            <li>Thoracic outlet-related arterial compression</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Examination</h2>

          <p>
            The brachial and radial pulses are commonly examined clinically. Comparison
            between the two limbs can provide information about arterial obstruction.
          </p>

          <h3>Allen Test</h3>

          <p>
            The modified Allen test may be used to assess collateral hand circulation
            before selected radial arterial procedures.
          </p>
        `
      }
    },


    // ============================================================
    // ABDOMINAL ARTERIES
    // ============================================================

    {
      id: "abdominal-arteries",
      name: "Major Abdominal Arteries",
      modelPath: "models/arteries/",
      modelFile: "abdominal-arteries.glb",

      notes: {

        anatomy: `
          <h2>Major Abdominal Arteries</h2>

          <p>
            The abdominal aorta gives rise to major branches supplying the abdominal
            viscera, posterior abdominal wall and pelvis.
          </p>

          <h3>Major Branches</h3>

          <ul>
            <li>Coeliac trunk</li>
            <li>Superior mesenteric artery</li>
            <li>Inferior mesenteric artery</li>
            <li>Renal arteries</li>
            <li>Gonadal arteries</li>
            <li>Lumbar arteries</li>
            <li>Common iliac arteries</li>
          </ul>

          <h3>Coeliac Trunk</h3>

          <p>
            The coeliac trunk supplies major foregut-derived abdominal structures.
            Its major branches are the left gastric, splenic and common hepatic arteries.
          </p>

          <h3>Superior Mesenteric Artery</h3>

          <p>
            The superior mesenteric artery supplies much of the midgut and gives branches
            to the small intestine and proximal large intestine.
          </p>

          <h3>Inferior Mesenteric Artery</h3>

          <p>
            The inferior mesenteric artery supplies much of the hindgut.
          </p>

          <h3>Renal Arteries</h3>

          <p>
            The renal arteries arise from the abdominal aorta and supply the kidneys.
          </p>

          <figure>
            <img
              src="images/cardiovascular/abdominal_aorta_branches.jpg"
              alt="Branches of the abdominal aorta"
              loading="lazy"
            />
            <figcaption>
              Figure 17. Major branches of the abdominal aorta.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Standring, S. (Ed.). (2021). <em>Gray's anatomy: The anatomical basis of clinical practice</em>
            (42nd ed.). Elsevier.
          </p>
        `,

        physiology: `
          <h2>Abdominal Arterial Physiology</h2>

          <p>
            Abdominal arterial circulation distributes blood according to the metabolic
            requirements of organs such as the liver, kidneys and gastrointestinal tract.
          </p>

          <p>
            Splanchnic blood flow changes significantly after meals and during exercise,
            hemorrhage and sympathetic activation.
          </p>
        `,

        pathology: `
          <h2>Abdominal Arterial Pathology</h2>

          <ul>
            <li>Abdominal aortic aneurysm</li>
            <li>Mesenteric ischemia</li>
            <li>Renal artery stenosis</li>
            <li>Visceral artery aneurysm</li>
            <li>Arterial thrombosis</li>
            <li>Arterial embolism</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Importance</h2>

          <h3>Mesenteric Ischemia</h3>

          <p>
            Inadequate intestinal arterial blood flow can cause abdominal pain and,
            in severe cases, intestinal infarction.
          </p>

          <h3>Renal Artery Stenosis</h3>

          <p>
            Narrowing of the renal artery can reduce renal perfusion and contribute
            to renovascular hypertension.
          </p>

          <h3>Abdominal Aortic Aneurysm</h3>

          <p>
            Abdominal aortic aneurysms are clinically important because of the risk
            of progressive enlargement and rupture.
          </p>
        `
      }
    },


    // ============================================================
    // LOWER LIMB ARTERIES
    // ============================================================

    {
      id: "lower-limb-arteries",
      name: "Lower Limb Arteries",
      modelPath: "models/arteries/",
      modelFile: "lower-limb-arteries.glb",

      notes: {

        anatomy: `
          <h2>Lower Limb Arteries</h2>

          <p>
            The lower limb receives arterial blood primarily through the external iliac
            artery and its continuation as the femoral artery.
          </p>

          <h3>Main Arterial Sequence</h3>

          <p>
            Common iliac artery → external iliac artery → femoral artery →
            popliteal artery → anterior and posterior tibial arteries.
          </p>

          <h3>Femoral Artery</h3>

          <p>
            The femoral artery is the major arterial supply to the lower limb.
          </p>

          <h3>Deep Femoral Artery</h3>

          <p>
            The profunda femoris artery provides major arterial branches to the thigh.
          </p>

          <h3>Popliteal Artery</h3>

          <p>
            The popliteal artery is the continuation of the femoral artery behind the knee.
          </p>

          <h3>Anterior Tibial Artery</h3>

          <p>
            The anterior tibial artery supplies the anterior compartment of the leg and
            continues as the dorsalis pedis artery on the dorsum of the foot.
          </p>

          <h3>Posterior Tibial Artery</h3>

          <p>
            The posterior tibial artery supplies the posterior compartment of the leg
            and contributes to the arterial supply of the foot.
          </p>

          <h3>Dorsalis Pedis Artery</h3>

          <p>
            The dorsalis pedis artery is the continuation of the anterior tibial artery
            on the dorsum of the foot.
          </p>

          <figure>
            <img
              src="images/cardiovascular/lower_limb_arteries.jpg"
              alt="Arterial supply of the lower limb"
              loading="lazy"
            />
            <figcaption>
              Figure 18. Major arteries of the lower limb.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
            <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
          </p>
        `,

        physiology: `
          <h2>Lower Limb Arterial Physiology</h2>

          <p>
            Lower-limb arteries provide blood to skeletal muscle, bone, skin and other
            tissues. During walking and exercise, local metabolic vasodilation increases
            blood flow to active muscles.
          </p>
        `,

        pathology: `
          <h2>Lower Limb Arterial Pathology</h2>

          <ul>
            <li>Peripheral arterial disease</li>
            <li>Acute limb ischemia</li>
            <li>Arterial thrombosis</li>
            <li>Arterial embolism</li>
            <li>Popliteal artery aneurysm</li>
            <li>Femoral artery aneurysm</li>
            <li>Traumatic arterial injury</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Assessment</h2>

          <p>
            Lower limb arterial circulation can be assessed by palpating the femoral,
            popliteal, posterior tibial and dorsalis pedis pulses.
          </p>

          <h3>Intermittent Claudication</h3>

          <p>
            Patients with peripheral arterial disease may develop reproducible limb
            discomfort during exercise because arterial flow cannot adequately meet
            increased metabolic demand.
          </p>

          <h3>Ankle-Brachial Index</h3>

          <p>
            The ankle-brachial index compares ankle systolic pressure with brachial
            systolic pressure and can help assess lower-extremity arterial disease.
          </p>
        `
      }
    },


    // ============================================================
    // PULMONARY ARTERIES
    // ============================================================

    {
      id: "pulmonary-arteries",
      name: "Pulmonary Arteries",
      modelPath: "models/arteries/",
      modelFile: "pulmonary-arteries.glb",

      notes: {

        anatomy: `
          <h2>Pulmonary Arteries</h2>

          <p>
            The pulmonary arteries form the arterial component of the pulmonary circulation.
            They transport deoxygenated blood from the right ventricle toward the lungs.
          </p>

          <h3>Pulmonary Trunk</h3>

          <p>
            The pulmonary trunk arises from the right ventricle and divides into right
            and left pulmonary arteries.
          </p>

          <h3>Right Pulmonary Artery</h3>

          <p>
            The right pulmonary artery passes toward the right lung and divides into
            lobar and segmental branches.
          </p>

          <h3>Left Pulmonary Artery</h3>

          <p>
            The left pulmonary artery supplies the left lung through progressively smaller
            arterial branches.
          </p>

          <figure>
            <img
              src="images/cardiovascular/Heart_circulation_diagram.svg.webp"
              alt="Pulmonary and systemic arterial circulation"
              loading="lazy"
            />
            <figcaption>
              Figure 19. Pulmonary arterial circulation from the right ventricle to the lungs.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Standring, S. (Ed.). (2021). <em>Gray's anatomy: The anatomical basis of clinical practice</em>
            (42nd ed.). Elsevier.
          </p>
        `,

        physiology: `
          <h2>Pulmonary Artery Physiology</h2>

          <p>
            Pulmonary arteries transport deoxygenated blood from the right ventricle
            to the pulmonary capillary circulation.
          </p>

          <p>
            The pulmonary circulation operates at substantially lower pressure and
            resistance than the systemic circulation.
          </p>

          <h3>Pulmonary Vascular Resistance</h3>

          <p>
            Pulmonary vascular resistance is influenced by pulmonary vessel diameter,
            lung volume, alveolar pressure and recruitment of pulmonary vascular beds.
          </p>
        `,

        pathology: `
          <h2>Pulmonary Arterial Pathology</h2>

          <ul>
            <li>Pulmonary hypertension</li>
            <li>Pulmonary embolism</li>
            <li>Pulmonary artery aneurysm</li>
            <li>Pulmonary artery stenosis</li>
            <li>Congenital pulmonary arterial abnormalities</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Pulmonary Arterial Disorders</h2>

          <h3>Pulmonary Embolism</h3>

          <p>
            Pulmonary embolism occurs when embolic material obstructs pulmonary arterial
            circulation. Most clinically significant pulmonary emboli originate from
            thrombi in the venous circulation.
          </p>

          <h3>Pulmonary Hypertension</h3>

          <p>
            Pulmonary hypertension involves abnormally elevated pressure within the
            pulmonary arterial circulation and may eventually produce right ventricular
            strain and failure.
          </p>
        `,

        pharmacology: `
          <h2>Pharmacology of Pulmonary Arterial Disease</h2>

          <p>
            Pharmacological treatment depends on the specific pulmonary arterial disorder.
          </p>

          <h3>Anticoagulants</h3>

          <p>
            Anticoagulants are fundamental in the treatment and prevention of many cases
            of pulmonary thromboembolism.
          </p>

          <h3>Pulmonary Vasodilator Therapy</h3>

          <p>
            Selected forms of pulmonary arterial hypertension may be treated using drugs
            targeting pathways involving nitric oxide, endothelin or prostacyclin.
          </p>

          <ul>
            <li>Endothelin receptor antagonists</li>
            <li>Phosphodiesterase-5 inhibitors</li>
            <li>Soluble guanylate cyclase stimulators</li>
            <li>Prostacyclin pathway therapies</li>
          </ul>
        `
      }
    },


    // ============================================================
    // CEREBRAL ARTERIES
    // ============================================================

    {
      id: "cerebral-arteries",
      name: "Cerebral Arteries",
      modelPath: "models/arteries/",
      modelFile: "cerebral-arteries.glb",

      notes: {

        anatomy: `
          <h2>Cerebral Arteries</h2>

          <p>
            The brain receives arterial blood primarily through the internal carotid
            and vertebrobasilar arterial systems.
          </p>

          <h3>Internal Carotid System</h3>

          <p>
            The internal carotid arteries provide major anterior circulation to the brain.
          </p>

          <h3>Vertebral Arteries</h3>

          <p>
            The vertebral arteries arise from the subclavian arteries and ascend through
            the cervical vertebral foramina before entering the cranial cavity.
          </p>

          <h3>Basilar Artery</h3>

          <p>
            The right and left vertebral arteries unite to form the basilar artery.
          </p>

          <h3>Circle of Willis</h3>

          <p>
            The arterial circle at the base of the brain provides connections between
            major anterior and posterior cerebral arterial territories.
          </p>

          <figure>
            <img
              src="images/cardiovascular/circle_of_willis.jpg"
              alt="Circle of Willis cerebral arterial circulation"
              loading="lazy"
            />
            <figcaption>
              Figure 20. Major arteries forming the cerebral arterial circulation.
            </figcaption>
          </figure>

          <p class="reference">
            <strong>Reference:</strong>
            Moore, K. L., Dalley, A. F., &amp; Agur, A. M. R. (2023).
            <em>Clinically oriented anatomy</em> (9th ed.). Wolters Kluwer.
          </p>

          <h3>Major Cerebral Arteries</h3>

          <ul>
            <li>Anterior cerebral artery</li>
            <li>Middle cerebral artery</li>
            <li>Posterior cerebral artery</li>
          </ul>
        `,

        physiology: `
          <h2>Cerebral Arterial Physiology</h2>

          <p>
            Cerebral arteries participate in maintaining relatively stable cerebral blood
            flow despite fluctuations in systemic arterial pressure.
          </p>

          <h3>Cerebral Autoregulation</h3>

          <p>
            Cerebral blood flow is influenced by arterial pressure, carbon dioxide,
            oxygen, metabolic activity and vascular resistance.
          </p>

          <h3>Carbon Dioxide</h3>

          <p>
            Increased arterial carbon dioxide generally produces cerebral vasodilation,
            increasing cerebral blood flow.
          </p>
        `,

        pathology: `
          <h2>Cerebral Arterial Pathology</h2>

          <ul>
            <li>Ischemic stroke</li>
            <li>Intracranial arterial stenosis</li>
            <li>Cerebral aneurysm</li>
            <li>Subarachnoid haemorrhage from aneurysm rupture</li>
            <li>Cerebral arterial dissection</li>
            <li>Vasculitis</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Importance</h2>

          <p>
            Occlusion of a cerebral artery can produce focal neurological deficits
            corresponding to the territory supplied by that artery.
          </p>

          <h3>Ischemic Stroke</h3>

          <p>
            Arterial occlusion causes reduced cerebral perfusion and can result in
            irreversible neuronal injury if blood flow is not restored.
          </p>

          <h3>Cerebral Aneurysm</h3>

          <p>
            Rupture of an intracranial arterial aneurysm can cause subarachnoid haemorrhage,
            a neurological emergency.
          </p>
        `
      }
    }
  ]
};