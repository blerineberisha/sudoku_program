INSERT INTO authority_role
VALUES (
        -- authorities for the admin role
        -- gives reading authority
        "5152ED10-65ED-4377-A365-022E09F8C1D7",
        "8F81DE05-900E-4AF2-A343-48E31D76D372",
        -- id for admin role
        "DC9B38B3-CBBC-4A75-AD86-AF1EBEBFF623" -- id for reading authority
    ), (
        -- gives writing authority
        "97728C61-FCD3-48F6-907D-5DA0A59D87CD",
        "8F81DE05-900E-4AF2-A343-48E31D76D372",
        -- id for admin role
        "28A3CDEB-60D5-4D25-9B02-4B34594893B9" -- id for writing authority
    ), (
        -- gives execution authority
        "5386AB8C-21AC-41EC-BDF0-1E43A25EEEDD",
        "8F81DE05-900E-4AF2-A343-48E31D76D372",
        -- id for admin role
        "877216A8-FB76-4C96-88CD-DD1228B6B5CB" -- id for execution authority
    ), (
        -- authorities for the user role
        -- gives reading authority
        "EC708593-EB00-4619-8908-069C74308D9E",
        "88BD4604-78B1-47BE-9993-7D5C4163D1A3",
        -- id for user role
        "DC9B38B3-CBBC-4A75-AD86-AF1EBEBFF623" -- id for reading authority
    ), (
        -- gives execution authority
        "556FF443-6A14-40D2-B83E-5437D0442B3F",
        "88BD4604-78B1-47BE-9993-7D5C4163D1A3",
        -- id for user role
        "877216A8-FB76-4C96-88CD-DD1228B6B5CB" -- id for execution authority
    ), (
        -- authority for guest role
        -- gives reading authority
        "E890708D-76F1-4E61-8D1D-340975872FE7",
        "877F6925-A2BE-4909-A839-65A970F3EF7E",
        -- id for guest role
        "DC9B38B3-CBBC-4A75-AD86-AF1EBEBFF623" -- id for reading authority
    )