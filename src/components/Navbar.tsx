import { Link } from "react-router-dom";
import {
	Avatar,
	Box,
	Button,
	Center,
	Flex,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const Navbar = () => {
	const name = "Administrador";
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex alignItems="center" h={16} justifyContent="space-between">
					<HStack spacing={10}>
						<Flex as={Link} to="/">
							<Image
								mr={2}
								src="https://repository-images.githubusercontent.com/389429650/7105a193-ad96-45cc-a3be-87cdfda75ebe"
								w={6}
							/>
							<Text fontWeight="bold">KotlinBank</Text>
						</Flex>
						<HStack spacing={7}>
							<Menu>
								<MenuButton>Clientes</MenuButton>
								<MenuList>
									<MenuItem as={Link} to="/customer/add">
										Crear cliente
									</MenuItem>
								</MenuList>
							</Menu>
							<Menu>
								<MenuButton>Cuentas</MenuButton>
								<MenuList>
									<MenuItem as={Link} to="/account/add">
										Crear cuenta
									</MenuItem>
								</MenuList>
							</Menu>
						</HStack>
					</HStack>

					<HStack spacing={5}>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" 
								? <IconMoon />
								: <IconSun />
							}
						</Button>
						<Menu>
							<MenuButton as={Button} variant="link">
								<Avatar name={name} size="sm" />
							</MenuButton>
							<MenuList alignItems="center">
								<Center mt={3}>
									<Avatar name={name} size="2xl" />
								</Center>
								<Text fontWeight={name} mt={3} textAlign="center">
									{name}
								</Text>
								<MenuDivider />
								<MenuItem>Tu cuenta</MenuItem>
								<MenuItem>Cerrar sesión</MenuItem>
							</MenuList>
						</Menu>
					</HStack>
				</Flex>
			</Box>
		</>
	);
};
