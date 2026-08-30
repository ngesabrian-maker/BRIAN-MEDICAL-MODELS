
export const respprocedures = {

  id: "respprocedures",
  name: "Respiratory",

  parts: [

    // =========================================================
    // 1. OXYGEN ADMINISTRATION
    // =========================================================

    {
      id: "oxygen-administration",
      name: "Oxygen Administration",

      notes: {

        anatomy: `
          <h2>Oxygen Administration</h2>

          <h3>Overview</h3>

          <p>
            Oxygen therapy is the administration of supplemental oxygen to a patient to prevent
            or correct hypoxaemia and maintain adequate tissue oxygenation. It is one of the most
            frequently used respiratory interventions in acute and chronic clinical practice.
            Oxygen is a medication and should therefore be administered for an appropriate clinical
            indication, using an appropriate delivery device and prescribed or protocol-directed
            target oxygen saturation.
          </p>

          <p>
            Oxygen therapy does not treat the underlying cause of respiratory failure. It corrects
            hypoxaemia while the clinician investigates and treats the underlying disorder, such as
            pneumonia, asthma, chronic obstructive pulmonary disease, pulmonary oedema, pulmonary
            embolism, sepsis, trauma, or airway obstruction.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Hypoxaemia.</li>
            <li>Acute respiratory distress with documented or strongly suspected hypoxaemia.</li>
            <li>Severe acute asthma with hypoxaemia.</li>
            <li>Pneumonia with hypoxaemia.</li>
            <li>Acute pulmonary oedema with hypoxaemia.</li>
            <li>Acute respiratory failure.</li>
            <li>Perioperative or post-procedural hypoxaemia.</li>
            <li>Major trauma when clinically indicated.</li>
            <li>Cardiac arrest and resuscitation.</li>
            <li>Selected carbon monoxide poisoning cases.</li>
          </ul>

          <h3>Important Principle</h3>

          <p>
            Oxygen should be titrated to an appropriate target rather than routinely administered
            at the highest possible concentration. Excessive oxygen can cause harm in some
            circumstances, particularly in patients susceptible to hypercapnic respiratory failure.
          </p>

          <h3>Oxygen Delivery Devices</h3>

          <h4>Nasal Cannula</h4>

          <p>
            A nasal cannula delivers low-flow oxygen through two small prongs positioned within the
            nostrils. It is commonly used when low-to-moderate supplemental oxygen is required and
            the patient is breathing spontaneously.
          </p>

          <h4>Simple Face Mask</h4>

          <p>
            A simple face mask delivers oxygen through a mask covering the nose and mouth. It should
            generally not be used at very low flow rates because inadequate fresh gas flow can
            permit carbon dioxide rebreathing.
          </p>

          <h4>Venturi Mask</h4>

          <p>
            A Venturi mask uses entrainment of room air to provide a relatively controlled inspired
            oxygen concentration. It is particularly useful when controlled oxygen delivery is
            required.
          </p>

          <h4>Non-Rebreather Mask</h4>

          <p>
            A non-rebreather mask can provide a high inspired oxygen concentration when supplied
            with an adequate oxygen flow. It incorporates a reservoir bag and one-way valves.
            It is useful in patients who require high-concentration oxygen while definitive
            management is initiated.
          </p>

          <h4>High-Flow Nasal Oxygen</h4>

          <p>
            High-flow nasal oxygen delivers heated and humidified oxygen at high flow rates.
            It can provide high inspired oxygen concentrations and some degree of positive airway
            pressure while improving patient comfort compared with some conventional interfaces.
          </p>

          <h3>General Procedure</h3>

          <ol>
            <li>Assess the indication for oxygen therapy.</li>
            <li>Assess airway, breathing, circulation, consciousness, and overall severity.</li>
            <li>Measure oxygen saturation where reliable measurement is available.</li>
            <li>Consider arterial or venous blood gas assessment when clinically indicated.</li>
            <li>Select the appropriate oxygen delivery device.</li>
            <li>Connect the device to the oxygen source.</li>
            <li>Set the appropriate flow or concentration.</li>
            <li>Apply the device correctly.</li>
            <li>Reassess oxygen saturation, respiratory rate, work of breathing, and clinical response.</li>
            <li>Titrate oxygen according to the prescribed or locally recommended target range.</li>
            <li>Continue treatment of the underlying disease.</li>
          </ol>

          <h3>Complications and Problems</h3>

          <ul>
            <li>Dryness of nasal and oral mucosa.</li>
            <li>Nasal irritation.</li>
            <li>Pressure injury from masks or tubing.</li>
            <li>Oxygen toxicity with prolonged exposure to high concentrations.</li>
            <li>Worsening hypercapnia in susceptible patients.</li>
            <li>Absorption atelectasis with very high inspired oxygen concentrations.</li>
            <li>Fire hazard.</li>
          </ul>

          <h3>Clinical Pearls</h3>

          <ul>
            <li>Oxygen is a drug and should be prescribed or protocol-directed appropriately.</li>
            <li>Always reassess the patient after initiating oxygen.</li>
            <li>Treat the cause of hypoxaemia rather than relying on oxygen alone.</li>
            <li>In patients at risk of hypercapnic respiratory failure, controlled oxygen therapy and blood-gas assessment may be particularly important.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology of Oxygen Therapy</h2>

          <p>
            Oxygen enters the lungs during inspiration and diffuses across the alveolar-capillary
            membrane into pulmonary capillary blood. Most oxygen is transported bound to haemoglobin,
            while a small fraction is dissolved in plasma.
          </p>

          <p>
            Supplemental oxygen increases the inspired oxygen partial pressure and can increase
            alveolar and arterial oxygen tension. Its effectiveness depends on ventilation,
            perfusion, diffusion, alveolar recruitment, haemoglobin concentration, and cardiac
            output.
          </p>

          <p>
            Oxygen therapy is particularly effective when hypoxaemia results from low inspired
            oxygen concentration or ventilation-perfusion mismatch. Severe shunt physiology may
            respond less completely because some blood bypasses adequately ventilated alveoli.
          </p>

          <h3>Oxygen-Haemoglobin Relationship</h3>

          <p>
            Haemoglobin binds oxygen according to the oxygen-haemoglobin dissociation curve.
            Increasing arterial oxygen tension increases haemoglobin saturation, although the
            relationship becomes relatively flat at higher oxygen tensions.
          </p>

          <h3>Hypercapnic Respiratory Failure</h3>

          <p>
            In susceptible patients, excessive oxygen administration can worsen carbon dioxide
            retention through several mechanisms, including alteration of ventilation-perfusion
            matching and the Haldane effect. This is one reason controlled oxygen therapy is
            important in patients at risk of hypercapnia.
          </p>
        `
      }
    },


    // =========================================================
    // 2. NASAL CANNULA
    // =========================================================

    {
      id: "nasal-cannula",
      name: "Nasal Cannula Oxygen",

      notes: {

        anatomy: `
          <h2>Nasal Cannula Oxygen</h2>

          <h3>Definition</h3>

          <p>
            A nasal cannula is a lightweight oxygen-delivery interface consisting of two nasal
            prongs connected to oxygen tubing. It is designed for spontaneously breathing patients
            requiring supplemental oxygen.
          </p>

          <h3>Preparation</h3>

          <ul>
            <li>Confirm patient identity.</li>
            <li>Explain the intervention.</li>
            <li>Assess respiratory status and oxygen saturation.</li>
            <li>Ensure the oxygen source is functioning.</li>
            <li>Select an appropriate cannula.</li>
          </ul>

          <h3>Procedure</h3>

          <ol>
            <li>Connect the cannula to the oxygen tubing.</li>
            <li>Connect the tubing to the oxygen source.</li>
            <li>Set the prescribed oxygen flow.</li>
            <li>Position the nasal prongs gently within the nostrils.</li>
            <li>Place the tubing around the ears or according to the device design.</li>
            <li>Secure the tubing beneath the chin without excessive tension.</li>
            <li>Reassess oxygen saturation and respiratory effort.</li>
            <li>Check the patient's comfort and inspect the nose and ears periodically.</li>
          </ol>

          <h3>Limitations</h3>

          <p>
            Nasal cannula oxygen is dependent on spontaneous breathing and is not an appropriate
            definitive ventilatory support method for severe respiratory failure with inadequate
            ventilation or impending respiratory arrest.
          </p>

          <h3>Complications</h3>

          <ul>
            <li>Nasal dryness.</li>
            <li>Epistaxis.</li>
            <li>Nasal irritation.</li>
            <li>Skin pressure injury.</li>
            <li>Dislodgement.</li>
            <li>Inadequate oxygen delivery.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            The nasal cannula increases the concentration of inspired oxygen above that of room
            air. The actual inspired oxygen concentration varies with oxygen flow, respiratory
            rate, tidal volume, inspiratory flow, and whether the patient breathes through the
            nose or mouth.
          </p>

          <p>
            Because conventional nasal cannula systems generally deliver oxygen at relatively low
            flow rates, the inspired concentration is not fixed. This distinguishes them from
            controlled-concentration systems such as Venturi masks.
          </p>
        `
      }
    },


    // =========================================================
    // 3. FACE MASK
    // =========================================================

    {
      id: "simple-face-mask",
      name: "Simple Face Mask",

      notes: {

        anatomy: `
          <h2>Simple Face Mask Oxygen</h2>

          <p>
            A simple face mask covers the patient's nose and mouth and delivers oxygen through a
            connected tubing system.
          </p>

          <h3>Procedure</h3>

          <ol>
            <li>Assess the patient's respiratory condition.</li>
            <li>Explain the procedure.</li>
            <li>Connect the mask to the oxygen source.</li>
            <li>Set an appropriate oxygen flow according to prescription or protocol.</li>
            <li>Place the mask over the nose and mouth.</li>
            <li>Adjust the elastic strap for a comfortable seal.</li>
            <li>Ensure the mask does not obstruct breathing.</li>
            <li>Monitor oxygen saturation and respiratory effort.</li>
          </ol>

          <h3>Contraindication / Limitation</h3>

          <p>
            A simple face mask should not be used at flows that are insufficient to clear exhaled
            carbon dioxide from the mask. It is also unsuitable for an unconscious patient who
            cannot protect the airway unless appropriate airway support is simultaneously provided.
          </p>

          <h3>Complications</h3>

          <ul>
            <li>Claustrophobia or anxiety.</li>
            <li>Skin pressure injury.</li>
            <li>Vomiting and aspiration risk in patients unable to protect the airway.</li>
            <li>Inadequate oxygen delivery.</li>
            <li>Potential carbon dioxide rebreathing at inappropriate low flows.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            The mask creates a reservoir of oxygen around the nose and mouth. The delivered oxygen
            concentration depends on flow, mask fit, respiratory pattern, and entrainment of room
            air.
          </p>
        `
      }
    },


    // =========================================================
    // 4. VENTURI MASK
    // =========================================================

    {
      id: "venturi-mask",
      name: "Venturi Mask",

      notes: {

        anatomy: `
          <h2>Venturi Mask</h2>

          <h3>Definition</h3>

          <p>
            A Venturi mask is a controlled-performance oxygen-delivery device designed to provide
            a relatively predictable inspired oxygen concentration by mixing oxygen with a known
            proportion of entrained room air.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Patients requiring controlled oxygen concentration.</li>
            <li>Patients at risk of hypercapnic respiratory failure.</li>
            <li>Situations where accurate oxygen concentration is clinically important.</li>
          </ul>

          <h3>Procedure</h3>

          <ol>
            <li>Assess the patient and determine the required oxygen target.</li>
            <li>Select the appropriate Venturi adaptor.</li>
            <li>Connect the adaptor to the oxygen tubing.</li>
            <li>Set the oxygen flow recommended for that adaptor.</li>
            <li>Apply the mask over the nose and mouth.</li>
            <li>Ensure that the entrainment ports are not obstructed.</li>
            <li>Monitor oxygen saturation and clinical response.</li>
            <li>Obtain blood gases when indicated.</li>
          </ol>

          <h3>Important Safety Point</h3>

          <p>
            The flow rate and oxygen concentration should correspond to the specific Venturi
            adaptor being used. Increasing flow does not necessarily change the delivered
            concentration when the device is functioning correctly, but device-specific
            instructions must always be followed.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            The Venturi principle uses a high-velocity oxygen jet to entrain room air through
            side ports. The resulting gas mixture has a relatively fixed oxygen concentration
            determined by the device design.
          </p>

          <p>
            This makes the Venturi mask particularly useful when controlled oxygen delivery is
            preferable to the variable inspired oxygen concentration provided by conventional
            low-flow devices.
          </p>
        `
      }
    },


    // =========================================================
    // 5. NON-REBREATHER MASK
    // =========================================================

    {
      id: "non-rebreather-mask",
      name: "Non-Rebreather Mask",

      notes: {

        anatomy: `
          <h2>Non-Rebreather Mask</h2>

          <p>
            A non-rebreather mask is designed to provide a high concentration of supplemental
            oxygen to spontaneously breathing patients. It contains a reservoir bag and
            one-way valves that reduce the amount of exhaled gas entering the reservoir.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Severe hypoxaemia.</li>
            <li>Acute respiratory distress requiring high-concentration oxygen.</li>
            <li>Major trauma with hypoxaemia.</li>
            <li>Preoxygenation in selected emergency circumstances.</li>
            <li>Some cases of carbon monoxide poisoning.</li>
          </ul>

          <h3>Procedure</h3>

          <ol>
            <li>Assess airway and breathing.</li>
            <li>Connect the mask to the oxygen source.</li>
            <li>Allow the reservoir bag to inflate before application.</li>
            <li>Apply the mask over the nose and mouth.</li>
            <li>Maintain an adequate oxygen flow so that the reservoir does not collapse substantially during inspiration.</li>
            <li>Monitor oxygen saturation and respiratory effort continuously when clinically indicated.</li>
            <li>Escalate respiratory support if the patient deteriorates or cannot maintain adequate ventilation or oxygenation.</li>
          </ol>

          <h3>Important Limitation</h3>

          <p>
            A non-rebreather mask does not provide definitive ventilatory support. A patient who is
            apnoeic, severely hypoventilating, unable to protect the airway, or approaching
            respiratory arrest requires appropriate airway and ventilatory management.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            The reservoir stores oxygen between breaths, while one-way valves reduce entry of
            exhaled gas. This permits a substantially higher inspired oxygen concentration than
            simple low-flow systems when the mask is correctly fitted and adequately supplied.
          </p>
        `
      }
    },


    // =========================================================
    // 6. NEBULIZATION
    // =========================================================

    {
      id: "nebulization",
      name: "Nebulization",

      notes: {

        anatomy: `
          <h2>Nebulization</h2>

          <h3>Definition</h3>

          <p>
            Nebulization is the conversion of a liquid medication into an aerosol containing
            particles that can be inhaled into the respiratory tract. Nebulized therapy is used
            to deliver selected bronchodilators, corticosteroids, saline solutions, and other
            medications depending on the clinical indication.
          </p>

          <h3>Common Indications</h3>

          <ul>
            <li>Acute asthma exacerbation.</li>
            <li>Acute exacerbations of obstructive airway disease.</li>
            <li>Bronchospasm.</li>
            <li>Selected patients unable to effectively use handheld inhalers.</li>
            <li>Selected airway secretion-management indications.</li>
          </ul>

          <h3>Equipment</h3>

          <ul>
            <li>Nebulizer chamber.</li>
            <li>Appropriate medication.</li>
            <li>Oxygen or compressed-air source according to clinical circumstances.</li>
            <li>Mouthpiece or appropriately sized face mask.</li>
            <li>Appropriate PPE.</li>
          </ul>

          <h3>Procedure</h3>

          <ol>
            <li>Confirm the indication and medication order.</li>
            <li>Check the patient's allergies and relevant contraindications.</li>
            <li>Explain the procedure.</li>
            <li>Place the patient in an upright or appropriately supported position.</li>
            <li>Prepare the medication using the prescribed dose and appropriate diluent if required.</li>
            <li>Place the solution into the nebulizer chamber.</li>
            <li>Connect the nebulizer to the appropriate gas source.</li>
            <li>Apply the mouthpiece or mask.</li>
            <li>Encourage relaxed tidal breathing; technique may vary according to medication and device.</li>
            <li>Continue until the treatment has been appropriately delivered.</li>
            <li>Reassess respiratory rate, work of breathing, oxygen saturation, heart rate, and clinical response.</li>
            <li>Clean or dispose of equipment according to infection-prevention policy.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Tachycardia with beta-2 agonists.</li>
            <li>Tremor.</li>
            <li>Hypokalaemia with repeated high-dose beta-2 agonist therapy.</li>
            <li>Paradoxical bronchospasm, rarely.</li>
            <li>Medication-specific adverse effects.</li>
            <li>Cross-infection from contaminated equipment.</li>
          </ul>

          <h3>Clinical Pearl</h3>

          <p>
            Nebulization should not automatically be considered superior to metered-dose inhaler
            therapy. In many circumstances, a properly administered inhaler with an appropriate
            spacer can provide effective bronchodilator delivery.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Nebulizers generate aerosol particles that can be inhaled into the respiratory tract.
            Deposition depends on particle size, inspiratory flow, breathing pattern, airway
            calibre, and device characteristics.
          </p>

          <p>
            Bronchodilator medications act primarily on airway smooth muscle. Beta-2 agonists
            increase intracellular cyclic AMP in bronchial smooth muscle, producing relaxation and
            bronchodilation. Antimuscarinic drugs inhibit cholinergic bronchoconstrictor effects.
          </p>

          <p>
            Nebulized corticosteroids reduce airway inflammation but are not substitutes for
            emergency bronchodilator therapy when immediate reversal of severe bronchospasm is
            required.
          </p>
        `
      }
    },


    // =========================================================
    // 7. SUCTIONING
    // =========================================================

    {
      id: "airway-suctioning",
      name: "Airway Suctioning",

      notes: {

        anatomy: `
          <h2>Airway Suctioning</h2>

          <h3>Definition</h3>

          <p>
            Airway suctioning is the removal of secretions, blood, vomitus, or other material from
            the upper or lower airway using suction equipment. It may be performed through the
            mouth, nose, tracheostomy, or an artificial airway such as an endotracheal tube.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Visible or audible airway secretions.</li>
            <li>Inability to clear secretions effectively.</li>
            <li>Reduced consciousness with secretion accumulation.</li>
            <li>Artificial airway with clinically significant secretion retention.</li>
            <li>Airway obstruction caused by secretions.</li>
            <li>Deteriorating oxygenation attributable to secretion obstruction.</li>
          </ul>

          <h3>Preparation</h3>

          <ul>
            <li>Assess airway and breathing.</li>
            <li>Explain the procedure where possible.</li>
            <li>Perform hand hygiene and use appropriate PPE.</li>
            <li>Prepare suction apparatus and appropriate catheter.</li>
            <li>Ensure oxygenation and monitoring equipment are available.</li>
          </ul>

          <h3>General Procedure</h3>

          <ol>
            <li>Position the patient appropriately.</li>
            <li>Preoxygenate when clinically indicated.</li>
            <li>Use appropriate suction pressure according to age, setting, device, and local protocol.</li>
            <li>Introduce the catheter using the appropriate technique.</li>
            <li>Apply suction during withdrawal rather than unnecessarily during insertion.</li>
            <li>Keep suction episodes brief and allow recovery between passes.</li>
            <li>Monitor oxygen saturation, heart rate, respiratory effort, and patient tolerance.</li>
            <li>Repeat only when clinically necessary.</li>
            <li>Reassess the airway after suctioning.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Hypoxaemia.</li>
            <li>Bronchospasm.</li>
            <li>Mucosal trauma.</li>
            <li>Bleeding.</li>
            <li>Coughing and discomfort.</li>
            <li>Vagal bradycardia.</li>
            <li>Arrhythmias.</li>
            <li>Infection if infection-control practices are inadequate.</li>
            <li>Airway trauma from excessive depth or suction pressure.</li>
          </ul>

          <h3>Important Principle</h3>

          <p>
            Suctioning should be performed because there is a clinical indication rather than at
            arbitrary fixed intervals. Excessive suctioning can injure airway mucosa and produce
            significant physiological disturbance.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Airway secretions can increase airway resistance and obstruct airflow. Suctioning
            mechanically removes material that the patient cannot clear effectively.
          </p>

          <p>
            However, suctioning can transiently reduce oxygenation by interrupting ventilation,
            particularly when performed through an artificial airway. It can also stimulate airway
            mechanoreceptors and vagal pathways, producing coughing or bradycardia.
          </p>
        `
      }
    },


    // =========================================================
    // 8. BAG-VALVE-MASK VENTILATION
    // =========================================================

    {
      id: "bag-valve-mask",
      name: "Bag-Valve-Mask Ventilation",

      notes: {

        anatomy: `
          <h2>Bag-Valve-Mask Ventilation</h2>

          <h3>Definition</h3>

          <p>
            Bag-valve-mask (BVM) ventilation is a manual method of providing positive-pressure
            ventilation to a patient who is apnoeic or inadequately ventilating.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Apnoea.</li>
            <li>Severe hypoventilation.</li>
            <li>Respiratory arrest.</li>
            <li>Cardiac arrest.</li>
            <li>Temporary ventilatory support while preparing definitive airway management.</li>
          </ul>

          <h3>Equipment</h3>

          <ul>
            <li>Bag-valve-mask device.</li>
            <li>Appropriate face mask.</li>
            <li>Oxygen source when available.</li>
            <li>Airway adjuncts as indicated.</li>
            <li>Suction.</li>
            <li>Pulse oximetry and other monitoring equipment.</li>
          </ul>

          <h3>Procedure Principles</h3>

          <ol>
            <li>Assess responsiveness and breathing.</li>
            <li>Call for appropriate assistance.</li>
            <li>Position and open the airway using the appropriate manoeuvre.</li>
            <li>Remove visible airway obstruction when appropriate.</li>
            <li>Use an appropriate airway adjunct when indicated.</li>
            <li>Select the correct mask size.</li>
            <li>Create an effective mask seal.</li>
            <li>Ventilate using appropriate volume, rate, and pressure according to the clinical context and resuscitation guideline.</li>
            <li>Observe chest rise rather than simply squeezing the bag maximally.</li>
            <li>Monitor oxygenation and ventilation.</li>
            <li>Transition to definitive airway and ventilatory support when indicated.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Gastric insufflation.</li>
            <li>Regurgitation and aspiration.</li>
            <li>Barotrauma.</li>
            <li>Hypoventilation from inadequate technique.</li>
            <li>Hyperventilation from excessive ventilation.</li>
            <li>Hypoxaemia due to poor mask seal or airway obstruction.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            BVM ventilation generates positive airway pressure by delivering gas into the lungs.
            Adequate ventilation requires a patent airway and an effective interface.
          </p>

          <p>
            Excessive ventilation can increase intrathoracic pressure, reduce venous return,
            impair cardiac output, and increase the risk of gastric insufflation and barotrauma.
            Effective ventilation therefore requires controlled delivery rather than forceful
            or unnecessarily rapid bag compression.
          </p>
        `
      }
    },


    // =========================================================
    // 9. OROPHARYNGEAL AIRWAY
    // =========================================================

    {
      id: "oropharyngeal-airway",
      name: "Oropharyngeal Airway Insertion",

      notes: {

        anatomy: `
          <h2>Oropharyngeal Airway</h2>

          <p>
            An oropharyngeal airway (OPA) is a curved airway adjunct designed to prevent the tongue
            from obstructing the pharynx in an unconscious patient without an intact gag reflex.
          </p>

          <h3>Indication</h3>

          <p>
            An OPA is primarily indicated in an unconscious patient who cannot maintain airway
            patency and lacks an effective gag reflex.
          </p>

          <h3>Contraindication</h3>

          <p>
            An OPA should generally not be inserted in a conscious or semi-conscious patient with
            an intact gag reflex because it may induce gagging, vomiting, and aspiration.
          </p>

          <h3>Size Selection</h3>

          <p>
            Correct sizing is important. An inappropriately small or large airway may fail to
            relieve obstruction or may worsen it.
          </p>

          <h3>General Procedure</h3>

          <ol>
            <li>Assess the airway.</li>
            <li>Select the appropriate OPA size.</li>
            <li>Open the mouth and inspect for obstruction.</li>
            <li>Insert using the technique appropriate for the patient's age and airway anatomy.</li>
            <li>Confirm that the flange rests appropriately at the lips.</li>
            <li>Reassess airway patency and ventilation.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Gagging.</li>
            <li>Vomiting.</li>
            <li>Aspiration.</li>
            <li>Oral trauma.</li>
            <li>Incorrect placement.</li>
            <li>Persistent airway obstruction.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Loss of consciousness reduces pharyngeal muscle tone. The tongue may fall posteriorly
            and obstruct the upper airway. An OPA physically displaces the tongue and helps maintain
            an open passage for airflow.
          </p>

          <p>
            An OPA does not protect the airway from aspiration and does not replace definitive
            airway management when this is required.
          </p>
        `
      }
    },


    // =========================================================
    // 10. NASOPHARYNGEAL AIRWAY
    // =========================================================

    {
      id: "nasopharyngeal-airway",
      name: "Nasopharyngeal Airway Insertion",

      notes: {

        anatomy: `
          <h2>Nasopharyngeal Airway</h2>

          <p>
            A nasopharyngeal airway (NPA) is a flexible airway adjunct inserted through the nostril
            into the nasopharynx. It can help maintain upper-airway patency in selected patients,
            including some patients with reduced consciousness who retain a gag reflex.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Upper-airway obstruction caused by soft-tissue collapse.</li>
            <li>Patients who cannot tolerate an oropharyngeal airway.</li>
            <li>Selected patients with reduced consciousness and an intact gag reflex.</li>
            <li>Facilitating airway management in selected circumstances.</li>
          </ul>

          <h3>Important Contraindication</h3>

          <p>
            Significant facial trauma, particularly suspected basilar skull fracture or severe
            midface injury, requires careful assessment before nasal airway insertion because of
            the potential for serious complications.
          </p>

          <h3>Procedure</h3>

          <ol>
            <li>Assess the airway and nasal passages.</li>
            <li>Select an appropriately sized airway.</li>
            <li>Lubricate the airway using an appropriate water-soluble lubricant.</li>
            <li>Insert gently through the appropriate nostril along the floor of the nasal cavity.</li>
            <li>Do not force the airway against resistance.</li>
            <li>Confirm placement clinically.</li>
            <li>Monitor airway patency and oxygenation.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Epistaxis.</li>
            <li>Nasal mucosal trauma.</li>
            <li>Vomiting or gagging.</li>
            <li>Incorrect placement.</li>
            <li>Airway obstruction.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            The NPA bypasses some of the soft-tissue obstruction in the upper airway by maintaining
            a patent passage between the nostril and pharynx.
          </p>
        `
      }
    },


    // =========================================================
    // 11. ENDOTRACHEAL INTUBATION
    // =========================================================

    {
      id: "endotracheal-intubation",
      name: "Endotracheal Intubation",

      notes: {

        anatomy: `
          <h2>Endotracheal Intubation</h2>

          <h3>Definition</h3>

          <p>
            Endotracheal intubation is the placement of an endotracheal tube through the mouth or
            nose into the trachea to establish and maintain a secure airway. Orotracheal intubation
            is the most common route during emergency and anaesthetic airway management.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Failure to maintain airway patency.</li>
            <li>Failure of oxygenation.</li>
            <li>Failure of ventilation.</li>
            <li>Severe respiratory failure.</li>
            <li>Cardiac arrest.</li>
            <li>Reduced consciousness with inability to protect the airway.</li>
            <li>Anticipated airway compromise.</li>
            <li>Need for controlled mechanical ventilation.</li>
            <li>Selected surgical and anaesthetic procedures.</li>
          </ul>

          <h3>Preparation</h3>

          <ul>
            <li>Assess the airway and anticipate difficulty.</li>
            <li>Prepare appropriate tube sizes.</li>
            <li>Check laryngoscope or video-laryngoscope equipment.</li>
            <li>Prepare suction.</li>
            <li>Prepare oxygen and ventilation equipment.</li>
            <li>Prepare alternative airway devices.</li>
            <li>Ensure appropriate monitoring.</li>
            <li>Prepare medications according to the clinical context.</li>
            <li>Have a backup plan for failed intubation.</li>
          </ul>

          <h3>General Procedure</h3>

          <ol>
            <li>Assess the need for intubation.</li>
            <li>Position the patient appropriately.</li>
            <li>Preoxygenate where possible.</li>
            <li>Administer appropriate medications when indicated and within the clinician's scope of practice.</li>
            <li>Visualize the laryngeal structures using appropriate equipment.</li>
            <li>Pass the endotracheal tube through the vocal cords into the trachea.</li>
            <li>Inflate the cuff when an appropriate cuffed tube is used.</li>
            <li>Remove the introducer or stylet where applicable.</li>
            <li>Confirm tube placement using appropriate clinical and objective methods.</li>
            <li>Secure the tube.</li>
            <li>Connect to the appropriate ventilation system.</li>
            <li>Continue monitoring and reassess continuously.</li>
          </ol>

          <h3>Confirmation of Placement</h3>

          <p>
            Correct placement should be confirmed using appropriate objective methods. Continuous
            waveform capnography is the preferred method for confirming tracheal placement when
            available in situations such as cardiac arrest and critically ill patients, together
            with clinical assessment and other appropriate checks.
          </p>

          <h3>Complications</h3>

          <ul>
            <li>Oesophageal intubation.</li>
            <li>Right main bronchus intubation.</li>
            <li>Dental trauma.</li>
            <li>Oropharyngeal trauma.</li>
            <li>Laryngeal injury.</li>
            <li>Hypoxaemia.</li>
            <li>Hypotension.</li>
            <li>Aspiration.</li>
            <li>Barotrauma.</li>
            <li>Ventilator-associated complications.</li>
            <li>Pressure injury from prolonged tube placement.</li>
          </ul>

          <h3>Important Principle</h3>

          <p>
            Endotracheal intubation is a high-risk advanced airway procedure and should be performed
            by appropriately trained personnel using appropriate monitoring, equipment, rescue
            strategies, and local protocols.
          </p>
        `,

        physiology: `
          <h2>Physiology of Endotracheal Intubation</h2>

          <p>
            Endotracheal intubation bypasses the upper airway and establishes a direct conduit
            between the respiratory circuit and tracheobronchial tree.
          </p>

          <p>
            It permits controlled ventilation, oxygen delivery, airway suctioning, and administration
            of positive airway pressure.
          </p>

          <p>
            Positive-pressure ventilation can increase intrathoracic pressure and reduce venous
            return. This may produce hypotension, particularly in hypovolaemic or critically ill
            patients.
          </p>
        `
      }
    },


    // =========================================================
    // 12. TRACHEOSTOMY CARE
    // =========================================================

    {
      id: "tracheostomy-care",
      name: "Tracheostomy Care",

      notes: {

        anatomy: `
          <h2>Tracheostomy Care</h2>

          <h3>Definition</h3>

          <p>
            A tracheostomy is a surgically created opening through the anterior neck into the
            trachea, usually through the upper tracheal rings, into which a tracheostomy tube may
            be inserted.
          </p>

          <p>
            Tracheostomy may be performed to bypass upper-airway obstruction, facilitate prolonged
            mechanical ventilation, improve secretion management, or provide a more stable airway
            in selected patients.
          </p>

          <h3>Routine Tracheostomy Care</h3>

          <ol>
            <li>Assess respiratory status and airway patency.</li>
            <li>Check the tracheostomy tube and surrounding skin.</li>
            <li>Assess secretions and suction when clinically indicated.</li>
            <li>Maintain appropriate humidification.</li>
            <li>Provide stoma and skin care according to local protocol.</li>
            <li>Check tube security.</li>
            <li>Assess cuff pressure when a cuffed tube is used and monitoring is indicated.</li>
            <li>Ensure emergency tracheostomy equipment is immediately available.</li>
            <li>Monitor oxygenation and respiratory effort.</li>
          </ol>

          <h3>Potential Complications</h3>

          <ul>
            <li>Tube obstruction.</li>
            <li>Tube displacement.</li>
            <li>Bleeding.</li>
            <li>Stoma infection.</li>
            <li>Skin breakdown.</li>
            <li>Granulation tissue.</li>
            <li>Tracheal injury.</li>
            <li>Air leak.</li>
            <li>Aspiration.</li>
            <li>Loss of airway.</li>
          </ul>

          <h3>Emergency Principle</h3>

          <p>
            Sudden respiratory deterioration in a patient with a tracheostomy should be treated as
            a potential airway emergency. The clinician should rapidly assess oxygenation, tube
            patency, tube position, secretions, cuff status, and the patient's ability to breathe
            through the airway.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            A tracheostomy bypasses the nose and upper airway. This reduces upper-airway resistance
            but also bypasses important physiological functions of the upper airway, including
            warming, humidification, and filtration of inspired gas.
          </p>

          <p>
            Reduced humidification can cause thickened secretions and mucus plugging. Adequate
            humidification and secretion management are therefore important aspects of
            tracheostomy care.
          </p>
        `
      }
    },


    // =========================================================
    // 13. ARTERIAL BLOOD GAS SAMPLING
    // =========================================================

    {
      id: "arterial-blood-gas",
      name: "Arterial Blood Gas Sampling",

      notes: {

        anatomy: `
          <h2>Arterial Blood Gas Sampling</h2>

          <h3>Definition</h3>

          <p>
            Arterial blood gas (ABG) sampling is the collection of arterial blood for measurement
            of parameters including pH, arterial carbon dioxide tension, arterial oxygen tension,
            bicarbonate or calculated bicarbonate, and other analyser-specific variables.
          </p>

          <h3>Common Indications</h3>

          <ul>
            <li>Assessment of acute respiratory failure.</li>
            <li>Suspected hypercapnia.</li>
            <li>Severe hypoxaemia.</li>
            <li>Assessment of acid-base disorders.</li>
            <li>Monitoring selected critically ill patients.</li>
            <li>Assessment of response to respiratory support.</li>
          </ul>

          <h3>Common Sampling Sites</h3>

          <ul>
            <li>Radial artery.</li>
            <li>Femoral artery in selected emergency circumstances.</li>
            <li>Brachial artery in selected circumstances.</li>
          </ul>

          <h3>Preparation</h3>

          <ol>
            <li>Confirm the indication.</li>
            <li>Identify the patient.</li>
            <li>Explain the procedure.</li>
            <li>Assess the intended arterial site.</li>
            <li>Perform hand hygiene and use appropriate PPE.</li>
            <li>Prepare a suitable heparinized blood-gas syringe.</li>
          </ol>

          <h3>General Procedure</h3>

          <ol>
            <li>Position and support the limb appropriately.</li>
            <li>Identify the artery by palpation.</li>
            <li>Prepare the skin using appropriate antiseptic technique.</li>
            <li>Insert the needle into the artery using an appropriate approach.</li>
            <li>Allow arterial pressure to fill the syringe or aspirate according to syringe/device design.</li>
            <li>Withdraw the needle.</li>
            <li>Apply firm pressure to the puncture site for an appropriate duration.</li>
            <li>Remove air bubbles from the sample promptly because they can alter gas measurements.</li>
            <li>Mix the sample appropriately.</li>
            <li>Label and transport the specimen according to laboratory requirements.</li>
            <li>Assess the puncture site and distal circulation.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Pain.</li>
            <li>Haematoma.</li>
            <li>Bleeding.</li>
            <li>Arterial spasm.</li>
            <li>Infection.</li>
            <li>Nerve injury.</li>
            <li>Distal ischaemia, rarely.</li>
          </ul>

          <h3>Interpretation Framework</h3>

          <p>
            ABG interpretation should be systematic:
          </p>

          <ol>
            <li>Assess pH.</li>
            <li>Assess PaCO₂.</li>
            <li>Assess bicarbonate.</li>
            <li>Determine the primary acid-base disorder.</li>
            <li>Assess expected compensation.</li>
            <li>Assess oxygenation.</li>
            <li>Consider the clinical context and other laboratory findings.</li>
          </ol>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Arterial blood gases provide information about pulmonary gas exchange and systemic
            acid-base physiology.
          </p>

          <h3>PaO₂</h3>

          <p>
            Arterial oxygen tension reflects the balance between alveolar oxygen availability and
            pulmonary gas exchange.
          </p>

          <h3>PaCO₂</h3>

          <p>
            PaCO₂ is closely related to alveolar ventilation. When metabolic carbon dioxide
            production remains relatively constant, reduced alveolar ventilation increases PaCO₂,
            while increased alveolar ventilation decreases it.
          </p>

          <h3>pH and Bicarbonate</h3>

          <p>
            The relationship between carbon dioxide and bicarbonate is described by the Henderson-
            Hasselbalch equation. Respiratory disorders primarily alter PaCO₂, while metabolic
            disorders primarily alter bicarbonate and other components of systemic acid-base
            balance.
          </p>
        `
      }
    },


    // =========================================================
    // 14. PEAK EXPIRATORY FLOW
    // =========================================================

    {
      id: "peak-expiratory-flow",
      name: "Peak Expiratory Flow Measurement",

      notes: {

        anatomy: `
          <h2>Peak Expiratory Flow Measurement</h2>

          <p>
            Peak expiratory flow (PEF) is the maximum flow achieved during a forceful expiration
            following maximal inspiration. It is commonly measured using a peak-flow meter and is
            particularly useful in monitoring variable airflow obstruction.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Monitoring asthma.</li>
            <li>Assessing changes in airflow obstruction.</li>
            <li>Monitoring response to bronchodilator treatment.</li>
            <li>Home monitoring in selected patients.</li>
          </ul>

          <h3>Procedure</h3>

          <ol>
            <li>Set the meter to zero.</li>
            <li>Ask the patient to stand or sit upright.</li>
            <li>Ask the patient to take a maximal inspiration.</li>
            <li>Place the mouth firmly around the mouthpiece.</li>
            <li>Blow out as hard and as fast as possible.</li>
            <li>Record the value.</li>
            <li>Repeat according to the measurement protocol.</li>
            <li>Record the best acceptable reading.</li>
          </ol>

          <h3>Factors Affecting Accuracy</h3>

          <ul>
            <li>Poor mouth seal.</li>
            <li>Submaximal inspiration.</li>
            <li>Insufficient expiratory effort.</li>
            <li>Incorrect technique.</li>
            <li>Incorrect device use.</li>
            <li>Failure to reset the device.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Peak expiratory flow depends primarily on the calibre of the large conducting airways,
            respiratory muscle effort, lung volume, and airway resistance.
          </p>

          <p>
            In asthma, bronchoconstriction increases airway resistance and reduces expiratory flow.
            Serial PEF measurements can therefore demonstrate variability in airflow limitation
            and response to treatment.
          </p>
        `
      }
    },


    // =========================================================
    // 15. SPIROMETRY
    // =========================================================

    {
      id: "spirometry",
      name: "Spirometry",

      notes: {

        anatomy: `
          <h2>Spirometry</h2>

          <h3>Definition</h3>

          <p>
            Spirometry is a pulmonary function test that measures airflow and volumes during
            controlled respiratory manoeuvres. It is primarily used to identify and characterize
            airflow limitation.
          </p>

          <h3>Major Measurements</h3>

          <ul>
            <li><strong>FVC:</strong> Forced vital capacity.</li>
            <li><strong>FEV1:</strong> Forced expiratory volume in the first second.</li>
            <li><strong>FEV1/FVC:</strong> Ratio used to assess airflow obstruction.</li>
          </ul>

          <h3>Procedure</h3>

          <ol>
            <li>Explain the test clearly.</li>
            <li>Ensure the patient is appropriately positioned.</li>
            <li>Apply a nose clip where appropriate.</li>
            <li>Ensure a tight seal around the mouthpiece.</li>
            <li>Ask the patient to inhale fully.</li>
            <li>Ask the patient to exhale forcefully and continuously according to the testing protocol.</li>
            <li>Repeat manoeuvres to obtain acceptable and reproducible results.</li>
            <li>Record the best technically acceptable values according to current standards.</li>
            <li>Perform bronchodilator testing when clinically indicated.</li>
          </ol>

          <h3>Quality Requirements</h3>

          <p>
            Spirometry is highly dependent on patient effort and technician technique. Poor effort,
            coughing, early termination, leaks, or incorrect technique can produce misleading
            results.
          </p>

          <h3>Interpretation</h3>

          <p>
            An obstructive ventilatory pattern is characterized by reduced expiratory flow,
            typically reflected by a reduced FEV1/FVC ratio using the appropriate reference
            standard. Restrictive physiology cannot be diagnosed from spirometry alone in every
            circumstance and may require measurement of lung volumes.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            During forced expiration, expiratory flow becomes influenced by airway resistance,
            elastic recoil, and dynamic airway compression.
          </p>

          <p>
            In obstructive diseases such as asthma and chronic obstructive pulmonary disease,
            increased airway resistance and airway collapse reduce expiratory flow, particularly
            during forced expiration.
          </p>

          <p>
            FEV1 measures how much air can be forcibly exhaled during the first second, while FVC
            represents the total volume forcibly exhaled after maximal inspiration.
          </p>
        `
      }
    },


    // =========================================================
    // 16. CHEST PHYSIOTHERAPY / AIRWAY CLEARANCE
    // =========================================================

    {
      id: "airway-clearance",
      name: "Airway Clearance Techniques",

      notes: {

        anatomy: `
          <h2>Airway Clearance Techniques</h2>

          <p>
            Airway clearance techniques are interventions designed to mobilize and remove
            respiratory secretions from the tracheobronchial tree. They are particularly relevant
            in patients with excessive secretions or impaired cough effectiveness.
          </p>

          <h3>Examples</h3>

          <ul>
            <li>Directed coughing.</li>
            <li>Huff coughing.</li>
            <li>Active cycle of breathing techniques.</li>
            <li>Positioning techniques.</li>
            <li>Chest physiotherapy techniques.</li>
            <li>Positive expiratory pressure techniques.</li>
            <li>Mechanical airway-clearance devices in selected patients.</li>
          </ul>

          <h3>General Approach</h3>

          <ol>
            <li>Assess the amount and character of secretions.</li>
            <li>Assess cough effectiveness.</li>
            <li>Assess respiratory status and oxygenation.</li>
            <li>Choose an appropriate technique.</li>
            <li>Position the patient appropriately.</li>
            <li>Teach controlled breathing.</li>
            <li>Use directed cough or huff techniques.</li>
            <li>Encourage expectoration where possible.</li>
            <li>Monitor tolerance and oxygenation.</li>
          </ol>

          <h3>Precautions</h3>

          <p>
            Airway-clearance techniques should be individualized. Some patients may deteriorate
            with particular positions or vigorous chest techniques, especially those with severe
            cardiorespiratory disease, unstable haemodynamics, recent surgery, or certain
            musculoskeletal conditions.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Mucociliary clearance and cough are major physiological mechanisms for removing
            respiratory secretions.
          </p>

          <p>
            Airway-clearance techniques alter airflow, lung volumes, airway pressure, or body
            position to help move mucus from smaller airways toward larger airways where it can
            be expectorated or suctioned.
          </p>
        `
      }
    },


    // =========================================================
    // 17. CHEST TUBE / INTERCOSTAL DRAIN
    // =========================================================

    {
      id: "chest-drain-insertion",
      name: "Chest Drain Insertion",

      notes: {

        anatomy: `
          <h2>Chest Drain Insertion</h2>

          <h3>Definition</h3>

          <p>
            Chest drain insertion, also called tube thoracostomy or intercostal drain insertion,
            involves placing a tube into the pleural space to remove air, blood, pus, or other
            fluid and allow the lung or pleural space to return toward an appropriate physiological
            state.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Selected pneumothoraces.</li>
            <li>Haemothorax.</li>
            <li>Empyema or complicated pleural infection.</li>
            <li>Large or symptomatic pleural effusions in selected circumstances.</li>
            <li>Postoperative drainage.</li>
            <li>Other pleural conditions requiring continuous drainage.</li>
          </ul>

          <h3>Important Principle</h3>

          <p>
            Not every pneumothorax or pleural effusion requires a chest tube. Management depends
            on the clinical condition, size and characteristics of the collection, underlying
            cause, and current guideline recommendations.
          </p>

          <h3>Preparation</h3>

          <ul>
            <li>Confirm indication and imaging where appropriate.</li>
            <li>Assess patient stability.</li>
            <li>Explain the procedure and obtain appropriate consent where possible.</li>
            <li>Prepare monitoring equipment.</li>
            <li>Prepare sterile equipment.</li>
            <li>Provide appropriate analgesia and anaesthesia.</li>
            <li>Prepare the drainage system.</li>
            <li>Ensure emergency equipment is available.</li>
          </ul>

          <h3>General Anatomical Principles</h3>

          <p>
            The pleural space lies between the visceral and parietal pleura. The intercostal
            neurovascular bundle runs along the inferior aspect of each rib. Therefore, procedural
            access is generally planned near the superior border of the rib below the intended
            intercostal space to reduce the risk of injury to the main neurovascular bundle,
            while recognizing that anatomical variation and accessory vessels exist.
          </p>

          <h3>General Procedure</h3>

          <ol>
            <li>Confirm patient, indication, and side.</li>
            <li>Position the patient appropriately.</li>
            <li>Use appropriate monitoring.</li>
            <li>Prepare the skin using sterile technique.</li>
            <li>Administer local anaesthesia appropriately.</li>
            <li>Access the pleural space using the selected technique.</li>
            <li>Insert the drain to the appropriate depth.</li>
            <li>Connect it to the appropriate drainage system.</li>
            <li>Secure the drain.</li>
            <li>Apply an appropriate dressing.</li>
            <li>Confirm position and function clinically and with imaging when indicated.</li>
            <li>Monitor drainage, respiratory status, and complications.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Pain.</li>
            <li>Bleeding.</li>
            <li>Infection.</li>
            <li>Lung injury.</li>
            <li>Diaphragmatic or abdominal organ injury.</li>
            <li>Malposition.</li>
            <li>Persistent air leak.</li>
            <li>Re-expansion pulmonary oedema in selected circumstances.</li>
            <li>Subcutaneous emphysema.</li>
            <li>Injury to intercostal vessels or nerves.</li>
          </ul>

          <h3>Chest Drain Monitoring</h3>

          <p>
            Monitor respiratory status, oxygen saturation, drainage volume and character, bubbling
            or air leak where relevant, tube position, insertion site, and the integrity of the
            drainage system.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            The normal pleural space contains a small amount of lubricating fluid and maintains a
            negative pressure relative to atmospheric pressure. This pressure relationship helps
            keep the lungs expanded against the chest wall.
          </p>

          <p>
            Air entering the pleural space can eliminate the normal transpulmonary pressure gradient
            and cause lung collapse. Blood, pus, or excessive fluid can similarly impair lung
            expansion and ventilation.
          </p>

          <p>
            A chest drain removes pathological air or fluid and allows restoration of appropriate
            pleural mechanics.
          </p>
        `
      }
    },


    // =========================================================
    // 18. THORACENTESIS
    // =========================================================

    {
      id: "thoracentesis",
      name: "Thoracentesis / Pleural Aspiration",

      notes: {

        anatomy: `
          <h2>Thoracentesis</h2>

          <h3>Definition</h3>

          <p>
            Thoracentesis, or pleural aspiration, involves inserting a needle or catheter into
            the pleural space to obtain pleural fluid for diagnostic analysis or to remove fluid
            therapeutically.
          </p>

          <h3>Indications</h3>

          <ul>
            <li>Diagnostic evaluation of an unexplained pleural effusion.</li>
            <li>Suspected pleural infection.</li>
            <li>Suspected malignant pleural disease.</li>
            <li>Selected large symptomatic pleural effusions.</li>
            <li>Other clinically appropriate diagnostic or therapeutic indications.</li>
          </ul>

          <h3>Preparation</h3>

          <ul>
            <li>Review imaging.</li>
            <li>Assess the size and location of the effusion.</li>
            <li>Consider ultrasound guidance where available and appropriate.</li>
            <li>Review bleeding risk and relevant medications.</li>
            <li>Explain the procedure.</li>
            <li>Obtain consent when appropriate.</li>
            <li>Prepare sterile equipment.</li>
            <li>Provide local anaesthesia.</li>
          </ul>

          <h3>Procedure Principles</h3>

          <ol>
            <li>Position the patient appropriately.</li>
            <li>Identify a safe fluid pocket.</li>
            <li>Prepare the skin aseptically.</li>
            <li>Infiltrate local anaesthetic.</li>
            <li>Insert the aspiration needle or catheter using the appropriate technique.</li>
            <li>Obtain fluid for appropriate investigations.</li>
            <li>Drain therapeutic fluid at an appropriate controlled rate when indicated.</li>
            <li>Remove the device and dress the site.</li>
            <li>Monitor the patient after the procedure.</li>
          </ol>

          <h3>Pleural Fluid Investigations</h3>

          <p>
            Depending on the clinical question, pleural fluid may be sent for cell count,
            protein, lactate dehydrogenase, glucose, pH, microbiology, cytology, and other
            investigations.
          </p>

          <h3>Complications</h3>

          <ul>
            <li>Pneumothorax.</li>
            <li>Bleeding.</li>
            <li>Infection.</li>
            <li>Pain.</li>
            <li>Re-expansion pulmonary oedema.</li>
            <li>Organ injury.</li>
            <li>Vasovagal reaction.</li>
          </ul>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Pleural fluid accumulation increases the distance between the lung and chest wall and
            may compress adjacent lung tissue. Large effusions can reduce functional lung volume
            and impair ventilation.
          </p>

          <p>
            Removing clinically significant fluid can improve lung expansion and respiratory
            mechanics. The rate and volume of drainage should be controlled according to the
            clinical situation because rapid changes in pleural pressure can contribute to
            complications.
          </p>
        `
      }
    },


    // =========================================================
    // 19. NEEDLE DECOMPRESSION
    // =========================================================

    {
      id: "needle-decompression",
      name: "Emergency Needle Decompression",

      notes: {

        anatomy: `
          <h2>Emergency Needle Decompression</h2>

          <h3>Definition</h3>

          <p>
            Emergency needle or catheter decompression is a temporizing intervention used when
            tension pneumothorax is strongly suspected and immediate decompression is required.
          </p>

          <h3>Clinical Context</h3>

          <p>
            Tension pneumothorax is a life-threatening condition in which increasing pleural
            pressure compromises lung expansion and cardiovascular function.
          </p>

          <h3>Features Suggestive of Tension Pneumothorax</h3>

          <ul>
            <li>Severe respiratory distress.</li>
            <li>Hypoxaemia.</li>
            <li>Hypotension or obstructive shock.</li>
            <li>Marked unilateral reduction in breath sounds.</li>
            <li>Distended neck veins may occur but are not always present.</li>
            <li>Tracheal deviation is a late and unreliable sign.</li>
            <li>Rapid cardiovascular deterioration.</li>
          </ul>

          <h3>Management Principle</h3>

          <p>
            In a patient with suspected tension pneumothorax and severe physiological compromise,
            treatment should not be delayed for unnecessary diagnostic imaging. Immediate
            decompression is followed by definitive pleural drainage.
          </p>

          <h3>General Procedure</h3>

          <ol>
            <li>Recognize the clinical emergency.</li>
            <li>Call for appropriate emergency assistance.</li>
            <li>Provide oxygen and support airway and circulation as required.</li>
            <li>Identify the recommended decompression site according to current emergency guideline and local protocol.</li>
            <li>Insert an appropriate decompression catheter using the selected technique.</li>
            <li>Confirm clinical improvement where possible.</li>
            <li>Proceed to definitive chest drainage as soon as possible.</li>
          </ol>

          <h3>Complications</h3>

          <ul>
            <li>Bleeding.</li>
            <li>Infection.</li>
            <li>Lung injury.</li>
            <li>Failure to enter the pleural space.</li>
            <li>Catheter obstruction or kinking.</li>
            <li>Incorrect diagnosis.</li>
          </ul>

          <p>
            This is an advanced emergency intervention and requires formal practical training and
            supervised competency.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            In tension pneumothorax, intrapleural pressure progressively rises and compresses the
            affected lung. Increasing intrathoracic pressure can also impair venous return to the
            heart, reducing cardiac preload and cardiac output.
          </p>

          <p>
            Decompression reduces pleural pressure and can rapidly improve venous return,
            cardiovascular function, and ventilation. It is a temporizing intervention and does
            not replace definitive pleural drainage.
          </p>
        `
      }
    },


    // =========================================================
    // 20. INCENTIVE SPIROMETRY
    // =========================================================

    {
      id: "incentive-spirometry",
      name: "Incentive Spirometry",

      notes: {

        anatomy: `
          <h2>Incentive Spirometry</h2>

          <p>
            Incentive spirometry is a breathing exercise using a visual feedback device to encourage
            sustained deep inspiration. It may be incorporated into postoperative respiratory care
            and selected pulmonary rehabilitation programmes.
          </p>

          <h3>General Procedure</h3>

          <ol>
            <li>Explain the purpose of the exercise.</li>
            <li>Position the patient upright where possible.</li>
            <li>Ask the patient to exhale normally.</li>
            <li>Seal the lips around the mouthpiece.</li>
            <li>Inhale slowly and deeply through the device.</li>
            <li>Encourage sustained inspiration according to the device and clinical instruction.</li>
            <li>Hold the inspiration briefly when appropriate.</li>
            <li>Relax and breathe normally.</li>
            <li>Repeat according to the prescribed rehabilitation plan.</li>
          </ol>

          <h3>Important Principle</h3>

          <p>
            Incentive spirometry should not be viewed as a replacement for early mobilization,
            effective analgesia, adequate ventilation, coughing, physiotherapy, and treatment of
            the underlying cause of postoperative respiratory impairment.
          </p>
        `,

        physiology: `
          <h2>Physiology</h2>

          <p>
            Deep inspiration increases transpulmonary pressure and expands dependent and
            under-ventilated alveoli. Repeated deep breathing may therefore help counter reductions
            in lung volumes that occur with pain, immobility, sedation, and shallow postoperative
            breathing.
          </p>
        `
      }
    },


    // =========================================================
    // REFERENCES
    // =========================================================

    {
      id: "respiratory-procedure-references",
      name: "References",

      notes: {

        anatomy: `
          <h2>References and Further Reading</h2>

          <ol>

            <li>
              Global Initiative for Asthma (GINA).
              <strong>Global Strategy for Asthma Management and Prevention.</strong>
              Current strategy report.
            </li>

            <li>
              Global Initiative for Chronic Obstructive Lung Disease (GOLD).
              <strong>Global Strategy for the Prevention, Diagnosis and Management of COPD.</strong>
              Current GOLD report.
            </li>

            <li>
              World Health Organization.
              <strong>WHO Guidelines on Hand Hygiene in Health Care.</strong>
              World Health Organization.
            </li>

            <li>
              World Health Organization.
              <strong>Standard Precautions for the Prevention and Control of Infections.</strong>
              World Health Organization.
            </li>

            <li>
              World Health Organization.
              <strong>Basic Emergency Care: Approach to the Acutely Ill and Injured.</strong>
              World Health Organization and International Committee of the Red Cross.
            </li>

            <li>
              Global Initiative for Chronic Obstructive Lung Disease.
              <strong>Diagnosis, Management and Prevention of Chronic Obstructive Pulmonary Disease.</strong>
            </li>

            <li>
              British Thoracic Society.
              <strong>BTS Guideline for Pleural Disease.</strong>
              British Thoracic Society.
            </li>

            <li>
              British Thoracic Society.
              <strong>Guideline for Oxygen Use in Adults in Healthcare and Emergency Settings.</strong>
              Thorax.
            </li>

            <li>
              European Respiratory Society / American Thoracic Society.
              <strong>Official Clinical Practice Guidelines and Technical Standards for Respiratory Care.</strong>
            </li>

            <li>
              American Thoracic Society / European Respiratory Society.
              <strong>Standardization of Spirometry.</strong>
              American Journal of Respiratory and Critical Care Medicine.
            </li>

            <li>
              Resuscitation Council.
              <strong>Adult Advanced Life Support and Basic Life Support Guidelines.</strong>
              Current resuscitation guidance.
            </li>

            <li>
              National Institute for Health and Care Excellence (NICE).
              <strong>Acute Respiratory and Emergency Care Guidance.</strong>
              NICE.
            </li>

            <li>
              National Institute for Health and Care Excellence (NICE).
              <strong>Asthma: Diagnosis, Monitoring and Chronic Asthma Management.</strong>
              NICE.
            </li>

            <li>
              National Institute for Health and Care Excellence (NICE).
              <strong>Chronic Obstructive Pulmonary Disease in Over 16s: Diagnosis and Management.</strong>
              NICE.
            </li>

          </ol>

          <h3>Recommended Online References</h3>

          <ul>

            <li>
              <a href="https://www.who.int/">
                World Health Organization
              </a>
            </li>

            <li>
              <a href="https://ginasthma.org/">
                Global Initiative for Asthma
              </a>
            </li>

            <li>
              <a href="https://goldcopd.org/">
                Global Initiative for Chronic Obstructive Lung Disease
              </a>
            </li>

            <li>
              <a href="https://www.brit-thoracic.org.uk/">
                British Thoracic Society
              </a>
            </li>

            <li>
              <a href="https://www.nice.org.uk/">
                National Institute for Health and Care Excellence
              </a>
            </li>

            <li>
              <a href="https://www.ersnet.org/">
                European Respiratory Society
              </a>
            </li>

            <li>
              <a href="https://www.thoracic.org/">
                American Thoracic Society
              </a>
            </li>

            <li>
              <a href="https://www.resus.org.uk/">
                Resuscitation Council UK
              </a>
            </li>

          </ul>

          <h3>Educational and Safety Statement</h3>

          <p>
            Respiratory procedures range from basic bedside interventions to advanced invasive
            procedures with potentially life-threatening complications. This educational material
            is intended to support undergraduate medical education and revision. It does not
            replace supervised practical training, institutional protocols, current national
            guidelines, or specialist instruction.
          </p>

          <p>
            Procedure-specific decisions should take into account the patient's age, clinical
            condition, severity of respiratory failure, comorbidities, available equipment,
            operator competence, and local protocols. Advanced airway procedures, pleural
            procedures, invasive ventilation, and emergency thoracic interventions require
            appropriate training, supervision, monitoring, and rescue capability.
          </p>
        `,

        physiology: `
          <h2>Respiratory Physiology References</h2>

          <p>
            The physiological principles underlying respiratory procedures are based on standard
            concepts of pulmonary ventilation, alveolar gas exchange, ventilation-perfusion
            relationships, respiratory mechanics, acid-base physiology, oxygen transport,
            carbon dioxide transport, and cardiopulmonary interaction.
          </p>

          <p>
            For detailed undergraduate and clinical study, students should additionally consult
            standard medical physiology and respiratory medicine textbooks together with current
            professional guidelines.
          </p>
        `
      }
    }

  ]
};

