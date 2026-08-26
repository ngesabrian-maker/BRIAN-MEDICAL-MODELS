export const integumentarySystem = {
  id: "integumentary",
  name: "Integumentary System",

  organs: [
    {
      id: "skin",
      name: "Skin",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Skin Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The skin is the largest organ of the human body and forms the external covering of the body.
            Together with its associated structures, including hair, nails, sweat glands and sebaceous glands,
            it constitutes the integumentary system. The skin forms a continuous interface between the internal
            environment and the external environment.
          </p>

          <p>
            The skin provides mechanical protection, prevents excessive water loss, participates in temperature
            regulation, contains sensory receptors, contributes to immune defense and participates in vitamin D
            synthesis. It also contains blood vessels, nerves, connective tissue and specialized epithelial
            structures.
          </p>

          <h3>Major Layers of the Skin</h3>
          <p>
            The skin consists principally of two major layers:
          </p>

          <ol>
            <li>
              <strong>Epidermis:</strong>
              the superficial keratinized stratified squamous epithelium.
            </li>
            <li>
              <strong>Dermis:</strong>
              the deeper connective-tissue layer containing blood vessels, nerves, sensory receptors,
              hair follicles and glands.
            </li>
          </ol>

          <p>
            Beneath the dermis lies the <strong>subcutaneous tissue</strong>, also called the hypodermis.
            Although it is not technically part of the skin itself, it is closely associated with the
            integument and provides insulation, energy storage and mechanical cushioning.
          </p>

          <h3>Epidermis</h3>
          <p>
            The epidermis is composed primarily of keratinocytes arranged as a stratified squamous epithelium.
            It is avascular and receives nutrients by diffusion from blood vessels in the underlying dermis.
          </p>

          <h4>Layers of the Epidermis</h4>

          <ol>
            <li>
              <strong>Stratum basale:</strong>
              deepest epidermal layer. It contains proliferating basal keratinocytes, melanocytes and
              Merkel cells. Keratinocytes in this layer undergo mitosis and contribute to continuous
              epidermal renewal.
            </li>

            <li>
              <strong>Stratum spinosum:</strong>
              contains keratinocytes connected by numerous desmosomes, giving the cells a characteristic
              "spiny" appearance microscopically. Langerhans cells are also present.
            </li>

            <li>
              <strong>Stratum granulosum:</strong>
              contains keratinocytes with keratohyalin granules and lamellar bodies. Important changes
              associated with keratinization and formation of the epidermal permeability barrier occur here.
            </li>

            <li>
              <strong>Stratum lucidum:</strong>
              a thin translucent layer found primarily in thick skin, such as the palms and soles.
            </li>

            <li>
              <strong>Stratum corneum:</strong>
              the superficial layer consisting predominantly of flattened, dead, keratin-filled cells
              called corneocytes. It provides much of the mechanical and permeability barrier of the skin.
            </li>
          </ol>

          <h3>Thin Skin and Thick Skin</h3>
          <p>
            Most of the body is covered by thin skin. Thick skin is found primarily on the palms of the
            hands and soles of the feet.
          </p>

          <ul>
            <li>
              <strong>Thick skin:</strong>
              has a particularly thick epidermis, a prominent stratum lucidum and no hair follicles
              or sebaceous glands.
            </li>
            <li>
              <strong>Thin skin:</strong>
              covers most of the body and usually contains hair follicles and sebaceous glands.
            </li>
          </ul>

          <h3>Dermis</h3>
          <p>
            The dermis is connective tissue located beneath the epidermis. It provides mechanical strength,
            elasticity and nourishment to the epidermis and contains vessels, nerves, sensory receptors,
            hair follicles and glands.
          </p>

          <h4>Papillary Layer</h4>
          <p>
            The papillary dermis is the superficial portion of the dermis. It consists mainly of loose
            connective tissue and forms dermal papillae that project toward the epidermis.
          </p>

          <p>
            Dermal papillae increase the contact area between the epidermis and dermis and contain small
            blood vessels and sensory structures. They contribute to the formation of epidermal ridge
            patterns responsible for fingerprints.
          </p>

          <h4>Reticular Layer</h4>
          <p>
            The reticular dermis is the deeper and thicker portion of the dermis. It consists mainly of
            dense irregular connective tissue containing abundant collagen and elastic fibers.
          </p>

          <p>
            The reticular layer provides tensile strength and elasticity and contains larger blood vessels,
            nerves, glands and hair follicles.
          </p>

          <h3>Hypodermis / Subcutaneous Tissue</h3>
          <p>
            The hypodermis lies beneath the dermis. It consists largely of loose connective tissue and
            adipose tissue. It anchors the skin to underlying structures while permitting a degree of
            movement.
          </p>

          <ul>
            <li>Stores energy as triglycerides.</li>
            <li>Provides thermal insulation.</li>
            <li>Provides mechanical cushioning.</li>
            <li>Contains larger blood vessels and nerves.</li>
            <li>Allows the skin to move relative to deeper tissues.</li>
          </ul>

          <h3>Skin Appendages</h3>
          <p>
            Skin appendages are specialized structures derived primarily from the epidermis. They include:
          </p>

          <ul>
            <li>Hair and hair follicles</li>
            <li>Sebaceous glands</li>
            <li>Eccrine sweat glands</li>
            <li>Apocrine sweat glands</li>
            <li>Nails</li>
          </ul>

          <h3>Hair</h3>
          <p>
            Hair is a keratinized structure produced by hair follicles. Hair follicles extend from the
            epidermis into the dermis and sometimes into the subcutaneous tissue.
          </p>

          <p>
            The visible portion of hair is the <strong>hair shaft</strong>. The portion embedded within
            the skin is the <strong>hair root</strong>, which is surrounded by the hair follicle.
          </p>

          <h4>Hair Structure</h4>
          <ul>
            <li><strong>Hair shaft:</strong> portion projecting above the skin surface.</li>
            <li><strong>Hair root:</strong> portion located within the follicle.</li>
            <li><strong>Hair bulb:</strong> expanded base containing actively dividing cells.</li>
            <li><strong>Dermal papilla:</strong> vascular connective-tissue structure supplying the growing hair.</li>
            <li><strong>Matrix:</strong> proliferating cells responsible for hair production.</li>
          </ul>

          <h3>Arrector Pili Muscle</h3>
          <p>
            The arrector pili is a small smooth muscle attached to the hair follicle. Sympathetic stimulation
            causes contraction of this muscle, producing elevation of the hair and the characteristic
            "goosebumps" response.
          </p>

          <h3>Sebaceous Glands</h3>
          <p>
            Sebaceous glands are holocrine glands associated primarily with hair follicles. They produce
            sebum, an oily secretion that lubricates the skin and hair.
          </p>

          <p>
            Sebaceous gland activity is influenced by androgenic hormones and generally increases during
            puberty.
          </p>

          <h3>Sweat Glands</h3>

          <h4>Eccrine Sweat Glands</h4>
          <p>
            Eccrine glands are widely distributed throughout the body and are particularly numerous on
            the palms, soles and forehead. Their primary function is thermoregulation through production
            of sweat.
          </p>

          <h4>Apocrine Sweat Glands</h4>
          <p>
            Apocrine glands are concentrated in regions such as the axilla and anogenital areas. They
            become functionally active around puberty and empty into hair follicles. Their secretions
            can contribute to body odor after bacterial metabolism.
          </p>

          <h3>Nails</h3>
          <p>
            Nails are hard keratinized structures covering the dorsal surfaces of the distal phalanges.
            They protect the fingertips and toes and assist with fine manipulation.
          </p>

          <ul>
            <li><strong>Nail plate:</strong> visible hard keratinized structure.</li>
            <li><strong>Nail bed:</strong> tissue underlying the nail plate.</li>
            <li><strong>Nail matrix:</strong> region responsible for nail growth.</li>
            <li><strong>Lunula:</strong> pale crescent-shaped portion of the nail matrix visible through the nail plate.</li>
            <li><strong>Cuticle:</strong> protective fold of keratinized tissue overlying the proximal nail.</li>
          </ul>

          <h3>Skin Pigmentation</h3>
          <p>
            Melanocytes are specialized cells located primarily in the stratum basale. They synthesize
            melanin, a pigment that contributes to skin, hair and eye coloration and provides some protection
            against ultraviolet radiation.
          </p>

          <h3>Cutaneous Blood Supply</h3>
          <p>
            The dermis contains extensive vascular networks. Blood vessels supply nutrients and oxygen to
            the dermis and indirectly support the avascular epidermis.
          </p>

          <p>
            Changes in cutaneous blood flow contribute substantially to thermoregulation. Vasodilation
            increases heat loss, while vasoconstriction reduces heat loss.
          </p>

          <h3>Cutaneous Innervation</h3>
          <p>
            The skin contains sensory receptors capable of detecting touch, pressure, vibration, pain,
            temperature and itch. Autonomic nerves also regulate sweat glands, arrector pili muscles and
            cutaneous blood vessels.
          </p>

          <h3>Skin Sensory Receptors</h3>
          <ul>
            <li><strong>Free nerve endings:</strong> pain, temperature and itch.</li>
            <li><strong>Merkel cell complexes:</strong> sustained light touch and pressure.</li>
            <li><strong>Meissner corpuscles:</strong> fine touch, particularly in glabrous skin.</li>
            <li><strong>Pacinian corpuscles:</strong> deep pressure and vibration.</li>
            <li><strong>Ruffini endings:</strong> skin stretch and deformation.</li>
          </ul>
        `,

        physiology: `
          <h2>Skin Physiology</h2>

          <h3>Barrier Function</h3>
          <p>
            One of the most important functions of the skin is separation of the internal environment
            from the external environment. The epidermal barrier limits entry of microorganisms, chemicals
            and other potentially harmful substances while reducing loss of water and electrolytes.
          </p>

          <h3>Water Barrier</h3>
          <p>
            The stratum corneum provides the major permeability barrier. Keratinized corneocytes are
            embedded within extracellular lipid layers containing ceramides, cholesterol and free fatty acids.
            This organization substantially reduces transepidermal water loss.
          </p>

          <h3>Protection</h3>
          <p>
            The skin protects underlying tissues from mechanical trauma, ultraviolet radiation, microorganisms,
            chemical exposure and dehydration.
          </p>

          <p>
            Keratin provides mechanical resistance, while melanin absorbs and scatters some ultraviolet
            radiation. The acidic surface environment and antimicrobial components also contribute to
            microbial defense.
          </p>

          <h3>Thermoregulation</h3>
          <p>
            The skin plays a major role in maintaining core body temperature.
          </p>

          <ul>
            <li>
              <strong>Vasodilation:</strong>
              increases cutaneous blood flow and promotes heat loss.
            </li>
            <li>
              <strong>Vasoconstriction:</strong>
              decreases cutaneous blood flow and conserves heat.
            </li>
            <li>
              <strong>Sweating:</strong>
              allows evaporative heat loss.
            </li>
            <li>
              <strong>Arrector pili contraction:</strong>
              contributes little to human thermoregulation but produces piloerection.
            </li>
          </ul>

          <h3>Sweating</h3>
          <p>
            Eccrine sweating is controlled primarily by sympathetic cholinergic fibers. Sweat is initially
            produced as a relatively dilute fluid in the secretory portion of the gland. As it passes through
            the duct, sodium and chloride are reabsorbed, producing a more dilute final secretion.
          </p>

          <h3>Sensation</h3>
          <p>
            The skin provides the CNS with information about the external environment. Cutaneous sensory
            information includes touch, pressure, vibration, pain, temperature and itch.
          </p>

          <h3>Pain and Temperature</h3>
          <p>
            Free nerve endings detect noxious stimuli and temperature changes. Pain information is transmitted
            through peripheral sensory nerves into the spinal cord and then through ascending pathways to
            higher CNS centres.
          </p>

          <h3>Touch and Pressure</h3>
          <p>
            Mechanoreceptors detect mechanical deformation of the skin. Different receptors have different
            receptive field sizes, adaptation rates and sensitivities, allowing the nervous system to
            distinguish fine touch, pressure and vibration.
          </p>

          <h3>Immune Function</h3>
          <p>
            The skin is an active component of the immune system. Keratinocytes can produce antimicrobial
            substances and inflammatory mediators, while specialized immune cells such as Langerhans cells
            participate in antigen surveillance and presentation.
          </p>

          <h3>Wound Healing</h3>
          <p>
            Skin injury activates a coordinated repair process involving hemostasis, inflammation,
            proliferation and tissue remodeling.
          </p>

          <ol>
            <li>
              <strong>Hemostasis:</strong>
              blood vessels constrict and platelets participate in clot formation.
            </li>
            <li>
              <strong>Inflammation:</strong>
              immune cells remove microorganisms and damaged tissue.
            </li>
            <li>
              <strong>Proliferation:</strong>
              keratinocytes, fibroblasts and endothelial cells contribute to tissue replacement,
              extracellular matrix formation and new blood vessel formation.
            </li>
            <li>
              <strong>Remodeling:</strong>
              collagen and extracellular matrix are reorganized and the wound gradually gains strength.
            </li>
          </ol>

          <h3>Epidermal Renewal</h3>
          <p>
            Keratinocytes are continuously produced by proliferating cells in the basal layer. They migrate
            toward the surface while undergoing differentiation and keratinization. Eventually, corneocytes
            are shed from the surface in a process known as desquamation.
          </p>

          <h3>Vitamin D Physiology</h3>
          <p>
            Ultraviolet B radiation converts 7-dehydrocholesterol in the skin into previtamin D3, which
            undergoes thermal conversion to vitamin D3. Vitamin D3 is subsequently metabolized in the liver
            and kidney to biologically active forms involved in calcium and phosphate homeostasis.
          </p>
        `,

        biochemistry: `
          <h2>Skin Biochemistry</h2>

          <h3>Keratin</h3>
          <p>
            Keratin is an intermediate filament protein that provides mechanical strength to keratinocytes,
            hair and nails. Keratinization is a fundamental process in formation of the epidermal barrier.
          </p>

          <h3>Collagen</h3>
          <p>
            Collagen is the major structural protein of the dermal extracellular matrix. Type I collagen
            provides tensile strength, while other collagen types contribute to basement membrane and
            connective-tissue organization.
          </p>

          <h3>Elastin</h3>
          <p>
            Elastic fibers allow the dermis to stretch and return toward its original configuration.
            Loss or fragmentation of elastic tissue contributes to reduced skin elasticity with aging.
          </p>

          <h3>Skin Lipids</h3>
          <p>
            Lipids within the stratum corneum are essential components of the epidermal permeability barrier.
            Important lipid classes include ceramides, cholesterol and free fatty acids.
          </p>

          <h3>Melanin</h3>
          <p>
            Melanin is synthesized by melanocytes within specialized organelles called melanosomes.
            The principal melanins include eumelanin and pheomelanin. Melanin absorbs ultraviolet radiation
            and helps protect cellular DNA from ultraviolet-induced damage.
          </p>

          <h3>Melanin Synthesis</h3>
          <p>
            Melanin synthesis begins with the amino acid tyrosine. The enzyme tyrosinase catalyzes important
            steps in the pathway leading to melanin formation.
          </p>

          <h3>Sweat Composition</h3>
          <p>
            Eccrine sweat contains predominantly water together with electrolytes and small amounts of
            metabolic substances. Sodium and chloride are particularly important components.
          </p>

          <h3>Sebum</h3>
          <p>
            Sebum contains a complex mixture of lipids including triglycerides, wax esters, squalene and
            other lipid components. It contributes to lubrication and the surface properties of skin and hair.
          </p>

          <h3>Antimicrobial Chemistry</h3>
          <p>
            The skin contributes to innate immunity through antimicrobial peptides and proteins. These
            substances can interfere with microbial membranes and help control colonization by potentially
            pathogenic organisms.
          </p>

          <h3>Acid Mantle</h3>
          <p>
            The surface of healthy skin is mildly acidic. This acidic environment contributes to barrier
            function and helps regulate the composition of the cutaneous microbial community.
          </p>

          <h3>Oxidative Stress</h3>
          <p>
            Ultraviolet radiation, inflammation and environmental exposures can generate reactive oxygen
            species in skin cells. Excessive oxidative stress can damage lipids, proteins and DNA and
            contributes to photoaging and carcinogenesis.
          </p>
        `,

        histology: `
          <h2>Skin Histology</h2>

          <h3>Epidermal Epithelium</h3>
          <p>
            The epidermis is a keratinized stratified squamous epithelium. Keratinocytes form the majority
            of its cellular population.
          </p>

          <h3>Keratinocytes</h3>
          <p>
            Keratinocytes originate from proliferating cells in the basal layer and progressively differentiate
            as they migrate toward the skin surface.
          </p>

          <h3>Melanocytes</h3>
          <p>
            Melanocytes are neural crest-derived cells located primarily in the basal epidermis. Their
            dendritic processes distribute melanin-containing melanosomes to surrounding keratinocytes.
          </p>

          <h3>Langerhans Cells</h3>
          <p>
            Langerhans cells are antigen-presenting dendritic cells located predominantly within the
            epidermis. They participate in immune surveillance and antigen presentation.
          </p>

          <h3>Merkel Cells</h3>
          <p>
            Merkel cells are specialized epidermal cells associated with sensory nerve endings and are
            involved in mechanosensation.
          </p>

          <h3>Dermis</h3>
          <p>
            The dermis consists of connective tissue containing collagen fibers, elastic fibers, blood
            vessels, nerves, sensory receptors and skin appendages.
          </p>

          <h3>Dermal Papillae</h3>
          <p>
            Dermal papillae are projections of the papillary dermis into the epidermis. They increase the
            interface between the epidermis and dermis and contain vascular and sensory structures.
          </p>

          <h3>Skin Appendages Histology</h3>
          <ul>
            <li><strong>Hair follicles:</strong> epithelial structures surrounding growing hair.</li>
            <li><strong>Sebaceous glands:</strong> holocrine glands producing sebum.</li>
            <li><strong>Eccrine glands:</strong> coiled tubular glands involved in thermoregulatory sweating.</li>
            <li><strong>Apocrine glands:</strong> larger glands associated with selected body regions.</li>
            <li><strong>Nails:</strong> dense plates of hard keratin.</li>
          </ul>
        `,

        pathology: `
          <h2>Skin Pathology</h2>

          <h3>Dermatitis</h3>
          <p>
            Dermatitis refers to inflammatory conditions of the skin. Clinical manifestations may include
            erythema, itching, scaling, vesicles, crusting and skin thickening depending on the cause and
            duration.
          </p>

          <h3>Atopic Dermatitis</h3>
          <p>
            Atopic dermatitis is a chronic inflammatory skin disorder associated with impaired epidermal
            barrier function and immune dysregulation. It commonly produces pruritus, dry skin and recurrent
            inflammatory lesions.
          </p>

          <h3>Contact Dermatitis</h3>
          <p>
            Contact dermatitis occurs after exposure to an irritant or allergen. Allergic contact dermatitis
            is mediated by a delayed hypersensitivity response, whereas irritant contact dermatitis results
            from direct chemical or physical damage.
          </p>

          <h3>Psoriasis</h3>
          <p>
            Psoriasis is a chronic immune-mediated inflammatory disease characterized by excessive
            keratinocyte proliferation and abnormal epidermal differentiation. It commonly produces
            well-demarcated erythematous plaques with characteristic scaling.
          </p>

          <h3>Acne Vulgaris</h3>
          <p>
            Acne involves pilosebaceous units and is associated with follicular hyperkeratinization,
            increased sebum production, microbial involvement and inflammation. Common lesions include
            comedones, papules, pustules and nodules.
          </p>

          <h3>Bacterial Skin Infections</h3>
          <ul>
            <li><strong>Impetigo:</strong> superficial bacterial infection commonly caused by Staphylococcus aureus or Streptococcus pyogenes.</li>
            <li><strong>Folliculitis:</strong> inflammation or infection involving hair follicles.</li>
            <li><strong>Cellulitis:</strong> bacterial infection involving deeper dermal and subcutaneous tissues.</li>
            <li><strong>Erysipelas:</strong> superficial dermal and lymphatic infection producing a sharply demarcated erythematous lesion.</li>
          </ul>

          <h3>Fungal Skin Infections</h3>
          <p>
            Dermatophytes can infect keratinized tissues including the skin, hair and nails. Common
            dermatophyte infections include tinea corporis, tinea pedis, tinea cruris and tinea capitis.
          </p>

          <h3>Viral Skin Infections</h3>
          <ul>
            <li><strong>Human papillomavirus:</strong> causes many types of cutaneous and mucosal warts.</li>
            <li><strong>Herpes simplex virus:</strong> produces vesicular lesions, commonly around the oral or genital regions.</li>
            <li><strong>Varicella-zoster virus:</strong> causes chickenpox and shingles.</li>
            <li><strong>Molluscum contagiosum virus:</strong> causes characteristic umbilicated papules.</li>
          </ul>

          <h3>Parasitic Skin Diseases</h3>
          <ul>
            <li><strong>Scabies:</strong> caused by Sarcoptes scabiei and characterized by intense pruritus and burrows.</li>
            <li><strong>Pediculosis:</strong> infestation by lice.</li>
            <li><strong>Cutaneous larva migrans:</strong> serpiginous skin lesions caused by migrating animal hookworm larvae.</li>
          </ul>

          <h3>Burns</h3>
          <p>
            Burns are tissue injuries caused by heat, chemicals, electricity, radiation or other damaging
            agents. Their severity depends on depth, surface area and anatomical location.
          </p>

          <ul>
            <li>
              <strong>Superficial burn:</strong>
              primarily affects the epidermis.
            </li>
            <li>
              <strong>Partial-thickness burn:</strong>
              involves the epidermis and part of the dermis.
            </li>
            <li>
              <strong>Full-thickness burn:</strong>
              destroys the epidermis and entire dermis and may extend into deeper tissues.
            </li>
          </ul>

          <h3>Pressure Injuries</h3>
          <p>
            Prolonged pressure, particularly over bony prominences, can impair tissue perfusion and produce
            pressure injuries. Risk is increased by immobility, moisture, malnutrition and impaired sensation.
          </p>

          <h3>Skin Cancer</h3>

          <h4>Basal Cell Carcinoma</h4>
          <p>
            Basal cell carcinoma arises from basal-type cells of the epidermis and is the most common
            malignant skin tumor. It is generally slow-growing and rarely metastasizes.
          </p>

          <h4>Squamous Cell Carcinoma</h4>
          <p>
            Squamous cell carcinoma arises from keratinocytes and can invade locally and metastasize,
            particularly when advanced.
          </p>

          <h4>Melanoma</h4>
          <p>
            Melanoma is a malignant tumor of melanocytes. It has significant metastatic potential and
            early recognition is important.
          </p>
        `,

        microbiology: `
          <h2>Skin Microbiology</h2>

          <h3>Normal Skin Microbiota</h3>
          <p>
            Healthy skin is colonized by a diverse microbial community. The composition varies according
            to anatomical location, moisture, temperature, sebum production and other environmental factors.
          </p>

          <ul>
            <li><strong>Staphylococcus epidermidis:</strong> common commensal organism.</li>
            <li><strong>Cutibacterium acnes:</strong> associated particularly with sebaceous areas.</li>
            <li><strong>Corynebacterium species:</strong> common members of the skin microbiota.</li>
            <li><strong>Staphylococcus aureus:</strong> may colonize skin and can cause infection when barriers are disrupted.</li>
          </ul>

          <h3>Microbial Barrier</h3>
          <p>
            Normal skin microbiota can contribute to colonization resistance by competing with pathogens
            for nutrients and attachment sites and by interacting with the host immune system.
          </p>

          <h3>Staphylococcal Infections</h3>
          <p>
            Staphylococcus aureus can cause impetigo, folliculitis, abscesses, wound infections and more
            extensive soft-tissue infections.
          </p>

          <h3>Streptococcal Infections</h3>
          <p>
            Streptococcus pyogenes can cause impetigo, cellulitis and erysipelas and may produce serious
            invasive soft-tissue infections.
          </p>

          <h3>Fungal Infections</h3>
          <p>
            Dermatophytes utilize keratin and commonly infect superficial tissues. Candida species can also
            cause cutaneous infections, particularly in warm and moist environments.
          </p>

          <h3>Viral Infections</h3>
          <p>
            Several viruses produce characteristic cutaneous lesions. Important examples include herpes
            simplex virus, varicella-zoster virus, human papillomavirus and molluscum contagiosum virus.
          </p>
        `,

        immunology: `
          <h2>Skin Immunology</h2>

          <h3>Innate Immune Defense</h3>
          <p>
            The skin provides physical, chemical and biological barriers against infection. The stratum
            corneum limits microbial penetration while antimicrobial substances and the normal microbiota
            contribute additional defense.
          </p>

          <h3>Keratinocyte Immune Functions</h3>
          <p>
            Keratinocytes are not merely structural cells. They can detect danger signals and produce
            cytokines, chemokines and antimicrobial peptides that participate in inflammatory and immune
            responses.
          </p>

          <h3>Langerhans Cells</h3>
          <p>
            Langerhans cells act as antigen-presenting cells within the epidermis. They capture and process
            antigens and can migrate to lymphoid tissues to participate in adaptive immune responses.
          </p>

          <h3>Inflammation</h3>
          <p>
            Injury or infection can trigger release of inflammatory mediators, producing vasodilation,
            increased vascular permeability and recruitment of immune cells.
          </p>

          <h3>Allergic Skin Reactions</h3>
          <p>
            Skin hypersensitivity reactions can result from immune responses to environmental substances.
            Examples include allergic contact dermatitis and urticaria.
          </p>
        `,

        pharmacology: `
          <h2>Skin Pharmacology</h2>

          <h3>Topical Corticosteroids</h3>
          <p>
            Topical corticosteroids suppress inflammatory and immune responses and are widely used in
            inflammatory dermatoses. Potency varies substantially between preparations.
          </p>

          <h3>Topical Antimicrobials</h3>
          <p>
            Topical antibacterial, antifungal and antiviral agents may be used for selected superficial
            infections depending on the causative organism and clinical circumstances.
          </p>

          <h3>Topical Retinoids</h3>
          <p>
            Retinoids influence epidermal differentiation and follicular keratinization and are important
            in the treatment of acne and selected other dermatological conditions.
          </p>

          <h3>Antihistamines</h3>
          <p>
            Antihistamines can reduce histamine-mediated itching and are used in selected pruritic and
            allergic skin disorders.
          </p>

          <h3>Emollients</h3>
          <p>
            Emollients and moisturizers improve skin hydration and barrier function by reducing water loss
            and restoring components of the stratum corneum.
          </p>

          <h3>Local Anesthetics</h3>
          <p>
            Local anesthetics temporarily block voltage-gated sodium channels in sensory nerves, reducing
            transmission of pain signals from the skin.
          </p>
        `,

        clinical: `
          <h2>Clinical Skin Correlations</h2>

          <h3>Pallor</h3>
          <p>
            Pallor may result from reduced cutaneous blood flow, anemia or other systemic conditions.
          </p>

          <h3>Cyanosis</h3>
          <p>
            Cyanosis is a bluish discoloration associated with increased deoxygenated hemoglobin and may
            indicate hypoxemia or circulatory abnormalities.
          </p>

          <h3>Jaundice</h3>
          <p>
            Yellow discoloration of the skin and sclera may occur when bilirubin accumulates in tissues.
            Causes include hemolysis, hepatocellular disease and biliary obstruction.
          </p>

          <h3>Clubbing</h3>
          <p>
            Digital clubbing is characterized by enlargement of the distal digits and changes in the
            nail-bed angle. It may be associated with chronic pulmonary, cardiovascular and gastrointestinal
            diseases.
          </p>

          <h3>Edema</h3>
          <p>
            Skin and subcutaneous tissues may become swollen when excess fluid accumulates in the interstitial
            space. Causes include increased hydrostatic pressure, reduced plasma oncotic pressure, lymphatic
            obstruction and increased vascular permeability.
          </p>

          <h3>Dehydration</h3>
          <p>
            Significant fluid loss may produce dry mucous membranes, reduced skin turgor and other systemic
            manifestations, although skin turgor is influenced by age and other factors.
          </p>

          <h3>Wound Infection</h3>
          <p>
            Disruption of the skin barrier increases the risk of bacterial invasion. Features suggesting
            infection may include increasing pain, erythema, warmth, swelling, purulent discharge and systemic
            manifestations.
          </p>

          <h3>Pressure Injury</h3>
          <p>
            Persistent pressure can compromise local blood flow and produce progressive tissue damage,
            particularly in immobilized patients.
          </p>

          <h3>Decreased Sensation</h3>
          <p>
            Peripheral neuropathy can impair cutaneous sensation and increase the risk of unnoticed trauma,
            burns and ulcers.
          </p>
        `,

        embryology: `
          <h2>Skin Embryology</h2>

          <h3>Epidermis</h3>
          <p>
            The epidermis develops primarily from surface ectoderm. During development it undergoes
            proliferation and differentiation to form the multilayered keratinized epithelium.
          </p>

          <h3>Dermis</h3>
          <p>
            The dermis develops from mesoderm in most regions, although neural crest contributions occur
            in selected areas of the head and neck.
          </p>

          <h3>Melanocytes</h3>
          <p>
            Melanocytes originate from neural crest cells and migrate into the developing epidermis.
          </p>

          <h3>Skin Appendages</h3>
          <p>
            Hair follicles, sebaceous glands and sweat glands develop as specialized downgrowths and
            interactions between epidermal epithelium and underlying mesenchymal tissue.
          </p>

          <h3>Nails</h3>
          <p>
            Nails develop from specialized areas of epidermal epithelium known as nail fields and
            subsequently form the nail plate.
          </p>
        `,

        parasitology: `
          <h2>Skin Parasitology</h2>

          <h3>Scabies</h3>
          <p>
            Scabies is caused by the mite Sarcoptes scabiei. The female mite burrows into the superficial
            layers of the epidermis where it deposits eggs.
          </p>

          <p>
            The condition typically causes intense pruritus, often worse at night, with characteristic
            burrows and papular lesions.
          </p>

          <h3>Pediculosis</h3>
          <p>
            Pediculosis refers to infestation with lice. Human lice include head lice, body lice and pubic
            lice. Infestation commonly produces itching and excoriations.
          </p>

          <h3>Cutaneous Larva Migrans</h3>
          <p>
            Cutaneous larva migrans results from penetration and migration of animal hookworm larvae
            through the skin. It produces characteristic serpiginous, intensely pruritic lesions.
          </p>

          <h3>Myiasis</h3>
          <p>
            Myiasis is infestation of human tissue by fly larvae. The clinical presentation depends on
            the species and site involved.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Integumentary System Facts</h2>

          <ul>
            <li>The skin is the largest organ of the human body.</li>
            <li>The two principal layers of skin are the epidermis and dermis.</li>
            <li>The hypodermis lies beneath the dermis but is not technically part of the skin.</li>
            <li>The epidermis is a keratinized stratified squamous epithelium.</li>
            <li>The epidermis is avascular.</li>
            <li>The dermis contains blood vessels, nerves, glands and hair follicles.</li>
            <li>The epidermis contains keratinocytes, melanocytes, Langerhans cells and Merkel cells.</li>
            <li>The epidermal layers are basale, spinosum, granulosum, lucidum and corneum.</li>
            <li>The stratum lucidum is prominent in thick skin.</li>
            <li>Thick skin occurs mainly on the palms and soles.</li>
            <li>Thick skin lacks hair follicles and sebaceous glands.</li>
            <li>The stratum corneum is the principal physical and permeability barrier of the epidermis.</li>
            <li>Keratin provides mechanical strength to the epidermis, hair and nails.</li>
            <li>Melanocytes produce melanin.</li>
            <li>Tyrosinase is an important enzyme in melanin synthesis.</li>
            <li>Dermal collagen provides tensile strength.</li>
            <li>Elastic fibers contribute to skin elasticity.</li>
            <li>Eccrine sweat glands are important for thermoregulation.</li>
            <li>Apocrine glands are concentrated in selected regions such as the axilla and anogenital areas.</li>
            <li>Sebaceous glands produce sebum through holocrine secretion.</li>
            <li>Hair follicles contain a hair bulb, matrix and dermal papilla.</li>
            <li>The arrector pili is a smooth muscle associated with hair follicles.</li>
            <li>Nails are composed primarily of hard keratin.</li>
            <li>Skin contains receptors for touch, pressure, vibration, pain, temperature and itch.</li>
            <li>Microorganisms normally colonize the skin and contribute to colonization resistance.</li>
            <li>Staphylococcus epidermidis is a common member of normal skin microbiota.</li>
            <li>Staphylococcus aureus is an important cause of skin and soft-tissue infection.</li>
            <li>Dermatophytes cause superficial fungal infections of keratinized tissues.</li>
            <li>Sarcoptes scabiei causes scabies.</li>
            <li>Melanoma is a malignant tumor of melanocytes.</li>
            <li>Basal cell carcinoma is generally slow-growing and rarely metastasizes.</li>
            <li>Squamous cell carcinoma can invade locally and metastasize.</li>
            <li>Skin contributes to vitamin D synthesis following UVB exposure.</li>
            <li>Skin participates in thermoregulation through sweating and changes in cutaneous blood flow.</li>
            <li>Skin wound healing involves hemostasis, inflammation, proliferation and remodeling.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "epidermis",
          name: "Epidermis",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Epidermis</h2>
              <p>
                The epidermis is the superficial layer of the skin. It is composed of keratinized
                stratified squamous epithelium and contains keratinocytes as its principal cell type.
              </p>

              <h3>Layers</h3>
              <ol>
                <li><strong>Stratum basale</strong></li>
                <li><strong>Stratum spinosum</strong></li>
                <li><strong>Stratum granulosum</strong></li>
                <li><strong>Stratum lucidum</strong> — prominent in thick skin</li>
                <li><strong>Stratum corneum</strong></li>
              </ol>
            `,

            physiology: `
              <h2>Epidermal Physiology</h2>
              <p>
                The epidermis forms the principal physical and chemical barrier of the body. Continuous
                keratinocyte proliferation and differentiation maintain the epidermal barrier.
              </p>
            `,

            biochemistry: `
              <h2>Epidermal Biochemistry</h2>
              <p>
                Keratin, ceramides, cholesterol, free fatty acids and other structural components form
                the biochemical basis of the epidermal permeability barrier.
              </p>
            `
          }
        },

        {
          id: "dermis",
          name: "Dermis",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Dermis</h2>
              <p>
                The dermis is the connective-tissue layer beneath the epidermis. It consists of a
                superficial papillary layer and a deeper reticular layer.
              </p>

              <ul>
                <li><strong>Papillary dermis:</strong> loose connective tissue containing dermal papillae.</li>
                <li><strong>Reticular dermis:</strong> dense irregular connective tissue containing abundant collagen and elastic fibers.</li>
              </ul>
            `,

            physiology: `
              <h2>Dermal Physiology</h2>
              <p>
                The dermis provides structural support, vascular supply, sensory innervation and housing
                for hair follicles and glands.
              </p>
            `,

            histology: `
              <h2>Dermal Histology</h2>
              <p>
                The dermis contains collagen fibers, elastic fibers, fibroblasts, immune cells, blood
                vessels, nerves, sensory receptors and skin appendages.
              </p>
            `
          }
        },

        {
          id: "hypodermis",
          name: "Hypodermis / Subcutaneous Tissue",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Hypodermis</h2>
              <p>
                The hypodermis lies beneath the dermis and consists largely of adipose and loose connective
                tissue. It anchors the skin to deeper structures.
              </p>
            `,

            physiology: `
              <h2>Hypodermal Physiology</h2>
              <ul>
                <li>Energy storage.</li>
                <li>Thermal insulation.</li>
                <li>Mechanical cushioning.</li>
                <li>Anchoring and mobility of the skin.</li>
              </ul>
            `,

            biochemistry: `
              <h2>Hypodermal Biochemistry</h2>
              <p>
                Adipocytes store energy primarily as triglycerides. Adipose tissue also functions as an
                endocrine organ and participates in metabolic signaling.
              </p>
            `
          }
        },

        {
          id: "hair",
          name: "Hair and Hair Follicle",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Hair and Hair Follicle</h2>
              <p>
                Hair is a keratinized structure produced by a specialized epidermal invagination called
                the hair follicle.
              </p>

              <ul>
                <li><strong>Hair shaft:</strong> portion above the skin surface.</li>
                <li><strong>Hair root:</strong> portion within the follicle.</li>
                <li><strong>Hair bulb:</strong> expanded basal portion.</li>
                <li><strong>Hair matrix:</strong> proliferative region producing hair cells.</li>
                <li><strong>Dermal papilla:</strong> vascular connective tissue supporting the matrix.</li>
                <li><strong>Arrector pili:</strong> smooth muscle attached to the follicle.</li>
              </ul>
            `,

            physiology: `
              <h2>Hair Physiology</h2>
              <p>
                Hair provides protection, contributes to tactile sensation and has limited roles in
                thermoregulation. Hair growth occurs through cycles of growth, regression and resting.
              </p>
            `,

            biochemistry: `
              <h2>Hair Biochemistry</h2>
              <p>
                Hair is composed primarily of hard keratin proteins rich in disulfide bonds, which provide
                mechanical strength.
              </p>
            `
          }
        },

        {
          id: "sebaceous-glands",
          name: "Sebaceous Glands",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Sebaceous Glands</h2>
              <p>
                Sebaceous glands are holocrine glands usually associated with hair follicles. They are
                particularly abundant in areas such as the face and scalp.
              </p>
            `,

            physiology: `
              <h2>Sebaceous Gland Physiology</h2>
              <p>
                Sebaceous glands produce sebum, which lubricates the skin and hair and contributes to the
                surface barrier.
              </p>
            `,

            pathology: `
              <h2>Clinical Correlations</h2>
              <p>
                Increased sebaceous activity and follicular abnormalities contribute to acne vulgaris.
                Sebaceous glands are also involved in several other dermatological disorders.
              </p>
            `
          }
        },

        {
          id: "sweat-glands",
          name: "Sweat Glands",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Sweat Glands</h2>

              <h3>Eccrine Glands</h3>
              <p>
                Eccrine glands are widely distributed and are particularly numerous on the palms,
                soles and forehead.
              </p>

              <h3>Apocrine Glands</h3>
              <p>
                Apocrine glands are concentrated mainly in the axilla and anogenital regions and
                generally empty into hair follicles.
              </p>
            `,

            physiology: `
              <h2>Sweat Gland Physiology</h2>
              <p>
                Eccrine sweating is a major mechanism of heat loss. Sympathetic cholinergic stimulation
                activates eccrine secretion.
              </p>
            `,

            biochemistry: `
              <h2>Sweat Biochemistry</h2>
              <p>
                Sweat consists mainly of water and electrolytes, particularly sodium and chloride,
                together with smaller quantities of other substances.
              </p>
            `
          }
        },

        {
          id: "nails",
          name: "Nails",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Nail Anatomy</h2>

              <ul>
                <li><strong>Nail plate:</strong> hard visible keratin structure.</li>
                <li><strong>Nail bed:</strong> tissue beneath the nail plate.</li>
                <li><strong>Nail matrix:</strong> principal growth region.</li>
                <li><strong>Lunula:</strong> visible pale portion of the matrix.</li>
                <li><strong>Cuticle:</strong> protective proximal fold.</li>
              </ul>
            `,

            physiology: `
              <h2>Nail Physiology</h2>
              <p>
                Nails protect the distal digits and assist in fine manipulation and scratching.
                Nail growth occurs through proliferation and keratinization of cells in the nail matrix.
              </p>
            `,

            biochemistry: `
              <h2>Nail Biochemistry</h2>
              <p>
                Nails consist primarily of densely packed hard keratin. Disulfide bonds contribute
                substantially to their strength.
              </p>
            `
          }
        },

        {
          id: "cutaneous-sensory-receptors",
          name: "Cutaneous Sensory Receptors",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Cutaneous Sensory Receptors</h2>

              <ul>
                <li><strong>Free nerve endings:</strong> pain, temperature and itch.</li>
                <li><strong>Merkel receptors:</strong> fine sustained touch and pressure.</li>
                <li><strong>Meissner corpuscles:</strong> fine touch and low-frequency vibration.</li>
                <li><strong>Pacinian corpuscles:</strong> deep pressure and vibration.</li>
                <li><strong>Ruffini endings:</strong> skin stretch.</li>
              </ul>
            `,

            physiology: `
              <h2>Sensory Physiology</h2>
              <p>
                Mechanical, thermal and chemical stimuli deform or activate specialized sensory endings.
                These signals are converted into electrical activity and transmitted through peripheral
                nerves to the central nervous system.
              </p>
            `
          }
        }
      ]
    }
  ]
};