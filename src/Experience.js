import {
  Text,
  Html,
  ContactShadows,
    PresentationControls,
//   OrbitControls,
//   Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <color args={["#695b5b"]} attach="background" />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-0.5, 0.2]} // vertical liits
        azimuth={[-1, 0.75]} // horizontal limits
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 250 }}
      >
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ff6900"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        <primitive
          object={computer.scene}
          position-y={-1}
          rotation-x={ 0.1 }
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://apple-portfolio-gray.vercel.app/" />
          </Html>
        </primitive>

        {/* <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          position={[2, 0.75, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
        >
          React Classroom
        </Text> */}
      </PresentationControls>
      {/* <OrbitControls makeDefault /> */}

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
