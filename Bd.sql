IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'PRUEBAS')
BEGIN
	CREATE DATABASE PRUEBAS;	
END
GO
USE [PRUEBAS]
GO
/****** Object:  Table [dbo].[productos]    Script Date: 29/09/2022 9:09:49 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[productos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](200) NOT NULL,
	[Estado] [int] NOT NULL,
	[FechaFabricacion] [date] NOT NULL,
	[FechaVencimiento] [date] NOT NULL,
	[CodigoProveedor] [numeric](18, 0) NOT NULL,
	[DescripcionProv] [varchar](100) NOT NULL,
	[TelefonoProv] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_productos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[productos] ON 

INSERT [dbo].[productos] ([id], [Descripcion], [Estado], [FechaFabricacion], [FechaVencimiento], [CodigoProveedor], [DescripcionProv], [TelefonoProv]) VALUES (2, N'Leche Entera', 0, CAST(N'2022-09-09' AS Date), CAST(N'2022-10-31' AS Date), CAST(74585 AS Numeric(18, 0)), N'Colanta', CAST(3259658574 AS Numeric(18, 0)))
INSERT [dbo].[productos] ([id], [Descripcion], [Estado], [FechaFabricacion], [FechaVencimiento], [CodigoProveedor], [DescripcionProv], [TelefonoProv]) VALUES (3, N'Suero Costeño', 1, CAST(N'2022-03-25' AS Date), CAST(N'2022-10-10' AS Date), CAST(74585 AS Numeric(18, 0)), N'Colanta', CAST(1234567890 AS Numeric(18, 0)))
SET IDENTITY_INSERT [dbo].[productos] OFF
GO


