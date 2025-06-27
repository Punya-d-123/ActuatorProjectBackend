import jwt from 'jsonwebtoken';
import userModel from '../modals/userModel.js';

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1hr' }
  );
};

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logout = async (req, res) => {
    res.json({message:"Logout successful"})
}

export const getMe = async (req, res) => {
    try{
        
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select('-password');
        if (!user) return res.status(404).json({message:"User not found"})
            res.status(201).json(user)
    }catch(err){
        
    res.status(500).json({message: err.message});
    }

}
