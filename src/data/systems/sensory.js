export const sensorySystem = {
  id: "sensory",
  name: "Sensory Organs",

  organs: [

    // ============================================================
    // EYE
    // ============================================================

    {
      id: "eye",
      name: "Eye",
      modelPath: "models/sensory/eye/",
      modelFile: "eye.glb",

      notes: {

        anatomy: `
          <h2>Eye Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The eye is a specialized sensory organ of the visual system responsible for detecting
            electromagnetic radiation in the visible spectrum and converting light energy into
            electrical signals that are transmitted to the brain through the optic nerve.
            The eye is located within the orbit and is supported by extraocular muscles,
            connective tissue, blood vessels and nerves.
          </p>

          <h3>Major Components</h3>
          <ul>
            <li><strong>Eyeball:</strong> the main organ responsible for optical focusing and phototransduction.</li>
            <li><strong>Orbit:</strong> bony cavity that protects and supports the eye.</li>
            <li><strong>Extraocular muscles:</strong> move the eyeball and coordinate gaze.</li>
            <li><strong>Eyelids:</strong> protect the anterior surface of the eye.</li>
            <li><strong>Conjunctiva:</strong> mucous membrane covering the anterior sclera and inner eyelids.</li>
            <li><strong>Lacrimal apparatus:</strong> produces, distributes and drains tears.</li>
          </ul>

          <h3>Layers of the Eyeball</h3>
          <ol>
            <li>
              <strong>Fibrous tunic:</strong> consists of the sclera and cornea.
            </li>
            <li>
              <strong>Vascular tunic:</strong> consists of the choroid, ciliary body and iris.
            </li>
            <li>
              <strong>Neural tunic:</strong> consists primarily of the retina.
            </li>
          </ol>

          <h3>Anterior Segment</h3>
          <p>
            The anterior segment includes the cornea, anterior chamber, iris, posterior chamber,
            ciliary body and lens. Aqueous humour circulates through these structures and provides
            nutrients to avascular tissues while contributing to intraocular pressure.
          </p>

          <h3>Posterior Segment</h3>
          <p>
            The posterior segment contains the vitreous body, retina, choroid and optic disc.
            The retina detects light and initiates visual signal processing.
          </p>

          <h3>Optical Structures</h3>
          <ul>
            <li><strong>Cornea:</strong> major refractive surface of the eye.</li>
            <li><strong>Aqueous humour:</strong> fluid occupying the anterior and posterior chambers.</li>
            <li><strong>Iris:</strong> controls pupil diameter.</li>
            <li><strong>Pupil:</strong> aperture through which light enters the eye.</li>
            <li><strong>Lens:</strong> provides variable optical focusing.</li>
            <li><strong>Vitreous body:</strong> transparent gel filling most of the posterior cavity.</li>
          </ul>

          <h3>Retina</h3>
          <p>
            The retina contains photoreceptors and multiple layers of neurons that process visual
            information before transmission through retinal ganglion cell axons to the optic nerve.
          </p>

          <h3>Macula and Fovea</h3>
          <p>
            The macula is a specialized region of the posterior retina responsible for central vision.
            The fovea centralis contains a high density of cones and provides the highest visual acuity.
          </p>

          <h3>Optic Disc</h3>
          <p>
            The optic disc is the point where retinal ganglion cell axons leave the eye to form the
            optic nerve. It contains no photoreceptors and therefore corresponds to the physiological
            blind spot.
          </p>

          <h3>Blood Supply</h3>
          <p>
            The eye receives arterial blood primarily from branches of the ophthalmic artery.
            The central retinal artery supplies the inner retina, while the choroidal circulation
            provides blood to the outer retina and photoreceptor region.
          </p>

          <h3>Innervation</h3>
          <ul>
            <li><strong>Optic nerve (CN II):</strong> carries visual information.</li>
            <li><strong>Oculomotor nerve (CN III):</strong> supplies most extraocular muscles and carries parasympathetic fibres to the pupil and ciliary muscle.</li>
            <li><strong>Trochlear nerve (CN IV):</strong> supplies superior oblique muscle.</li>
            <li><strong>Abducens nerve (CN VI):</strong> supplies lateral rectus muscle.</li>
            <li><strong>Ophthalmic division of trigeminal nerve (CN V1):</strong> provides sensory innervation to the cornea and orbital structures.</li>
          </ul>
        `,

        physiology: `
          <h2>Eye Physiology</h2>

          <h3>Vision</h3>
          <p>
            Vision begins when photons enter the eye and are focused onto the retina.
            Photoreceptors convert light energy into changes in membrane potential.
            Retinal neurons then process the signal before ganglion cell axons transmit
            information through the optic nerve to the brain.
          </p>

          <h3>Refraction</h3>
          <p>
            Refraction is the bending of light as it passes between media with different
            refractive indices. The cornea provides most of the eye's refractive power,
            while the lens provides adjustable focusing.
          </p>

          <h3>Accommodation</h3>
          <p>
            Accommodation allows the eye to focus on near objects. Parasympathetic
            stimulation causes contraction of the ciliary muscle, reducing zonular tension
            and allowing the lens to become more convex.
          </p>

          <h3>Pupillary Reflex</h3>
          <p>
            Bright light activates retinal pathways that ultimately stimulate parasympathetic
            output through the oculomotor nerve. The sphincter pupillae contracts, reducing
            pupil diameter.
          </p>

          <h3>Visual Pathway</h3>
          <ol>
            <li>Retina</li>
            <li>Optic nerve</li>
            <li>Optic chiasm</li>
            <li>Optic tract</li>
            <li>Lateral geniculate nucleus of the thalamus</li>
            <li>Optic radiations</li>
            <li>Primary visual cortex</li>
          </ol>

          <h3>Colour Vision</h3>
          <p>
            Colour vision is primarily mediated by cone photoreceptors containing different
            classes of photopigments with sensitivity to different wavelengths of light.
          </p>

          <h3>Dark Adaptation</h3>
          <p>
            Dark adaptation involves increased retinal sensitivity following transition from
            bright to dim illumination. Rod photoreceptors become increasingly important as
            ambient light decreases.
          </p>
        `,

        biochemistry: `
          <h2>Eye Biochemistry</h2>

          <h3>Phototransduction</h3>
          <p>
            Phototransduction converts photons into electrical signals within photoreceptors.
            In rods, light activates rhodopsin, which activates transducin and subsequently
            phosphodiesterase. This reduces cyclic GMP concentration, causing closure of
            cyclic nucleotide-gated channels and photoreceptor hyperpolarization.
          </p>

          <h3>Visual Pigments</h3>
          <p>
            Rhodopsin consists of the protein opsin combined with the chromophore
            11-cis-retinal. Absorption of light converts 11-cis-retinal to all-trans-retinal,
            initiating the phototransduction cascade.
          </p>

          <h3>Vitamin A</h3>
          <p>
            Vitamin A is essential for normal visual function because retinal derivatives
            participate in visual pigment formation. Severe deficiency can impair dark
            adaptation and cause xerophthalmia.
          </p>

          <h3>Antioxidant Protection</h3>
          <p>
            Retinal tissues have high metabolic activity and are exposed to oxidative stress.
            Antioxidant mechanisms help protect photoreceptors and retinal cells from oxidative
            injury.
          </p>

          <h3>Aqueous Humour</h3>
          <p>
            Aqueous humour contains electrolytes, glucose, amino acids and other substances
            required for the metabolic support of avascular ocular tissues.
          </p>
        `,

        pathology: `
          <h2>Eye Pathology</h2>

          <h3>Cataract</h3>
          <p>
            A cataract is an opacity of the crystalline lens that interferes with transmission
            of light and causes progressive visual impairment.
          </p>

          <h3>Glaucoma</h3>
          <p>
            Glaucoma is a group of optic neuropathies characterized by progressive damage to
            the optic nerve, often associated with abnormal intraocular pressure.
          </p>

          <h3>Conjunctivitis</h3>
          <p>
            Conjunctivitis is inflammation of the conjunctiva. It may be caused by infection,
            allergy or chemical irritation.
          </p>

          <h3>Retinal Detachment</h3>
          <p>
            Retinal detachment occurs when the neurosensory retina separates from the underlying
            retinal pigment epithelium, potentially causing severe visual impairment.
          </p>

          <h3>Diabetic Retinopathy</h3>
          <p>
            Chronic hyperglycaemia damages retinal microvasculature and may cause microaneurysms,
            haemorrhages, macular oedema, ischemia and abnormal neovascularization.
          </p>

          <h3>Age-Related Macular Degeneration</h3>
          <p>
            Age-related macular degeneration affects the macula and may cause progressive loss
            of central vision.
          </p>

          <h3>Refractive Errors</h3>
          <ul>
            <li><strong>Myopia:</strong> distant objects are focused in front of the retina.</li>
            <li><strong>Hypermetropia:</strong> images tend to be focused behind the retina.</li>
            <li><strong>Astigmatism:</strong> unequal refractive power causes distorted focusing.</li>
            <li><strong>Presbyopia:</strong> age-related reduction in accommodation.</li>
          </ul>
        `,

        microbiology: `
          <h2>Eye Microbiology</h2>

          <h3>Bacterial Infections</h3>
          <ul>
            <li><strong>Staphylococcus aureus:</strong> can cause conjunctivitis and keratitis.</li>
            <li><strong>Staphylococcus epidermidis:</strong> associated with ocular infections, particularly involving implanted devices.</li>
            <li><strong>Pseudomonas aeruginosa:</strong> important cause of severe bacterial keratitis, particularly in contact lens users.</li>
            <li><strong>Neisseria gonorrhoeae:</strong> can cause severe hyperacute conjunctivitis and corneal damage.</li>
            <li><strong>Chlamydia trachomatis:</strong> causes trachoma and inclusion conjunctivitis.</li>
          </ul>

          <h3>Viral Infections</h3>
          <ul>
            <li><strong>Herpes simplex virus:</strong> can cause keratitis and other ocular disease.</li>
            <li><strong>Varicella-zoster virus:</strong> may cause keratitis, uveitis and retinal disease.</li>
            <li><strong>Adenoviruses:</strong> common causes of viral conjunctivitis.</li>
          </ul>

          <h3>Trachoma</h3>
          <p>
            Trachoma is a chronic ocular infection caused by Chlamydia trachomatis.
            Repeated infection can cause conjunctival scarring, trichiasis and corneal damage.
          </p>
        `,

        parasitology: `
          <h2>Eye Parasitology</h2>

          <h3>Onchocerciasis</h3>
          <p>
            Onchocerca volvulus is transmitted by blackflies and can cause ocular disease
            leading to visual impairment and blindness.
          </p>

          <h3>Toxoplasmosis</h3>
          <p>
            Toxoplasma gondii can cause chorioretinitis, particularly in congenital infection
            or immunocompromised individuals.
          </p>

          <h3>Acanthamoeba Keratitis</h3>
          <p>
            Acanthamoeba species can cause severe keratitis, particularly among contact lens
            users exposed to contaminated water or inadequate lens hygiene.
          </p>

          <h3>Loiasis</h3>
          <p>
            Loa loa may migrate through subconjunctival tissues and can occasionally be
            observed crossing the ocular surface.
          </p>
        `,

        immunology: `
          <h2>Eye Immunology</h2>

          <p>
            The eye possesses specialized mechanisms that limit excessive inflammation because
            uncontrolled immune responses can damage highly organized optical tissues.
          </p>

          <h3>Ocular Immune Privilege</h3>
          <p>
            Certain ocular compartments exhibit immune privilege, involving anatomical barriers,
            local immunoregulatory mechanisms and specialized immune responses.
          </p>

          <h3>Uveitis</h3>
          <p>
            Uveitis is inflammation involving the uveal tract and may result from infectious,
            autoimmune or inflammatory conditions.
          </p>
        `,

        pharmacology: `
          <h2>Eye Pharmacology</h2>

          <h3>Antiglaucoma Drugs</h3>
          <ul>
            <li><strong>Prostaglandin analogues:</strong> increase aqueous humour outflow.</li>
            <li><strong>Beta blockers:</strong> reduce aqueous humour production.</li>
            <li><strong>Carbonic anhydrase inhibitors:</strong> reduce aqueous humour production.</li>
            <li><strong>Alpha-2 agonists:</strong> reduce aqueous humour production and may increase outflow.</li>
            <li><strong>Miotics:</strong> increase trabecular outflow by contracting the ciliary muscle.</li>
          </ul>

          <h3>Mydriatics</h3>
          <p>
            Antimuscarinic drugs such as atropine and tropicamide can cause pupil dilation
            and cycloplegia.
          </p>

          <h3>Ocular Antibiotics</h3>
          <p>
            Topical antibiotics may be used for susceptible bacterial infections of the
            conjunctiva, cornea and other accessible ocular tissues.
          </p>

          <h3>Topical Corticosteroids</h3>
          <p>
            Corticosteroids reduce ocular inflammation but can increase intraocular pressure
            and may worsen certain infections if used inappropriately.
          </p>
        `,

        clinical: `
          <h2>Clinical Eye Correlations</h2>

          <h3>Optic Nerve Lesion</h3>
          <p>
            Damage to the optic nerve can cause visual loss in the affected eye and may
            impair the afferent limb of the pupillary light reflex.
          </p>

          <h3>Optic Chiasm Lesion</h3>
          <p>
            A lesion affecting the central optic chiasm can produce bitemporal visual field
            loss because crossing nasal retinal fibres are affected.
          </p>

          <h3>Optic Tract Lesion</h3>
          <p>
            Lesions posterior to the chiasm may produce contralateral homonymous visual field
            defects.
          </p>

          <h3>Third Cranial Nerve Palsy</h3>
          <p>
            Oculomotor nerve dysfunction may produce ptosis, impaired eye movements,
            diplopia and, when parasympathetic fibres are involved, pupil abnormalities.
          </p>

          <h3>Retinal Artery Occlusion</h3>
          <p>
            Acute interruption of retinal arterial blood supply can cause sudden severe
            visual loss and represents an ophthalmic emergency.
          </p>
        `,

        embryology: `
          <h2>Eye Embryology</h2>

          <p>
            The eye develops through coordinated interactions between neuroectoderm,
            surface ectoderm and surrounding mesenchymal tissues.
          </p>

          <h3>Optic Vesicle</h3>
          <p>
            The optic vesicle develops as an outgrowth of the forebrain and interacts
            with surface ectoderm to initiate formation of the lens.
          </p>

          <h3>Optic Cup</h3>
          <p>
            Invagination of the optic vesicle produces the optic cup, which contributes
            to formation of the retina and associated structures.
          </p>

          <h3>Lens</h3>
          <p>
            The lens develops primarily from surface ectoderm through formation of the
            lens placode and lens vesicle.
          </p>

          <h3>Clinical Correlation</h3>
          <p>
            Abnormal development can result in congenital cataract, coloboma and other
            developmental ocular abnormalities.
          </p>
        `,

        histology: `
          <h2>Eye Histology</h2>

          <h3>Cornea</h3>
          <p>
            The cornea consists of several layers including epithelium, Bowman's layer,
            stroma, Descemet's membrane and endothelium.
          </p>

          <h3>Retina</h3>
          <p>
            The retina contains photoreceptors, bipolar cells, ganglion cells and several
            types of interneurons and supporting cells arranged into distinct layers.
          </p>

          <h3>Photoreceptors</h3>
          <ul>
            <li><strong>Rods:</strong> highly sensitive to low light levels and important for scotopic vision.</li>
            <li><strong>Cones:</strong> support high-acuity and colour vision.</li>
          </ul>

          <h3>Lens</h3>
          <p>
            The lens is composed mainly of elongated lens fibres containing crystallin
            proteins and is enclosed by a capsule.
          </p>

          <h3>Retinal Pigment Epithelium</h3>
          <p>
            The retinal pigment epithelium supports photoreceptor metabolism, participates
            in visual pigment recycling and contributes to the blood-retinal barrier.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Eye Facts</h2>
          <ul>
            <li>The cornea provides most of the eye's refractive power.</li>
            <li>The lens provides variable focusing through accommodation.</li>
            <li>Rods are specialized for low-light vision.</li>
            <li>Cones provide high-acuity and colour vision.</li>
            <li>The fovea provides the highest visual acuity.</li>
            <li>The optic disc is the physiological blind spot.</li>
            <li>CN II carries visual information to the brain.</li>
            <li>CN III, IV and VI control extraocular movements.</li>
            <li>Vitamin A derivatives are essential for phototransduction.</li>
            <li>Glaucoma primarily damages the optic nerve.</li>
            <li>Cataract involves opacity of the lens.</li>
            <li>Diabetic retinopathy results from retinal microvascular damage.</li>
            <li>Onchocerca volvulus can cause ocular disease and blindness.</li>
            <li>Acanthamoeba can cause severe keratitis.</li>
          </ul>
        `
      },

      parts: [

        {
          id: "cornea",
          name: "Cornea",
          modelPath: "models/sensory/eye/",
          modelFile: "cornea.glb",

          notes: {
            anatomy: `
              <h2>Cornea</h2>
              <p>
                The cornea is the transparent anterior portion of the fibrous tunic of the eye.
                It is avascular and receives nutrients from tears, aqueous humour and peripheral
                vessels.
              </p>
              <h3>Layers</h3>
              <ol>
                <li>Corneal epithelium</li>
                <li>Bowman's layer</li>
                <li>Stroma</li>
                <li>Descemet's membrane</li>
                <li>Corneal endothelium</li>
              </ol>
            `,

            physiology: `
              <h2>Corneal Physiology</h2>
              <p>
                The cornea provides most of the refractive power of the eye and must remain
                transparent for normal vision.
              </p>
              <p>
                Corneal endothelial cells maintain stromal dehydration through ion transport,
                helping preserve optical transparency.
              </p>
            `,

            pathology: `
              <h2>Corneal Pathology</h2>
              <ul>
                <li><strong>Keratitis:</strong> inflammation of the cornea.</li>
                <li><strong>Corneal ulcer:</strong> epithelial defect with stromal inflammation or infection.</li>
                <li><strong>Keratoconus:</strong> progressive thinning and protrusion of the cornea.</li>
                <li><strong>Corneal oedema:</strong> accumulation of fluid within the cornea.</li>
              </ul>
            `
          }
        },

        {
          id: "sclera",
          name: "Sclera",
          modelFile: "sclera.glb",

          notes: {
            anatomy: `
              <h2>Sclera</h2>
              <p>
                The sclera is the opaque posterior portion of the fibrous tunic of the eye.
                It provides structural support and protection and serves as an attachment
                site for extraocular muscles.
              </p>
            `,

            physiology: `
              <p>
                The sclera maintains the shape of the eyeball and provides mechanical protection
                for the intraocular structures.
              </p>
            `,

            pathology: `
              <h2>Scleral Disease</h2>
              <p>
                Scleritis is a painful inflammatory disorder of the sclera and may be associated
                with systemic autoimmune disease.
              </p>
            `
          }
        },

        {
          id: "iris",
          name: "Iris",
          modelFile: "iris.glb",

          notes: {
            anatomy: `
              <h2>Iris</h2>
              <p>
                The iris is the coloured portion of the eye located between the cornea and lens.
                It contains the pupil and smooth muscles that regulate pupil diameter.
              </p>

              <ul>
                <li><strong>Sphincter pupillae:</strong> constricts the pupil.</li>
                <li><strong>Dilator pupillae:</strong> dilates the pupil.</li>
              </ul>
            `,

            physiology: `
              <p>
                The iris regulates the amount of light entering the eye through changes
                in pupil diameter.
              </p>
            `
          }
        },

        {
          id: "lens",
          name: "Lens",
          modelFile: "lens.glb",

          notes: {
            anatomy: `
              <h2>Lens</h2>
              <p>
                The lens is a transparent, biconvex structure located posterior to the iris.
                It is suspended by zonular fibres attached to the ciliary body.
              </p>
            `,

            physiology: `
              <h2>Accommodation</h2>
              <p>
                During near vision, parasympathetic stimulation causes ciliary muscle contraction.
                Zonular tension decreases and the elastic lens becomes more convex, increasing
                refractive power.
              </p>
            `,

            pathology: `
              <h2>Lens Pathology</h2>
              <p>
                Cataract is progressive loss of lens transparency. Causes include ageing,
                diabetes, trauma, corticosteroid exposure and congenital abnormalities.
              </p>
            `
          }
        },

        {
          id: "retina",
          name: "Retina",
          modelFile: "retina.glb",

          notes: {
            anatomy: `
              <h2>Retina</h2>
              <p>
                The retina is the neural layer of the eye. It contains photoreceptors and
                neural circuits that transform light into electrical signals.
              </p>

              <h3>Major Cells</h3>
              <ul>
                <li>Rods</li>
                <li>Cones</li>
                <li>Bipolar cells</li>
                <li>Ganglion cells</li>
                <li>Horizontal cells</li>
                <li>Amacrine cells</li>
                <li>Müller glial cells</li>
              </ul>
            `,

            physiology: `
              <p>
                Photoreceptors detect light and initiate phototransduction. Retinal interneurons
                process the signal, while ganglion cells generate action potentials whose axons
                form the optic nerve.
              </p>
            `,

            pathology: `
              <ul>
                <li>Retinal detachment</li>
                <li>Diabetic retinopathy</li>
                <li>Retinal artery occlusion</li>
                <li>Retinal vein occlusion</li>
                <li>Macular degeneration</li>
                <li>Retinitis pigmentosa</li>
              </ul>
            `
          }
        },

        {
          id: "optic-nerve",
          name: "Optic Nerve",
          modelFile: "optic_nerve.glb",

          notes: {
            anatomy: `
              <h2>Optic Nerve</h2>
              <p>
                The optic nerve is cranial nerve II and consists of axons of retinal ganglion
                cells. It carries visual information from the retina toward the optic chiasm.
              </p>
            `,

            physiology: `
              <p>
                The optic nerve transmits electrical information representing visual stimuli
                from the retina to the central nervous system.
              </p>
            `,

            clinical: `
              <h2>Clinical Correlations</h2>
              <ul>
                <li>Optic neuritis</li>
                <li>Optic neuropathy</li>
                <li>Glaucomatous optic nerve damage</li>
                <li>Optic nerve compression</li>
              </ul>
            `
          }
        }
      ]
    },

    // ============================================================
    // EAR
    // ============================================================

    {
      id: "ear",
      name: "Ear",
      modelPath: "models/sensory/ear/",
      modelFile: "ear.glb",

      notes: {

        anatomy: `
          <h2>Ear Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The ear is a specialized sensory organ responsible for hearing and equilibrium.
            It is divided anatomically into the external ear, middle ear and inner ear.
          </p>

          <h3>Major Divisions</h3>
          <ul>
            <li><strong>External ear:</strong> collects and directs sound toward the tympanic membrane.</li>
            <li><strong>Middle ear:</strong> mechanically transmits and amplifies sound vibrations.</li>
            <li><strong>Inner ear:</strong> contains the cochlea for hearing and the vestibular apparatus for balance.</li>
          </ul>

          <h3>External Ear</h3>
          <ul>
            <li>Auricle/pinna</li>
            <li>External acoustic meatus</li>
            <li>Tympanic membrane</li>
          </ul>

          <h3>Middle Ear</h3>
          <ul>
            <li>Malleus</li>
            <li>Incus</li>
            <li>Stapes</li>
            <li>Auditory tube</li>
            <li>Middle-ear muscles</li>
          </ul>

          <h3>Inner Ear</h3>
          <ul>
            <li>Cochlea</li>
            <li>Vestibule</li>
            <li>Semicircular canals</li>
            <li>Utricle</li>
            <li>Saccule</li>
          </ul>

          <h3>Cranial Nerve</h3>
          <p>
            The vestibulocochlear nerve (CN VIII) carries auditory and vestibular information
            from the inner ear to the brainstem.
          </p>
        `,

        physiology: `
          <h2>Ear Physiology</h2>

          <h3>Hearing</h3>
          <p>
            Sound waves enter the external acoustic meatus and vibrate the tympanic membrane.
            Vibrations are transmitted through the ossicles to the oval window, producing
            fluid movement within the cochlea.
          </p>

          <h3>Cochlear Transduction</h3>
          <p>
            Movement of cochlear fluids causes displacement of the basilar membrane.
            This stimulates mechanosensory hair cells in the organ of Corti.
          </p>

          <h3>Auditory Pathway</h3>
          <ol>
            <li>Cochlear hair cells</li>
            <li>Cochlear nerve</li>
            <li>Cochlear nuclei</li>
            <li>Superior olivary complex</li>
            <li>Lateral lemniscus</li>
            <li>Inferior colliculus</li>
            <li>Medial geniculate body</li>
            <li>Primary auditory cortex</li>
          </ol>

          <h3>Balance</h3>
          <p>
            The vestibular system detects head position, linear acceleration and angular
            acceleration. Information is integrated by vestibular nuclei, cerebellum,
            spinal pathways and cortical networks.
          </p>

          <h3>Semicircular Canals</h3>
          <p>
            The semicircular canals detect angular acceleration of the head.
          </p>

          <h3>Utricle and Saccule</h3>
          <p>
            The utricle and saccule detect linear acceleration and gravitational orientation.
          </p>
        `,

        biochemistry: `
          <h2>Ear Biochemistry</h2>

          <h3>Hair Cell Mechanotransduction</h3>
          <p>
            Mechanical displacement of hair-cell stereocilia opens mechanically gated ion
            channels. Potassium-rich endolymph provides the electrochemical environment
            necessary for receptor potentials.
          </p>

          <h3>Endolymph</h3>
          <p>
            Endolymph has an unusually high potassium concentration and low sodium concentration.
            This ionic composition is essential for normal hair-cell transduction.
          </p>

          <h3>Neurotransmission</h3>
          <p>
            Inner hair cells release glutamate onto afferent fibres of the cochlear nerve.
            Vestibular hair cells also use glutamatergic transmission at their afferent synapses.
          </p>

          <h3>Energy Metabolism</h3>
          <p>
            Hair cells have high metabolic requirements and depend on mitochondrial ATP
            production to maintain ion gradients and cellular function.
          </p>
        `,

        pathology: `
          <h2>Ear Pathology</h2>

          <h3>Otitis Externa</h3>
          <p>
            Otitis externa is inflammation or infection of the external auditory canal.
          </p>

          <h3>Otitis Media</h3>
          <p>
            Otitis media involves inflammation and infection of the middle ear and is
            particularly common in children.
          </p>

          <h3>Conductive Hearing Loss</h3>
          <p>
            Conductive hearing loss results from impaired transmission of sound through
            the external or middle ear.
          </p>

          <h3>Sensorineural Hearing Loss</h3>
          <p>
            Sensorineural hearing loss results from dysfunction of the cochlea, auditory
            nerve or central auditory pathways.
          </p>

          <h3>Meniere Disease</h3>
          <p>
            Meniere disease is associated with abnormal inner-ear fluid homeostasis and
            classically presents with episodic vertigo, fluctuating hearing loss and tinnitus.
          </p>

          <h3>Benign Paroxysmal Positional Vertigo</h3>
          <p>
            BPPV commonly results from displacement of otoconia into a semicircular canal,
            producing brief episodes of positional vertigo.
          </p>

          <h3>Acoustic Neuroma</h3>
          <p>
            Vestibular schwannoma is a benign tumour arising from Schwann cells associated
            with the vestibular portion of CN VIII. It can cause progressive unilateral
            sensorineural hearing loss, tinnitus and balance disturbance.
          </p>
        `,

        microbiology: `
          <h2>Ear Microbiology</h2>

          <h3>Otitis Externa</h3>
          <p>
            Pseudomonas aeruginosa and Staphylococcus aureus are important bacterial causes
            of acute otitis externa.
          </p>

          <h3>Acute Otitis Media</h3>
          <ul>
            <li><strong>Streptococcus pneumoniae</strong></li>
            <li><strong>Haemophilus influenzae</strong></li>
            <li><strong>Moraxella catarrhalis</strong></li>
          </ul>

          <h3>Otitis Media Complications</h3>
          <p>
            Infection can extend to surrounding structures and may cause mastoiditis,
            tympanic membrane perforation or, rarely, intracranial complications.
          </p>
        `,

        parasitology: `
          <h2>Ear Parasitology</h2>

          <h3>Otomycosis</h3>
          <p>
            Although primarily fungal rather than parasitic, fungal infections of the
            external auditory canal are clinically important and are often associated
            with Aspergillus species.
          </p>

          <h3>Ear Mites</h3>
          <p>
            Arthropod infestation of the external ear is uncommon in humans but may occur
            after exposure to infested animals or environments.
          </p>
        `,

        immunology: `
          <h2>Ear Immunology</h2>

          <h3>Middle-Ear Inflammation</h3>
          <p>
            Infection of the middle ear activates innate and adaptive immune responses,
            resulting in mucosal inflammation, fluid accumulation and local tissue injury.
          </p>

          <h3>Autoimmune Inner-Ear Disease</h3>
          <p>
            Immune-mediated damage to inner-ear structures can produce progressive or
            fluctuating sensorineural hearing loss and vestibular symptoms.
          </p>
        `,

        pharmacology: `
          <h2>Ear Pharmacology</h2>

          <h3>Antibiotics</h3>
          <p>
            Appropriate antibacterial therapy may be used for selected bacterial infections
            of the external and middle ear.
          </p>

          <h3>Otitis Externa Treatment</h3>
          <p>
            Topical antimicrobial preparations are commonly used for uncomplicated bacterial
            otitis externa. Selection depends on the suspected organism and integrity of
            the tympanic membrane.
          </p>

          <h3>Vertigo</h3>
          <p>
            Drugs used for symptomatic management of vertigo may include antihistamines
            and other vestibular suppressants, although prolonged use can interfere with
            vestibular compensation.
          </p>

          <h3>Ototoxic Drugs</h3>
          <p>
            Certain medications can damage cochlear or vestibular structures. Important
            examples include aminoglycosides, cisplatin and loop diuretics.
          </p>
        `,

        clinical: `
          <h2>Clinical Ear Correlations</h2>

          <h3>Conductive Hearing Loss</h3>
          <p>
            Disorders of the external or middle ear can prevent efficient transmission
            of sound to the cochlea.
          </p>

          <h3>Sensorineural Hearing Loss</h3>
          <p>
            Damage to cochlear hair cells, the cochlear nerve or central auditory pathways
            can produce sensorineural hearing impairment.
          </p>

          <h3>Facial Nerve Relationship</h3>
          <p>
            The facial nerve passes through the temporal bone and lies in close anatomical
            relationship to the middle and inner ear. Middle-ear disease can therefore
            occasionally affect facial nerve function.
          </p>

          <h3>Vestibular Dysfunction</h3>
          <p>
            Dysfunction of the vestibular apparatus may produce vertigo, nystagmus,
            postural instability and nausea.
          </p>

          <h3>Weber Test</h3>
          <p>
            The Weber test evaluates lateralization of sound through bone conduction.
            It can assist in distinguishing conductive from sensorineural hearing loss.
          </p>

          <h3>Rinne Test</h3>
          <p>
            The Rinne test compares air conduction with bone conduction and is useful
            in bedside assessment of hearing impairment.
          </p>
        `,

        embryology: `
          <h2>Ear Embryology</h2>

          <h3>External Ear</h3>
          <p>
            The external ear develops primarily from structures surrounding the first
            pharyngeal cleft, including auricular hillocks.
          </p>

          <h3>Middle Ear</h3>
          <p>
            The middle-ear cavity and auditory tube develop primarily from the first
            pharyngeal pouch.
          </p>

          <h3>Ossicles</h3>
          <p>
            The malleus and incus develop mainly from first pharyngeal arch cartilage,
            while the stapes has contributions from the second arch region.
          </p>

          <h3>Inner Ear</h3>
          <p>
            The membranous labyrinth develops from the otic placode, which forms the
            otic vesicle and subsequently differentiates into cochlear and vestibular
            structures.
          </p>

          <h3>Congenital Abnormalities</h3>
          <ul>
            <li>Microtia</li>
            <li>External auditory canal atresia</li>
            <li>Congenital ossicular abnormalities</li>
            <li>Congenital sensorineural hearing loss</li>
          </ul>
        `,

        histology: `
          <h2>Ear Histology</h2>

          <h3>External Ear</h3>
          <p>
            The external auditory canal is lined predominantly by keratinized stratified
            squamous epithelium containing ceruminous and sebaceous glands.
          </p>

          <h3>Tympanic Membrane</h3>
          <p>
            The tympanic membrane consists of an external epithelial layer, a fibrous
            connective tissue layer and an internal mucosal layer.
          </p>

          <h3>Cochlea</h3>
          <p>
            The cochlea contains the organ of Corti, which houses sensory hair cells
            responsible for auditory transduction.
          </p>

          <h3>Hair Cells</h3>
          <ul>
            <li><strong>Inner hair cells:</strong> primary sensory receptors transmitting auditory information.</li>
            <li><strong>Outer hair cells:</strong> amplify and sharpen cochlear responses through electromotility.</li>
          </ul>

          <h3>Vestibular Sensory Epithelium</h3>
          <p>
            The utricle, saccule and semicircular canals contain specialized sensory
            epithelia containing hair cells that detect head movement.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Ear Facts</h2>
          <ul>
            <li>The ear is responsible for hearing and equilibrium.</li>
            <li>The external ear collects sound.</li>
            <li>The ossicles transmit sound from the tympanic membrane to the oval window.</li>
            <li>The cochlea is responsible for hearing.</li>
            <li>The semicircular canals detect angular acceleration.</li>
            <li>The utricle and saccule detect linear acceleration and gravity.</li>
            <li>CN VIII carries auditory and vestibular information.</li>
            <li>Inner hair cells are the principal auditory sensory receptors.</li>
            <li>Outer hair cells amplify cochlear mechanical responses.</li>
            <li>Endolymph is rich in potassium.</li>
            <li>Conductive hearing loss involves the external or middle ear.</li>
            <li>Sensorineural hearing loss involves the cochlea, auditory nerve or central pathways.</li>
            <li>Streptococcus pneumoniae and Haemophilus influenzae are important causes of acute otitis media.</li>
            <li>Pseudomonas aeruginosa is an important cause of otitis externa.</li>
            <li>Ototoxic drugs can damage cochlear or vestibular structures.</li>
          </ul>
        `
      },

      parts: [

        {
          id: "external-ear",
          name: "External Ear",
          modelFile: "external_ear.glb",

          notes: {
            anatomy: `
              <h2>External Ear</h2>
              <p>
                The external ear consists mainly of the auricle and external acoustic meatus.
                It collects sound waves and directs them toward the tympanic membrane.
              </p>
            `,
            physiology: `
              <p>
                The shape of the auricle and auditory canal modifies incoming sound and
                contributes to localization of sound sources.
              </p>
            `,
            pathology: `
              <ul>
                <li>Otitis externa</li>
                <li>Foreign body</li>
                <li>Impacted cerumen</li>
                <li>External auditory canal stenosis</li>
              </ul>
            `
          }
        },

        {
          id: "tympanic-membrane",
          name: "Tympanic Membrane",
          modelFile: "tympanic_membrane.glb",

          notes: {
            anatomy: `
              <h2>Tympanic Membrane</h2>
              <p>
                The tympanic membrane separates the external acoustic canal from the middle
                ear and vibrates in response to sound waves.
              </p>
            `,
            physiology: `
              <p>
                Sound-induced movement of the tympanic membrane is transferred mechanically
                to the malleus and subsequently through the ossicular chain.
              </p>
            `,
            pathology: `
              <p>
                Perforation may result from infection, trauma, barotrauma or instrumentation.
              </p>
            `
          }
        },

        {
          id: "malleus",
          name: "Malleus",
          modelFile: "malleus.glb",

          notes: {
            anatomy: `
              <h2>Malleus</h2>
              <p>
                The malleus is the first ossicle of the middle ear and is attached to
                the tympanic membrane.
              </p>
            `,
            physiology: `
              <p>
                It transfers vibrations from the tympanic membrane to the incus.
              </p>
            `
          }
        },

        {
          id: "incus",
          name: "Incus",
          modelFile: "incus.glb",

          notes: {
            anatomy: `
              <h2>Incus</h2>
              <p>
                The incus is the intermediate ossicle positioned between the malleus and stapes.
              </p>
            `,
            physiology: `
              <p>
                It transfers and mechanically modifies vibrations received from the malleus
                before transmitting them to the stapes.
              </p>
            `
          }
        },

        {
          id: "stapes",
          name: "Stapes",
          modelFile: "stapes.glb",

          notes: {
            anatomy: `
              <h2>Stapes</h2>
              <p>
                The stapes is the smallest ossicle and articulates with the oval window
                of the inner ear.
              </p>
            `,
            physiology: `
              <p>
                Movement of the stapes footplate generates pressure waves in cochlear fluids.
              </p>
            `
          }
        },

        {
          id: "cochlea",
          name: "Cochlea",
          modelFile: "cochlea.glb",

          notes: {
            anatomy: `
              <h2>Cochlea</h2>
              <p>
                The cochlea is a spiral-shaped structure of the inner ear containing
                the sensory apparatus responsible for hearing.
              </p>

              <h3>Major Compartments</h3>
              <ul>
                <li>Scala vestibuli</li>
                <li>Scala media</li>
                <li>Scala tympani</li>
              </ul>
            `,
            physiology: `
              <p>
                Sound-induced fluid movement produces a travelling wave along the basilar
                membrane. Different frequencies maximally stimulate different regions,
                forming the basis of cochlear tonotopy.
              </p>
            `,
            clinical: `
              <p>
                Cochlear damage may produce sensorineural hearing loss and tinnitus.
              </p>
            `
          }
        },

        {
          id: "semicircular-canals",
          name: "Semicircular Canals",
          modelFile: "semicircular_canals.glb",

          notes: {
            anatomy: `
              <h2>Semicircular Canals</h2>
              <p>
                Three semicircular canals are arranged approximately perpendicular to one
                another, allowing detection of rotational movement in different planes.
              </p>
            `,
            physiology: `
              <p>
                Movement of endolymph deflects the cupula within the ampulla and stimulates
                vestibular hair cells, providing information about angular acceleration.
              </p>
            `
          }
        },

        {
          id: "vestibule",
          name: "Vestibule",
          modelFile: "vestibule.glb",

          notes: {
            anatomy: `
              <h2>Vestibule</h2>
              <p>
                The vestibule is the central portion of the bony labyrinth and contains
                the utricle and saccule.
              </p>
            `,
            physiology: `
              <p>
                The utricle and saccule detect linear acceleration and head orientation
                relative to gravity.
              </p>
            `
          }
        }
      ]
    }
  ]
};