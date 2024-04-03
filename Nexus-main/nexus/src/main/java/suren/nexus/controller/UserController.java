package suren.nexus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import suren.nexus.exception.UserNotFoundException;
import suren.nexus.model.User;
import suren.nexus.repository.UserRepo;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController{
        @Autowired
        private UserRepo userRepo;
    
        @PostMapping("/register")
        public User newUser(@RequestBody User newUser)
        {
            return userRepo.save(newUser);
        }
    
        @PostMapping("/login")
        public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {
            User user = userRepo.findByEmail(loginRequest.getEmail());
    
            if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.ok("Login successful"+"["+user.getName()+","+user.getId()+"]");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
    }
    
        @GetMapping("/users")
        public List<User> getAllUsers()
        {
            return userRepo.findAll();
        }
    
        @GetMapping("/user/{id}")
        public User getUserById(@PathVariable Long id){
            return userRepo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
        }
    
        @PutMapping("/user/{id}")
        User updateUser(@RequestBody User newUser, @PathVariable Long id){
            return userRepo.findById(id)
                    .map(user -> {
                        user.setName(newUser.getName());
                        user.setEmail(newUser.getEmail());
                        user.setPassword(newUser.getPassword());
                        return userRepo.save(user);
                    }).orElseThrow(()->new UserNotFoundException(id));
        }
    
        @DeleteMapping("/user/{id}")
        String deleteUser(@PathVariable Long id){
            if(!userRepo.existsById(id)){
                throw new UserNotFoundException(id);
            }
            userRepo.deleteById(id);
            return "user with id "+id+" has been deleted success.";
        }
        @PatchMapping("/user/{id}")
        public ResponseEntity<User> patchUser(@RequestBody User partialUser, @PathVariable Long id) {
            return userRepo.findById(id)
                    .map(user -> {
                        if (partialUser.getName() != null) {
                            user.setName(partialUser.getName());
                        }
                        if (partialUser.getEmail() != null) {
                            user.setEmail(partialUser.getEmail());
                        }
                        if (partialUser.getPassword() != null) {
                            user.setPassword(partialUser.getPassword());
                        }
                        return ResponseEntity.ok(userRepo.save(user));
                    }).orElseThrow(() -> new UserNotFoundException(id));
        
    }
}
